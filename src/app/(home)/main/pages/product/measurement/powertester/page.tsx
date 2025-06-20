import type { Metadata } from "next";
import Powertester from "./powertester";

// 메타데이터 추가
export const metadata: Metadata = {
  title: "엔지니어링 시뮬레이션 전문기업",
  description:
    "Simcenter Micred Powertester는 Simcenter T3Ster 또는 Simcenter T3Ster SI 기반의 Thermal Transient 측정을 다양한 채널에서 여러 개의 샘플을 동시에 측정할 수 있는 장비입니다.",
  keywords: [
    "Powertester",
    "Simcenter",
    "전력 사이클",
    "열 저항",
    "Power Cycling Test",
    "Simcenter T3Ster",
  ],
  openGraph: {
    title: "엔지니어링 시뮬레이션 전문기업",
    description:
      "Simcenter Micred Powertester는 Simcenter T3Ster 또는 Simcenter T3Ster SI 기반의 Thermal Transient 측정을 다양한 채널에서 여러 개의 샘플을 동시에 측정할 수 있는 장비입니다.",
    images: [
      {
        url: "https://res.cloudinary.com/dvqn2grb6/image/upload/v1749545922/powertester1_skulng.avif",
        width: 528,
        height: 450,
        alt: "Powertester 제품 이미지",
      },
    ],
  },
};

export default function PowertesterPage() {
  return <Powertester />;
}
