import { createPool, ResultSetHeader, RowDataPacket } from "mysql2/promise";

// DB 연결 설정
const db = createPool({
  host: process.env.DB_HOST!.split(":")[0],
  user: process.env.DB_ID,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_HOST!.split(":")[1]),
});

// User 타입 정의
interface User extends RowDataPacket {
  id: number;
  username: string;
  email: string;
  password: string;
}

// 회원가입 기능을 위한 DB쿼리 함수
export async function signupUser( // users 테이블에 데이터를 삽입하는 함수
  username: string,
  email: string,
  hashedPassword: string,
) {
  const [result] = await db.execute<ResultSetHeader>(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)", // 쿼리를 실행해 사용자 데이터를 데이터베이스에 저장 ?는 각각 username, email, password값에 값이 바인딩
    [username, email, hashedPassword],
  );
  return result;
}

// 로그인 기능 (이메일로 유저 찾기)
export async function findUserByEmail(email: string): Promise<User | null> {
  try {
    console.log("🔍 [DB] 이메일 검색 실행:", email);
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    console.log("✅ [DB] 조회 결과:", rows); // 👉 결과 확인

    return (rows as User[]).length > 0 ? (rows as User[])[0] : null;
  } catch (error) {
    console.error("❌ [DB] 유저 검색 오류:", error);
    return null;
  }
}

// 로그인 기능 (ID로 유저 찾기)
export async function findUserById(id: number): Promise<User | null> {
  try {
    console.log("🔍 [DB] ID로 유저 검색 실행:", id);
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    console.log("✅ [DB] 조회 결과:", rows); // 👉 결과 확인

    return (rows as User[]).length > 0 ? (rows as User[])[0] : null;
  } catch (error) {
    console.error("❌ [DB] 유저 검색 오류:", error);
    return null;
  }
}
