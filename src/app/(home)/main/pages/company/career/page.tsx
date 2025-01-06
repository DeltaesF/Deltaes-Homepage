import styles from "./page.module.css";

export default function Company() {
  return (
    <div className={styles.container}>
      <h1>Delta ES</h1>
      <p>
        대한민국 CFD 업계를 선도하는 Delta ES 에서 <br />
        열정과 도전으로 미래를 만들어갈 <br /> 최고의 인재를 찾습니다
      </p>
      <span>양식별 이력서 다운로드 ↓</span>
      <div className={styles.resume}>
        <div>hwp, hwdt</div>
        <div>pdf</div>
        <div>doc</div>
        <div>docs</div>
      </div>
    </div>
  );
}
