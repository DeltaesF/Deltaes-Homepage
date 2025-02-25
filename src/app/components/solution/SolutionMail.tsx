"use client";

import styles from "./SolutionMail.module.css";

export default function SolutionMail() {
  return (
    <div className={styles.solutionMail}>
      <div className={styles.wrapper}>
        <h2>솔루션 문의</h2>
        <div>
          <input type="text" className={styles.input} placeholder="성함" />
          <input type="text" className={styles.input} placeholder="소속/직함" />
        </div>
        <div>
          <input type="text" className={styles.input} placeholder="이메일" />
          <input type="text" className={styles.input} placeholder="전화번호" />
        </div>
        <div>
          <input
            type="text"
            className={styles.content}
            placeholder="메시지를 입력하세요."
          />
        </div>
        <button className={styles.btn}>제출</button>
      </div>
    </div>
  );
}
