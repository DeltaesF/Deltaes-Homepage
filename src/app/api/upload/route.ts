import { NextResponse } from "next/server";
import * as ftp from "basic-ftp";
import { Readable } from "stream"; // Node.js의 Readable 스트림

// ReadableStream을 Node.js Readable 스트림으로 변환하는 함수
function readableStreamToNodeReadable(
  readableStream: ReadableStream<Uint8Array>,
) {
  const reader = readableStream.getReader();
  const nodeReadable = new Readable({
    read(size) {
      reader
        .read()
        .then(({ done, value }) => {
          if (done) {
            this.push(null); // 스트림 끝을 알림
          } else {
            this.push(value); // 데이터를 읽어서 Node.js Readable 스트림으로 전달
          }
        })
        .catch((err) => this.emit("error", err));
    },
  });
  return nodeReadable;
}

export async function POST(req: Request) {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    // FormData를 사용하여 이미지 데이터를 받음
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "이미지 파일이 없습니다." },
        { status: 400 },
      );
    }

    const FTP_HOST = process.env.FTP_HOST;
    const FTP_ID = process.env.FTP_ID;
    const FTP_PW = process.env.FTP_PW;

    await client.access({
      host: FTP_HOST,
      user: FTP_ID,
      password: FTP_PW,
    });

    // 파일을 FTP 서버에 업로드
    const fileName = `${Date.now()}_${file.name}`;

    // ReadableStream을 Node.js Readable 스트림으로 변환
    const nodeReadable = readableStreamToNodeReadable(file.stream());

    await client.uploadFrom(nodeReadable, `/images/${fileName}`);

    // 업로드된 파일의 URL 반환
    const fileUrl = `/api/getftp/${fileName}`;
    return NextResponse.json({ fileUrl }, { status: 200 });
  } catch (error) {
    console.error("FTP 업로드 오류:", error);
    return NextResponse.json({ error: "이미지 업로드 실패" }, { status: 500 });
  } finally {
    client.close();
  }
}
