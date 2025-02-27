"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Latima() {
  const { imageSrc, loading, error } = useFetchImages([
    "latima1.jpg",
    "latima2.jpg",
    "latima3.jpg",
    "latima4.jpg",
    "latima5.jpg",
    "timapulse2.jpg",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <Image
            src="/loading1.gif"
            alt="Loading..."
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.firstWrapper}>
            <div className={styles.firstContent}>
              <h2>NANOTEST</h2>
              <h1>LaTIMA</h1>
              <div className={styles.firstImgP}>
                <div className={styles.firstImg}>
                  {imageSrc[0] && (
                    <Image
                      src={imageSrc[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.firstDes}>
                  <p>
                    NANOTEST LaTIMA는 측면 열 재료 분석기로 전도성이 높은 재료의
                    벌크 열전도율에 대한 도량형 측정 시스템으로 적당하지만 벌크
                    열전도율 이상의 기능을 제공합니다.
                    <br />
                    ASTM D5470과 같은 방법에 따른 열 고정 방법은 금속, 합금 또는
                    새로운 세라믹과 같은 전도성이 높은 재료의 열 특성화에
                    적합하지 않습니다. 이방성 재료의 경우 면내 특성을 결정해야
                    합니다.
                    <br />
                    LaTIMA는 이 두 가지 작업을 한 번에 해결합니다.
                  </p>
                  <button>구매 문의</button>
                </div>
              </div>
            </div>
          </div>

          {imageSrc[5] && (
            <div
              className={styles.secondWrapper}
              style={{
                backgroundImage: `url(${imageSrc[5]})`, // 동적으로 배경 이미지 설정
              }}
            >
              <div className={styles.secondContent}>
                <div className={styles.secondDes}>
                  <div>
                    <h2>LaTIMA 제품 이미지</h2>
                    <h3>LaTIMA PRODUCT</h3>
                    <button>브로슈어 Download </button>
                    <button>TIMA pulse DATASHEET</button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>테스트해 보세요</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg}>
                  {imageSrc[4] && (
                    <Image
                      src={imageSrc[4]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.thirdDes2}>
                  <p>
                    LaTIMA는 원래 이미 사용 가능한 광범위한 샘플 형상을 열
                    측정에 적용할 수 있도록 개발되었습니다. 예를 들어, 설명된 풀
                    테스트에서 알려진 도그본 샘플 표준 ASTM D638에서 LaTIMA
                    측정에 가장 적합합니다. 소결 재료부터 세라믹까지 평평한
                    직사각형 형태의 일치하는 샘플을 간단하고 비용 효율적으로
                    생산할 수 있습니다. 따라서 LaTIMA는 재료 실험실이나 품질
                    보증 분야의 간단한 보조자입니다.
                  </p>
                </div>
              </div>
              <h2>시너지의 물결</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdDes2}>
                  <p>
                    TIMA 파동 모듈은 열확산도 결정을 위한 LaTIMA의 확장입니다.
                    이 모듈은 LaTIMA에 쉽게 통합되고 효과적인 동적 측정 방법으로
                    시스템을 확장합니다. 온도 전도도라고도 알려진 확산성은 예를
                    들어 과도 열 시뮬레이션에 대한 중요한 재료 매개변수입니다.
                    또한 확산성과 열전도율 측정을 결합하여 열 저장량, 즉 체적
                    열용량을 결정할 수 있습니다. LaTIMA와 TIMA wave를 결합하면
                    단일 측정 시스템에서 동일한 샘플에 대해 두 가지 재료 분석을
                    수행할 수 있습니다.
                  </p>
                </div>
                <div className={styles.thirdImg2}>
                  {imageSrc[4] && (
                    <Image
                      src={imageSrc[4]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
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
