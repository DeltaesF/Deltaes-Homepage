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

// 특정 게시글을 가져오는 API
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    // 조회수 증가
    await db.execute<ResultSetHeader>(
      "UPDATE posts SET views = views + 1 WHERE id = ?",
      [id],
    );

    // id에 맞는 게시글 가져오기
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT p.id, p.title, p.content, p.created_at, p.updated_at, p.views, u.username
       FROM posts p
       JOIN users u ON p.user_id = u.id
       WHERE p.id = ?`,
      [id],
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "게시글을 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    return NextResponse.json({ post: rows[0] }, { status: 200 });
  } catch (error) {
    console.error("게시글 조회 오류:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
