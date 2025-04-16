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
    const file = formData.get("file") as File; // ✅ "file"로 통일

    if (!file) {
      return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const stream = Readable.from(buffer);

    const folderId = process.env.GOOGLE_DRIVE_UPLOADFOLDER_ID;
    const fileName = file.name || "untitled";
    const mimeType = file.type || "application/octet-stream";
    const isImage = mimeType.startsWith("image/");

    // 업로드
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
      return NextResponse.json({ error: "업로드 실패" }, { status: 500 });
    }

    // 공개 권한 부여
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    const fileUrl = isImage
      ? `https://drive.google.com/thumbnail?id=${fileId}`
      : `https://drive.google.com/uc?export=download&id=${fileId}`;

    return NextResponse.json({ fileUrl }, { status: 201 });
  } catch (error) {
    console.error("🔥 오류 발생:", error);
    return NextResponse.json({ error: "업로드 실패" }, { status: 500 });
  }
}
