import fs from "fs";
import path from "path";
import os from "os";
import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import process from "process";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    console.log("📌 formData received:", formData); // 📌 디버깅 추가

    const file = formData.get("file") as File | null;
    if (!file) {
      return NextResponse.json(
        { error: "이미지 파일이 없습니다." },
        { status: 400 },
      );
    }

    console.log("📌 File received:", file.name, file.type); // 📌 파일 디버깅 추가

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      return NextResponse.json({ error: "Missing folder ID" }, { status: 500 });
    }

    // 파일 저장 (임시 폴더에 저장 후 Google Drive에 업로드)
    const tempPath = path.join(os.tmpdir(), file.name);
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    await writeFile(tempPath, fileBuffer);

    // Google Drive API 인증
    const auth = new GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const drive = google.drive({ version: "v3", auth });

    // Google Drive에 업로드할 파일 메타데이터 및 파일 스트림 설정
    const fileMetadata = {
      name: file.name,
      parents: [folderId],
    };

    const media = {
      mimeType: file.type || "application/octet-stream", // 🔹 file.type이 없으면 기본값 설정
      body: fs.createReadStream(tempPath),
    };

    // 파일 업로드 실행
    const uploadedFile = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id",
    });

    return NextResponse.json({ fileId: uploadedFile.data.id }, { status: 200 });
  } catch (error) {
    console.error("❌ File upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
