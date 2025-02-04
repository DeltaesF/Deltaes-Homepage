import { createPool, ResultSetHeader } from "mysql2/promise";

// DB 연결 설정
const db = createPool({
  host: process.env.DB_HOST!.split(":")[0],
  user: process.env.DB_ID,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_HOST!.split(":")[1]),
});

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
