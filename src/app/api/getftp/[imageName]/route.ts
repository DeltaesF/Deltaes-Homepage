import { NextResponse } from "next/server";
import * as ftp from "basic-ftp";
import fs from "fs";
import path from "path";

// FTP에 있는 images폴더 이미지 파일을 다운로드 하여 클라이언트에 반환해는 API
export async function GET(req: Request) {
  const url = new URL(req.url); // 요청 url에서 이미지 이름 추출
  const imageName = url.pathname.split("/").pop(); // getftp/ 뒤의 파일 이름 추출

  if (!imageName) {
    // 이미지 이름이 없으면 오류 응답
    return NextResponse.json(
      { error: "Image name is required" },
      { status: 400 },
    );
  }

  const client = new ftp.Client(); // FTP 클라이언트 객체 생성
  client.ftp.verbose = true; // FTP 연결 시 verbose 모드 활성화 로그 출력가능

  try {
    const FTP_HOST = process.env.FTP_HOST;
    const FTP_ID = process.env.FTP_ID;
    const FTP_PW = process.env.FTP_PW;

    await client.access({
      // FTP서버 접속 중요한 정보라 환경변수로 작업
      host: FTP_HOST,
      user: FTP_ID,
      password: FTP_PW,
    });

    // 임시 디렉토리 경로 지정
    const tmpDir = path.join(process.cwd(), "tmp"); // 프로젝트 디렉토리 내에 'tmp' 폴더 생성

    // tmp폴더가 없으면 생성
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir);
    }

    const localFilePath = path.join(tmpDir, imageName); // 이미지 파일 저장할 경로
    await client.downloadTo(localFilePath, `/images/${imageName}`); // FTP에서 파일 다운로드 후 저장

    const imageBuffer = fs.readFileSync(localFilePath); // 버퍼로 읽어 옴.

    // MIME 타입 결정
    const ext = path.extname(imageName).toLowerCase(); // 확장자 추출
    const mimeTypes: { [key: string]: string } = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".mp4": "video/mp4",
    };

    const contentType = mimeTypes[ext] || "application/octet-stream"; // 알 수 없는 경우 기본값

    // 다운로드한 파일 삭제
    fs.unlinkSync(localFilePath);

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": contentType, // 반환할 파일의 MIME 타입
        "Content-Length": imageBuffer.length.toString(), // 파일 크기
      },
    });
  } catch (error) {
    // FTP연결이나 파일 목록 오류 시 에러출력 및 500 상태 코드 반환
    console.error("FTP Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 },
    );
  } finally {
    client.close();
  }
}
