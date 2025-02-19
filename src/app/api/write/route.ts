// 글 작성 api
import { createPool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { NextResponse } from "next/server";

// DB 연결 설정
const db = createPool({
  host: process.env.DB_HOST!.split(":")[0],
  user: process.env.DB_ID,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_HOST!.split(":")[1]),
});

export async function POST(req: Request) {
  try {
    const { title, content, user_id, images } = await req.json();

    if (!title || !content || !user_id) {
      return NextResponse.json({ error: "필수 필드 누락" }, { status: 400 });
    }

    console.log("Received images:", images); // images 값 확인

    const [result] = await db.execute<ResultSetHeader>(
      "INSERT INTO posts (title, content, user_id, images) VALUES (?, ?, ?, ?)",
      [title, content, user_id, JSON.stringify(images || [])],
    );

    return NextResponse.json(
      { message: "글 작성 완료", postId: result.insertId },
      { status: 201 },
    );
  } catch (error) {
    console.error("글 작성 오류:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [posts] = await db.query<RowDataPacket[]>(
      `SELECT p.id, p.title, p.content, p.created_at, p.updated_at, p.views, u.username, p.images
       FROM posts p
       JOIN users u ON p.user_id = u.id
       ORDER BY p.created_at DESC`,
    );

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error("게시글 조회 오류:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
