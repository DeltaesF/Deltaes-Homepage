// import { signupUser } from "@/app/db/auth";
// import bcrypt from "bcryptjs";
// import { NextRequest, NextResponse } from "next/server";

// const saltRounds = 10; // bcrypt 해시 생성 시 사용 강도 설정 보통 10~12 사용

// export async function POST(req: NextRequest) {
//   const { username, email, password, phone_number } = await req.json(); // json 데이터에서  username, email, password를 추출하여 사용 폼에서 입력한 내용

//   // 각 필드에 대해 비어있는지 체크하고, 오류 메시지 반환
//   if (!username) {
//     return NextResponse.json(
//       { message: "사용자 이름을 입력해주세요." },
//       { status: 400 },
//     );
//   }

//   if (!email) {
//     return NextResponse.json(
//       { message: "이메일을 입력해주세요." },
//       { status: 400 },
//     );
//   }

//   if (!password) {
//     return NextResponse.json(
//       { message: "비밀번호를 입력해주세요." },
//       { status: 400 },
//     );
//   }

//   if (!phone_number) {
//     return NextResponse.json(
//       { message: "핸드폰 번호를 입력해주세요." },
//       { status: 400 },
//     );
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, saltRounds); // 비밀번호 암호화
//     const result = await signupUser(
//       username,
//       email,
//       hashedPassword,
//       phone_number,
//     ); // DB에 사용자 데이터 저장

//     return NextResponse.json(
//       { message: "회원가입 성공", userID: result.insertId },
//       { status: 201 },
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "서버 오류, 다시 시도해주세요." },
//       { status: 500 },
//     );
//   }
// }

export {};
