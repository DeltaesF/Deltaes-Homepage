"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Tocs() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "tocs1_qitknt",
    "tocs2_mqtmuc",
    "tocs3_fabxo5",
    "tocs4_le1wiy",
    "tocs5_wjb6fd",
    "tocs6_pl8uyg",
    "tocs7_vrubld",
    "timapulse2_wulzeo",
    "tocsbrochure.pdf",
    "tocsdata.pdf",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const pdfUrls = [
    "https://drive.google.com/file/d/1ywqYBcCf6-5wZ_uHzOVxX-hgJhrU6Krm/view?usp=sharing",
    "https://drive.google.com/file/d/1Cmin5YXDo37oxxbvPUClZpHdmfYbsLWF/view?usp=sharing",
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
              <h1>TOCS</h1>
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
                  <p>
                    NANOTEST TOCS는 특성화 칩, 칩 홀더, 전자 장치 및 사용자
                    친화적인 측정 및 분석 소프트웨어를 포함하는 완벽한
                    솔루션입니다. 시스템은 바로 사용할 수 있으며 몇 분 안에 재료
                    샘플의 특성을 분석할 수 있습니다.
                    <br />
                    유리 칩은 일회용이지만 세척하여 재사용하는 것이 좋습니다.
                    칩홀더는 컴팩트하며 카드키처럼 랙에 삽입됩니다. 더 높은
                    온도에서의 측정을 위해 칩에는 반대쪽에 두 개의 가열 요소가
                    포함되어 있어 최대 180°C까지 가열할 수 있습니다.
                    <br />
                    분석 소프트웨어는 몇 번의 키 입력만으로 완료되는 전체 측정
                    프로세스에 대한 간단한 제어를 제공합니다. 자기 클립 시스템
                    덕분에 칩과 샘플 교체가 단 몇 초만에 완료됩니다.
                  </p>
                  <button>구매 문의</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondWrapper}>
            {imageSrc1[7] && (
              <Image
                src={imageSrc1[7]}
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
                  <h2>TOCS 제품 이미지</h2>
                  <h3>TOCS PRODUCT</h3>
                  <button onClick={() => openPdfInNewTab(pdfUrls[0])}>
                    브로슈어 Download
                  </button>
                  <button onClick={() => openPdfInNewTab(pdfUrls[1])}>
                    TOCS DATASHEET
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
              <h2>3-오메가 특성화 시스템</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdDes2}>
                  <p>
                    젤, 페이스트, 액체와 같은 점성 물질의 시간 및 온도 의존적
                    ​​열 재료 특성을 결정하는 것은 방법론적으로 매우 어렵습니다.
                    특히, 열전도율과 확산율은 상당한 노력을 통해서만 정확하게
                    결정될 수 있는 경우가 많습니다. TOCS는 3-오메가 방법을
                    사용하여 두 재료 매개변수를 모두 결정하고 몇 분 내에
                    액체에서 점성 재료 샘플의 열 특성을 분석할 수 있습니다.
                    샘플은 혁신적이고 사용하기 쉬운 특성화 칩에 간단히 배치되며
                    열전도도 및 확산도 값은 TOCS의 편리한 전기 측정 프로그램을
                    사용하여 결정됩니다.
                  </p>
                </div>
              </div>
              <h2>온칩 가열</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdDes2}>
                  <p>
                    TOCS는 Nanotest의 특성화 칩을 표준으로 사용합니다. 이 칩에는
                    3개의 동일한 센서와 2개의 구불구불한 모양의 가열 요소가
                    포함되어 있어 샘플에서 균일하지만 높은 온도를 생성하거나
                    샘플을 통해 온도 구배를 생성할 수 있습니다. 이를 통해 다양한
                    조건에서 재료를 테스트하고 경화 거동을 모니터링하며 3개의
                    센서를 동시에 사용하여 온도 의존성을 측정하여 3개의 독립적인
                    결과를 제공할 수 있습니다.
                  </p>
                  <ul>
                    <li>붕규산 유리 칩</li>
                    <li>12 × 12mm² 크기</li>
                    <li>3개의 3-오메가 센서 구조</li>
                    <li>2개의 독립 히터</li>
                    <li>저예산 소모품14</li>
                  </ul>
                </div>
                <div className={styles.thirdImg}>
                  {imageSrc1[4] && (
                    <Image
                      src={imageSrc1[4]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <h2>열전도도 및 확산도</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg2}>
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
                    3-오메가 방법의 양방향 모델 맞춤은 테스트된 재료의 열
                    전도성과 확산성을 동시에 생성합니다. 특히 열전도율은 1분
                    이내에 확인 가능합니다.
                  </p>
                </div>
              </div>
              <h2>귀하의 시스템, 귀하의 규칙</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdDes2}>
                  <p>
                    현장에서 경화하고 측정하면 높은 열 및 시간 분해능을 갖춘 열
                    특성이 생성됩니다. 표시된 예는 실온에서 경화되는 일반적인
                    에폭시입니다.
                  </p>
                </div>
                <div className={styles.thirdImg3}>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
