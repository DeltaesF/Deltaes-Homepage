// 파일 경로: src/app/api/submit-form/route.ts
// (이 코드로 덮어쓰세요)

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. 클라이언트(forms.tsx)로부터 폼 데이터를 받습니다.
    const body = await req.json();

    // 2. 환경변수에서 Google Sheets 확장 프로그램 URL을 가져옵니다.
    const extensionUrl = process.env.SHEETS_EXTENSION_URL;

    if (!extensionUrl) {
      throw new Error(
        "Sheets Extension URL is not defined in environment variables",
      );
    }

    // 3. (서버에서) Google Sheets 확장 프로그램으로 데이터를 전송합니다.
    const response = await fetch(extensionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // 4. (수정됨!) 확장 프로그램이 성공(ok)했는지 *여부만* 확인합니다.
    if (!response.ok) {
      // 확장 프로그램이 실패하면(예: 4xx, 5xx 오류)
      const errorBody = await response.text();
      console.error("Extension Error:", errorBody);
      throw new Error(`Error from extension: ${response.status} ${errorBody}`);
    }

    // 5. (수정됨!) 성공했다면, 응답 본문(response.json())을 파싱하려고 시도하지 않습니다.
    //    대신, 우리가 직접 클라이언트(forms.tsx)에게 성공 응답을 보냅니다.

    // const responseData = await response.json(); // <-- 이 줄이 오류의 원인이었습니다. 삭제합니다.

    return NextResponse.json({
      success: true,
      message: "Data sent successfully",
    });
  } catch (error) {
    console.error("API Route Error:", error);
    // 6. 실패 응답을 보냅니다.
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 },
    );
  }
}
