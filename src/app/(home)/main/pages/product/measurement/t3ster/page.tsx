import type { Metadata } from "next";
import T3ster from "./t3ster";

// 메타데이터 추가
export const metadata: Metadata = {
  title: "엔지니어링 시뮬레이션 전문기업",
  description:
    "Simcenter T3Ster SI는 패키지화된 반도체 장비(Diode, BJT, MOSFET, IGBT, LED 등)의 열 성능을 평가하기 위한 장비입니다.",
  keywords: ["Simcenter", "T3STER SI", "열 성능 평가", "Simcenter T3STER SI"],
  openGraph: {
    title: "엔지니어링 시뮬레이션 전문기업",
    description:
      "Simcenter T3Ster SI는 패키지화된 반도체 장비(Diode, BJT, MOSFET, IGBT, LED 등)의 열 성능을 평가하기 위한 장비입니다.",
    images: [
      {
        url: "https://res.cloudinary.com/dvqn2grb6/image/upload/v1749546071/t3ster1_dhmqcu.avif",
        width: 528,
        height: 450,
        alt: "T3STER SI 제품 이미지",
      },
    ],
  },
};

export default function T3sterPage() {
  return <T3ster />;
}
