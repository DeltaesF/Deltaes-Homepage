import { google, analyticsdata_v1beta } from "googleapis";
import { NextResponse } from "next/server";

// GA4 Row 타입 정의
type GA4Row = {
  year: string;
  date: string; // MM/DD
  users: string;
};

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GA_CLIENT_EMAIL,
        private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const analyticsData = google.analyticsdata("v1beta");
    const property = `properties/${process.env.GA_PROPERTY_ID}`;

    // 📊 오늘 접속자 수 + 평균 체류 시간
    const todayReport = await analyticsData.properties.runReport({
      auth,
      property,
      requestBody: {
        dateRanges: [{ startDate: "today", endDate: "today" }],
        metrics: [{ name: "activeUsers" }, { name: "averageSessionDuration" }],
      },
    });

    // 📈 기간별 데이터 가져오기
    const periodReports = await Promise.all([
      analyticsData.properties.runReport({
        auth,
        property,
        requestBody: {
          dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
          metrics: [{ name: "activeUsers" }],
          dimensions: [{ name: "date" }],
        },
      }),
      analyticsData.properties.runReport({
        auth,
        property,
        requestBody: {
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          metrics: [{ name: "activeUsers" }],
          dimensions: [{ name: "date" }],
        },
      }),
      analyticsData.properties.runReport({
        auth,
        property,
        requestBody: {
          dateRanges: [{ startDate: "365daysAgo", endDate: "today" }],
          metrics: [{ name: "activeUsers" }],
          dimensions: [{ name: "date" }],
        },
      }),
      // 총 방문자
      analyticsData.properties.runReport({
        auth,
        property,
        requestBody: {
          dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
          metrics: [{ name: "activeUsers" }],
        },
      }),
    ]);

    // 🔧 날짜 포맷 처리 함수
    const formatRows = (
      rows: analyticsdata_v1beta.Schema$Row[] | undefined,
    ): GA4Row[] => {
      return (rows ?? [])
        .map((row) => {
          const rawDate = row.dimensionValues?.[0]?.value ?? ""; // YYYYMMDD
          const year = rawDate.slice(0, 4);
          const monthDay = rawDate
            ? `${rawDate.slice(4, 6)}/${rawDate.slice(6, 8)}`
            : "";
          const users = row.metricValues?.[0]?.value ?? "0";

          return { year, date: monthDay, users };
        })
        .sort((a, b) => a.date.localeCompare(b.date));
    };

    const totalUsers =
      periodReports[3].data.rows?.[0]?.metricValues?.[0]?.value ?? "0";

    return NextResponse.json({
      today: {
        activeUsers:
          todayReport.data.rows?.[0]?.metricValues?.[0]?.value ?? "0",
        avgSessionDuration:
          todayReport.data.rows?.[0]?.metricValues?.[1]?.value ?? "0",
      },
      periods: {
        last7days: formatRows(periodReports[0].data.rows),
        last30days: formatRows(periodReports[1].data.rows),
        last1year: formatRows(periodReports[2].data.rows),
      },
      totalUsers,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Analytics API Error:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    console.error("Unknown error", err);
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
