import type { Metadata } from "next";
import localFont from "next/font/local";
// import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
// import { PostsListProvider } from "./context/PostsListContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "(주)델타이에스 | 엔지니어링 시뮬레이션 전문기업",
  description:
    "20년 이상의 경험을 바탕으로 CAE/CFD 해석, 설계 최적화, 디지털 트윈 솔루션을 제공하는 엔지니어링 시뮬레이션 전문기업입니다.",
  keywords: [
    "델타이에스",
    "Delta ES",
    "엔지니어링 시뮬레이션",
    "CAE",
    "CFD",
    "디지털 트윈",
    "설계 최적화",
    "Simcenter",
    "지멘스 파트너",
  ],
  authors: [{ name: "원영수", url: "https://www.deltaes.co.kr" }],
  creator: "Delta ES",
  generator: "Next.js",

  openGraph: {
    title: "(주)델타이에스 | 엔지니어링 시뮬레이션 전문기업",
    description:
      "CAE/CFD 해석 및 디지털 트윈 솔루션을 통해 다양한 산업 분야의 설계 최적화를 지원합니다.",
    url: "https://www.deltaes.co.kr",
    siteName: "(주)델타이에스",
    images: [
      {
        url: "https://www.deltaes.co.kr/logo.avif",
        width: 1200,
        height: 630,
        alt: "델타이에스 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "(주)델타이에스 | 엔지니어링 시뮬레이션 전문기업",
    description:
      "CAE/CFD 해석 및 디지털 트윈 솔루션을 통해 다양한 산업 분야의 설계 최적화를 지원합니다.",
    creator: "@deltaes",
    images: ["https://www.deltaes.co.kr/logo.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
