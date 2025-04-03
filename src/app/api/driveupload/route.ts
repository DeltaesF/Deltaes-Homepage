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

    console.log("📥 요청된 파일 데이터:", req.formData());

    if (!file) {
      return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer);

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID ?? ""; // ✅ 폴더 ID 기본값 설정
    const response = await drive.files.create({
      requestBody: {
        name: file.name || "untitled", // ✅ 기본 파일명 설정
        parents: folderId ? [folderId] : undefined, // ✅ 폴더 ID가 없으면 undefined
      },
      media: {
        mimeType: file.type || "application/octet-stream", // ✅ 기본 MIME 타입 설정
        body: stream,
      },
      fields: "id",
    });

    const fileId = response?.data?.id ?? null; // ✅ `undefined` 방지

    if (!fileId) {
      return NextResponse.json({ error: "파일 업로드 실패" }, { status: 500 });
    }

    // ✅ 자동으로 파일 권한 변경 (링크가 있는 모든 사용자에게 공개)
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader", // 읽기 권한
        type: "anyone", // 누구나 접근 가능
      },
    });

    const fileUrl = `https://drive.google.com/uc?id=${fileId}`;

    return NextResponse.json({ fileUrl }, { status: 201 });
  } catch (error) {
    console.error("Google Drive 업로드 오류:", error);
    return NextResponse.json({ error: "업로드 실패" }, { status: 500 });
  }
}
