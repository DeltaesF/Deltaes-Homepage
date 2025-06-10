"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function History() {
  const { imageSrc1, error } = useFetchCloudinaryImages(["history_ti8kim"]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.title}>
          <h1>회사 연혁</h1>
        </header>
        <figure className={styles.historyImg}>
          {imageSrc1[0] && (
            <Image
              src={imageSrc1[0]}
              alt=""
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
              unoptimized
            />
          )}
        </figure>
        <div className={styles.line}></div>
        <section className={styles.service}>
          <article className={styles.serviceHistory}>
            <h2>2018</h2>
            <div>
              <span>▶</span>
              <p>
                Siemens Digital Industries SoftwareMAD distributor FT, FV, EFD,
                FM, MicRed H/W
              </p>
            </div>
          </article>
          <article className={styles.serviceHistory}>
            <h2>2017</h2>
            <div>
              <div>
                <span>▶</span>
                <p>1500A Power Tester 1st Sales. Hyundai MOBIS</p>
              </div>
              <div>
                <span>▶</span>
                <p>Numeca International, Belgium FINE/Turbo products</p>
              </div>
            </div>
          </article>
          <article className={styles.serviceHistory}>
            <h2>2015</h2>
            <div>
              <span>▶</span>
              <p>Delta ES moved new office Unit 801, 254, Beutkkot-ro, Seoul</p>
            </div>
          </article>
          <article className={styles.serviceHistory}>
            <h2>2013</h2>
            <div>
              <span>▶</span>
              <p>ADT distributor, UK Turbo Design Suites Products</p>
            </div>
          </article>
          <article className={styles.serviceHistory}>
            <h2>2012</h2>
            <div>
              <span>▶</span>
              <p>Patent Registration No. 10-1219306</p>
            </div>
          </article>
          <article className={styles.serviceHistory}>
            <h2>2011</h2>
            <div>
              <div>
                <span>▶</span>
                <p>
                  Mentor Graphics MAD distributor FT, FV, EFD, FM, MicRed H/W
                </p>
              </div>
              <div>
                <span>▶</span>
                <p>CAE R&D center of Delta ES</p>
              </div>
              <div>
                <span>▶</span>
                <p>CFD analysis technology joint R&D MOU with Hanseo Univ</p>
              </div>
            </div>
          </article>
          <article className={styles.serviceHistory}>
            <h2>2010</h2>
            <div>
              <div>
                <span>▶</span>
                <p>
                  VPS: Virtual paint shop S/W automotive painting simulation{" "}
                </p>
              </div>
              <div>
                <span>▶</span>
                <p>SpaceClaim: Direct 3D modeling & CAD cleaning S/W for CAE</p>
              </div>
            </div>
          </article>
          <article className={styles.serviceHistory}>
            <h2>2009</h2>
            <div>
              <span>▶</span>
              <p>meshless CFD, XFlow exclusive distributor, NLT Spain</p>
            </div>
          </article>
          <article className={styles.serviceHistory}>
            <h2>2008</h2>
            <div>
              <span>▶</span>
              <p>
                Delta ES Established CAE / CFD Product sales & Consulting
                Services
              </p>
            </div>
          </article>
        </section>
        <div className={styles.line2}></div>
        <section className={styles.timeline}>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2011.11</span>
            <span className={styles.description}>
              한서대학교 산학 기술교류 협정 체결
            </span>
            <span className={styles.detail}></span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2012.02</span>
            <span className={styles.description}>
              日本 MSC Software CFD분야 컨설턴트 계약 체결
            </span>
            <span className={styles.detail}></span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2012.08</span>
            <span className={styles.description}>부설 기술연구소 설립</span>
            <span className={styles.detail}></span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2009.08</span>
            <span className={styles.description}>삼성전자㈜ 협력업체 등록</span>
            <span className={styles.detail}>한양대학교 링크사업단 회의사</span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2009.09</span>
            <span className={styles.description}>
              현대자동차㈜ 협력업체 등록
            </span>
            <span className={styles.detail}>국민대학교 링크사업단 회의사</span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2010.03</span>
            <span className={styles.description}>LG 전자㈜ 협력업체 등록</span>
            <span className={styles.detail}>전북대학교 링크사업단 회의사</span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2010.03</span>
            <span className={styles.description}>효성㈜ 협력업체 등록</span>
            <span className={styles.detail}>
              대한기계학회 유체공학부문 정회원
            </span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2010.06</span>
            <span className={styles.description}>
              LG 디스플레이㈜ 협력업체 등록
            </span>
            <span className={styles.detail}>한국자동차공학회 정회원</span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2012.06</span>
            <span className={styles.description}>POSCO 협력업체 등록</span>
            <span className={styles.detail}>
              한국유체기계학회 펌프연구소부문 특별회원
            </span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2015.06</span>
            <span className={styles.description}>현대중공업 협력업체 등록</span>
            <span className={styles.detail}>반도체디스플레이학회 정회원</span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2016.09</span>
            <span className={styles.description}>두산중공업 협력업체 등록</span>
            <span className={styles.detail}>한국산업기술진흥협회 정회원</span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2016.09</span>
            <span className={styles.description}>현대MOBIS 협력업체 등록</span>
            <span className={styles.detail}>한국전력산업협회 정회원</span>
          </article>
          <article className={styles.timelineItem}>
            <span className={styles.date}>2018.10</span>
            <span className={styles.description}>
              온세미컨덕터 협력업체 등록
            </span>
            <span className={styles.detail}>한국소수력에너지학회 회의사</span>
          </article>
          <div className={styles.blank}></div>
        </section>
      </div>
    </div>
  );
}
