// 파일 경로: src/app/api/submit-form/route.ts
// (이 파일이 없으면 새로 만드세요)

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. 클라이언트(forms.tsx)로부터 폼 데이터를 받습니다.
    const body = await req.json();

    // 2. Vercel 환경 변수에 등록된 URL을 가져옵니다.
    const extensionUrl = process.env.SHEETS_EXTENSION_URL;

    if (!extensionUrl) {
      throw new Error(
        "Sheets Extension URL is not defined in environment variables",
      );
    }

    // 3. (서버에서) Google Sheets 확장 프로그램으로 데이터를 전송합니다.
    //    (서버 간 통신은 CORS 오류가 없습니다.)
    const response = await fetch(extensionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // 만약 확장 프로그램 측에서 오류가 발생하면...
      const errorBody = await response.text();
      console.error("Extension Error:", errorBody);
      throw new Error(`Error from extension: ${response.status} ${errorBody}`);
    }

    const responseData = await response.json();

    // 4. 클라이언트(forms.tsx)에 성공 응답을 보냅니다.
    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error("API Route Error:", error);
    // 5. 클라이언트(forms.tsx)에 실패 응답을 보냅니다.
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 },
    );
  }
}
