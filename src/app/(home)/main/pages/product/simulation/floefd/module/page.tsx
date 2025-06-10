"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Module() {
  const { imageSrc1, error } = useFetchCloudinaryImages([
    "floefd7_yj4o5q",
    "floefd8_eaa4cm",
    "floefd9_seid1k",
    "floefd10_li79io",
    "floefd11_m6yzav",
    "floefd12_rwxcrd",
    "floefd13_a73qkd",
    "floefd14_o8o5e3",
    "floefd15_qdnwya",
    "floefd16_fy6p7n",
    "floefd17_lnlmsr",
    "floefd18_kwrtsm",
    "floefd19_yqm9es",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h2>Simcenter</h2>
          <h1>FLOEFD</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>FLOEFD 모듈</h2>
          <div className={styles.imgP1}>
            <div className={styles.des1}>
              <h3>Electronics Cooling</h3>
              <p>
                Simcenter FLOEFD Electronics Cooling 모듈을 사용하면 Compact한
                모델로 전자 장치의 열 동작을 정확하게 예측할 수 있으며, 전자
                장치의 긴 제품 수명을 달성할 수 있도록 전자 냉각 시스템 성능을
                검증할 수 있으며, 전자 장치의 냉각 방법을 효율적으로 탐색하고
                복잡한 전자 어셈블리에서 Joule heating 분석을 수행할 수
                있습니다.
              </p>
              <p>
                <strong>
                  Simcenter FLOEFD Electronics Cooling Module 을 사용하면 아래와
                  같은 장점을 얻을 수 있습니다
                </strong>
              </p>
              <ul>
                <li>
                  Compact한 모델을 사용하여 전자기기의 열적 거동을 정확하게
                  예측할 수 있습니다.
                </li>
                <li>
                  제품 수명 연장을 위한 전자 냉각 시스템 성능을 검증할 수
                  있습니다.
                </li>
                <li>전자 장치의 냉각 방법을 효율적으로 탐색합니다.</li>
                <li>
                  복잡한 전자 장치 어셈블리를 대상으로 Joule heating 분석이
                  가능합니다.
                </li>
              </ul>
            </div>
            <div className={styles.img1}>
              {imageSrc1[0] && (
                <Image
                  src={imageSrc1[0]}
                  alt="전자기기 및 반도체"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              )}
            </div>
          </div>
          <div className={styles.imgP2}>
            <div className={styles.des2}>
              <h3>EDA Bridge</h3>
              <p>
                Simcenter FLOEFD EDA Bridge Module 는 자체 또는 더 큰 시스템
                레벨 어셈블리의 일부로 열 분석을 위해 재료 및 IC(Integrated
                Circuit) 열 특성을 가진 상세한 PCB를 Simcenter FLOEFD로 가져올
                수 있습니다.
              </p>
              <p>
                <strong>
                  Simcenter FLOEFD EDA Bridge Module 을 사용하면 아래와 같은
                  장점을 얻을 수 있습니다.
                </strong>
              </p>
              <ul>
                <li>
                  불러온 상세 PCB 설계 및 IC 열 특성을 열 분석에 사용하여 시간과
                  노력을 절약합니다.
                </li>
                <li>
                  상세 PCB 데이터를 Simcenter FLOEFD로 신속하게 불러올 수
                  있습니다.
                </li>
                <li>
                  전자 장치의 보다 상세한 열 모델링으로 분석 정확도를
                  향상시킵니다.
                </li>
              </ul>
            </div>
            <div className={styles.img2}>
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
          <div className={styles.imgP1}>
            <div className={styles.des1}>
              <h3>LED, Lighting</h3>
              <p>
                Simcenter FLOEFD LED module 은 조명 엔지니어 및 설계자에게
                중요한 분석 기능을 제공합니다.
              </p>
              <p>
                <strong>
                  Simcenter FLOEFD LED module 을 사용하면 아래와 같은 장점을
                  얻을 수 있습니다.
                </strong>
              </p>
              <ul>
                <li>
                  LED 의 정확한 작동 광 출력(hot lumens)과 온도를 예측할 수
                  있습니다.
                </li>
                <li>
                  스펙트럼 흡수, 반사, 굴절 및 산란 특성을 가진 고급
                  몬테카를로(Monte Carlo) 방사선 모델을 사용하여 매우 정확한
                  방사선 시뮬레이션을 수행할 수 있습니다.
                </li>
                <li>
                  LED 가 공급업체의 사양 범위 내에서 작동하도록 하고, 신뢰성
                  문제와 보증 리콜 비용이 발생하지 않도록 합니다.
                </li>
                <li>
                  트랜지언트 필름(transient film) 응축/결빙(condensation/ icing)
                  시뮬레이션을 용이하게 합니다.
                </li>
                <li>
                  Simcenter T3STER 및 Simcenter TERALED에서 자세한 열 및 광도
                  측정 모델을 가져올 수 있습니다.
                </li>
                <li>
                  LED 및 Simcenter FLOEFD에 대한 순방향 전류를 지정하여 사용자가
                  올바른 열 가열 전력을 계산하고 그에 따라 올바른 작동 온도를
                  계산할 수 있습니다.
                </li>
              </ul>
            </div>
            <div className={styles.img1}>
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
          </div>
          <div className={styles.imgP2}>
            <div className={styles.des2}>
              <h3>AutoCalibration</h3>
              <p>
                Simcenter FLOEFD T3STER Automatic Calibration module 은 T3STER
                장비를 통한 자동 보정 모듈로, 전자 냉각 study 의 정확도를
                향상시킵니다.
              </p>
              <p>
                <strong>
                  Simcenter FLOEFD T3STER Automatic Calibration module 을
                  사용하면 아래와 같은 장점을 얻을 수 있습니다.
                </strong>
              </p>
              <ul>
                <li>데이터 정확도를 높일 수 있습니다.</li>
                <li>
                  측정된 데이터에 적합한 패키지 치수와 재료 특성을 검색할 수
                  있습니다.
                </li>
                <li>정확한 시뮬레이션을 위해 보정된 CFD 모델을 제공합니다.</li>
              </ul>
            </div>
            <div className={styles.img2}>
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
          </div>
          <div className={styles.grid}>
            <div className={styles.gridImgP}>
              <h3>HVAC</h3>
              <div className={styles.gridImg}>
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
              <div className={styles.gridDes}>
                <p>
                  Simcenter FLOEFD는 Navier-Stokes 방정식을 푸는 데 사용할 수
                  있습니다. 층류 흐름과 난류 흐름을 모두 예측할 수 있습니다.
                  층류 및 난류 흐름을 모두 설명하기 위해 하나의 방정식 시스템을
                  사용합니다. 또한, 층에서 난류 상태로 전환하거나 그 반대로
                  전환할 수 있습니다.
                </p>
                <p>
                  <strong>
                    Simcenter FLOEFD HVAC Module 을 사용하면 아래와 같은 장점을
                    얻을 수 있습니다.
                  </strong>
                </p>
                <ul>
                  <li>열적 쾌적성을 평가할 수 있습니다.</li>
                  <li>공조(HVAC) 시스템 효율성를 평가할 수 있습니다.</li>
                  <li>엄격한 환경 규정을 준수하도록 설계할 수 있습니다.</li>
                </ul>
              </div>
            </div>
            <div className={styles.gridImgP}>
              <h3>Advanced</h3>
              <div className={styles.gridImg}>
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
              <div className={styles.gridDes}>
                <p>
                  Simcenter FLOEFD Advanced 모듈은 특수 분석을 위한 추가 기능을
                  제공합니다. 이를 통해 보다 현실적인 시뮬레이션을 만들고 보다
                  정확한 결과를 얻을 수 있으며, 연소 및 극초음속 분석 영역에서
                  더 많은 기능에 액세스하고 선호하는 CAD 플랫폼에서 작업할 수
                  있습니다.
                </p>
                <p>
                  <strong>
                    Simcenter FLOEFD Advanced module 을 사용하면 아래와 같은
                    장점을 얻을 수 있습니다.
                  </strong>
                </p>
                <ul>
                  <li>특수 물리 기능에 대한 접근권한을 가질 수 있습니다.</li>
                  <li>
                    현실적인 시뮬레이션을 구현할 수 있으며, 이를 통해 더 정확한
                    결과를 얻을 수 있습니다.
                  </li>
                  <li>
                    연소 및 극초음속 분석 분야에서 더 많은 기능을 사용할 수
                    있습니다.
                  </li>
                  <li>원하는 CAD 툴로 작업이 가능합니다.</li>
                </ul>
              </div>
            </div>
            <div className={styles.gridImgP}>
              <h3>Power Electrification</h3>
              <div className={styles.gridImg}>
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
              <div className={styles.gridDes}>
                <p>
                  Simcenter FLOEFD power electrification module 는 배터리 셀
                  모델링의 정확도를 향상시킵니다.
                </p>
                <p>
                  <strong>
                    Simcenter FLOEFD power electrification module 를 사용하면
                    아래와 같은 장점을 얻을 수 있습니다.
                  </strong>
                </p>
                <ul>
                  <li>배터리 셀 모델링 정확도를 향상시킬 수 있습니다.</li>
                  <li>
                    충전/방전 전력 및 적용된 셀 특성에 따라 배터리 셀의 열
                    방출률을 구할 수 있습니다.
                  </li>
                  <li>
                    배터리 셀의 충전 상태, 전압, 전류, 온도 분포를 예측할 수
                    있습니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.gridImgP}>
              <h3>Ext. Design Exploration</h3>
              <div className={styles.gridImg}>
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
              <div className={styles.gridDes}>
                <p>
                  Simcenter FLOEFD Design Exploration 모듈은 파라메트릭 연구 및
                  설계 비교 기능을 확장하여 설계 탐색을 통해 혁신을 주도하고
                  문제 해결 및 설계 평가를 넘어 더 나은 설계를 더 빠르게 발견할
                  수 있습니다.
                </p>
                <p>
                  <strong>
                    Simcenter FLOEFD Design Exploration Module 을 사용하면
                    아래와 같은 장점을 얻을 수 있습니다.
                  </strong>
                </p>
                <ul>
                  <li>
                    설계 탐색 및 최적화를 통해 CFD 기능을 확장 시킬 수 있습니다.
                  </li>
                  <li>
                    더 나은 설계를 더 빠르게 발견하고, 시뮬레이션 시간 및 비용을
                    최소화 할 수 있습니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.gridImgP}>
              <h3>Structural</h3>
              <div className={styles.gridImg}>
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
              <div className={styles.gridDes}>
                <p>
                  Simcenter FLOEFD Structural 모듈은 하중에 대한 구조의 응답을
                  예측하는 기능을 제공하며, 해석 범위로 정적선형해석(힘 또는
                  압력하중, 열팽창 및 강제변형에 대한 정적 응력, 변형량), 모달
                  주파수 해석 및 좌굴(고유값 결정) 해석이 가능합니다. 정적
                  유형을 선택하면 FSI(열-유체-구조 상호작용) 해석이 가능합니다.
                </p>
                <p>
                  <strong>
                    Simcenter FLOEFD Structural Module 을 사용하면 아래와 같은
                    장점을 얻을 수 있습니다.
                  </strong>
                </p>
                <ul>
                  <li>
                    구조 해석과 CFD를 직접 통합하면 CFD 결과를 자동으로 사용하여
                    구조 해석을 위한 복잡한 시뮬레이션을 수행할 수 있습니다.
                  </li>
                  <li>
                    CFD 결과를 외부 FEA(유한 요소 해석) 소프트웨어로 추가로
                    변환할 필요가 없습니다.{" "}
                  </li>
                  <li>
                    Simcenter FLOEFD Structural 프로젝트는 Simcenter FLOEFD에서
                    사용할 수 없는 복잡한 구조 해석의 추가 시뮬레이션을 위해
                    Simcenter Nastran 프로젝트로 저장할 수 있습니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.gridImgP}>
              <h3>Electromagnetics(EMAG)</h3>
              <div className={styles.gridImg}>
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
              <div className={styles.gridDes}>
                <p>
                  Simcenter FLOEFD Electromagnetics(EMAG) module 은 Maxwell
                  방정식의 정확하고 빠른 해석을 위해 유한요소 기법을 사용하여
                  전자기 필드를 시뮬레이션 할 수 있습니다. 해석 범위는
                  시간-조화(단일 주파수 기반 해석) 및 시간 의존 전자기 필드이며,
                  시간 조화 유형은 정상상태 및 과도(시간 의존)해석에 모두 사용할
                  수 있습니다.
                </p>
                <p>
                  <strong>
                    Simcenter FLOEFD Electromagnetics(EMAG) module 을 사용하면
                    아래와 같은 장점을 얻을 수 있습니다.
                  </strong>
                </p>
                <ul>
                  <li>
                    근접성, 표피 효과 등과 같은 AC 및 EM 현상으로 인한 저항 및
                    철(코어) 손실을 고려하여 열 시뮬레이션의 정확도를 높일 수
                    있습니다.
                  </li>
                  <li>
                    영구 자석뿐만 아니라 고조파(정현파) 시뮬레이션이
                    가능해집니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.gridImgP}>
              <h3>BCI-ROM + Package Creator</h3>
              <div className={styles.gridImg}>
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
              <div className={styles.gridDes}>
                <p>
                  Simcenter FLOEFD BCI-ROM + Package Creator 모듈은 BCI-ROM(경계
                  조건 독립적 감소 차수 모델)을 사용하여 과도 열 시뮬레이션을
                  가속화하고 Package Creator를 사용하여 전자 패키지의 열 모델을
                  손쉽게 생성합니다.
                </p>
                <p>
                  <strong>
                    Simcenter FLOEFD BCI-ROM + Package Creator Module 을
                    사용하면 아래와 같은 장점을 얻을 수 있습니다.
                  </strong>
                </p>
                <ul>
                  <li>
                    전체 3D 상세 모델을 손실 없이 해결하는 것보다 최대 40,000배
                    더 빠릅니다.
                  </li>
                  <li>
                    정확한 3D 모델을 모든 환경에서 사용할 수 있습니다. (사용자
                    정의 – 열 전달 계수 범위)
                  </li>
                  <li>
                    전자제품 열 주문 감소(Reduce Order, 정확하고 빠른 독립형
                    솔루션, 전열 회로 시뮬레이션 또는 시스템 시뮬레이션 모델링을
                    지원하기 위해 생성된 모델)
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.gridImgP}>
              <h3>Ultra Package</h3>
              <div className={styles.gridImg}>
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
              <div className={styles.gridDes}>
                <p>
                  Ultra Package 는 Embedded HEEDS 및 Electromagnarics 를 제외한
                  다른 모듈에서 사용할 수 있는 기능 및 하나의 추가 솔버
                  라이선스를 제공합니다.
                </p>
              </div>
            </div>
            <div className={styles.gridImgP}>
              <h3>EV Package</h3>
              <div className={styles.gridImg}>
                {imageSrc1[12] && (
                  <Image
                    src={imageSrc1[12]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
              </div>
              <div className={styles.gridDes}>
                <p>
                  EV Package 는 “Electronics Cooling” + “Power Elecfication” +
                  “Structural” +<br />
                  “Electromagnetics” 모듈들이 결합된 기능을 제공하며, 이
                  기능들은 전자제품, 전원모듈(IGBT,MOSFET 등) 과 E-Powertrain
                  등의
                  열-전기-자기-구조-유체(Thermal-Electrical-Emag-Structural-Flow)
                  다중물리 분석이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
