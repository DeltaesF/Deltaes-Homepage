// import { serialize } from "cookie";
// import { NextResponse } from "next/server";

// export async function POST() {
//   // 만료된 리프레시 토큰 설정
//   const expiredCookie = serialize("refreshToken", "", {
//     httpOnly: true, // 클라이언트 JavaScript에서 접근할 수 없도록 설정
//     secure: process.env.NODE_ENV === "production", // 프로덕션 환경에서만 HTTPS를 통해 쿠키를 설정
//     sameSite: "strict", // 사이트 간 요청에서 쿠키가 전송되지 않도록 설정
//     maxAge: 0, // 쿠키의 수명을 0으로 설정하여 만료 처리
//     path: "/",
//   });

//   // Set-Cookie 헤더를 사용하여 쿠키를 만료시킴
//   return new NextResponse(JSON.stringify({ message: "로그아웃 완료" }), {
//     status: 200,
//     headers: { "Set-Cookie": expiredCookie },
//   });
// }

export {};
