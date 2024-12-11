"use client";

import Link from "next/link";
import styles from "../app/styles/page.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

interface ImgSlice {
  id: number;
  img: string;
  title: string;
  description: string;
  logo?: string;
}

const imgSlice: ImgSlice[] = [
  {
    id: 1,
    img: "/images/image-slide1.jpg",
    title: "Digital Physics & Physical Testing",
    description: "Solution Provider",
    logo: "/images/footer-logo.png",
  },
  {
    id: 2,
    img: "/images/image-slide2.jpg",
    title: "Simcenter \n Powertester",
    description: "전력 반도체 신뢰성 평가 측정장비",
  },
  {
    id: 3,
    img: "/images/image-slide3.jpg",
    title: "Simcenter \n T3STER SI",
    description: "반도체 열저항 정션 온도측정 장비",
  },
  {
    id: 4,
    img: "/images/image-slide4.jpg",
    title: "Simcenter \n Flotherm",
    description: "산업계 표준 전기 / 전자 부품 열관리 소프트웨어",
  },
  {
    id: 5,
    img: "/images/image-slide5.jpg",
    title: "Simcenter \n FLOEFD",
    description:
      "실무 사용자를 위한 차세대 \n Multi-Physics CFD 해석 소프트 웨어",
  },
  {
    id: 6,
    img: "/images/image-slide6.jpg",
    title: "Simcenter \n STAR-CCM+",
    description: "CFD 엔지니어를 위한 통합 다중 물리 솔루션",
  },
  {
    id: 7,
    img: "/images/image-slide7.jpg",
    title: "Simcenter \n Amesim & Flomaster",
    description: "시스템 시뮬레이션 및 설계 소프트웨어",
  },
  {
    id: 8,
    img: "/images/image-slide8.jpg",
    title: "Simcenter \n HEEDS",
    description:
      "CAD 및 CAE와 연계되는 강력한 \n ​설계 공간 탐색 및 최적화 소프트웨어",
  },
  {
    id: 9,
    img: "/images/image-slide9.jpg",
    title: "Simcenter 3D",
    description:
      "구조, 진동 , 음향, 열유동, 동역학, 최적화 및 전자기 등의 문제를 \n ​빠르게 해결하는 전문적 엔지니어링 소프트웨어",
  },
  {
    id: 10,
    img: "/images/image-slide10.jpg",
    title: "Simcenter \n TURBOdesign Suite",
    description: "역설계 기법에 의한 유체기계설계 소프트웨어",
  },
  {
    id: 11,
    img: "/images/image-slide11.jpg",
    title: "NANOTEST \n TIMA 5",
    description: "ASTM D-5470 규정에 따른 TIM 재 열물성치 측정장치",
  },
];

