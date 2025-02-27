"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Tifas() {
  const { imageSrc, loading, error } = useFetchImages([
    "tifas1.jpg",
    "timapulse2.jpg",
    "tifas2.jpg",
    "tifas3.jpg",
    "tifas4.jpg",
    "tifas5.jpg",
    "tifas6.jpg",
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
              <h1>TIFAS</h1>
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
                    <h2>TIFAS 제품</h2>
                    <h3>TIFAS PRODUCT</h3>
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
                <div>
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
                    {imageSrc[6] && (
                      <Image
                        src={imageSrc[6]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
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
