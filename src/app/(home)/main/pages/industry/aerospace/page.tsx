"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Aerospace() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "aerospace1_c74fej",
    "consumer10_ahndrp",
    "aerospace2_bmswxx",
    "aerospace3_a0gflz",
    "aerospace4_fedr4q",
    "aerospace5_lskqx7",
    "aerospace6_vlnqcs",
    "aerospace7_axdcjf",
    "consumer9_y3tm5l",
    "aerospace4_fedr4q",
    "aerospace8_tuz9qq",
    "aerospace9_tmcgyy",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <Image
            src="/loading1.gif"
            alt="Loading..."
            width={200}
            height={200}
            unoptimized
          />
        </div>
      ) : (
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
                  <h1>항공 / 우주 / 방산</h1>
                  <div className={styles.leftAlignContent}>
                    <h2>항공, 우주 및 방위 산업을 위한 디지털화</h2>
                    <p>
                      항공, 우주 및 방위 조직은 뛰어난 성능 목표를 가지고 최첨단
                      플랫폼과 시스템을 개발하고 있습니다. 정부는 새로운
                      항공기와 기술을 위해 인프라와 보안 시스템을 변화시키고
                      있습니다. 원동력은 항공우주 및 방위 제품 라이프사이클과
                      가치 사슬 전반에 걸쳐 협업적이고 동기화된 프로그램 관리를
                      통해 촉진되는 혁신입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.firstSubContainer}>
            <div className={styles.firstSub}>
              <div className={styles.firstSubDes}>
                <h3>항공우주 및 방위 산업을 위한 디지털화</h3>
                <p>
                  디지털화의 속도는 전례가 없습니다. 이 모든 것은 고립된
                  데이터를 연결된 분야 및 프로세스로 전환하는 디지털 스레드를
                  통해 가능해집니다. 이러한 스레드는 물리적 세계를 반영하는 가상
                  엔터티인 디지털 트윈의 신경 네트워크를 형성하여 데이터를
                  통찰력으로 전환하여 제품 및 생산 라이프사이클 전반에 걸쳐
                  지속적으로 설계, 구축 및 최적화합니다. <br /> <br />
                  디지털화의 속도는 전례가 없습니다. 이 모든 것은 고립된
                  데이터를 연결된 분야 및 프로세스로 전환하는 디지털 스레드를
                  통해 가능해집니다. 이러한 스레드는 물리적 세계를 반영하는 가상
                  엔터티인 디지털 트윈의 신경 네트워크를 형성하여 데이터를
                  통찰력으로 전환하여 제품 및 생산 라이프사이클 전반에 걸쳐
                  지속적으로 설계, 구축 및 최적화합니다.
                </p>
              </div>
              <div className={styles.siemensImage}>
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
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.secondWrapper}>
              <h2>세부 산업 분야</h2>
              <div className={styles.secondGrid}>
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
                    <h3>항공기 엔진</h3>
                    <p>
                      상업용 항공기 및 군용 항공기를 위한 고성능 엔진을 개발
                      중인 OEM
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/aerospace.html"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
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
                    <h3>항공기 및 기체</h3>
                    <p>
                      프로젝트 기반 에너지 및 유틸리티 서비스를 제공하는
                      엔지니어링
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/aerospace.html"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
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
                    <h3>항공 전자 및 방산용 전자 장치</h3>
                    <p>
                      항공 우주 및 방위 플랫폼을 위한 항공 전자 및 전자 장치
                      개발
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/aerospace.html"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
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
                    <h3>우주 항공 및 방위 기관</h3>
                    <p>국토 방위, 우주, 항공기 및 보안에 집중하는 정부 기관</p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/aerospace.html"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
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
                  <div className={styles.textOverlay}>
                    <h3>우주 시스템</h3>
                    <p>
                      오늘날의 우주 산업을 지원하는 발사 장치, 우주선, 위성 및
                      착륙 시스템
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/aerospace.html"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc1[7] && (
                      <Image
                        src={imageSrc1[7]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>지상 군사 시스템 디지털화</h3>
                    <p>
                      방산 및 준군사 서비스를 위한 견고한 장갑 기능를 갖춘
                      모바일 지상 무기 플랫폼 및 시스템
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/aerospace.html"
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
          <div className={styles.secondSubContainer}>
            <div className={styles.secondSub}>
              <div className={styles.siemensImageWrapper}>
                <h3>차세대 항공기 개발</h3>
                <div className={styles.siemensImage}>
                  {imageSrc1[8] && (
                    <Image
                      src={imageSrc1[8]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.secondSubDes}>
                <p>
                  비행의 진화는 많은 발전을 가져 왔습니다. 새로운 시대에 도달 할
                  수 있는 무한한 기술과 경계없는 비행의 미래를 상상해보십시오.
                  신뢰할 수 있는 항공 우주 및 국방 기업들은 업계 파트너로서
                  최고의 제품과 세계적 수준의 프로그램을 제공 할 수 있음을 알고
                  있습니다. 실제 세계와 디지털 세계를 하나로 모으는 디지털화는
                  필수적 입니다. 항공 우주 및 방위 산업 고객의 미래에 대한
                  비전은 오늘날의 현실입니다
                </p>
              </div>
            </div>
          </div>
          <div className={styles.third}>
            <div className={styles.siemens}>
              <div className={styles.siemensDes}>
                <h2>주요 솔루션</h2>
                <h3>통합 프로그램 계획 및 실행</h3>
                <p>
                  일관된 프로그램 계획 및 실행 우수성은 새로운 비즈니스를
                  성공시키는데 필수적입니다. <br />
                  Siemens 솔루션은 완벽한 계획, 재원 조달 및 예산 편성으로
                  구현한 프로그램 관리 시스템에서 비용과 일정, 기술 요구사항을
                  통합해 프로그램을 계획하고 실행하는 시스템 방식을 제공합니다.
                  이 솔루션은 관리하기 쉬우며, 확장성이 뛰어나 어느 규모의 상용
                  및 관용 프로그램에나 사용 가능합니다. 모든 프로그램 아티팩트를
                  관리하는 통합 시스템을 사용해 비용과 일정에 맞게 실행할 수
                  있는 역량을 강화할 수 있습니다.
                </p>
                <Link
                  href="https://xcelerator.siemens.com/global/en/industries.html"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
                {imageSrc1[9] && (
                  <Image
                    src={imageSrc1[9]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
            </div>
            <div className={styles.siemens2}>
              <div className={styles.siemensDes2}>
                <h3>적층 설계 및 제조</h3>
                <p>
                  적층 제조를 통해 항공 우주 및 방위 업체는 원하는 결과를 얻기
                  위해서는 여러 단계, 도구 및 가공이 필요한 기존 제조 방법에
                  비해 절감된 비용으로 최적의 성능을 제공할 수 있도록 모든 것을
                  개조할 수 있습니다. 적층 제조를 위한 Siemens의 통합 소프트웨어
                  애플리케이션은 제품을 재구상하고 제조 설비를 교체하고 비즈니스
                  모델을 다시 생각할 수 있도록 지원합니다.
                </p>
                <Link
                  href="https://plm.sw.siemens.com/ko-KR/nx/manufacturing/additive-manufacturing/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
                {imageSrc1[10] && (
                  <Image
                    src={imageSrc1[10]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
            </div>
            <div className={styles.siemens3}>
              <div className={styles.siemensDes3}>
                <h3>엔진 성능 연구</h3>
                <p>
                  복잡한 항공기 엔진 시스템에서 배출, 소음, 에너지 효율성, 안전,
                  신뢰성에 대한 성능 요구 사항을 달성하려면 다양한 분야에 대한
                  통합된 보기를 제공하는 플랫폼이 필요합니다. 강력한 설계 공간
                  탐색, 확장 가능한 다중 물리학, 역학 및 CFD 기능, 업계 최고의
                  물리적 테스트 및 숙련된 엔지니어링 서비스를 고유하게
                  결합함으로써 Siemens Digital Industry Software 포트폴리오는
                  모든 수준에서 엔지니어링 통찰력을 제공합니다.
                </p>
                <Link
                  href="https://www.sw.siemens.com/ko-KR/solutions/engineering-simulation/aerospace-engineering/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
                {imageSrc1[11] && (
                  <Image
                    src={imageSrc1[11]}
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
      )}
    </div>
  );
}
