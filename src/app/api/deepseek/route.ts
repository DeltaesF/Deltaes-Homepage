import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const client = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com", // DeepSeek 엔드포인트
  });

  const completion = await client.chat.completions.create({
    model: "deepseek-chat",
    messages: [{ role: "user", content: prompt }],
  });

  return NextResponse.json({
    answer: completion.choices[0].message.content,
  });
}
