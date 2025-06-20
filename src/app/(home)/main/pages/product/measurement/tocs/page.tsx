import type { Metadata } from "next";
import Tocs from "./tocs";

// 메타데이터 추가
export const metadata: Metadata = {
  title: "엔지니어링 시뮬레이션 전문기업",
  description:
    "NANOTEST TOCS는 특성화 칩, 칩 홀더, 전자 장치 및 사용자 친화적인 측정 및 분석 소프트웨어를 포함하는 완벽한 솔루션입니다. 시스템은 바로 사용할 수 있으며 몇 분 안에 재료 샘플의 특성을 분석할 수 있습니다.",
  keywords: [
    "NANOTEST",
    "TOCS",
    "열전도율",
    "열전도율 측정장비",
    "NANOTEST TOCS",
  ],
  openGraph: {
    title: "엔지니어링 시뮬레이션 전문기업",
    description:
      "NANOTEST TOCS는 특성화 칩, 칩 홀더, 전자 장치 및 사용자 친화적인 측정 및 분석 소프트웨어를 포함하는 완벽한 솔루션입니다. 시스템은 바로 사용할 수 있으며 몇 분 안에 재료 샘플의 특성을 분석할 수 있습니다.",
    images: [
      {
        url: "https://res.cloudinary.com/dvqn2grb6/image/upload/v1749546170/tocs1_qitknt.avif",
        width: 528,
        height: 450,
        alt: "TOCS 제품 이미지",
      },
    ],
  },
};

export default function TocsPage() {
  return <Tocs />;
}
