"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React, { useEffect, useState } from "react";
import Announcements from "./pages/announcements/page";
import ProductNews from "./pages/announcements/productnews/page";
import Resources from "./pages/announcements/resources/page";
import { usePostsList } from "@/app/context/PostsListContext";
import { useRouter } from "next/navigation";

interface ImgSlice {
  id: number;
  img: string;
  title: string;
  description: string;
  logo?: string;
  link: string;
}

const imgSlice: ImgSlice[] = [
  {
    id: 1,
    img: "/api/getftp/image-slide1.jpg",
    title: "Digital Physics & Physical Testing",
    description: "Solution Provider",
    logo: "/api/getftp/footer-logo.png",
    link: "",
  },
  {
    id: 2,
    img: "/api/getftp/image-slide2.jpg",
    title: "Simcenter \n Powertester",
    description: "전력 반도체 신뢰성 평가 측정장비",
    link: "/main/pages/product/measurement/powertester",
  },
  {
    id: 3,
    img: "/api/getftp/image-slide3.jpg",
    title: "Simcenter \n T3STER SI",
    description: "반도체 열저항 정션 온도측정 장비",
    link: "/main/pages/product/measurement/t3ster",
  },
  {
    id: 4,
    img: "/api/getftp/image-slide4.jpg",
    title: "Simcenter \n Flotherm",
    description: "산업계 표준 전기 / 전자 부품 열관리 소프트웨어",
    link: "/main/pages/product/simulation/flotherm",
  },
  {
    id: 5,
    img: "/api/getftp/image-slide5.jpg",
    title: "Simcenter \n FLOEFD",
    description:
      "실무 사용자를 위한 차세대 \n Multi-Physics CFD 해석 소프트 웨어",
    link: "/main/pages/product/simulation/floefd",
  },
  {
    id: 6,
    img: "/api/getftp/image-slide6.jpg",
    title: "Simcenter \n STAR-CCM+",
    description: "CFD 엔지니어를 위한 통합 다중 물리 솔루션",
    link: "/main/pages/product/simulation/starccm",
  },
  {
    id: 7,
    img: "/api/getftp/image-slide7.jpg",
    title: "Simcenter \n Amesim & Flomaster",
    description: "시스템 시뮬레이션 및 설계 소프트웨어",
    link: "/main/pages/product/simulation/flomaster",
  },
  {
    id: 8,
    img: "/api/getftp/image-slide8.jpg",
    title: "Simcenter \n HEEDS",
    description:
      "CAD 및 CAE와 연계되는 강력한 \n ​설계 공간 탐색 및 최적화 소프트웨어",
    link: "/main/pages/product/simulation/heeds",
  },
  {
    id: 9,
    img: "/api/getftp/image-slide9.jpg",
    title: "Simcenter 3D",
    description:
      "구조, 진동 , 음향, 열유동, 동역학, 최적화 및 전자기 등의 문제를 \n ​빠르게 해결하는 전문적 엔지니어링 소프트웨어",
    link: "/main/pages/product/simulation/simcenter3d",
  },
  {
    id: 10,
    img: "/api/getftp/image-slide10.jpg",
    title: "Simcenter \n TURBOdesign Suite",
    description: "역설계 기법에 의한 유체기계설계 소프트웨어",
    link: "/main/pages/product/simulation/battery",
  },
  {
    id: 11,
    img: "/api/getftp/image-slide11.jpg",
    title: "NANOTEST \n TIMA 5",
    description: "ASTM D-5470 규정에 따른 TIM 재 열물성치 측정장치",
    link: "/main/pages/product/measurement/tima5",
  },
];

const customerImg = [
  { img: "/api/getftp/clogo_samsung.png", url: "https://www.samsung.com" },
  { img: "/api/getftp/clogo_lg.png", url: "https://www.lgdisplay.com" },
  { img: "/api/getftp/clogo_hyundai.png", url: "https://www.hyundai.com" },
  { img: "/api/getftp/clogo_hmobis.png", url: "https://www.mobis.co.kr" },
  { img: "/api/getftp/clogo_sk.png", url: "https://www.skhynix.com" },
  {
    img: "/api/getftp/clogo_doosan.png",
    url: "https://www.doosanenerbility.com",
  },
  { img: "/api/getftp/clogo_apro.png", url: "http://apro.re.kr" },
  { img: "/api/getftp/clogo_fadu.png", url: "https://www.fadu.io" },
  { img: "/api/getftp/clogo_telit.png", url: "https://www.telit.com" },
  { img: "/api/getftp/clogo_infineon.png", url: "https://www.infineon.com" },
  { img: "/api/getftp/clogo_jcet.png", url: "https://www.jcetglobal.com" },
  { img: "/api/getftp/clogo_solum.png", url: "https://www.solum-group.co.kr" },
  { img: "/api/getftp/clogo_onsemi.png", url: "https://onsemi-korea.com/" },
  { img: "/api/getftp/clogo_signetics.png", url: "https://www.signetics.com/" },
];

type TabName = "공지사항" | "제품소식" | "자료실";

