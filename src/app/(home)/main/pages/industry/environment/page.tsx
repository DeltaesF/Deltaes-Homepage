"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Environment() {
  const { imageSrc, loading, error } = useFetchImages([
    "environment1.avif",
    "environment2.avif",
    "environment3.avif",
    "environment4.avif",
    "environment5.avif",
    "environment6.avif",
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
          />
        </div>
      ) : (
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
                  <h1>환경 및 산업용기계</h1>
                  <div className={styles.leftAlignContent}>
                    <h2>산업용 기계를 위한 디지털화</h2>
                    <p>
                      산업용 기계는 그 어느 때보다 복잡해졌습니다. 점차 경쟁이
                      심화되는 시장에서 기업은 혁신 기술을 확보하고 복잡성을
                      관리해야 합니다. Siemens Digital Industries Software는
                      올바른 제품을 올바른 방법으로 제조할 수 있도록 지원합니다.
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
                    <h3>몰드, 공구 및 다이</h3>
                    <p>
                      공구 설계 및 제조사는{" "}
                      <span>{"더 빠르고 더 우수한, 더 저렴한"}</span>
                      제품에 대한 요구사항을 해결합니다.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/machinebuilding.html"
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
                <h3>적층 설계 및 제조</h3>
                <p>
                  적층 제조는 중장비 제조업체가 부품 설계의 형태를 변경하고
                  최적의 성능을 위해 기존부터 사용돼 온 제조 프로세스와 재료를
                  저렴한 비용으로 변경하여 기존 설계 및 제조 한계를 극복할 수
                  있도록 지원합니다. Siemens 적층 제조 및 설계 솔루션은 제품을
                  재구성하고 제조를 재조정하며, 비즈니스 모델을 재고할 수 있도록
                  지원하는 적층 제조를 위한 통합된 소프트웨어 애플리케이션을
                  제공합니다. <br />
                  설계 모델에서 프린팅된 부품에 이르기까지 간소화되고 디지털화된
                  솔루션은 애플리케이션 간에 부품을 변환하고 리모델링 할 필요가
                  없어 제품 성능을 향상시키고 어셈블리를 간소화하며 최소한의
                  설정 및 툴링으로 가장 복잡한 부품의 제조 작업을 혁신합니다.
                </p>
                <Link
                  href="https://plm.sw.siemens.com/ko-KR/nx/manufacturing/additive-manufacturing/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
                {imageSrc[2] && (
                  <Image
                    src={imageSrc[2]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
            <div className={styles.siemens2}>
              <div className={styles.siemensDes2}>
                <h3>중장비를 위한 기계 성능 엔지니어링</h3>
                <p>
                  중장비 제조사는 지속적으로 증가하는 최대 전력, 생산성, 정밀도,
                  열악한 환경에서도 견딜 수 있는 능력을 가진 기계를 공급해야
                  하는 압력을 받고 있습니다. 글로벌 및 현지 에너지 소비 목표,
                  규제, 기계 안전 표준 준수를 비롯한 여러 제약 하에서 설계 및
                  제조하는 과정에서 이를 달성해야 합니다.
                  <br />
                  이러한 모든 요구사항을 결합한 기계를 설계하는 것이 진정한
                  과제입니다. 그러나 최신 기술이 발전하면서 엔지니어는 다양한
                  옵션을 사용할 수 있게 됐습니다. 이들은 전기화, 여러 메카트로닉
                  시스템, 제어를 비롯한 파워트레인 및 구동을 위한 새로운
                  아키텍처를 사용해 실험하고, 스마트한 행동, 자율 작동과 같은
                  디지털화 영역의 혁신을 탐색할 수 있습니다. 그러나 기존의 검증
                  중심 개발 프로세스로는 더 이상 복잡성을 관리할 수 없습니다.
                  대신 디지털 방식으로 기술을 통합해 초현실적인 다중 물리 모델과
                  데이터를 효과적으로 얻을 수 있는 예측 방법이 필요합니다.
                  Siemens는 테스트를 확장 가능한 시뮬레이션 기술과 고유하게
                  통합해 엔지니어가 가장 포괄적인 디지털 트윈을 제작할 수 있도록
                  지원하며, 이를 통해 복잡한 최신 중장비 제품이 가진 성능
                  요구사항을 최적으로 조화시킬 수 있습니다.
                </p>
                <Link
                  href="https://www.sw.siemens.com/ko-KR/solutions/engineering-simulation/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
                {imageSrc[3] && (
                  <Image
                    src={imageSrc[3]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
            <div className={styles.siemens3}>
              <div className={styles.siemensDes3}>
                <h3>고급 기계 엔지니어링</h3>
                <p>
                  계획부터 생산을 망라하는 혁신 프로세스를 구현하기는 어려울 수
                  있습니다. Siemens Digital Industries Software의 기계 설계
                  솔루션인 고급 기계 엔지니어링을 사용하면 디지털 혁신
                  프로세스에 즉시 착수하고 생산성을 향상시킬 수 있습니다.
                  Siemens의 고급 기계 엔지니어링 솔루션은 가상 설계 및 시운전을
                  통해 생산에 소요되는 시간을 단축하고, 보다 향상된 사전 유효성
                  검사와 더욱 짧은 시운전 시간, 보다 즉각적인 생산성 제공해 한층
                  완성도 높은 기계 개발을 보장합니다.
                </p>
                <Link
                  href="https://www.sw.siemens.com/ko-KR/digital-thread/advanced-machine-engineering/"
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
                <h3>중장비를 위한 협업식 제조</h3>
                <p>
                  Siemens의 협업식 제조 솔루션은 글로벌 설계, 엔지니어링, 제조
                  팀을 하나로 통합해 동일한 요구사항, 모델, 제조 프로세스
                  계획으로 작업하면 지역별 요구사항을 충족하는 유연성을
                  제공합니다. 이러한 협력 환경에서 작업을 하면 제조 계획의
                  향상된 시뮬레이션 및 최적화, 최적화된 설계와 제조 프로세스,
                  제조 정보와 제품 개발의 연결로 인한 이점을 누릴 수 있습니다.
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
          </div>
        </div>
      )}
    </div>
  );
}
