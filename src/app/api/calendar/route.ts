import { google } from "googleapis";
import { NextResponse } from "next/server";

// 구글 API와 관련된 타입 정의
interface CalendarEvent {
  summary: string;
  start: { date: string };
  end: { date: string };
}

export async function GET() {
  try {
    // 공개 캘린더 ID와 API 키
    const calendarId = process.env.GOOGLE_CALENDARID; // 예시 캘린더 ID
    const apiKey = process.env.GOOGLE_API_KEY; // 구글 API 키 환경 변수에서 가져오기

    if (!apiKey) {
      return NextResponse.json(
        { error: "Google API Key is missing" },
        { status: 500 },
      );
    }

    // 현재 날짜의 월을 가져오기
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0부터 시작하는 월 (0 = 1월, 1 = 2월, ...)

    // 시작일과 종료일을 설정 (현재 월에 맞는)
    const timeMin = new Date(currentYear, currentMonth, 1).toISOString(); // 현재 월의 첫 날
    const timeMax = new Date(currentYear, currentMonth + 1, 0).toISOString(); // 현재 월의 마지막 날

    // 구글 캘린더 API 클라이언트 초기화
    const calendar = google.calendar({ version: "v3", auth: apiKey });

    // 캘린더 이벤트 가져오기
    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: timeMin, // 2025년 1월 1일 이후
      timeMax: timeMax, // 2025년 12월 31일 이전
      //   maxResults: 30, // 가져올 최대 이벤트 수
      singleEvents: true, // 반복되는 이벤트는 하나로 처리
      orderBy: "startTime", // 시작 시간 기준으로 정렬
    });

    // 가져온 이벤트에서 필요한 정보만 추출
    const events: CalendarEvent[] = (response.data.items ?? []).map(
      (event) => ({
        summary: event.summary ?? "", // summary가 null 또는 undefined인 경우 기본값 제공
        start: { date: event.start?.date ?? "" }, // start.date가 없으면 빈 문자열 제공
        end: { date: event.end?.date ?? "" }, // end.date가 없으면 빈 문자열 제공
      }),
    );

    // 필터링된 이벤트를 응답으로 반환
    return NextResponse.json({ items: events });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}
