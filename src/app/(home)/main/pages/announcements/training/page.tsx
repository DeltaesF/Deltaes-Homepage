"use client";

import useFetchImages from "@/app/hooks/useFetchImages";
import styles from "./page.module.css";
import Image from "next/image";

export default function Training() {
  const { imageSrc, error } = useFetchImages(["studyB1.jpg", "studyB2.jpg"]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.imageWrapper}>
          {imageSrc[0] && (
            <Image
              src={imageSrc[0]}
              alt="전자기기 및 반도체"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          <div className={styles.certifiedEducation}>
            <div className={styles.certifiedEducation1}>
              {imageSrc[1] && (
                <Image
                  src={imageSrc[1]}
                  alt="전자기기 및 반도체"
                  width={457}
                  height={344}
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
            <div className={styles.certifiedEducation2}>
              <div>
                <h2>지멘스 PLM 소프트웨어</h2>
                <h1>공인교육 인증기관</h1>
              </div>
              <p>
                델타이에스는 지멘스 PLM 소프트웨어의 <br />
                공인교육 인증기관으로 등록된 지멘스의 채널 파트너입니다.
                <br />
                지멘스 표준교육 프로그램에 의한 교육을 진행하며
                <br />
                제품에 대해 양질의 교육 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <h2>교육 일정</h2>
        <div className={styles.calender}></div>
        <div className={styles.calenderC}>
          <h3>교육신청 및 문의</h3>
          <p>
            기술영업부 이설 영업대표 010-7749-6241{" "}
            <a href="mailto:slee@deltaes.co.kr">slee@deltaes.co.kr</a>
          </p>
          <button>2025 Delta ES 교육 일정표</button>
        </div>
      </div>
    </div>
  );
}
