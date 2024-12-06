"use client";

import Link from "next/link";
import styles from "../app/styles/page.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const imgSlice = [
  "/images/image-slide1.jpg",
  "/images/image-slide2.jpg",
  "/images/image-slide3.jpg",
  "/images/image-slide4.jpg",
  "/images/image-slide5.jpg",
  "/images/image-slide6.jpg",
  "/images/image-slide7.jpg",
  "/images/image-slide8.jpg",
  "/images/image-slide9.jpg",
  "/images/image-slide10.jpg",
  "/images/image-slide11.jpg",
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
          >
            {imgSlice.map((img, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "100%", height: "370px" }}
              >
                <Image src={img} alt="img slide" fill />
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
          <p>
            델타이에스 <br />
            고객사
          </p>
          <div>슬라이드로 제작</div>
        </article>
      </section>
    </main>
  );
}
