import Link from "next/link";
import styles from "./page.module.css";

export default function Measurement() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.square}></span>
        <h1 className={styles.title}>측정 장비</h1>
      </div>
      <div className={styles.section}>
        <div className={styles.article}>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>Power Tester</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                전력반도체 (MOSFET, IGBT, SiC, GaN) 신뢰성 확보를 위한 가속
                수명시험 장비
              </p>
              <Link href="/main/pages/product/measurement/powertester">
                <button className={styles.moreButton}>더보기+</button>
              </Link>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>T3STER</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                JEDEC 규정을 만족하는 반도체 접합부 온도 및 열저항 측정 장비
              </p>
              <Link href="/main/pages/product/measurement/t3ster">
                <button className={styles.moreButton}>더보기+</button>
              </Link>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>TIMA 5</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                열 인터페이스 재료 및 낮은 범위&중간 범위 열 전도성 재료의 열
                특성 측정 시스템
              </p>
              <Link href="/main/pages/product/measurement/tima5">
                <button className={styles.moreButton}>더보기+</button>
              </Link>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>TOCS</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                사용자 친화적인 측정 및 분석 소프트웨어를 포함하는 완벽한 솔루션
              </p>
              <Link href="/main/pages/product/measurement/tocs">
                <button className={styles.moreButton}>더보기+</button>
              </Link>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>LaTIMA </h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                측면 열 재료 분석기로 전도성이 높은 재료의 벌크 열전도율에 대한
                도량형 측정 시스템
              </p>
              <Link href="/main/pages/product/measurement/latima">
                <button className={styles.moreButton}>더보기+</button>
              </Link>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>TIFAS</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                비접촉식 고장 분석 종합 분석 소프트웨어
              </p>
              <Link href="/main/pages/product/measurement/tifas">
                <button className={styles.moreButton}>더보기+</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
