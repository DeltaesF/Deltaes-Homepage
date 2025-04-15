// import { createPool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
// import { NextResponse } from "next/server";

// // DB 연결 설정
// const db = createPool({
//   host: process.env.DB_HOST!.split(":")[0],
//   user: process.env.DB_ID,
//   password: process.env.DB_PW,
//   database: process.env.DB_DATABASE,
//   port: parseInt(process.env.DB_HOST!.split(":")[1]),
// });

// // 특정 게시글을 가져오는 API
// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     const { id } = params;

//     // 조회수 증가
//     await db.execute<ResultSetHeader>(
//       "UPDATE posts SET views = views + 1 WHERE id = ?",
//       [id],
//     );

//     // id에 맞는 게시글 가져오기
//     const [rows] = await db.query<RowDataPacket[]>(
//       `SELECT p.id, p.title, p.content, p.created_at, p.updated_at, p.views, u.username, p.images, p.category
//        FROM posts p
//        JOIN users u ON p.user_id = u.id
//        WHERE p.id = ?`,
//       [id],
//     );

//     if (rows.length === 0) {
//       return NextResponse.json(
//         { error: "게시글을 찾을 수 없습니다." },
//         { status: 404 },
//       );
//     }

//     // 이미지를 포함하여 반환
//     return NextResponse.json(
//       { post: rows[0] }, // images가 이미 전체 URL로 저장되었으므로 그대로 반환
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("게시글 조회 오류:", error);
//     return NextResponse.json({ error: "서버 오류" }, { status: 500 });
//   }
// }

// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     const { id } = params;

//     // 게시물이 존재하는지 확인
//     const [rows] = await db.query<RowDataPacket[]>(
//       "SELECT id FROM posts WHERE id = ?",
//       [id],
//     );

//     if (rows.length === 0) {
//       return NextResponse.json(
//         { error: "게시글을 찾을 수 없습니다." },
//         { status: 404 },
//       );
//     }

//     // 게시글 삭제
//     await db.execute<ResultSetHeader>("DELETE FROM posts WHERE id = ?", [id]);

//     return NextResponse.json(
//       { message: "게시글이 성공적으로 삭제되었습니다." },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("게시글 삭제 오류:", error);
//     return NextResponse.json({ error: "서버 오류" }, { status: 500 });
//   }
// }

// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     const { id } = params;
//     const { title, content, images } = await req.json();

//     const [rows] = await db.query<RowDataPacket[]>(
//       "SELECT id FROM posts WHERE id = ?",
//       [id],
//     );

//     if (rows.length === 0) {
//       return NextResponse.json(
//         { error: "게시글을 찾을 수 없습니다." },
//         { status: 404 },
//       );
//     }

//     // 게시글 수정 (title, content, images, updated_at 갱신)
//     const [result] = await db.execute<ResultSetHeader>(
//       `UPDATE posts
//        SET title = ?, content = ?, images = ?, updated_at = NOW()
//        WHERE id = ?`,
//       [title, content, JSON.stringify(images), id], // 이미지가 JSON 배열로 저장될 경우
//     );

//     if (result.affectedRows === 0) {
//       return NextResponse.json(
//         { error: "게시글 수정에 실패했습니다." },
//         { status: 500 },
//       );
//     }

//     // 수정된 게시글 가져오기
//     const [updatedPost] = await db.query<RowDataPacket[]>(
//       `SELECT p.id, p.title, p.content, p.created_at, p.updated_at, p.views, u.username, p.images
//        FROM posts p
//        JOIN users u ON p.user_id = u.id
//        WHERE p.id = ?`,
//       [id],
//     );

//     return NextResponse.json({ post: updatedPost[0] }, { status: 200 });
//   } catch (error) {
//     console.error("게시글 수정 오류:", error);
//     return NextResponse.json({ error: "서버 오류" }, { status: 500 });
//   }
// }
