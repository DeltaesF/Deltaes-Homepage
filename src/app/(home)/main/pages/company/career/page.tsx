"use client";
import styles from "./page.module.css";

export default function Career() {
  const urls = [
    "https://drive.google.com/file/d/1KBCknfAEgbJYkHa-KicPUSBXRSsD_lXc/view?usp=sharing",
    "https://drive.google.com/file/d/1c6CkjO_Yj2ufEfSxaztYMdz8G3p6cIsl/view?usp=sharing",
    "https://docs.google.com/document/d/149czyovqZ5I0730cONdgIskHuoa-qbZo/edit?usp=sharing&ouid=107110981619641526562&rtpof=true&sd=true",
    "https://docs.google.com/document/d/1tAJ9td2gSvVyqtCzUn8qTY6C9O87msOS/edit?usp=sharing&ouid=107110981619641526562&rtpof=true&sd=true",
  ];

  // Drive 링크를 다운로드 가능한 링크로 변환하는 함수
  const getDownloadLink = (url: string) => {
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/d/")[1].split("/")[0];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    } else if (url.includes("docs.google.com/document/d/")) {
      const fileId = url.split("/d/")[1].split("/")[0];
      return `https://docs.google.com/document/d/${fileId}/export?format=docx`;
    }
    return url;
  };

  const openPdfInNewTab = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <h1>Delta ES</h1>
      <p>
        대한민국 CFD 업계를 선도하는 Delta ES 에서 <br />
        열정과 도전으로 미래를 만들어갈 <br /> 최고의 인재를 찾습니다
      </p>
      <span>양식별 이력서 다운로드 ↓</span>
      <div className={styles.resume}>
        <div>
          <a href={getDownloadLink(urls[0])} download>
            hwp, hwdt
          </a>
        </div>
        <div onClick={() => openPdfInNewTab(urls[1])}>pdf</div>
        <div>
          <a href={getDownloadLink(urls[2])}>doc</a>
        </div>
        <div>
          <a href={getDownloadLink(urls[3])}>docs</a>
        </div>
      </div>
    </div>
  );
}
