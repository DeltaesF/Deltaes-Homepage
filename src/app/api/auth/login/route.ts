import { findUserByEmail, updataLastLogin } from "@/app/db/auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET as string; // JWT 토큰을 서명할 때 사용할 비밀 키
const REFRESH_SECRET = process.env.REFRESH_SECRET as string;

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json(); // 클라이언트에서 전달받은 요청 데이터 (이메일, 비밀번호) 추출

    // 각 필드에 대해 비어있는지 체크하고, 오류 메시지 반환
    if (!email) {
      return NextResponse.json(
        { message: "이메일을 입력해주세요." },
        { status: 400 },
      );
    }

    if (!password) {
      return NextResponse.json(
        { message: "비밀번호를 입력해주세요." },
        { status: 400 },
      );
    }

    const user = await findUserByEmail(email); // 이메일로 유저 찾기
    if (!user) {
      return NextResponse.json(
        { message: "존재하지 않는 이메일입니다." },
        { status: 401 },
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password); // bcrypt를 사용하여 입력된 비밀번호와 DB에 저장된 비밀번호를 비교
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "비밀번호가 일치하지 않습니다." },
        { status: 401 },
      );
    }

    // 로그인 후 마지막 로그인 시간 업데이트
    await updataLastLogin(user.id); // 로그인 후 last_login 업데이트

    // 액세스 토큰 (1시간 유효)
    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      }, // JWT payload (토큰에 포함할 사용자 정보)
      JWT_SECRET, // 서명에 사용할 비밀 키
      { expiresIn: "1h" }, // 토큰 만료 시간 (1시간)
    );

    // 리프레시 토큰 (7일 유효)
    const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, {
      expiresIn: "7d",
    });

    // httpOnly 쿠키에 리프레시 토큰 저장
    const refreshCookie = serialize("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7일
      path: "/",
    });

    return new NextResponse(
      JSON.stringify({
        accessToken,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          lastLogin: user.last_login,
        },
      }),
      {
        status: 200,
        headers: { "Set-Cookie": refreshCookie },
      },
    );
  } catch (error) {
    console.error("로그인 오류:", error);
    return NextResponse.json(
      { message: "서버 오류, 다시 시도해주세요." },
      { status: 500 },
    );
  }
}
