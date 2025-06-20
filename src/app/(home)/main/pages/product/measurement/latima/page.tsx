import type { Metadata } from "next";
import Latima from "./latima";

// 메타데이터 추가
export const metadata: Metadata = {
  title: "엔지니어링 시뮬레이션 전문기업",
  description:
    "NANOTEST LaTIMA는 측면 열 재료 분석기로 전도성이 높은 재료의 벌크 열전도율에 대한 도량형 측정 시스템으로 적당하지만 벌크 열전도율 이상의 기능을 제공합니다.",
  keywords: ["NANOTEST", "LaTiMA", "NANOTEST LaTIMA", "열 재료 분석기"],
  openGraph: {
    title: "엔지니어링 시뮬레이션 전문기업",
    description:
      "NANOTEST LaTIMA는 측면 열 재료 분석기로 전도성이 높은 재료의 벌크 열전도율에 대한 도량형 측정 시스템으로 적당하지만 벌크 열전도율 이상의 기능을 제공합니다.",
    images: [
      {
        url: "https://res.cloudinary.com/dvqn2grb6/image/upload/v1749545870/latima1_ozmwnz.avif",
        width: 528,
        height: 450,
        alt: "LaTiMA 제품 이미지",
      },
    ],
  },
};

export default function LatimaPage() {
  return <Latima />;
}
