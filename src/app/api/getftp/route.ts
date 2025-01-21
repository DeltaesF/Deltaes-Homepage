import { NextResponse } from "next/server";
import * as ftp from "basic-ftp";

// FTP에 있는 images 폴더의 파일 목록을 가져오는 API
export async function GET() {
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

    const files = await client.list("/images"); // FTP 서버에 있는 images 폴더 이미지 파일 목록을 가져옴
    const fileNames = files.map((file) => file.name); // 가져온 파일 목록 파일의 이름만 추출하여 배열로 만듬

    return NextResponse.json({ files: fileNames }); // 파일 이름 목록을 JSON형식으로 응답
  } catch (error) {
    // FTP연결이나 파일 목록 오류 시 에러출력 및 500 상태 코드 반환
    console.error("FTP Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch file list" },
      { status: 500 },
    );
  } finally {
    client.close();
  }
}