export default function MainPage() {
  const { postsList } = usePostsList();
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<TabName>("공지사항");

  const router = useRouter();

  const tabs: TabName[] = ["공지사항", "제품소식", "자료실"];

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const tabComponents = () => {
    if (activeTab === "공지사항") {
      const post = postsList.length > 0 ? postsList[0] : null;

      return post ? (
        <div>
          <div className={styles.gridItemPost}>
            <Link
              href={`/main/pages/announcements/${post.id}`}
              className={styles.postLink}
            >
              <h1>{post.title}</h1>
            </Link>
            {Array.isArray(JSON.parse(post.images)) &&
            JSON.parse(post.images).length > 0
              ? JSON.parse(post.images).map((image, index) => (
                  <img key={index} src={image} alt={`이미지 ${index}`} />
                ))
              : null}
          </div>
          <div className={styles.created}>
            <span>
              {post?.created_at
                ? new Date(post.created_at).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "날짜 없음"}
            </span>
          </div>
        </div>
      ) : (
        <p>공지사항이 없습니다.</p>
      );
    } else if (activeTab === "제품소식") {
      return <ProductNews />;
    } else if (activeTab === "자료실") {
      const post = postsList.length > 0 ? postsList[0] : null;

      return post ? (
        <div>
          <div className={styles.gridItemPost}>
            <Link
              href={`/main/pages/announcements/${post.id}`}
              className={styles.postLink}
            >
              <h1>{post.title}</h1>
            </Link>
            {Array.isArray(JSON.parse(post.images)) &&
            JSON.parse(post.images).length > 0
              ? JSON.parse(post.images).map((image, index) => (
                  <img key={index} src={image} alt={`이미지 ${index}`} />
                ))
              : null}
          </div>
          <div className={styles.created}>
            <span>
              {post?.created_at
                ? new Date(post.created_at).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "날짜 없음"}
            </span>
          </div>
        </div>
      ) : (
        <p>공지사항이 없습니다.</p>
      );
    } else {
      return null;
    }
  };

  const handleMoreClick = () => {
    if (activeTab === "공지사항") {
      router.push("/main/pages/announcements");
    } else if (activeTab === "제품소식") {
      router.push("/main/pages/announcements/productnews");
    } else if (activeTab === "자료실") {
      router.push("/main/pages/announcements/resources");
    }
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/calendar");
        const data = await res.json();

        console.log(data);

        // 필요한 데이터만 필터링하여 상태에 저장
        const filteredEvents = data.items.map((event) => ({
          title: event.summary,
          start: event.start.date, // 날짜만 가져옴
          end: event.end.date, // 날짜만 가져옴
        }));

        setEvents(filteredEvents); // 상태에 저장
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    }
    fetchEvents();
  }, []);

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
                  src={list.img} // Custom Hook으로 불러온 URL 사용
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
                    <Link href={list.link ?? "#"}>
                      <p
                        className={styles.imgIntroduceDetail}
                        style={{
                          position: "absolute",
                          right: "0%",
                          bottom: "-120px",
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        ▶ 자세히 보기
                      </p>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <article className={styles.article}>
          <div className={styles.f}>
            <Link href="/main/pages/product">
              <h2>제품안내</h2>
              <p>
                델타이에스가 제공하는 <br /> CAE 프로그램을 확인 하세요
              </p>
              <span>+</span>
            </Link>
          </div>
          <div className={styles.f}>
            <Link href="/main/pages/industry">
              <h2>적용산업</h2>
              <p>
                우리의 일상 전반에 적용된 <br /> 엔지니어링 사례를 확인 하세요
              </p>
              <span>+</span>
            </Link>
          </div>
          <div className={styles.f}>
            <Link href="/main/pages/consulting">
              <h2>엔지니어링 컨설팅 서비스</h2>
              <p>
                우리의 일상 전반에 적용된 <br /> 엔지니어링 사례를 확인 하세요
              </p>
              <span>+</span>
            </Link>
          </div>
          <div className={styles.f}>
            <Link href="/main/pages/announcements/training">
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
                <div className={styles.sContentSub}>
                  {events.length > 0 ? (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {events.map((event, index) => (
                        <li
                          key={index}
                          style={{
                            marginBottom: "10px",
                            borderRadius: "5px",
                            lineHeight: 1.2,
                          }}
                        >
                          <strong>{event.title}</strong> <br />
                          🗓️ {new Date(event.start).toLocaleDateString()} ~{" "}
                          {new Date(event.end).toLocaleDateString()}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>이벤트가 없습니다.</p>
                  )}
                </div>
              </div>
              <div className={styles.sFooter}>
                <button
                  className={styles.sButton}
                  onClick={() =>
                    router.push("/main/pages/announcements/training")
                  }
                >
                  더보기
                </button>
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
                <button
                  className={styles.sButton}
                  onClick={() => router.push("/main/pages/announcements/event")}
                >
                  더보기
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.s}>
              <div className={styles.sHeader2}>
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    className={`${styles.sHeader2Sub} ${activeTab === tab ? styles.activeTab : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <div>{tab}</div>
                  </div>
                ))}
              </div>
              <div className={styles.sContainer2}>
                <div className={styles.sContent}>
                  <div className={styles.sContentSub3}>{tabComponents()}</div>
                </div>
                <div className={styles.sFooter}>
                  <button className={styles.sButton} onClick={handleMoreClick}>
                    더보기
                  </button>
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
          <div
            className={styles.customerContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
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
              <div
                className={styles.customerSliceAnimation}
                style={{
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {[...customerImg, ...customerImg].map((item, index) => (
                  <div
                    key={index}
                    className={styles.customerWrapper}
                    onClick={() => window.open(item.url, "_blank")}
                  >
                    <Image
                      src={item.img} // Custom Hook으로 불러온 URL 사용
                      alt="product img"
                      width={93}
                      height={45}
                      style={{ objectFit: "cover" }}
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
    </main>
  );
}
