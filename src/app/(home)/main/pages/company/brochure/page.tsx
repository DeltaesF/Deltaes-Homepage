"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Brochure() {
  const { imageSrc, error } = useFetchImages([
    "brochure1.jpg",
    "brochure2.jpg",
    "brochure3.jpg",
    "brochure4.jpg",
    "brochure5.jpg",
    "brochure6.jpg",
    "brochure7.jpg",
    "brochure8.jpg",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
        <header className={styles.title}>
          <h1>온라인 브로슈어</h1>
        </header>
        <section className={styles.gridContainer}>
          <figure className={styles.grid}>
            {imageSrc[0] && (
              <Image
                src={imageSrc[0]}
                alt=""
                width="230"
                height="315"
                style={{ borderRadius: "10px" }}
              />
            )}
            <p>Delta ES 토털 엔지니어링 솔루션</p>
          </figure>
          <figure className={styles.grid}>
            {imageSrc[1] && (
              <Image
                src={imageSrc[1]}
                alt=""
                width="230"
                height="315"
                style={{ borderRadius: "10px" }}
              />
            )}
            <p>지멘스 Simcenter CFD 솔루션 (SW)</p>
          </figure>
          <figure className={styles.grid}>
            {imageSrc[2] && (
              <Image
                src={imageSrc[2]}
                alt=""
                width="230"
                height="315"
                style={{ borderRadius: "10px" }}
              />
            )}
            <p>지멘스 Simcenter Testing 솔루션 (HW)</p>
          </figure>
          <figure className={styles.grid}>
            {imageSrc[3] && (
              <Image
                src={imageSrc[3]}
                alt=""
                width="230"
                height="315"
                style={{ borderRadius: "10px" }}
              />
            )}
            <p>Simcenter POWERTESTER 600A (Eng)</p>
          </figure>
          <figure className={styles.grid}>
            {imageSrc[4] && (
              <Image
                src={imageSrc[4]}
                alt=""
                width="230"
                height="315"
                style={{ borderRadius: "10px" }}
              />
            )}
            <p>Simcenter POWERTESTER 1500A</p>
          </figure>
          <figure className={styles.grid}>
            {imageSrc[5] && (
              <Image
                src={imageSrc[5]}
                alt=""
                width="230"
                height="315"
                style={{ borderRadius: "10px" }}
              />
            )}
            <p>Simcenter POWERTESTER 1800A</p>
          </figure>
          <figure className={styles.grid}>
            {imageSrc[6] && (
              <Image
                src={imageSrc[6]}
                alt=""
                width="230"
                height="315"
                style={{ borderRadius: "10px" }}
              />
            )}
            <p>Simcenter POWERTESTER 2400A</p>
          </figure>
          <figure className={styles.grid}>
            {imageSrc[7] && (
              <Image
                src={imageSrc[7]}
                alt=""
                width="230"
                height="315"
                style={{ borderRadius: "10px" }}
              />
            )}
            <p>Simcenter POWERTESTER 3600A</p>
          </figure>
        </section>
      </main>
      <div className={styles.brochureMovie}>
        <div className={styles.movieContent}></div>
      </div>
    </div>
  );
}
