import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://www.wixapis.com/blog/v1/posts", {
      method: "GET",
      headers: {
        "wix-site-id": process.env.WIX_SITE_ID as string, // Site ID만 추가
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("WIX API 요청 실패:", data); // 에러 메시지 출력
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return NextResponse.json(
      { error: "Failed to fetch WIX blog data", details: String(error) },
      { status: 500 },
    );
  }
}
