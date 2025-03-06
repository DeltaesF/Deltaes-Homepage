"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Timapules() {
  const { imageSrc, loading, error } = useFetchImages([
    "timapulse1.avif",
    "timapulse2.avif",
    "timapulse3.avif",
    "timapulse4.avif",
    "timapulse5.avif",
    "timapulse6.avif",
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
              <h1>TIMA pulse</h1>
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
                  <p>NANOTEST TIMA pulse</p>
                  <p>
                    경량 과도 열 테스트(Lightweight transient thermal testing)
                    <br />
                    실현 가능한 샘플 <br />
                    전자 패키지 & 모듈 <br />
                    열전 시스템 <br />
                    맞춤형 열 설정
                  </p>
                  <button>구매 문의</button>
                </div>
              </div>
            </div>
          </div>
          {imageSrc[1] && (
            <div
              className={styles.secondWrapper}
              style={{
                backgroundImage: `url(${imageSrc[1]})`, // 동적으로 배경 이미지 설정
              }}
            >
              <div className={styles.secondContent}>
                <div className={styles.secondDes}>
                  <div>
                    <h2>TIMA pulse 제품</h2>
                    <h3>TIMA pulse PRODUCT</h3>
                    <button>브로슈어 Download</button>
                    <button>TIMA pulse DATASHEET</button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>출력(Output)</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg}>
                  {imageSrc[5] && (
                    <Image
                      src={imageSrc[5]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.thirdDes2}>
                  <ul>
                    <li>열 임피던스 곡선</li>
                    <li>열접점-케이스 저항</li>
                    <li>시정수 스펙트럼</li>
                    <li>구조 기능</li>
                    <li>열 등가 RC 네트워크</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
