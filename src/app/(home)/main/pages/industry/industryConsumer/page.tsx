"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function IndustryConsumer() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "industry2-1_nm7jxv",
    "industry2-2_wo0hhw",
    "industry2-3_vf2bif",
    "industry2-4_ey2lu9",
    "industry2-5_mhsq43",
    "industry2-6_yajmsr",
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
                  <h1>가전제품 및 산업용 전자 기기</h1>
                  <div className={styles.leftAlignContent}>
                    <p>
                      Siemens의 Digital Enterprise Platform은 확장 가능하고
                      안전한, 미래형 개방형 아키텍처입니다. Siemens 솔루션은
                      품질과 시장 포지션을 향상시키는 동시에 출시 시간을
                      단축하고 비용을 절감해 가전 및 산업용 전자 기기 제조사가
                      진정한 비즈니스 가치를 달성하도록 지원합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.secondWrapper}>
              <div className={styles.solution1}>
                <div>
                  <h2>주요 솔루션</h2>
                  <h3>전자제품의 통합 수명주기 관리</h3>
                  <p>
                    지속적인 기술 발전에 힘입어 제품 혁신은 전례 없는 속도로
                    진행되고 있습니다. 차세대 제품 개발을 가속화하려면 공유된
                    제품 비전을 통해 제품의 복잡성을 관리하는 응집력 있고
                    협업적인 엔지니어링 접근 방식이 필요합니다. 기한과 예산을
                    정확하게 충족하는 규정을 준수하는 제품을 구축하는 것이
                    가능해졌습니다.
                  </p>
                  <p>
                    또한 원활한 데이터 기반 디지털 혁신을 통해 지속적인 개선을
                    위한 폐쇄 루프 품질로 품질 우수성을 강화하는 것이 현실이
                    됩니다. 이러한 변화를 수용하는 것은 혁신적인 제품의 생성을
                    촉진하고 촉진하는 촉매제입니다. 효과적으로 관리되는 제품 및
                    프로세스 데이터와 함께 이러한 모든 요소를 ​​통합된 제품
                    라이프사이클 관리(PLM) 솔루션에 통합하면 단순히 프로젝트와
                    정보를 관리하는 것이 아니라 컨셉부터 제품까지 원활하고 고객
                    중심적인 여정을 조율하게 됩니다.
                  </p>
                </div>
                {imageSrc1[1] && (
                  <Image
                    src={imageSrc1[1]}
                    alt="전자기기 및 반도체"
                    width="371"
                    height="220"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.solution2}>
                <div>
                  <h3>신제품 소개 및 공급업체 협업</h3>
                  <p>
                    오늘날 전자 산업에서 혼란을 일으키는 주요 동인 중 하나는
                    성공적인 제품 출시에 영향을 미치는 공급망 변동성에서
                    비롯되어 시장 점유율과 수익 기회를 놓치게 됩니다. 규제와
                    지속가능성 목표가 추가되면서 특정 국가에서 제품을 조달하는
                    것이 어렵고 비용 집약적이어서 공급망이 더욱 복잡해졌습니다.
                    공급망 중단은 조만간 사라지지 않으며 악화될 가능성이
                    높습니다. 개념부터 배송까지 안전하고 원활한 흐름이
                    필요합니다. 신제품 소개(NPI) 및 공급업체 협업을 통해 문제를
                    조기에 식별하고 신속하게 적응할 수 있는 통찰력과 역량을
                    확보함으로써 공급망 중단 영향을 완화하고 비즈니스에 대한
                    위험을 줄일 수 있습니다.
                  </p>
                </div>
                {imageSrc1[2] && (
                  <Image
                    src={imageSrc1[2]}
                    alt="전자기기 및 반도체"
                    width="371"
                    height="220"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.solution1}>
                <div>
                  <h3>전자제품을 위한 스마트 제조</h3>
                  <p>
                    현대 전자 제조에는 공급망의 불확실성, 리드 타임 연장,
                    시시각각 변하는 재료 및 부품 비용 증가 등 많은 과제가
                    있습니다. 또한 지속적인 인력 변동, 자원 제약, 높은 에너지
                    가격 등이 있습니다. 이러한 모든 문제 외에도 제조업체는
                    다양한 역량, 파트너 및 공급업체를 통해 글로벌 제조의
                    복잡성을 관리하는 동시에 다양한 맞춤형 제품을 제공합니다.
                    품질과 수율을 관리하고 향후 생산 요구 사항을 계획하는 동시에
                    균형을 맞춰야 합니다.
                  </p>
                  <p>
                    <strong>왜 공장을 스마트하게 만드나요?</strong> <br />
                    스마트 제조는 PCB 설계 및 공장 현장 최적화부터 창고와 작업
                    현장 간 자재 흐름 개선, 고객 피드백 데이터 통합을 통해
                    새로운 설계 계획에 이르기까지 전체 제조 프로세스를 포괄하는
                    디지털 전략입니다. 글로벌 기업의 공장 위치가 하나이든 여러
                    사이트이든 상관없이 스마트 제조를 사용하면 설계부터 생산까지
                    모든 것이 완벽하게 함께 작동하여 제조 프로세스 전반에 걸쳐
                    효율성을 높일 수 있습니다.
                  </p>
                </div>
                {imageSrc1[3] && (
                  <Image
                    src={imageSrc1[3]}
                    alt="전자기기 및 반도체"
                    width="371"
                    height="220"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.solution2}>
                <div>
                  <h3>전자 시스템 설계</h3>
                  <p>
                    스마트 커넥티드 디바이스에 대한 소비자 수요 증가와
                    자율주행차, 증강현실, 가상현실, 사물인터넷(IoT), 5G에 이르는
                    획기적인 신기술이 전자산업의 혁명을 주도하고 있습니다.
                    오늘날의 전자 시스템 설계 팀은 압축된 일정과 예산에 맞춰
                    더욱 복잡한 제품을 제공해야 한다는 극심한 압박을 받고
                    있습니다. 시뮬레이션을 통한 검증을 통해 전자, 기계,
                    소프트웨어를 포함하여 개념부터 납품까지 작동하는 설계
                    솔루션입니다. 당사의 솔루션은 최첨단 설계 솔루션을 사용하여
                    전자 및 전기 기계 제품을 설계하는 회사에 도움이 됩니다.
                    이러한 솔루션은 동급 최고의 설계 도구와 프로세스를 결합하여
                    제품 개발 주기 전반에 걸쳐 생산성, 혁신 및 협업을
                    향상시킵니다.
                  </p>
                </div>
                {imageSrc1[4] && (
                  <Image
                    src={imageSrc1[4]}
                    alt="전자기기 및 반도체"
                    width="371"
                    height="220"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.solution1}>
                <div>
                  <h3>시뮬레이션 기반 설계</h3>
                  <p>
                    오늘날의 전자 산업에서는 큰 가능성을 가지고 시작했지만
                    예상치 못한 문제로 인해 방향을 잃은 제품 설계를 자주
                    경험합니다. 실제 모델 성능은 예측할 수 없으며 사양은
                    지속적으로 변경됩니다. 설계 결정으로 인해 의도하지 않은
                    결과가 발생하고, 열 및 재료 문제가 늦게 발견되고, 기술
                    솔루션이 계획대로 작동하지 않습니다. 결과적으로 비용이
                    증가하고, 시간을 절약하기 위해 흥미로운 기능이 중단되며,
                    최고의 아이디어를 제때 평가할 수 없는 경우가 많습니다.
                    이러한 과제에 대한 솔루션은 시뮬레이션을 통해 제품 성능을
                    예측하는 보다 안정적인 방법입니다. 디자인 팀은 어떤
                    아이디어가 가장 효과적인지 빠르게 파악하고 빌드하기 전에
                    이를 검증하기 위해 디자인 초기에 시뮬레이션 및 테스트 기능이
                    필요합니다.
                  </p>
                </div>
                {imageSrc1[5] && (
                  <Image
                    src={imageSrc1[5]}
                    alt="전자기기 및 반도체"
                    width="371"
                    height="220"
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
