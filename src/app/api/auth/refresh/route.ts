import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET as string;
const REFRESH_SECRET = process.env.REFRESH_SECRET as string;

export async function GET() {
  try {
    // 클라이언트에서 전달된 리프레시 토큰을 쿠키에서 가져오기
    const refreshToken = cookies().get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { message: "리프레시 토큰 없음" },
        { status: 401 },
      );
    }

    const decoded = verify(refreshToken, REFRESH_SECRET) as { id: number };

    if (!decoded) {
      return NextResponse.json(
        { message: "유효하지 않은 리프레시 토큰" },
        { status: 401 },
      );
    }

    // 리프레시 토큰이 유효하면, 해당 사용자의 ID를 바탕으로 새로운 액세스 토큰을 생성
    const newAccessToken = sign({ id: decoded.id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    // 새로운 액세스 토큰을 반환
    return NextResponse.json({ accessToken: newAccessToken }, { status: 200 });
  } catch (error) {
    console.error("토큰 재발급 오류:", error);
    return NextResponse.json({ message: "토큰 재발급 실패" }, { status: 401 });
  }
}
