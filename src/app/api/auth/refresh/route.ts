import { findUserById } from "@/app/db/auth";
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

    // 데이터베이스에서 유저 정보 가져오기
    const user = await findUserById(decoded.id);
    if (!user) {
      return NextResponse.json(
        { message: "사용자를 찾을 수 없음" },
        { status: 401 },
      );
    }

    // 새로운 액세스 토큰 발급
    const newAccessToken = sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    return NextResponse.json(
      {
        accessToken: newAccessToken,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          lastLogin: user.last_login,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("토큰 재발급 오류:", error);
    return NextResponse.json({ message: "토큰 재발급 실패" }, { status: 401 });
  }
}
