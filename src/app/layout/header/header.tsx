"use client";

import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@/app/context/UserContext";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Header() {
  const [isMenuModal, setIsMenuModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const { imageSrc, error } = useFetchImages([
    "partner.png",
    "header-logo.avif",
  ]);
  const { user, logout } = useUser();

  console.log("user 상태:", user);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const openModal = () => {
    setIsMenuModal(true);
  };

  const closeModal = () => {
    setIsMenuModal(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerInputLogo}>
          <div className={styles.headerInputBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="5 5 14 14"
              width="14px"
              height="14px"
            >
              <path
                fill="currentColor"
                d="m15.683 14.6 3.265 3.265a.2.2 0 0 1 0 .282l-.8.801a.2.2 0 0 1-.283 0l-3.266-3.265a5.961 5.961 0 1 1 1.084-1.084zm-4.727 1.233a4.877 4.877 0 1 0 0-9.754 4.877 4.877 0 0 0 0 9.754z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className={styles.headerInput}
            />
          </div>
          <div className={styles.loginPartner}>
            <div className={styles.login}>
              <svg
                data-bbox="0 0 50 50"
                data-type="shape"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 50 50"
                fill="rgb(19, 143, 143)"
              >
                <g>
                  <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                </g>
              </svg>
              {user ? (
                <div>
                  {user.role === "admin" ? (
                    <Link href="/profile">
                      <span>{user.userName} 관리자님</span>
                    </Link>
                  ) : (
                    <span>{user.userName} 님</span>
                  )}
                  <button style={{ marginLeft: "10px" }} onClick={logout}>
                    로그아웃
                  </button>
                </div>
              ) : (
                <div>
                  <Link href="/login">로그인</Link>
                </div>
              )}
            </div>
            <div className={styles.partner}>
              {imageSrc[0] && (
                <Image
                  src={imageSrc[0]}
                  alt="partner"
                  width="117"
                  height="57"
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.menuContainer}>
          <div className={styles.logo}>
            <Link href="/main">
              {imageSrc[1] && (
                <Image src={imageSrc[1]} alt="logo" width="176" height="52" />
              )}
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={`${styles.li} ${styles.dropdown}`}>
                <Link href="/main/pages/product">제품안내</Link>
                <ul className={styles.dropdownMenu}>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="">시뮬레이션 소프트웨어</Link>
                    <ul className={styles.subMenu}>
                      <li>
                        <Link href="/main/pages/product/simulation/flothermxt">
                          Flotherm XT
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/simulation/starccm">
                          STAR-CCM+
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/simulation/floefd">
                          FLOEFD
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/simulation/flotherm">
                          Flotherm
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/simulation/flomaster">
                          Flomaster
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/simulation/amesim">
                          Amesim
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/simulation/simcenter3d">
                          Simcenter 3D
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/simulation/heeds">
                          HEEDS
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/simulation/battery">
                          Battery Design Studio
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/pages/product/item2">측정장비</Link>
                    <ul className={styles.subMenu}>
                      <li>
                        <Link href="/main/pages/product/measurement/powertester">
                          Power Tester
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/measurement/t3ster">
                          T3STER SI
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/measurement/tima5">
                          TIMA 5
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/measurement/tocs">
                          TOCS
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/measurement/latima">
                          LaTIMA
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/measurement/tifas">
                          TIFAS
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/pages/product/item3">설계 소프트웨어</Link>
                    <ul className={styles.subMenu}>
                      <li>
                        <Link href="/main/pages/product/design/adt">
                          TURBOdesign Suite
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/design/solidedge">
                          Solid Edge
                        </Link>
                      </li>
                      <li>
                        <Link href="/main/pages/product/design/siemensnx">
                          Siemens NX
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={`${styles.li} ${styles.dropdown}`}>
                <Link href="/main/pages/industry">적용산업</Link>
                <ul className={styles.dropdownMenu}>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry">전자기기 및 반도체</Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/automotive">
                      자동차 및 운송
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/telecom">
                      이동통신 및 미디어
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/environment">
                      환경 및 산업용기계
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/construction">
                      건설 / 토목
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/energy">
                      발전 / 에너지 / 유틸리티
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/medical">
                      의료기기 / 제약 / 헬스케어
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/consumer">소비재</Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/aerospace">
                      항공 / 우주 / 방산
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/marine">조선 / 해양</Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/finance">
                      보험 및 금융
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/industry/software">
                      소프트웨어 개발
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`${styles.li} ${styles.dropdown}`}>
                <Link href="/main/pages/consulting">
                  엔지니어링 컨설팅 서비스
                </Link>
                <ul className={styles.dropdownMenu}>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/consulting/testing">
                      BMT / POC & 파일럿 테스트
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/consulting/clients">
                      고객별 맞춤교육
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/consulting/engineering">
                      엔지니어링 컨설팅
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`${styles.li} ${styles.dropdown}`}>
                <Link href="/main/pages/announcements">공지사항</Link>
                <ul className={styles.dropdownMenu}>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/announcements/training">
                      교육 안내
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/announcements/event">행사소식</Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/announcements/productnews">
                      제품소식
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/announcements/resources">
                      자료실
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/announcements/request">
                      평가판 신청
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`${styles.li} ${styles.dropdown}`}>
                회사소개
                <ul className={styles.dropdownMenu}>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/company/ceo">CEO 인사말</Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/company/history">회사연혁</Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/company/brochure">
                      온라인 브로슈어
                    </Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/company/direction">오시는 길</Link>
                  </li>
                  <li className={`${styles.li} ${styles.subDropdown}`}>
                    <Link href="/main/pages/company/career">채용 공고</Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className={styles.menu} onClick={openModal}>
                  MENU
                </button>
              </li>
              {isMenuModal && (
                <div className={styles.overlay}>
                  <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                      <nav>
                        <h2>제품안내</h2>
                        <h2>적용산업</h2>
                        <h2>엔지니어링 컨설팅 서비스</h2>
                        <h2>공지사항</h2>
                        <h2>회사소개</h2>
                      </nav>
                    </div>
                    <div className={styles.modalContent}>
                      <div className={styles.software}>
                        <div className={styles.softwareTitle}>
                          <h3>Software</h3>
                        </div>
                        <div className={styles.softwareContent}>
                          <div>
                            <h2>Flotherm</h2>
                            <h2>Flotherm XT</h2>
                            <h2>STAR-CCM+</h2>
                            <h2>FLOEFD</h2>
                            <p>Flomaster</p>
                            <p>Amesim</p>
                            <p>Simcenter 3D</p>
                            <p>HEEDS</p>
                            <p>Battery Design Studio</p>
                          </div>
                          <div>
                            <p>전자기기 및 반도체</p>
                            <p>자동차 및 운송</p>
                            <p>이동통신 및 미디어</p>
                            <p>환경 및 산업용기계</p>
                            <p>건설 / 토목</p>
                            <p>발전 / 에너지 / 유틸리티</p>
                            <p>의료기기 / 제약 / 헬스케어</p>
                            <p>소비재</p>
                            <p>항공 / 우주 / 방산</p>
                            <p>조선 / 해양</p>
                            <p>보험 및 금융</p>
                            <p>소프트웨어 개발</p>
                          </div>
                          <div>
                            <p>BMT / POC & 파일럿 테스트</p>
                            <p>고객별 맞춤교육</p>
                            <p>엔지니어링 컨설팅</p>
                          </div>
                          <div>
                            <p>교육안내</p>
                            <p>행사소식</p>
                            <p>제품소식</p>
                            <p>평가판 신청</p>
                          </div>
                          <div>
                            <p>CEO 인사말</p>
                            <p>홍보영상</p>
                            <p>온라인 브로슈어</p>
                            <p>채용공고</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.hardware}>
                        <div className={styles.hardwareTitle}>
                          <h3>Hardware</h3>
                        </div>
                        <div className={styles.hardwareContent}>
                          <h2>Powertester</h2>
                          <h2>T3STER SI</h2>
                        </div>
                      </div>
                      <div className={styles.designSoftware}>
                        <div className={styles.designSoftwareTitle}>
                          <h3>Design Software</h3>
                        </div>
                        <div className={styles.designSoftwareContent}>
                          <h2>TURBOdesign Suite</h2>
                          <p>Solid Edge</p>
                          <p>Simens NX</p>
                        </div>
                      </div>
                    </div>
                    <button className={styles.modalClose} onClick={closeModal}>
                      <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="29.6 26 148 148"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="29.6 26 148 148"
                        role="presentation"
                        aria-hidden="true"
                        width="30"
                        height="30"
                        fill="white"
                      >
                        <g>
                          <path d="M177.6 147.3L130.3 100l47.3-47.3L150.9 26l-47.3 47.3L56.3 26 29.6 52.7 76.9 100l-47.3 47.3L56.3 174l47.3-47.3 47.3 47.3 26.7-26.7z"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </ul>
          </nav>
          <div>
            <div
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="29.6 26 148 148"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="29.6 26 148 148"
                  role="presentation"
                  aria-hidden="true"
                  width="30"
                  height="30"
                  fill="white"
                >
                  <g>
                    <path d="M177.6 147.3L130.3 100l47.3-47.3L150.9 26l-47.3 47.3L56.3 26 29.6 52.7 76.9 100l-47.3 47.3L56.3 174l47.3-47.3 47.3 47.3 26.7-26.7z"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  id="icon-svg-menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect width="24" height="24" fill="none"></rect>
                  <path
                    d="M192,2707v-1.25h17.5V2707Zm0-6.375v-1.25h17.5v1.25Zm0-6.375V2693h17.5v1.25Z"
                    transform="translate(-189 -2688)"
                  ></path>
                </svg>
              )}
            </div>
            {/* 네비게이션 메뉴 */}
            <div className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
              <ul>
                <li>
                  <Link href="/main/pages/product">제품안내</Link>
                </li>
                {/* 적용산업 메뉴 */}
                <li
                  className={styles.dropdown}
                  onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                >
                  적용산업
                </li>

                {/* 서브 메뉴 */}
                <ul
                  className={`${styles.dropdownMenu} ${
                    isIndustryOpen ? styles.show : ""
                  }`}
                >
                  <li>
                    <Link href="/main/pages/industry">전자기기 및 반도체</Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/automotive">
                      자동차 및 운송
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/telecom">
                      이동통신 및 미디어
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/environment">
                      환경 및 산업용기계
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/construction">
                      건설 / 토목
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/energy">
                      발전 / 에너지 / 유틸리티
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/medical">
                      의료기기 / 제약 / 헬스케어
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/consumer">소비재</Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/aerospace">
                      항공 / 우주 / 방산
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/marine">조선 / 해양</Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/finance">
                      보험 및 금융
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/pages/industry/software">
                      소프트웨어 개발
                    </Link>
                  </li>
                </ul>
                <li>
                  <Link href="/main/pages/consulting/engineering">
                    컨설팅서비스
                  </Link>
                </li>
                <li>
                  <Link href="/main/pages/announcements">공지사항</Link>
                </li>
                <li>
                  <Link href="/main/pages/company/ceo">회사소개</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
