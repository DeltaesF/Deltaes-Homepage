import type { Metadata } from "next";
import Tifas from "./tifas";

// 메타데이터 추가
export const metadata: Metadata = {
  title: "엔지니어링 시뮬레이션 전문기업",
  description:
    "NANOTEST TIFAS 적외선 서모그래피 기반 고장 분석시스템 비접촉식 고장 분석 요약 특징 및 짧은 테스트 시간이 강점 입니다.",
  keywords: [
    "NANOTEST",
    "TIFAS",
    "비접촉식 고장 분석",
    "서모그래피 ",
    "NANOTEST TIFAS",
  ],
  openGraph: {
    title: "엔지니어링 시뮬레이션 전문기업",
    description:
      "NANOTEST TIFAS 적외선 서모그래피 기반 고장 분석시스템 비접촉식 고장 분석 요약 특징 및 짧은 테스트 시간이 강점 입니다.",
    images: [
      {
        url: "https://res.cloudinary.com/dvqn2grb6/image/upload/v1749546113/tifas1_thjx7b.avif",
        width: 528,
        height: 450,
        alt: "TIFAS 제품 이미지",
      },
    ],
  },
};

export default function TifasPage() {
  return <Tifas />;
}
