import { verify } from "jsonwebtoken";
import { createPool } from "mysql2/promise";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// DB 연결 설정
const db = createPool({
  host: process.env.DB_HOST!.split(":")[0],
  user: process.env.DB_ID,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_HOST!.split(":")[1]),
});

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    // 인증된 사용자 확인
    const token = cookies().get("accessToken")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "로그인이 필요합니다." },
        { status: 401 },
      );
    }

    const decoded = verify(token, JWT_SECRET) as { id: number; role: string };

    // 관리자 확인
    if (decoded.role !== "admin") {
      return NextResponse.json(
        { message: "권한이 없습니다." },
        { status: 403 },
      );
    }

    // 데이터 저장
    const { title, content, images } = await req.json();
    await db.execute(
      "UPDATE posts SET title = ?, content = ?, images = ? WHERE id = ?",
      [title, content, JSON.stringify(images || []), params.id],
    );
    return NextResponse.json({ message: "글 수정 완료!" });
  } catch (error) {
    console.log("글 작성 오류: ", error);
    return NextResponse.json(
      { message: "서버 오류, 다시 시도해주세요." },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    // 인증된 사용자 확인
    const token = cookies().get("accessToken")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "로그인이 필요합니다." },
        { status: 401 },
      );
    }

    const decoded = verify(token, JWT_SECRET) as { id: number; role: string };

    // 관리자 확인
    if (decoded.role !== "admin") {
      return NextResponse.json(
        { message: "권한이 없습니다." },
        { status: 403 },
      );
    }

    await db.execute("DELETE FROM posts WHERE id = ?", [params.id]);

    return NextResponse.json({ message: "글 수정 완료!" });
  } catch (error) {
    console.log("글 작성 오류: ", error);
    return NextResponse.json(
      { message: "서버 오류, 다시 시도해주세요." },
      { status: 500 },
    );
  }
}
