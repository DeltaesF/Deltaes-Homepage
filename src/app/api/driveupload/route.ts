import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from "stream";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      console.warn("❌ 업로드 요청에 파일이 없습니다.");
      return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const stream = Readable.from(buffer);

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    const fileName = file.name || "untitled";
    const mimeType = file.type || "application/octet-stream";

    // 🔼 Google Drive에 파일 업로드
    const uploadRes = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: folderId ? [folderId] : undefined,
      },
      media: {
        mimeType,
        body: stream,
      },
      fields: "id",
    });

    const fileId = uploadRes.data.id;
    if (!fileId) {
      console.error("❌ 파일 업로드 후 ID를 가져오지 못했습니다.");
      return NextResponse.json({ error: "파일 업로드 실패" }, { status: 500 });
    }

    // 🔓 링크 공개 권한 부여
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    const fileUrl = `https://lh3.googleusercontent.com/d/${fileId}`;

    console.log("✅ 업로드 성공:", fileUrl);

    return NextResponse.json({ fileUrl }, { status: 201 });
  } catch (error) {
    console.error("🔥 Google Drive 업로드 중 오류 발생:", error);
    return NextResponse.json({ error: "업로드 실패" }, { status: 500 });
  }
}
