"use client";

// import type { Metadata } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

// // 메타데이터 추가
// export const metadata: Metadata = {
//   title: "엔지니어링 시뮬레이션 전문기업",
//   description:
//     "NANOTEST TIFAS 적외선 서모그래피 기반 고장 분석시스템 비접촉식 고장 분석 요약 특징 및 짧은 테스트 시간이 강점 입니다.",
//   keywords: [
//     "NANOTEST",
//     "TIFAS",
//     "비접촉식 고장 분석",
//     "서모그래피 ",
//     "NANOTEST TIFAS",
//   ],
//   openGraph: {
//     title: "엔지니어링 시뮬레이션 전문기업",
//     description:
//       "NANOTEST TIFAS 적외선 서모그래피 기반 고장 분석시스템 비접촉식 고장 분석 요약 특징 및 짧은 테스트 시간이 강점 입니다.",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dvqn2grb6/image/upload/v1749546113/tifas1_thjx7b.avif",
//         width: 528,
//         height: 450,
//         alt: "TIFAS 제품 이미지",
//       },
//     ],
//   },
// };

export default function Tifas() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "tifas1_thjx7b",
    "tifas2_om5mwe",
    "tifas3_cecjhn",
    "tifas4_xbizuw",
    "tifas5_qhtb9y",
    "tifas5_qhtb9y",
    "timapulse2_wulzeo",
    "tifasbrochure.pdf",
    "tifasdata.pdf",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const pdfUrls = [
    "https://drive.google.com/file/d/1walD7IseSAANfOso-ZDmHHbMEUcV0in-/view?usp=sharing",
    "https://drive.google.com/file/d/1z5zXv0421H2HEj1BpuUbPs99-bXQhne7/view?usp=sharing",
  ];

  const openPdfInNewTab = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <Image
            src="/loading1.gif"
            alt="Loading..."
            width={200}
            height={200}
            unoptimized
          />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.firstWrapper}>
            <div className={styles.firstContent}>
              <h2>NANOTEST</h2>
              <h1>TIFAS</h1>
              <div className={styles.firstImgP}>
                <div className={styles.firstImg}>
                  {imageSrc1[0] && (
                    <Image
                      src={imageSrc1[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
                <div className={styles.firstDes}>
                  <p>NANOTEST TIFAS</p>
                  <p>
                    비접촉식 고장 분석 요약 특징 <br />
                    적외선 서모그래피 기반 고장 분석 설정 완료 <br />
                    비접촉식 및 비파괴 <br />
                    짧은 테스트 시간, 높은 처리량 <br />
                    매우 다양한 검출 가능한 결함 <br />
                    종합 분석 소프트웨어 <br />
                    특별한 요구에 적응 가능
                  </p>
                  <button>구매 문의</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondWrapper}>
            {imageSrc1[6] && (
              <Image
                src={imageSrc1[6]}
                alt="TIMA 배경 이미지"
                fill
                sizes="100vw"
                style={{ objectFit: "cover", zIndex: -1 }}
                priority
                unoptimized
              />
            )}
            <div className={styles.secondContent}>
              <div className={styles.secondDes}>
                <div className={styles.secondDes2}>
                  <h2>TIFAS 제품 이미지</h2>
                  <h3>TIFAS PRODUCT</h3>
                  <button onClick={() => openPdfInNewTab(pdfUrls[0])}>
                    브로슈어 Download
                  </button>
                  <button onClick={() => openPdfInNewTab(pdfUrls[1])}>
                    TIFAS DATASHEET
                  </button>
                </div>
                <div>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    style={{ width: "454px", height: "222px" }}
                  >
                    {[imageSrc1[1], imageSrc1[2], imageSrc1[3]].map(
                      (src, index) =>
                        src && (
                          <SwiperSlide key={index}>
                            <Image
                              src={src}
                              alt={`TOCS 이미지 ${index + 1}`}
                              width={454}
                              height={222}
                              style={{ objectFit: "cover" }}
                              unoptimized
                            />
                          </SwiperSlide>
                        ),
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>출력(Output)</h2>
              <div className={styles.thirdImgP}>
                <div>
                  <div className={styles.thirdImg}>
                    {imageSrc1[5] && (
                      <Image
                        src={imageSrc1[5]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.thirdDes2}>
                    <p>
                      <strong>
                        ㆍ모바일 애플리케이션을 위한 비접촉식 고장 분석 <br />
                        (Contactless failure analysis in a nutshell for mobile
                        applications)
                      </strong>
                    </p>
                    <div>
                      <p>
                        <strong>요약 특징 </strong>
                        <br />
                        모바일 적외선 서모그래피 기반 고장 분석 설정 <br />
                        구성 요소의 비접촉식 및 비파괴 유지 관리 <br />
                        매우 다양한 검출 가능한 결함 <br />
                        종합 분석 소프트웨어 <br />
                        예: 섬유 복합재 및 접합부의 비파괴 검사
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.thirdImg}>
                    {imageSrc1[6] && (
                      <Image
                        src={imageSrc1[6]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.thirdDes2}>
                    <p>
                      <strong>
                        NDT 투데이 | 베를린 2020 p 54-55 M. Kaczmarek, M.
                        Müller, <br />
                        비파괴 대면적, 유리 섬유 강화철도 차량 구성품의
                        부품테스트
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
