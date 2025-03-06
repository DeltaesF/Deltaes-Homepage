"use client";

import useFetchImages from "@/app/hooks/useFetchImages";
import styles from "./page.module.css";
import Image from "next/image";

export default function Request() {
  const { imageSrc, error } = useFetchImages(["request.avif"]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <section className={styles.container}>
      <article className={styles.first}>
        <figure className={styles.imageWrapper}>
          {imageSrc[0] && (
            <Image
              src={imageSrc[0]}
              alt="전자기기 및 반도체"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          <figcaption className={styles.title}>평가판 체험하기</figcaption>
        </figure>
      </article>
      <article className={styles.second}>
        <div className={styles.secondSub}>
          <h2>
            지금 바로 <strong>1달 무료 평가판</strong>을 통해 Simcenter 제품의
            놀라움을 경험하세요.
          </h2>
          <div className={styles.buttonContainer}>
            <button>제품 설명 바로가기</button>
            <button>제품 브로셔 다운로드</button>
          </div>
        </div>

        <div className={styles.inquire}></div>
      </article>
    </section>
  );
}
