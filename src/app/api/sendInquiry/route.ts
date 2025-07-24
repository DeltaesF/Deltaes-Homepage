import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, company, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ALERT_EMAIL,
      subject: `${company} ${name}님의 문의 메일이 도착했습니다.`,
      text: `
        🔔 문의 알림
        회사명/직책: ${company}
        이름: ${name}
        이메일: ${email}
        핸드폰 번호: ${phone}

        문의 내용: 
        ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("메일 전송 실패:", error);
    return NextResponse.json({ error: "메일 전송 실패" }, { status: 500 });
  }
}
