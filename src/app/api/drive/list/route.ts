import { google } from "googleapis";
import { NextResponse } from "next/server";

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const drive = google.drive({ version: "v3", auth });

export async function GET() {
  try {
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID; // 업로드된 파일이 저장된 폴더 ID

    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/'`, // 이미지 파일만 가져오기
      fields: "files(id, name)",
    });

    const files = response.data.files || [];

    return NextResponse.json({ files });
  } catch (error) {
    console.error("Error fetching file list:", error);
    return NextResponse.json(
      { error: "Failed to fetch file list" },
      { status: 500 },
    );
  }
}
