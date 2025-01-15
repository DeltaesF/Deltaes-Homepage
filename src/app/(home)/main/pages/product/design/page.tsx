import Link from "next/link";
import styles from "./page.module.css";

export default function Design() {
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
              <h3>TURBOdesign Suite</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                역설계 기법의 유체기계(펌프, 팬, 압축기, 가스터빈 등) 임펠러 및
                케이싱 설계 프로그램
              </p>
              <Link href="/main/pages/product/design/adt">
                <button className={styles.moreButton}>더보기+</button>
              </Link>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>Solid Edge</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                3차원 CAD 파라미터릭 기능(역사 기반) 및 동기적 기술 솔리드
                모델링 소프트웨어
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
          <div className={styles.contant}>
            <div className={styles.contentTitle}>
              <span className={styles.contantSquare}></span>
              <h3>Siemens NX</h3>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                CAD / CAM / CAE 소프트웨어 패키지
              </p>
              <button className={styles.moreButton}>더보기+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
