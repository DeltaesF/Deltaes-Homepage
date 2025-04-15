// import { NextResponse } from "next/server";
// import { createPool, RowDataPacket } from "mysql2/promise";

// // DB 연결 설정
// const db = createPool({
//   host: process.env.DB_HOST!.split(":")[0],
//   user: process.env.DB_ID,
//   password: process.env.DB_PW,
//   database: process.env.DB_DATABASE,
//   port: parseInt(process.env.DB_HOST!.split(":")[1]),
// });
// // 유저 타입 정의
// interface User extends RowDataPacket {
//   id: number;
//   username: string;
//   email: string;
//   role: string;
//   last_login: Date;
//   phone_number: number;
// }

// // 모든 유저 정보를 반환하는 API
// export async function GET() {
//   try {
//     const [rows] = await db.query<User[]>(
//       "SELECT id, username, email, role, last_login, phone_number FROM users",
//     );
//     return NextResponse.json(rows, { status: 200 });
//   } catch (error) {
//     console.error("유저 정보 조회 오류:", error);
//     return NextResponse.json(
//       { message: "유저 정보를 가져오는 데 실패했습니다." },
//       { status: 500 },
//     );
//   }
// }
export {};
