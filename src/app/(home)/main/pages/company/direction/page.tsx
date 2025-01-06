import Image from "next/image";
import styles from "./page.module.css";

export default function Direction() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>오시는 길</h1>
        </div>
        <div className={styles.deltaesImg}>
          <Image
            src="/images/deltaes.jpg"
            alt=""
            width="600"
            height="600"
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className={styles.location}>
          <div className={styles.locationTitle}>
            <span className={styles.locationSquare}></span>
            <h3>
              본사: 경기도 부천시 원미구 길주로411번길 20, (춘의 디아크원) 7층
              707호
            </h3>
          </div>
          <div className={styles.locationTitle}>
            <span className={styles.locationSquare}></span>
            <h3>
              기술 연구소 및 교육장 : 서울 금천구 벚꽃로 254
              월드메르디앙벤처센터 1차 801호
            </h3>
          </div>
          <div className={styles.locationTitle}>
            <span className={styles.locationSquare}></span>
            <h3>
              충남사무소 : 충남천안시 불당로 650-3번지 충남지식산업센터 602호
            </h3>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.wayContainer}>
          <div className={styles.wayBus}>
            <p>- 승용차 이용시</p>
            <p>본사 내비게이션 주소 : 경기도 부천시 오정구 내동 170-11</p>
            <p>
              기술 연구소 및 교육장 내비게이션 주소 : 서울 금천구 벚꽃로 254
              월드메르디앙벤처센터 1차 801호
            </p>
          </div>
          <div className={styles.wayBus}>
            <p>- 지하철 이용시</p>
            <p>
              기술 연구소 및 교육장 : 1호선 2번 출구, 7호선 5번 출구에서 도보로
              400m 7분 소요
            </p>
          </div>
          <div className={styles.wayBus}>
            <p>
              - 주차 1시간 무료, 무료시간 초과시 별도 주차비는 지원되지
              않습니다.
            </p>
            <p>
              - 주변 교통이 혼잡하므로 가급적이면 대중교통을 이용해 주실 것을
              적극 추천합니다
            </p>
            <p>
              - 대중교통 이용시지하철 7호선 가산 디지털 단지역 하차 4번 출구
              (도보로 약 5분 거리)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
