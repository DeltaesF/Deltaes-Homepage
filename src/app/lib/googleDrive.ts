// lib/googleDrive.ts
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

export const drive = google.drive({ version: "v3", auth });

export async function getFileIdByName(name: string, folderId: string) {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and name='${name}' and trashed=false`,
    fields: "files(id, name)",
  });

  const file = res.data.files?.[0];
  return file?.id || null;
}

export function getPublicImageUrl(fileId: string) {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}
