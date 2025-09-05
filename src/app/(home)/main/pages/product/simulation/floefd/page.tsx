"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Floefd() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "floefd1_kpt5mp",
    "floefd2_iqhxid",
    "floefd3_ghar8e",
    "floefd4_xaps5n",
    "floefd5_a66nyx",
    "floefd6_wewqqb",
    "floefd7_yj4o5q",
    "floefd8_eaa4cm",
    "floefd9_seid1k",
    "floefd10_li79io",
    "nfloefd1_zpt8uc",
    "nfloefd2_yizql9",
    "nfloefd3_xfgdwu",
    "nfloefd4_pxb4va",
    "nfloefd5_odnd3r",
    "nfloefd6_ril1do",
    "nfloefd7_sx5ndy",
    "nfloefd8_v0hsss",
    "nfloefd9_agvldz",
    "nfloefd10_fghlni",
    "nfloefd11_skwsok",
    "nfloefd12_g3fot5",
    "nfloefd13_g8jqcp",
    "nfloefd14_lefpck",
    "nfloefd15_b8d9qm",
    "nfloefd16_ikssbt",
    "nfloefd17_ytiolr",
    "nfloefd18_gqgtao",
    "nfloefd19_hlwj6m",
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
          <div className={styles.firstWrapper}>
            <div className={styles.firstContent}>
              <h2>Simcenter</h2>
              <h1>FLOEFD</h1>
              <div className={styles.firstImgP}>
                <div className={styles.firstImg}>
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
                <div className={styles.firstDes}>
                  <p>
                    Simcenter FLOEFD 는 지멘스 NX, Solid Edge, CATIA V5,
                    Creo,SolidWorks와 같은 기계설계 3D CAD에 탑재된 CFD 해석
                    툴입니다.
                  </p>
                  <p>
                    Simcenter FLOEFD 는 MCAD 환경에서 실행되기 때문에 3DCAD
                    데이터의 전환 또는 이동 없이 곧바로 해석을 진행할
                    수있습니다.Simcenter FLOEFD 는 몇 번의 클릭만으로 복잡한
                    형상에 대한유동해석을 쉽고 빠르게 수행할 수 있습니다.
                    설계로부터 성능을평가하고 재설계하는 반복 시간을 크게 단축
                    시켜줍니다.
                  </p>
                  <p>FLOEFD 2506 업데이트 내용이 추가되었습니다.</p>
                  <button>구매 문의</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondWrapper}>
            <div className={styles.secondContent}>
              <h2>주요 특징</h2>
              <div className={styles.secondDes}>
                <div>
                  <h3>01</h3>
                  <p>
                    3D CAD data 정리 신속한 진행 및 3D CAD에서 CFD SW로의
                    Geometry transfer 가 불필요.계산공간 내 유동영역 자동
                    검출.벽면 근처 조밀한 격자 불필요 (Integral Boundary Layer
                    Model 사용).수치계산 - 이론식 - 실험에 의한 경험식 등의
                    조합을 사용하여 CFD 해석을 수행.(격자 등의 문제로 수치 해를
                    구하기 곤란한 곳에, 경험식 /이론식 자동 적용하여 해를 구할
                    수 있음.)
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    CFD 해석에 대한 전문지식을 요구하지 않음. (3D CAD 설계자들에
                    유리)3D CAD 로 설계와 CFD 해석을 수행, 설계자들은 익숙한
                    환경에서 쉽게 사용이 가능함.수치계산-이론식-경험식 등의 자동
                    사용으로 수렴성이 매우 뛰어남.자동으로 육면체 격자 제작하여
                    해석. 사용자 필요시 수동격자 제작 가능합니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    2015년 일본자동차학회 상용 CFD SW 자동차 외부유동 해석
                    블라인드 테스트 시험결과 비교,FLOEFD 는 STAR-CCM+와 함께
                    가장 정확한 CFD해석 SW임이 확인 되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Simcenter FLOEFD를 사용해야 할까요?</h2>
              <div className={styles.thirdDes}>
                <div>
                  <p>
                    Simcenter FLOEFD는 설계자와 분석가 등을 위해 다중 물리
                    기능을 갖춘 완전한 CAD 임베디드 CFD 소프트웨어입니다. 유체
                    흐름 시뮬레이션 및 열 해석을 프런트로드하고 기본 CAD
                    지오메트리를 사용하면 일반적인 CFD 접근 방식에 비해 개발
                    시간을 최대 65~75%까지 단축할 수 있습니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      프런트로드 CFD 시뮬레이션을 통한 개발 시간 단축
                    </strong>{" "}
                    <br />
                    Simcenter FLOEFD를 사용하면 설계 엔지니어가 설계 프로세스
                    초기에 시뮬레이션을 수행할 수 있으며, 이 시점에 문제를 식별
                    및 수정하거나 개선 사항을 탐색하는 것이 비용면에서 더
                    효율적입니다. CAD에 통합되면 생산성이 2배에서 40배까지
                    향상되는 것으로 나타납니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>설계자를 위한 직관적인 CFD 인터페이스 활용</strong>{" "}
                    <br />
                    설계 엔지니어는 Simcenter FLOEFD CAD 임베디드 인터페이스,
                    안내식 시뮬레이션 설정 및 실행, 지능형 자동화 기술, 간단한
                    결과 보기를 통해 시뮬레이션을 수행할 수 있습니다. 설계
                    성능을 조기에 탐색할 수 있으므로 기존의 장벽을 극복하지
                    않고도 정보에 입각한 의사 결정을 내릴 수 있습니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      기본 CAD 지오메트리에서 직접 CFD를 수행하고 CFD 오버헤드
                      제거
                    </strong>
                    <br />
                    도구 간 지오메트리 변환으로 인해 발생하는 지연을 없애고 CFD
                    해석을 위한 CAD 형상 준비의 복잡성을 극복할 수 있습니다.
                    Simcenter FLOEFD는 기본 지오메트리를 직접 사용하므로 성능을
                    탐색하거나 모델의 변경 사항을 평가할 때 CAD 모델이 동시에
                    변경됩니다. ​
                  </p>
                </div>
                <div>
                  <p>
                    강력한 자동 메싱과 모든 품질의 CAD 지오메트리를 처리할 수
                    있는 고유한 SmartCell 기술의 핵심 강점을 갖추고 있습니다.
                    이러한 강점은 어셈블리의 작고 좁은 간격과 표면 불일치를
                    처리하는 데 도움이 되는데, 기존 CFD 도구에서는 이 과정을
                    해결하느라 긴 지연이 발생하는 경우가 많습니다. 이는 CAD
                    지오메트리의 자동 밀봉 및 누출 식별과 같은 전처리를 위한
                    지능형 자동화에 의해 보완됩니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      시뮬레이션 기반 설계 사용 – 탐색, 비교 및 최적화
                    </strong>
                    <br />
                    파라메트릭 스터디 및 설계 탐색 기능을 활용하여 가용한 시간
                    내에 더 많은 설계 옵션을 평가할 수 있습니다. {"what if"}
                    시나리오를 평가하여 다양한 조건에서 제품 성능과 신뢰성을
                    보장합니다.
                  </p>
                </div>
                <div>
                  <p>
                    이 소프트웨어를 사용하면 CFD 결과 시각화, 플롯 및 표 형식
                    결과와 나란히 두고 설계를 쉽게 비교할 수 있으며, 몇 번의
                    클릭만으로 보고서도 생성할 수 있습니다. 시뮬레이션을
                    사용하여 설계를 최적화하면 CAD 모델을 다른 엔지니어링 부서에
                    직접 전달할 수 있습니다.
                  </p>
                </div>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <h3>주요산업 분야</h3>
                    <div>
                      <ul>
                        <li>
                          정상상태 및 과도상태 해석 (Steady state and transient
                          analysis)
                        </li>
                        <li>
                          전도, 대류, 복사 열전달 해석 (Conduction, convection
                          and radiation)
                        </li>
                        <li>
                          조립제품 및 단품 등에 대한 thermal coupling 해석
                        </li>
                        <li>
                          CFD 해석 결과와 구조해석 SW와의 data interface를 통한
                          열응력, 열변형 등에 대한 구조 안정성 해석
                        </li>
                      </ul>
                      <p>활용산업분야:</p>
                      <ul>
                        <li>
                          반도체, 디스플레이, 모바일기기 등의 전기 및 전자 산업
                        </li>
                        <li>산업용 기기 및 설비, 시스템 산업</li>
                        <li>항공, 우주, 방산 분야</li>
                        <li>
                          자동차 전장부품, 배터리, 공조시스템, 엔진 냉각수 유로
                          설계, In-wheel Motor 등 관련 산업
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fourWrapper}>
            <div className={styles.fourContent}>
              <h2>유동해석 주요기능</h2>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>CAD 임베디드 CFD 시뮬레이션</h3>
                  <p>
                    엔지니어는 CAD 임베디드 CFD 시뮬레이션 소프트웨어를 통해 CAD
                    설계 환경에서 유체 흐름 시뮬레이션 및 열전달 해석을 수행할
                    수 있습니다. 직관적인 인터페이스를 가지고 있으며, 무엇보다도
                    CAD 지오메트리를 직접 사용합니다. 이를 통해 CAD 데이터
                    변환에 드는 시간 오버헤드를 없앨 수 있습니다. 또한
                    엔지니어는 여러 설계 연구를 수행하고 결과를 평가하여
                    지오메트리 또는 작동 경계 조건을 수정할 경우 성능에 어떤
                    영향을 미치는지 확인할 수 있습니다. 이렇게 하면 시뮬레이션
                    결과를 개발 초기에 사용할 수 있어 의사 결정이 개선되며 다른
                    CAD 기반 엔지니어링 기능과 보다 원활한 커뮤니케이션이
                    가능해집니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
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
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>자동화된 메시</h3>
                  <p>
                    Simcenter FLOEFD 자동 유체 체적 감지 및 자동 메싱 기법은 CAD
                    지오메트리와 직접 연동되도록 설계되었습니다. 모델을
                    단순화하지 않고도 복잡하거나 가변적인 품질의 지오메트리를
                    처리할 수 있습니다. SmartCells 기술은 Simcenter FLOEFD의
                    견고한 데카르트 침수 경계 그리드 방법을 통한 효율적인 자동
                    메싱의 핵심입니다. SmartCell은 단일 셀 내에서 수많은 고체 및
                    유체 영역을 정확하게 분석하여 계산을 위한 여러 제어 볼륨으로
                    세분화할 수 있습니다. 이는 간섭이 있는 지오메트리 또는 매우
                    적은 볼륨과 같은 까다로운 조건을 자동으로 처리하는 등 복잡한
                    CAD 모델의 메싱에 매우 중요합니다. Simcenter FLOEFD는
                    지오메트리 특징형상을 기반으로 자동 메시 미세 조정을
                    적용하며, 흐름 및 열 구배가 더 높은 영역의 효율적인 메시
                    해상도를 위해 솔루션 적응형 미세 조정을 활용할 수 있습니다.
                    로컬 메싱에 사용할 수 있는 옵션과 메시를 보다 정밀하게
                    제어하려는 엔지니어를 위한 수동 제어가 마련되어 있습니다.
                    <br />
                    Simcenter FLOEFD 메싱 및 솔버 기술은 CFD 문제를
                    시뮬레이션하기 위한 고전적인 3D 유한 체적 수치 접근법과
                    경험적 및 해석적 방법을 고유하게 조합합니다. 비교적 거친
                    메시를 빠르고 쉽게 생성할 수 있어 일반적인 CFD 소프트웨어에
                    비해 매우 효율적이고 안정적으로 해석할 수 있으며 상대적으로
                    높은 정확도를 유지합니다.
                    <br />
                    Simcenter FLOEFD를 채택하면 메싱에 드는 시간이 며칠에서 몇
                    시간으로, 몇 시간에서 몇 분으로 단계적으로 변화하는 경우가
                    많습니다. CAD 임베디드 접근 방식의 혁신적인 메싱 기술을
                    활용하면 설계 엔지니어와 비전문가가 설계 프로세스 초기에 CFD
                    해석을 안정적으로 수행할 수 있습니다. 또한 숙련된 분석가가
                    광범위한 일반적인 CFD 문제를 해결할 수 있도록 빠르고
                    효율적인 대안 접근 방식도 제공합니다.
                  </p>
                </div>
                <div className={styles.fourImg2}>
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
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>파라메트릭 스터디</h3>
                  <p>
                    Simcenter FLOEFD는 매우 유능하고 직관적인 파라메트릭 스터디
                    기능을 통합합니다. 이를 사용하여 모델 지오메트리 또는 다양한
                    운영 시나리오의 변경 사항을 실험 설계 연구까지 탐색해
                    보십시오.
                    <br />
                    Simcenter FLOEFD의 파라메트릭 스터디 기능과 결합된 비교
                    구성을 통해 엔지니어는 지오메트리 및 경계 조건의 변화가
                    성능에 미치는 영향을 보다 쉽게 이해할 수 있습니다. 사용자는
                    수치, 그래프, 시각화된 결과 및 플롯으로 결과를 비교할 수
                    있습니다.
                    <br />
                    설계 탐색을 위한 세 가지 기본 방법은 다음과 같습니다. <br />
                    {"what-if"} 스터디는 일련의 변경된 매개변수를 사용하여 결과
                    설계를 탐색하고, 비교 도구를 사용하여 최상의 솔루션을 직접
                    찾습니다.
                    <br />
                    목표 기반 최적화는 단일 입력 변수에 대한 다양한 변동을
                    사용하여 최상의 설계를 찾습니다.
                    <br />
                    실험 계획법(DOE)을 사용하면 여러 설계 변수에 대한 변형
                    범위를 설정한 다음 설계점의 행렬을 풀 수 있습니다. 그런 다음
                    반응 곡면 보간법을 사용하면 최적의 설계를 찾을 수 있습니다
                    <br />
                    또한 엔지니어가 스마트하고 효율적인 검색 및 자동화를
                    사용하고 기본 독점 Sherpa 알고리즘을 활용하여 설계 공간
                    탐색을 수행할 수 있도록 지원하는 Simcenter HEEDS 플러그인도
                    제공됩니다. Simcenter HEEDS를 활용하면 엔지니어는 기존
                    최적화 접근 방식보다 더 빠르게 성능 요구사항을 충족하거나
                    능가하는 설계 개념을 찾을 수 있습니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
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
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>LED 열 시뮬레이션</h3>
                  <p>
                    올바른 조명 성능과 신뢰성을 보장하려면 LED 열 관리가
                    중요합니다. Simcenter FLOEFD CAD 임베디드 CFD 소프트웨어를
                    사용하면 조명 제품 설계 엔지니어가 개발 초기와 개발 과정
                    전반에 걸쳐 조명기구 열 설계를 살펴보고 재스핀을 방지할 수
                    있습니다.
                    <br />
                    Simcenter FLOEFD LED 모듈의 특정 기능에는 LED의 결합된
                    열-전기 및 광도 모델링과 자체 LED 모델을 가져올 수 있는
                    기능이 포함됩니다. LED 컴포넌트의 열 동작을 자세히
                    모델링하여 순방향 전류로 전력을 공급받을 때의 정확한 LED
                    접합 온도와 조명기구에 설치된 LED의 작동 광 출력(고온
                    루멘)을 예측할 수 있습니다.
                    <br />
                    특히 Simcenter FLOEFD 시뮬레이션은 Simcenter Micred T3STER의
                    RC 래더 소형 열 모델에 대한 측정 데이터 및 시스템 수준
                    연구에 사용할 수 있는 최고 정확도의 테스트 데이터 기반 LED
                    모델을 제공하는 Simcenter Micred LED Tester의 광학 특성화
                    데이터와 결합할 수 있습니다.
                  </p>
                  <p>
                    이 LED 모듈은 유리와 같은 반투명 고체에서 방사선의 흡수 및
                    산란을 시뮬레이션하고 파장 의존성에 대한 굴절 및 반사 효과를
                    고려하기 위한 몬테카를로 방사선 모델링을 지원합니다. 자동차
                    조명 및 기타 까다로운 응용 분야의 경우 엔지니어는 응결
                    모델링을 활용해 박막 응결, 증발, 결빙 및 습도 변화가 수분
                    흡수에 미치는 영향을 모델링할 수 있습니다.
                  </p>
                </div>
                <div className={styles.fourImg2}>
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
              </div>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>CAD의 전자 열 및 열 기계 해석</h3>
                  <p>
                    Simcenter FLOEFD를 사용하면 열 엔지니어와 설계자는 CAD
                    환경에서 전자 냉각 시뮬레이션부터 열 기계적 응력 해석에
                    이르기까지 열 설계를 가속화할 수 있습니다.
                    <br />
                    주요 기능으로는 단순하고 상세한(계층화된) 것부터 명시적인
                    구리 트레이스에 이르기까지 인쇄 회로 기판(PCB)의 열 해석
                    설계 단계에 적합한 옵션이 포함됩니다. 계산 효율적인 모델링
                    네트워크 어셈블리 접근 방식인 SmartPCB 옵션을 사용하면 열
                    상호 시뮬레이션 작업 및 열 기계적 응력 해석을 지원하는 열
                    모델링의 정확도를 포기할 필요가 없습니다. Simcenter FLOEFD
                    EDA Bridge는 PCB 데이터를 모든 주요 EDA 소프트웨어 파일
                    형식으로 손쉽게 가져올 수 있도록 지원합니다. 패키지 모델링
                    옵션에는 2개의 레지스터, 네트워크 어셈블리 및 세부 모델이
                    포함됩니다. Package Creator 유틸리티를 사용하면 단 몇 분
                    안에 모든 내부 기하학적 요소를 포함하여 만드는 것도
                    가능합니다.
                    <br />
                    추가 기능에는 최고의 정확도를 달성하기 위한 천이 모델링 및
                    측정 보정(Simcenter Micred T3STER 사용)이 포함됩니다. 또한
                    BCI-ROM 기술을 통해 전열 회로 시뮬레이션 및 시스템
                    시뮬레이션 도구에 사용할 수 있도록 3D 해석에서 차수 감소
                    모델을 생성할 수도 있습니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
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
            </div>
          </div>
          <div className={styles.fiveWrapper}>
            <div className={styles.fiveContent}>
              <div className={styles.fiveHeader}>
                <h2>주요 모듈</h2>
                <Link href="/main/pages/product/simulation/floefd/module">
                  <button>자세히 보기</button>
                </Link>
              </div>
              <div className={styles.fiveImgGrid}>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
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
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>Electronics Cooling</h3>
                  </div>
                </div>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
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
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>EDA Bridge</h3>
                  </div>
                </div>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
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
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>LED, Lighting</h3>
                  </div>
                </div>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
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
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>AutoCalibration</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.newWrapper}>
            <div className={styles.newContent}>
              <h2>Simcenter FLOEFD 2506</h2>
              <div className={styles.newDescription}>
                <h3>1. Project Parameters from Components</h3>
                <div className={styles.newImg}>
                  {imageSrc1[10] && (
                    <Image
                      src={imageSrc1[10]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  하위 모델에서 정의한 프로젝트 파라미터를 상위 프로젝트로 전달
                  가능해졌습니다. 이는 부품 라이브러리를 기반으로 설계하는
                  환경에서 매우 유용하며, 전력 모듈처럼 반복적인 구조를 가진
                  컴포넌트를 설정할 때, 설정값을 한 번만 정의하면 여러 상위
                  모델에 자동 적용할 수 있습니다. <br />
                  <br /> 예시: 파워 모듈 내부 칩에서 정의한 열 발생률이나 재료
                  정보를 상위 모듈에서 재사용 → 모델링 생산성 향상
                </p>
              </div>
              <div className={styles.newDescription}>
                <h3>2. Smart PCB 기반 BCI-ROM 생성 지원</h3>
                <div className={styles.newImg}>
                  {imageSrc1[11] && (
                    <Image
                      src={imageSrc1[11]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  다층 구조의 PCB에서 Smart PCB 기반으로 저차원 Reduced Order
                  Model인 BCI-ROM을 생성 가능하며, 구성된 모델은 다양한 포맷으로
                  출력 가능합니다:
                </p>
                <ul>
                  <li>
                    FMU (Functional Mock-up Unit) – 시스템 수준 시뮬레이션에
                    활용
                  </li>
                  <li>VHDL-AMS – 회로 시뮬레이션에 적합</li>
                  <li>
                    행렬 형식 – 내부 계산용 유틸리티 호환 적용 사례: EV 파워
                    시스템에서 제어기 PCB를 ROM으로 모델링하여 전체 냉각
                    시스템에 통합 → 다물리 최적화 용이
                  </li>
                </ul>
              </div>
              <div className={styles.newDescription}>
                <h3>3. BCI-ROM 내 평균/최대 온도 자동 계산</h3>
                <div className={styles.newImg}>
                  {imageSrc1[12] && (
                    <Image
                      src={imageSrc1[12]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  복잡한 형상이나 다수의 바디로 구성된 부품(Busbar 등)에 대해,
                  평균 및 최대 온도를 자동으로 계산하는 기능이 도입되었습니다.
                  이전에는 각각의 온도 위치를 수동으로 지정하고 결과를 비교해야
                  했지만, 이제는 BCI-ROM 생성 시 자동 설정 가능하여 설계자는
                  목표 온도 관리나 과열 지점 식별을 빠르게 수행할 수 있습니다. →
                  초기 설계 검증과 시스템 수준 열 평가에 강력한 도구 제공
                </p>
              </div>
              <div className={styles.newDescription}>
                <h3>4. FMU as a Feature – 라이브러리 기반 FMU 관리 기능</h3>
                <div className={styles.newImg}>
                  {imageSrc1[13] && (
                    <Image
                      src={imageSrc1[13]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  FMU 컴포넌트를 부품처럼 정의하고, 이를 라이브러리에 저장하거나
                  프로젝트 내에서 반복 사용 가능해졌습니다. 복잡한 시스템에서
                  다수의 FMU를 사용할 때, 각 FMU의 입력 및 출력 파라미터를
                  하나의 인터페이스에서 직관적으로 제어할 수 있어 사용자 경험이
                  개선되었습니다. → 예시: 전원, 냉각, 제어 장치 등 개별
                  컴포넌트를 FMU로 구성하고, 시스템 통합 설계에 활용
                </p>
              </div>
              <div className={styles.newDescription}>
                <h3>
                  5. Structural Transient Analysis – CFD-열-구조 연성 과도 해석
                </h3>
                <div className={styles.newImg}>
                  {imageSrc1[14] && (
                    <Image
                      src={imageSrc1[14]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  Simcenter FLOEFD의 열·유체 해석 결과를 Simcenter NASTRAN 401
                  솔버에 전달하여 비선형 구조 해석을 동시에 수행할 수 있습니다.
                  이로써 시간에 따라 변화하는 온도 및 압력장이 구조적 응답에
                  어떻게 영향을 주는지를 하나의 프로젝트 내에서 분석
                  가능해졌습니다. 결과는 Transient Explorer를 통해 시각적으로
                  검토 가능하며, 반복 해석에 유용한 응력/변위 데이터도 함께
                  제공합니다. → 냉각 장치, 커넥터, 고전력 반도체 등 설계 시
                  열-기계 응답을 통합적으로 고려해야 하는 상황에 유용
                </p>
              </div>
              <div className={styles.newDescription}>
                <h3>6. Component Explorer – 상태 및 온도 컬럼 추가</h3>
                <div className={styles.newImg}>
                  {imageSrc1[15] && (
                    <Image
                      src={imageSrc1[15]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <div className={styles.newImg}>
                  {imageSrc1[16] && (
                    <Image
                      src={imageSrc1[16]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  모든 부품에 대해 CFD/전자기/구조 해석 상태를 통합적으로 제어할
                  수 있으며, 각 부품별 평균 온도를 테이블로 확인할 수 있습니다.
                  특히 Excel로 직접 내보내기 기능이 지원되어 보고서 작성, 품질
                  검토, 설계 비교 등의 생산성이 크게 향상됩니다. → 예시: 200개
                  이상의 칩 부품에 대해 온도 기준으로 정렬하고 고온 부품을 자동
                  마킹
                </p>
              </div>
              <div className={styles.newDescription}>
                <h3>7. EFDAPI 자동화 기능 통합</h3>
                <p className={styles.newDescriptionP}>
                  1. Face Selection by Normal: 부품 표면을 색상이나 이름이
                  아니라 법선 벡터 방향으로 선택 가능 → 대규모 2R 모델 구성 시
                  효율 향상
                </p>
                <div className={styles.newImg}>
                  {imageSrc1[17] && (
                    <Image
                      src={imageSrc1[17]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p className={styles.newDescriptionP}>
                  2. Access to Geometry Parameters: CAD 내 기하학적 변수(치수,
                  위치, 수식 등)에 대해 API를 통해 직접 접근 가능 → 최적화
                  도구와 연동한 자동 반복 시뮬레이션 가능 → 예시: 히트싱크 핀
                  간격을 외부 파라미터로 제어하며 최대 열 전달률을 찾는 알고리즘
                  자동화
                </p>
                <div className={styles.newImg}>
                  {imageSrc1[18] && (
                    <Image
                      src={imageSrc1[18]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.newDescription}>
                <h3>8. Smart PCB Import 속도 개선 (최대 40배)</h3>
                <div className={styles.newImg}>
                  {imageSrc1[19] && (
                    <Image
                      src={imageSrc1[19]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <div className={styles.newImg}>
                  {imageSrc1[20] && (
                    <Image
                      src={imageSrc1[20]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  EDA Bridge를 통한 Smart PCB 모델의 가져오기 시간이 최대
                  40배까지 빨라졌습니다. 실제 테스트에서 수백만 노드가 포함된
                  대형 PCB도 수분 내에 불러오기 가능하며, 초기에 PCB 변경이 잦은
                  설계 환경에서 큰 이점을 제공합니다. → 설계 초기 반복
                  시뮬레이션에서 대기 시간 단축, 생산성 증대
                </p>
              </div>
              <div className={styles.newDescription}>
                <h3>9. EDA Bridge: Place Library Component</h3>
                <div className={styles.newImg}>
                  {imageSrc1[21] && (
                    <Image
                      src={imageSrc1[21]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  EDA Bridge 유틸리티 내에서 라이브러리 부품을 그래픽 영역에
                  드래그 앤 드롭으로 직접 배치 가능하며, 원점 자동 배치 후 수동
                  이동 및 스크립트 기반 배치도 지원됩니다. → 설계자의 워크플로우
                  중심으로 빠르고 직관적인 구성 가능
                </p>
              </div>
              <div className={styles.newDescription}>
                <h3>10. XTXML Export 및 편집 기능 지원</h3>
                <div className={styles.newImg}>
                  {imageSrc1[22] && (
                    <Image
                      src={imageSrc1[22]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  FLOEFD 프로젝트 또는 Package Creator에서 구성한 부품 모델을
                  XTXML 형식으로 저장하고 수정 가능합니다. 기하학 정보, 재료
                  설정, 열원 정의 등 상세한 변경이 가능하며, 이후 라이브러리에
                  재등록 가능 → 부품 재사용 및 템플릿화, 외부 부품 제작기와의
                  연계 강화
                </p>
              </div>
              <div className={styles.newDescription}>
                <h3>11. CATIA 연동 기능 통합</h3>
                <p>
                  Simcenter FLOEFD for CATIA 환경에서 아래 기능들이 포함된
                  연계성이 강화되었습니다:
                </p>
                <li>CAD 내 부품 자동 교체 (Component Replacement)</li>
                <div className={styles.newImg}>
                  {imageSrc1[23] && (
                    <Image
                      src={imageSrc1[23]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <li>Body 또는 Part 형식으로 선택적 모델 불러오기</li>
                <div className={styles.newImg}>
                  {imageSrc1[24] && (
                    <Image
                      src={imageSrc1[24]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
                <li>
                  Flotherm XT 모델을 XTXML로 변환하여 FLOEFD에서 사용 가능 →
                  CATIA 사용자의 제품 설계 흐름을 CFD 분석과 직접 연계하는 통합
                  시뮬레이션 가능
                </li>
                <div className={styles.newImg}>
                  {imageSrc1[25] && (
                    <Image
                      src={imageSrc1[25]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.newDescription}>
                <h3>Simcenter FLOEFD 2506 – 기능 요약</h3>
                <div className={styles.newImgtable1}>
                  {imageSrc1[26] && (
                    <Image
                      src={imageSrc1[26]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.newDescription}>
                <h3>FLOEFD API (EFDAPI) 기능</h3>
                <div className={styles.newImgtable2}>
                  {imageSrc1[27] && (
                    <Image
                      src={imageSrc1[27]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.newDescription}>
                <h3>EDA / CAD 연계 기능</h3>
                <div className={styles.newImgtable3}>
                  {imageSrc1[28] && (
                    <Image
                      src={imageSrc1[28]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
