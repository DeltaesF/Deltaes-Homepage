import styles from "./page.module.css";

export default function Consulting() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>엔지니어링 컨설팅 서비스</h1>
        </div>
        <div className={styles.subCategory}>
          <div className={styles.subTitle}>
            <h2>적용 분야</h2>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.grid}>
              <p>전자기기 및 반도체</p>
            </div>
            <div className={styles.grid}>
              <p>자동차 / 운송</p>
            </div>
            <div className={styles.grid}>
              <p>이동통신 및 미디어</p>
            </div>
            <div className={styles.grid}>
              <p>환경 및 산업용기계</p>
            </div>
            <div className={styles.grid}>
              <p>건설 / 토목</p>
            </div>
            <div className={styles.grid}>
              <p>발전 / 에너지 / 유틸리티</p>
            </div>
            <div className={styles.grid}>
              <p>의료기기 및 제약</p>
            </div>
            <div className={styles.grid}>
              <p>소비재</p>
            </div>
            <div className={styles.grid}>
              <p>항공 / 우주 / 방산</p>
            </div>
            <div className={styles.grid}>
              <p>조선 / 해양</p>
            </div>
            <div className={styles.grid}>
              <p>보험 및 안전</p>
            </div>
            <div className={styles.grid}>
              <p>소프트웨어 개발</p>
            </div>
            <div style={{ marginTop: "80px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
