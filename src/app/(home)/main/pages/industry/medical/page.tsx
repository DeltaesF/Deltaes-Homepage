"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Medical() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "medical1_lnzdmj",
    "medical2_wkzujp",
    "medical3_yadkb2",
    "medical4_oajtun",
    "medical5_z8wjhz",
    "medical6_nxgpir",
    "medical7_s40dm9",
    "medical8_i1ngoi",
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
                  <h1>의료기기 / 제약 / 헬스케어</h1>
                  <div className={styles.leftAlignContent}>
                    <h2>의료 기기 및 제약 산업을 위한 디지털화</h2>
                    <p>
                      제품 개발 과제를 해결하기 위한 제품 라이프사이클 관리
                      플랫폼의 필요성을 인식하는 선도적 의료 기기 및 제약 기업이
                      사용할 수 있는 솔루션을 제공합니다. 검증된, 유연한
                      솔루션은 제약 및 의료 기기 개발 과정에서 혁신을 촉진하고
                      품질을 보장하며 비용을 절감하고 FDA 규정을 비롯해 계속
                      달라지는 글로벌 규정을 준수할 수 있도록 지원합니다.
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
                    <h3>심장혈관 및 신경계</h3>
                    <p>
                      수술 기간을 단축하고 최상의 프로세스를 이끌어 내십시오.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/pharmaceutical-life-science-industries.html"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
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
                    <h3>의료기기 및 장비</h3>
                    <p>품질, 추적기능, 규정 준수 및 보안을 보장 합니다. </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/pharmaceutical-life-science-industries.html"
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
                    <h3>정형외과 및 치과</h3>
                    <p>
                      개인 맞춤 의료 기기의 시장 출시 시기를 앞당기고 ​복잡한
                      프로세스에서 규정 준수를 보장 합니다.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/pharmaceutical-life-science-industries.html"
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
                    <h3>제약</h3>
                    <p>
                      프로세스를 간소화하고 비용을 절감하며 품질은 향상
                      시킵니다.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/pharmaceutical-life-science-industries.html"
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
                <h3>우수한 설계</h3>
                <p>
                  의료 기기 설계를 발명하거나 개선하는 것은 견고한 프로토타입과
                  시기적절한 프로젝트 단계 시작을 보장하기 위해 정밀한 조정이
                  필요한 다분야의 시간 소모적 프로세스이기 때문에 어렵습니다.
                  최상의 결정을 내리려면 필수 성능 정보에 액세스할 수 있어야
                  하며, 사용자의 요구 사항과 모형의 중요한 사양 사이의 균형을
                  유지해야 하며, 마지막으로 모든 설계 문서를 수집하여 규정 준수
                  이정표를 가속화해야 합니다. <br />
                  통합 디지털 시스템 백본을 통해 효율적이고 성능이 뛰어나며
                  완벽하게 규정을 준수하는 제품 설계를 생성할 수 있는 기능을
                  통해 설계 팀의 역량을 강화하십시오.
                </p>
                <Link
                  href="https://www.sw.siemens.com/ko-KR/digital-thread/design-engineering/medical-device-design/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
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
            </div>
            <div className={styles.siemens2}>
              <div className={styles.siemensDes2}>
                <h3>운영 효율성</h3>
                <p>
                  비즈니스 성장을 위해 새로운 의료 제품을 출시하는 동시에 생산
                  및 공급망을 재구성해야 하는 새로운 요구 사항이 있습니다.
                  다음을 통해 제조 네트워크를 효율적으로 최적화할 수 있으면 이를
                  달성할 수 있습니다.
                  <br />
                </p>
                <div className={styles.siemensDes2Ul}>
                  <ul>
                    <li>
                      광범위한 시나리오를 모델링하면 시설이 변화에 신속하게
                      대응할 수 있도록 준비됩니다.
                    </li>
                    <li>
                      자동 계획 및 일정 관리로 민첩하고 유연한 생산 계획의
                      효율성을 최적화합니다.
                    </li>
                    <li>
                      자동으로 프로세스를 시행하고 생산 데이터를 추적하여 품질과
                      규정 준수를 보장합니다.
                    </li>
                  </ul>
                </div>
                <p>
                  이제는 시설의 준비성, 효율성, 품질을 향상시켜야 할 때입니다.
                </p>
                <Link
                  href="https://www.sw.siemens.com/ko-KR/digital-thread/smart-manufacturing/medical-device-manufacturing/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
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
            <div className={styles.siemens3}>
              <div className={styles.siemensDes3}>
                <h3>지능형 설계 제어</h3>
                <p>
                  의료 기기 개발의 복잡성, 특히 소프트웨어와 전자 기기를
                  포함하는 스마트 의료 기기의 경우 여러 분야의 엔지니어링 팀에서
                  설계 프로세스를 조율하는 설계 제어를 구축하는 소프트웨어
                  솔루션이 필요합니다. <br /> 지능형 설계 제어(Intelligent
                  Design Control)는 의료기기 회사가 데이터 중심, 모델 기반 및
                  문서 스마트화를 위한 솔루션입니다. 지능형 설계 제어는 비용이
                  많이 드는 오류, 품질 문제 및 리콜을 방지하면서 장치 수명주기
                  전반에 걸쳐 엔지니어링 효율성과 속도를 향상시킵니다.
                </p>
                <Link
                  href="https://www.sw.siemens.com/ko-KR/digital-thread/design-engineering/design-control/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