const customerImg = [
  "/images/clogo_samsung.png",
  "/images/clogo_lg.png",
  "/images/clogo_hyundai.png",
  "/images/clogo_hmobis.png",
  "/images/clogo_sk.png",
  "/images/clogo_doosan.png",
  "/images/clogo_apro.png",
  "/images/clogo_fadu.png",
  "/images/clogo_telit.png",
  "/images/clogo_infineon.png",
  "/images/clogo_jcet.png",
  "/images/clogo_solum.png",
  "/images/clogo_onsemi.png",
  "/images/clogo_signetics.png",
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.imgSlice}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            style={{
              width: "100%",
              height: "370px",
            }}
          >
            {imgSlice.map((list, id) => (
              <SwiperSlide key={id}>
                <Image
                  src={list.img}
                  alt="product img"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  className={styles.imgIntroduce}
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    width: "1000px",
                    textAlign: list.id === 1 ? "center" : "right", // 조건부 스타일
                    top: list.id === 1 ? "22%" : "35%",
                    left: "50%",
                    right: "auto",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    gap: "30px",
                  }}
                >
                  <h3 className={styles.imgIntroduceTitle}>
                    {list.title.split("\n").map((t, id) => (
                      <span
                        key={id}
                        style={{
                          fontSize:
                            list.id === 1 ? "35px" : id === 0 ? "30px" : "35px",
                          display: "block",
                          fontWeight: "bold",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </h3>
                  <p className={styles.imgIntroduceDec}>
                    {list.description.split("\n").map((d, id) => (
                      <span
                        key={id}
                        style={{
                          display: "block",
                          fontSize: list.id === 1 ? "24px" : "18px",
                          fontWeight: list.id === 1 ? "600" : "500",
                          marginTop: list.id === 1 ? "-30px" : "0px",
                          lineHeight: "1.4",
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </p>
                  {list.id == 1 && list.logo && (
                    <div
                      style={{
                        position: "absolute",
                        top: "108%",
                        left: "52%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Image
                        src={list.logo}
                        alt="logo img"
                        width={195}
                        height={74}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  )}
                  {list.id !== 1 && (
                    <p
                      className={styles.imgIntroduceDetail}
                      style={{
                        position: "absolute", // 부모 컨테이너 기준으로 절대 위치
                        right: "0%", // 가운데 정렬
                        bottom: "-120px",
                        fontSize: "16px", // 원하는 폰트 크기
                        fontWeight: "bold", // 폰트 굵기
                        color: "white", // 텍스트 색상
                      }}
                    >
                      ▶ 자세히 보기
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <article className={styles.article}>
          <div className={styles.f}>
            <Link href="">
              <h2>제품안내</h2>
              <p>
                델타이에스가 제공하는 <br /> CAE 프로그램을 확인 하세요
              </p>
              <span>+</span>
            </Link>
          </div>
          <div className={styles.f}>
            <Link href="">
              <h2>적용산업</h2>
              <p>
                우리의 일상 전반에 적용된 <br /> 엔지니어링 사례를 확인 하세요
              </p>
              <span>+</span>
            </Link>
          </div>
          <div className={styles.f}>
            <Link href="">
              <h2>엔지니어링 컨설팅 서비스</h2>
              <p>
                우리의 일상 전반에 적용된 <br /> 엔지니어링 사례를 확인 하세요
              </p>
              <span>+</span>
            </Link>
          </div>
          <div className={styles.f}>
            <Link href="">
              <h2>교육안내</h2>
              <p>
                고객이 원하는 눈높이에 <br /> 맞춘 교육을 지원 합니다
              </p>
              <span>+</span>
            </Link>
          </div>
        </article>
      </section>
      <section className={styles.section1}>
        <article className={styles.article1}>
          <div className={styles.s}>
            <div className={styles.sHeader}>
              <h3>교육 일정표</h3>
            </div>
            <div className={styles.sContainer}>
              <div className={styles.sContent}>
                <div className={styles.sContentSub}>sodyd</div>
                <div className={styles.sContentSub}>sodyd</div>
              </div>
              <div className={styles.sFooter}>
                <button className={styles.sButton}>더보기</button>
              </div>
            </div>
          </div>
          <div className={styles.s}>
            <div className={styles.sHeader}>
              <h3>행사소식</h3>
            </div>
            <div className={styles.sContainer2}>
              <div className={styles.sContent}>
                <div className={styles.sContentSub2}>sodyd</div>
                <div className={styles.sContentSub2}>sodyd</div>
              </div>
              <div className={styles.sFooter}>
                <button className={styles.sButton}>더보기</button>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.s}>
              <div className={styles.sHeader2}>
                <div className={styles.sHeader2Sub}>
                  <h3>공지사항</h3>
                </div>
                <div className={styles.sHeader2Sub}>
                  <h3>제품소식</h3>
                </div>
                <div className={styles.sHeader2Sub}>
                  <h3>자료실</h3>
                </div>
              </div>
              <div className={styles.sContainer2}>
                <div className={styles.sContent}>
                  <div className={styles.sContentSub3}>sodyd</div>
                </div>
                <div className={styles.sFooter}>
                  <button className={styles.sButton}>더보기</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className={styles.section2}>
        <article className={styles.article2}>
          <h2 className={styles.customerHeading}>
            델타이에스
            <br />
            고객사
          </h2>
          <div className={styles.customerContainer}>
            <button className={styles.arrowLeft}>
              <svg
                width="26px"
                height="40px"
                viewBox="0 0 26 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                  <g
                    transform="translate(-35.000000, -28.000000)"
                    fill-rule="nonzero"
                    fill="rgb(173, 180, 227)"
                  >
                    <polygon points="60.4571429 47.8 40.6571429 67.6 35 61.9428571 49.1433951 47.7994621 35 33.6571429 40.6571429 28"></polygon>
                  </g>
                </g>
              </svg>
            </button>
            <div className={styles.customerSlice}>
              <div className={styles.customerSliceAnimation}>
                {[...customerImg, ...customerImg].map((item, index) => (
                  <div key={index} className={styles.customerWrapper}>
                    <Image
                      src={item}
                      alt={`customer logo ${index}`}
                      width={93}
                      height={45}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button className={styles.arrowRight}>
              <svg
                width="26px"
                height="40px"
                viewBox="0 0 26 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                  <g
                    transform="translate(-35.000000, -28.000000)"
                    fill-rule="nonzero"
                    fill="rgb(173, 180, 227)"
                  >
                    <polygon points="60.4571429 47.8 40.6571429 67.6 35 61.9428571 49.1433951 47.7994621 35 33.6571429 40.6571429 28"></polygon>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </article>
      </section>
      <div className={styles.inquiryContainer}>
        <div className={styles.inquiry}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(255, 255, 255)"
          >
            <path
              d="M21.133 16.933a1.4 1.4 0 11.001-2.8 1.4 1.4 0 010 2.8m-4.667 0a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8m-5.6 0a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8m18.904-3.656c-1.013-5.655-5.753-10.22-11.528-11.105-4.343-.667-8.642.627-11.807 3.547-3.168 2.917-4.763 7.043-4.38 11.318.59 6.582 6.08 11.952 12.768 12.487 1.153.095 2.303.05 3.428-.13a14.12 14.12 0 002.428-.612.59.59 0 01.364-.006l3.714 1.167c.785.246 1.588-.331 1.588-1.144l-.002-3.517c0-.17.086-.301.157-.38a14.028 14.028 0 001.58-2.147c1.705-2.862 2.29-6.14 1.69-9.478"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </svg>
          <h3>실시간 문의</h3>
        </div>
      </div>
    </main>
  );
}
