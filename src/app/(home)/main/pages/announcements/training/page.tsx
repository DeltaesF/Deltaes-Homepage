"use client";

import styles from "./page.module.css";
import Image from "next/image";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";
import Link from "next/link";
import TrainingCalendar from "@/app/components/trainingCalendar/TrainingCalendar";

export default function Training() {
  const { imageSrc1, error } = useFetchCloudinaryImages([
    "studyB1_kgvpra",
    "studyB2_ugthfu",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className={styles.container}>
      <article className={styles.first}>
        <figure className={styles.imageWrapper}>
          {imageSrc1[0] && (
            <Image
              src={imageSrc1[0]}
              alt="전자기기 및 반도체"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
            />
          )}
          <div className={styles.certifiedEducation}>
            <figure className={styles.certifiedEducation1}>
              {imageSrc1[1] && (
                <Image
                  src={imageSrc1[1]}
                  alt="전자기기 및 반도체"
                  width={457}
                  height={344}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              )}
            </figure>
            <div className={styles.certifiedEducation2}>
              <header>
                <h2>지멘스 PLM 소프트웨어</h2>
                <h1>공인교육 인증기관</h1>
              </header>
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
        </figure>
      </article>
      <article className={styles.second}>
        <h2>교육 일정</h2>
        <div className={styles.calender}>
          {/* <iframe
            src={`https://calendar.google.com/calendar/embed?src=${process.env.NEXT_PUBLIC_GOOGLE_CALENDARID}&ctz=Asia%2FSeoul`}
            width="800"
            height="600"
          ></iframe> */}
          <TrainingCalendar />
        </div>
        <footer className={styles.calenderC}>
          <h3>교육신청 및 문의</h3>
          <p>
            기술영업부 이설 영업대표 010-7749-6241{" "}
            <a href="mailto:slee@deltaes.co.kr">slee@deltaes.co.kr</a>
          </p>
          <button>
            <Link href={`/main/pages/announcements/aHfvyO9jrmCX3ISxCWPG`}>
              2026 Delta ES 교육 일정표
            </Link>
          </button>
        </footer>
      </article>
    </section>
  );
}
