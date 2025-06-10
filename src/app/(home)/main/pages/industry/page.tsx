"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Industry() {
  const { imageSrc1, error } = useFetchCloudinaryImages([
    "industry1_eat7w8",
    "industry2_oyb77z",
    "industry3_xm1ake",
    "industry4_phv0ba",
    "industry5_bkimkm",
    "industry6_tkqnbu",
    "industry7_hgmoya",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.imageWrapper}>
          {imageSrc1[0] && (
            <Image
              src={imageSrc1[0]}
              alt="전자기기 및 반도체"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
            />
          )}
          <div className={styles.firstDes}>
            <div className={styles.firstDesWrapper}>
              <h1>전자기기 및 반도체</h1>
              <div className={styles.leftAlignContent}>
                <h2>전자 기기 및 반도체 산업을 위한 디지털화</h2>
                <p>
                  전자 기기 및 반도체 회사는 NPDI(신제품 개발 및 도입)의
                  우수성을 달성하기 위해 업계 성공 사례를 기반으로 사전 구성된
                  소프트웨어 솔루션을 필요로 합니다. 당사의 전자 기기 및 반도체
                  디지털 엔터프라이즈 산업 솔루션들은 혁신 및 개발 사이클을
                  단축하고 공급망을 통해 협업을 가능하게 하며 closed loop,
                  지능형 통합 제조 환경을 구축함으로써, 기업이 여러 도메인의
                  데이터를 활용하여 품질 및 수익성을 향상시키면서 시장 진입 시간
                  및 비용을 절감할 수 있게 해줍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondWrapper}>
          <h2>세부 산업 분야</h2>
          <div className={styles.secondGrid}>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc1[1] && (
                  <Image
                    src={imageSrc1[1]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>소비자 및 산업용 전자 기기</h3>
                <p>일상적으로 사용하는 전자 기기 및 자동화 된 제조 장비</p>
                <div className={styles.detailButton}>
                  <Link href="/main/pages/industry/industryConsumer">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc1[2] && (
                  <Image
                    src={imageSrc1[2]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>가전 제품 및 백색 제품</h3>
                <p>
                  다양한 작업을 수행하여 삶을 보다 편리하게 만들어주는 스마트
                  가전 제품
                </p>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc1[3] && (
                  <Image
                    src={imageSrc1[3]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>전자 기기 제조 서비스</h3>
                <p>
                  전자 기기 OEM에 계약된 제조 및 물류를 제공하는 밸류 체인
                  파트너
                </p>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc1[4] && (
                  <Image
                    src={imageSrc1[4]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>소비자 및 산업용 전자 기기</h3>
                <p>반도체 제품 연구, 개발, 설계 및 제작</p>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc1[5] && (
                  <Image
                    src={imageSrc1[5]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>반도체 장비</h3>
                <p>반도체 장비 생산을 지원하는 장비 및 서비스</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.siemens}>
          <div className={styles.siemensDes}>
            <h2>주요 솔루션</h2>
            <h3>전자 기기를 위한 다분야 데이터 관리</h3>
            <p>
              통합 하드웨어 및 소프트웨어 설계와 테스트는 이제 시스템 제공
              요구사항의 일부로 자리잡았으며, 이는 긴밀히 통합된 PLM-ALM
              플랫폼으로만 실행할 수 있습니다. <br />
              통합 요구사항 관리, 안전한 공급업체 협업 및 기계, 전자 및
              소프트웨어 공동 설계와 공동 시뮬레이션을 단일 협업 환경에 통합하는
              엔지니어링 관리 플랫폼을 갖춘 엔지니어링 라이프사이클 관리용 통합
              방식을 활용해 여러 분야의 엔지니어링 팀을 관리합니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/solutions/product-lifecycle-management-plm/"
              target="_blank"
            >
              <button>자세한 내용 보기 </button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc1[6] && (
              <Image
                src={imageSrc1[6]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
