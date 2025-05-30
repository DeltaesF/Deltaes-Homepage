"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Brochure() {
  const { imageSrc, error } = useFetchImages([
    "brochure1.avif",
    "brochure2.avif",
    "brochure3.avif",
    "brochure4.avif",
    "brochure5.avif",
    "brochure6.avif",
    "brochure7.avif",
    "brochure8.avif",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const pdfUrls = [
    "https://drive.google.com/file/d/1xKdsjH0f41YbFvA9Z89qGRoCCbg81O5X/view?usp=sharing",
    "https://drive.google.com/file/d/1UM0nB_Ko3tr34B6PYSrdUsQRTgvX-iAI/view?usp=sharing",
    "https://drive.google.com/file/d/1FwVu_vflkAJcLblvDXuTCiRR8UePn9gz/view?usp=sharing",
    "https://drive.google.com/file/d/1nQdZXr992srZuzAHvn-JtgPF9eK_gp9J/view?usp=sharing",
    "https://drive.google.com/file/d/1OAVuKabiN7xJ_JU7ai3Xv8WJWm5ytR5T/view?usp=sharing",
    "https://drive.google.com/file/d/15vDWIiViF2ao4jKRqx2AdIv7MUKSiAOY/view?usp=sharing",
    "https://drive.google.com/file/d/1CB53yPMRYx_UqXawvxQBvBdfZ2Z0HMlj/view?usp=sharing",
    "https://drive.google.com/file/d/1okIOffnpocHNwtqqqLdmrOXCmCfqBhAT/view?usp=sharing",
  ];

  const openPdfInNewTab = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
        <header className={styles.title}>
          <h1>온라인 브로슈어</h1>
        </header>
        <section className={styles.gridContainer}>
          <figure
            className={styles.grid}
            onClick={() => openPdfInNewTab(pdfUrls[0])}
          >
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
          <figure
            className={styles.grid}
            onClick={() => openPdfInNewTab(pdfUrls[1])}
          >
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
          <figure
            className={styles.grid}
            onClick={() => openPdfInNewTab(pdfUrls[2])}
          >
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
          <figure
            className={styles.grid}
            onClick={() => openPdfInNewTab(pdfUrls[3])}
          >
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
          <figure
            className={styles.grid}
            onClick={() => openPdfInNewTab(pdfUrls[4])}
          >
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
          <figure
            className={styles.grid}
            onClick={() => openPdfInNewTab(pdfUrls[5])}
          >
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
          <figure
            className={styles.grid}
            onClick={() => openPdfInNewTab(pdfUrls[6])}
          >
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
          <figure
            className={styles.grid}
            onClick={() => openPdfInNewTab(pdfUrls[7])}
          >
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
