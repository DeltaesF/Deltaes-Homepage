import Link from "next/link";
import styles from "./page.module.css";

export default function Simulation() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.square}></span>
        <h1 className={styles.title}>소프트웨어</h1>
      </div>
      <div className={styles.section}>
        <div className={styles.article}>
          <div className={styles.titleWrapper}>
            <span className={styles.triangle}></span>
            <h3 className={styles.titleSub}>CFD 해석 소프트웨어</h3>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>FLOTHERM</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                전기/전자 산업체 표준툴인 방열해석 소프트웨어
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>FLOTHERM XT</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                전기/전자 산업체 표준툴인 방열해석 소프트웨어
              </p>
              <Link href="/main/pages/product/simulation/flothermxt">
                <button className={styles.moreButton}>더보기+</button>
              </Link>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>Star-CCM+</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                세계 최고의 범용 CFD 해석 소프트웨어
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>FLOEFD</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                설계자 또는 비전공자를 위한 3D CAD에 embedded 된 범용 CFD 해석
                소프트웨어
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>FloMaster</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                배관망 등의 1D CFD 시스템 시뮬레이션 소프트웨어
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>AmeSIM</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                제조 산업체 전반 시스템 시뮬레이션 소프트웨어
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>HEEDS</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                CAE 해석 최적화 소프트웨어
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>Battery Design Studio</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                배터리 디자인 스튜디오에 대한 내용 입니다.
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.titleWrapper}>
            <span className={styles.triangle}></span>
            <h3 className={styles.titleSub}>CAE 해석 소프트웨어</h3>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>Simcenter 3D</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                전기/전자 산업체 표준툴인 방열해석 소프트웨어
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
