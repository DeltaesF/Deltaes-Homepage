// app/api/getdrive/[filename]/route.ts
import { getFileIdByName, getPublicImageUrl } from "@/app/lib/googleDrive";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { filename: string } },
) {
  const fileId = await getFileIdByName(
    params.filename,
    process.env.GOOGLE_DRIVE_FOLDER_ID!,
  );

  if (!fileId) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const imageUrl = getPublicImageUrl(fileId);
  return NextResponse.json({ imageUrl });
}
