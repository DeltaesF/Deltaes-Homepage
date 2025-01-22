"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Marine() {
  const { imageSrc, error } = useFetchImages([
    "marine1.jpg",
    "marine2.jpg",
    "marine3.jpg",
    "marine4.jpg",
    "marine5.jpg",
    "marine6.jpg",
    "marine7.jpg",
    "marine8.jpg",
    "marine9.jpg",
  ]);

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
          <div className={styles.firstDes}>
            <div className={styles.firstDesWrapper}>
              <h1>조선 / 해양</h1>
              <div className={styles.leftAlignContent}>
                <h2>조선, 해양 산업을 위한 디지털화</h2>
                <p>
                  컨셉트 설계부터 생산, 운영 및 최적화된 서비스 라이프사이클
                  관리에 이르는 선박 라이프사이클의 모든 측면을 관리하는
                  포괄적인 통합 소프트웨어와 서비스 포트폴리오를 제공합니다.
                  해양 산업을 위한 포괄적 최신 소프트웨어 솔루션을 활용해 혁신을
                  주도하고 생산성을 향상시켜 당면 과제를 해결 비즈니스를 미래의
                  디지털 엔터프라이즈로 전환할 수 있습니다.
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
                {imageSrc[1] && (
                  <Image
                    src={imageSrc[1]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>조선</h3>
                <p>생산성 및 선박 성능 개선</p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[2] && (
                  <Image
                    src={imageSrc[2]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>선박 공급 업체</h3>
                <p>
                  조선, 해양 장비 및 시스템 제공업체를 위한 설계, 시뮬레이션 및
                  제조 통합으로 현재 문제점 해결
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[3] && (
                  <Image
                    src={imageSrc[3]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>레저 선박 및 요트</h3>
                <p>고성능 레저 선박 및 요트의 설계, 생산 및 유지</p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.siemens}>
          <div className={styles.siemensDes}>
            <h2>주요 솔루션</h2>
            <h3>통합 선박 설계 및 엔지니어링</h3>
            <p>
              오늘날 해양 시장은 더욱 친환경적이고 스마트하며 첨단 기술을 갖춘
              선박을 요구합니다. 경쟁력을 유지하려면 조선업체는 시간, 예산,
              품질에 맞춰 선박을 인도해야 합니다. 당사의 통합 선박 설계 및
              엔지니어링 솔루션을 통해 해양 회사는 설계 나선형을 계속 제어할 수
              있습니다. 모든 분야에 걸친 설계 데이터, 프로세스 및 도구를 하나의
              중앙 집중식 환경에 통합함으로써 정보 및 협업 사일로를 허물고
              혁신을 촉진하며 기업 생산성을 향상시킬 수 있습니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/digital-thread/design-engineering/ship-design/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[4] && (
              <Image
                src={imageSrc[4]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens2}>
          <div className={styles.siemensDes2}>
            <h3>통합 프로젝트 기획 및 실행</h3>
            <p>
              고부가가치 선박에 대한 수요가 증가함에 따라 더욱 복잡한 설계 및
              제조 프로세스와 관련된 위험을 식별하고 완화해야 할 필요성도 커지고
              있습니다. 이러한 요구는 예측 불가능하고 조선 시장의 경쟁이
              심화되는 현재 환경으로 인해 더욱 복잡해졌습니다. 경쟁력을
              유지하려면 조선소는 매력적이고 정확한 입찰을 제공해야 합니다. 이를
              위해서는 완벽하게 계획되고, 자원이 확보되고, 예산이 책정된
              엔드투엔드 프로젝트 관리 솔루션을 갖추는 것이 중요해졌습니다.
            </p>
            <Link href="https://www.sw.siemens.com/ko-KR/" target="_blank">
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[5] && (
              <Image
                src={imageSrc[5]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens3}>
          <div className={styles.siemensDes3}>
            <h3>디지털 선박용 의약품 관리</h3>
            <p>
              교체의 규정과 시장의 요구를 해소하기 위해 선박은 그 어느 때보다
              안전하고 스마트하고 비용을 절감할 수 있고, 연결성과 적응력이
              높아져야 합니다. 이미 고도로 축적된 제품에 새로운 기능이 추가됨에
              따라 공급업체, 하청업체, 협력업체 등 더 많은 이해관계가 있는 설계,
              제조 및 유지 보수 프로세스에 참여해야 합니다. 선박의 서비스 수명이
              독점적인 선박의 경우 40년, 해군 선박의 50년에 있음을 고려할 수
              있다는 점을 염두에 두고 선박용 자전거 관리는 선택이 아닌 필수임이
              분명합니다.
            </p>
            <Link href="https://www.sw.siemens.com/ko-KR/" target="_blank">
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[6] && (
              <Image
                src={imageSrc[6]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens2}>
          <div className={styles.siemensDes2}>
            <h3>디지털 선박 건조</h3>
            <p>
              더 많은 품질/안전 규정과 점점 더 맞춤화되는 기능을 요구하고 있기
              때문에 이로 인해 선박에 대한 수요가 증가하고 있습니다. 경쟁이 있고
              경제적으로 경쟁이 증가하고 따라 조선소에서 생산비를 구성하고
              시장에 등장하는 기간을 단축해야 하는 것처럼 그러한 공유의 이야기가
              장소를 강타하고 있습니다. 소가 경쟁을 유지하기 위해 주의 사항에
              따라 조선소에 맞춰서 보내야 합니다. 하지만 마진이 매우 다양한
              상황에서 조선 업체들이 품질의 보호 없이 생산비를 계속해서 할 수
              있는 이유가 뭐죠?
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/digital-thread/smart-manufacturing/ship-construction/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[7] && (
              <Image
                src={imageSrc[7]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens3}>
          <div className={styles.siemensDes3}>
            <h3>선박 서비스 및 유지보수</h3>
            <p>
              경기 침체가 이미 과밀한 해운 시장에 계속 영향을 미치면서 선주와
              운영업체는 운영 비용을 낮추고 선박 가용성을 개선하여 이윤을
              극대화할 방법을 모색하고 있습니다. 동시에 정보통신기술(ICT)의
              발전은 데이터 수집, 교환, 분석을 전례 없는 수준으로 끌어올려
              해운업체와 조선업체 모두에게 새로운 지평을 열어주고 있습니다.
              그렇다면 해양 산업은 어떻게 새로 이용 가능한 데이터의 바다를
              활용하여 운영 비용을 줄이고 선박 가용성을 확장할 수 있습니까?
            </p>
            <Link href="https://www.sw.siemens.com/ko-KR/" target="_blank">
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[8] && (
              <Image
                src={imageSrc[8]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
