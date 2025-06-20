import type { Metadata } from "next";
import Tima5 from "./tima5";

// 메타데이터 추가
export const metadata: Metadata = {
  title: "엔지니어링 시뮬레이션 전문기업",
  description:
    "NANOTEST TIMA 5는 열 인터페이스 재료 및 낮은 범위에서 중간 범위의 열 전도성을 갖는 기타 재료의 열 특성을 측정하기 위한 ASTM D 5470을 완벽하게 준수하는 측정 시스템입니다.",
  keywords: [
    "NANOTEST",
    "TIMA 5",
    "열 인터페이스",
    "열전도",
    "열역학적",
    "NANOTEST TIMA 5",
  ],
  openGraph: {
    title: "엔지니어링 시뮬레이션 전문기업",
    description:
      "NANOTEST TIMA 5는 열 인터페이스 재료 및 낮은 범위에서 중간 범위의 열 전도성을 갖는 기타 재료의 열 특성을 측정하기 위한 ASTM D 5470을 완벽하게 준수하는 측정 시스템입니다.",
    images: [
      {
        url: "https://res.cloudinary.com/dvqn2grb6/image/upload/v1749546125/tima5_1_vm3xa3.avif",
        width: 528,
        height: 450,
        alt: "TIMA 5 제품 이미지",
      },
    ],
  },
};

export default function Tima5Page() {
  return <Tima5 />;
}
