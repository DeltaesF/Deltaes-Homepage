import Image from "next/image";
import styles from "./page.module.css";

export default function Company() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>온라인 브로슈어</h1>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            <Image
              src="/images/brochure1.jpg"
              alt=""
              width="230"
              height="315"
              style={{ borderRadius: "10px" }}
            />
            <p>Delta ES 토털 엔지니어링 솔루션</p>
          </div>
          <div className={styles.grid}>
            <Image
              src="/images/brochure2.jpg"
              alt=""
              width="230"
              height="325"
              style={{ borderRadius: "10px" }}
            />
            <p>지멘스 Simcenter CFD 솔루션 (SW)</p>
          </div>
          <div className={styles.grid}>
            <Image
              src="/images/brochure3.jpg"
              alt=""
              width="230"
              height="325"
              style={{ borderRadius: "10px" }}
            />
            <p>지멘스 Simcenter Testing 솔루션 (HW)</p>
          </div>
          <div className={styles.grid}>
            <Image
              src="/images/brochure4.jpg"
              alt=""
              width="230"
              height="325"
              style={{ borderRadius: "10px" }}
            />
            <p>Simcenter POWERTESTER 600A (Eng)</p>
          </div>
          <div className={styles.grid}>
            <Image
              src="/images/brochure5.jpg"
              alt=""
              width="230"
              height="325"
              style={{ borderRadius: "10px" }}
            />
            <p>Simcenter POWERTESTER 1500A</p>
          </div>
          <div className={styles.grid}>
            <Image
              src="/images/brochure6.jpg"
              alt=""
              width="230"
              height="325"
              style={{ borderRadius: "10px" }}
            />
            <p>Simcenter POWERTESTER 1800A</p>
          </div>
          <div className={styles.grid}>
            <Image
              src="/images/brochure7.jpg"
              alt=""
              width="230"
              height="325"
              style={{ borderRadius: "10px" }}
            />
            <p>Simcenter POWERTESTER 2400A</p>
          </div>
          <div className={styles.grid}>
            <Image
              src="/images/brochure8.jpg"
              alt=""
              width="230"
              height="325"
              style={{ borderRadius: "10px" }}
            />
            <p>Simcenter POWERTESTER 3600A</p>
          </div>
        </div>
      </div>
      <div className={styles.brochureMovie}>
        <div className={styles.movieContent}></div>
      </div>
    </div>
  );
}
