"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Starccm() {
  const { imageSrc1, error, loading } = useFetchCloudinaryImages([
    "starccm1_cvh5ey",
    "starccm2_ngt8f7",
    "starccm3_ra1sew",
    "starccm4_mwiwfq",
    "starccm5_uskdyb",
    "starccmN2_htc0f7",
    "starccmN8_p9skpt",
    "starccmN9-1_aqwki8",
    "starccmN9-2_jwva90",
    "starccmN9-3_mfy3lw",
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
              <h1>STAR-CCM+</h1>
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
                    제품의 실제 성능을 정확하게 예측하려면 기존 엔지니어링
                    분야의 물리 현상뿐만 아니라 제품이 작동하는 동안 성능에
                    영향을 미칠 수 있는 모든 물리현상을 묘사할 수 있어야 하며,
                    최적화된 제품을 설계하기 위해서는 “다중 파라메트릭 설계
                    변경”를 통해 성능이 어떻게 변경되는지 예측할 수 있어야
                    합니다.
                  </p>
                  <p>
                    Simcenter STAR-CCM+는 실제 제품이 작동되는 환경에 대한
                    시뮬레이션 및 설계 최적화를 지원하는 완전한 다중 물리
                    솔루션입니다.
                  </p>
                  <p>
                    Simcenter STAR-CCM+는 모든 엔지니어의 시뮬레이션 툴킷에
                    자동화된 설계 탐색 및 최적화를 제공하여, 엔지니어로가 단일
                    포인트 설계 시나리오에 초점을 맞추는 대신 전체 설계 공간을
                    효율적으로 탐색할 수 있도록 합니다.
                  </p>
                  <p>
                    Simcenter STAR-CCM+를 사용하여 얻은 추가적인 통찰력은 설계
                    프로세스를 효율적으로 만들며, 궁극적으로 고객의 기대치를
                    뛰어넘는 더욱 혁신적인 제품으로 이어집니다.
                  </p>
                  <p>STAR-CCM+ 2502 최신 업데이트 내용 추가했습니다.</p>
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
                    강력한 해석 기능 : 범용 코드로 다양한 유체 흐름 문제를
                    해결할 수 있습니다. 난류 모델, 열전달 모델, 반응 모델 등
                    다양한 물리 모델을 제공합니다. 고성능 컴퓨팅(HPC) 환경에서
                    효율적으로 실행할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    사용자 친화적인 인터페이스 : 직관적인 그래픽 사용자
                    인터페이스(GUI)를 제공하여 사용하기 쉽습니다. 다양한 자동화
                    기능을 제공하여 작업 시간을 단축할 수 있습니다. 사용자
                    정의가 가능하여 사용자의 요구에 맞게 설정할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    풍부한 교육 및 지원 자료 : 다양한 교육 과정, 온라인
                    튜토리얼, 문서 등을 제공하여 사용자들이 쉽게 학습할 수
                    있도록 지원합니다. <br />
                    사용자 포럼, 고객 지원 센터 등을 통해 사용자들이 서로
                    협력하고 도움을 받을 수 있도록 지원합니다.
                  </p>
                </div>
                <div>
                  <h3>04</h3>
                  <p>
                    다양한 산업 분야에서의 적용 : 자동차, 항공우주, 에너지,
                    전자, 건설 등 다양한 산업 분야에서 사용되고 있습니다. <br />
                    각 산업 분야의 특성을 반영한 전용 기능을 제공합니다.
                  </p>
                </div>
                <div>
                  <h3>05</h3>
                  <p>
                    지속적인 업데이트 : 지속적으로 새로운 기능과 개선 사항이
                    업데이트되고 있습니다.
                    <br /> 최신 기술을 반영하여 사용자들에게 최고의 성능을
                    제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Simcenter STAR-CCM+을 사용해야 할까요?</h2>
              <div className={styles.thirdDes}>
                <div>
                  <p>
                    Simcenter STAR-CCM+는 CFD 엔지니어가 복잡성을 모델링하고
                    실제 조건에서 작동하는 제품의 가능성을 살펴볼 수 있도록
                    지원하는 다중 물리 CFD(전산 유체 역학) 시뮬레이션
                    소프트웨어입니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>완전 통합된 사용자 인터페이스로 생산성 향상</strong>{" "}
                    <br />이 단일 통합 소프트웨어에서 원하는 모든 것을
                    찾으십시오. Simcenter STAR-CCM+에는 다중 물리 모델링, 데이터
                    분석 및 사실적 시각화, VR을 통한 메싱을 이용하는 사전 처리가
                    포함됩니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>가장 복잡한 분야에 대한 대응</strong> <br />
                    유체 흐름과 열 전달 이외의 물리학 방식도 다룰 수 있습니다.
                    완전 통합된 이 솔버 플랫폼을 사용하면 아무리 복잡한 다중
                    물리 CFD 시뮬레이션도 실행할 수 있습니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>CFD 준비 시간 단축</strong>
                    <br />
                    자동화된 메싱과 복잡한 형상의 사전 처리를 통해 시뮬레이션
                    준비 시간을 일주일에서 몇 시간으로 단축할 수 있습니다.
                    자동화된 CAD 정리, 곡면 래핑 및 자동화된 고충실도 메싱과
                    같은 최첨단 기술을 사용하면 더 나은 제품을 엔지니어링하는 데
                    시간을 할애할 수 있습니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      강력한 엔드 투 엔드, 코드 프리 워크플로 자동화 및 완전
                      내장형 설계 탐색 활용
                    </strong>
                    <br />
                    자동화된 시뮬레이션을 통해 처음부터 끝까지 CFD 기반 설계
                    탐색을 활용할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fourWrapper}>
            <div className={styles.fourContent}>
              <h2>산업별 적용</h2>
              <p>
                STAR-CCM+는 다양한 물리적 현상을 복합적으로 고려하는 현실적인
                시뮬레이션을 수행하기에 다양한 산업분야에 폭넓게 적용
                가능합니다.
              </p>
              <div className={styles.fiveImgGrid}>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveDes1}>
                    <h3>반도체, 디스플레이, 공정분석(PECVD, 에칭 등) 등</h3>
                  </div>
                  <div className={styles.fiveImg1}>
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
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveDes1}>
                    <h3>조선해양, 선박거동 LNG/수소 탱크 평가 등</h3>
                  </div>
                  <div className={styles.fiveImg1}>
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
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveDes1}>
                    <h3>
                      유체기계 (펌프, 팬, 압축기, 가스터빈 등) 성능 분석 등
                    </h3>
                  </div>
                  <div className={styles.fiveImg1}>
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
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveDes1}>
                    <h3>배터리, 전극/셀/팩/시스템 설계 평가 등</h3>
                  </div>
                  <div className={styles.fiveImg1}>
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
              </div>
            </div>
          </div>

          <div className={styles.newWrapper}>
            <div className={styles.newContent}>
              <h2>Simcenter STAR-CCM+ 2502</h2>
              <p>
                <strong>
                  Simcenter STAR-CCM+ 2502의 최신 업데이트는 다양한 분야에 걸쳐
                  중요한 개선 사항들이 있는데, <br /> 주요 내용은 시뮬레이션
                  속도 향상, 모델 정확도 개선, 다양한 엔지니어링 분야 간 통합성
                  향상입니다.
                </strong>
              </p>
              <p>주요 기능 개선 사항은 다음과 같습니다:</p>
              <ul>
                <li>움직이는 객체를 위한 효율적인 메시 모션 기술</li>
                <li>차량 열 관리 및 공력 시뮬레이션 속도 향상</li>
                <li>전자기 시뮬레이션의 데이터 교환 간소화</li>
                <li>배터리 열폭주, 부식, 비뉴턴 유체 거동의 정밀한 모델링</li>
              </ul>
              <p>
                이러한 기능은 개발 주기를 단축하고, 제품 성능을 최적화하며, 팀
                간 협업을 촉진하여 궁극적으로 프로젝트의 혁신과 효율성을
                높여줍니다.
              </p>
            </div>

            <div className={styles.newWrapperdes}>
              <div className={styles.newDescription}>
                <h3>복잡한 시스템의 모델링</h3>
                <h2>개선된 배터리 안전 시뮬레이션</h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/1o6OcUgozK9roDKxhVeUaeIy2mPaM398F/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  배터리 제조사는 단락이나 기타 고장 시 발생할 수 있는
                  열폭주(thermal runaway) 위험을 줄이는 것이 중요한 과제중의
                  하나인데, 기존 시뮬레이션 툴로 이러한 복잡한 화학 및 전기화학
                  반응을 정확히 예측하는 데 어려움이 있었습니다. 이를 해결하기
                  위해 &#39;균질 다상 복합 화학 모델(Homogeneous Multiphase
                  Complex Chemistry Model)&#39;이 추가되어, 열폭주 발생시
                  발생하는 기본 반응을 명시적으로 모델링할 수 있으며, 단락이나
                  못 관통 사고와 같은 상황에서의 전기화학적 및 열 반응을
                  정밀하게 시뮬레이션 가능하며, 이를 통해 엔지니어는 실제 물리
                  시험 없이도 안전한 배터리를 설계할 수 있어 사고 예방, 소비자
                  신뢰 확보, 엄격한 안전 규정 준수에 기여합니다.
                </p>
              </div>
              <div className={styles.newDescription}>
                <h2>고급 부식 해석</h2>
                <div className={styles.newImg1}>
                  {imageSrc1[5] && (
                    <Image
                      src={imageSrc1[5]}
                      alt="전자기기 및 반도체"
                      fill
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  부식은 여러 산업 분야에서 만연한 문제로, 상당한 유지보수
                  비용과 장비 가동 중단으로 이어집니다. 이에 “Corrdesa”의
                  Corrosion Djinn 데이터베이스를 통합하여 부식 해석 기능을
                  강화했습니다. 고품질 분극 데이터는 재료 계면에서의 전위 강하와
                  전류 사이의 관계를 설명하며, 전기역학적 전위 솔버에 중요한
                  입력값이 됩니다. 이 데이터는 실험을 통해 엄격히 도출되며,
                  다양한 환경 조건에서의 부식 예측이 가능합니다.
                </p>
              </div>
              <div className={styles.newDescription}>
                <h2>비뉴턴 유체의 정확한 모델링</h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/1quFIMdFa_QHHepc9p6iE_7JazxSmshCA/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  마요네즈처럼 전단력에 따라 고체처럼 또는 액체처럼 거동하는
                  복잡한 유체(비뉴턴 유체)는 예측이 어려운데, 최신버전에 항복
                  응력 임계값(Yield Stress Threshold)과 항복 점도(Yielding
                  Viscosity)를 포함하는 일반화된 비뉴턴 유체 모델을
                  추가했습니다. Cross 및 Carreau-Yasuda 법칙과 함께 이들 모델은
                  복잡한 빙엄(Bingham) 유체 거동을 이전보다 정확하게 재현할 수
                  있습니다.
                </p>
              </div>
              <div className={styles.newDescription}>
                <h2>균일한 스프레이를 위한 노즐 인젝터 모델</h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/1zV1yE477rPv608PRjkKoR2-A3slsmnr3/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  농업부터 자동차 산업까지, 균일한 분무는 제품 생산성, 페인트
                  품질 등에 큰 영향을 주는데, 이번에 추가된 평판형 팬 노즐
                  인젝터(Flat Fan Nozzle Injector) 모델은 얇고 부채꼴 모양의
                  액체 시트를 형성하는 인젝터 설정을 간소화합니다. LISA(선형
                  불안정 시트 분무, Linear Instability Sheet Atomization) 기법을
                  사용하여 정확한 결과를 제공하며, 농약 분사, 세척, 코팅, 냉각,
                  윤활, 표면 처리 등 다양한 분야에서 자원 절약과 비용 절감에
                  기여합니다.
                </p>
              </div>
            </div>

            <div className={styles.newWrapperdes}>
              <div className={styles.newDescription}>
                <h3>가능성 확장</h3>
                <h2>더 빠른 보조 기반 최적화</h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/1I-4qosAOi-XhNTb48Sg_T8kiDQ-vqLbE/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  Adjoint 최적화는 많은 시뮬레이션을 반복 수행해야 하므로 계산
                  자원이 많이 요구되는데, 이에 2차 이산화를 적용한 수반 솔버
                  알고리즘 개선을 통해 수렴 속도를 크게 향상시켰으며, 더 이상
                  1차 수반 솔버 이산화로 되돌릴 필요 없이 높은 정확도를 유지할
                  수 있습니다.
                </p>
              </div>
              <div className={styles.newDescription}>
                <h2>더 빠르게 움직이는 물체의 빠르고 확장 가능한 시뮬레이션</h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/16zLNx635Rk5p3I6iJZYqGJE4dVa1lZjB/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  페인트 디핑이나 병 충전과 같은 응용에서는 움직이는 고체가 유체
                  흐름에 영향을 미칩니다. 전통적인 오버셋 메싱 기법은 높은
                  정밀도를 제공하지만 계산 비용이 큽니다. 이번에 추가된 가상
                  바디 방법은 두 개의 메시를 사용할 필요가 없으며, 설정이
                  간단하고 비용 효율적인 대안이며, 좁은 틈이 있는 시나리오에서도
                  안정적인 해를 제공합니다.
                </p>
              </div>
              <div className={styles.newDescription}>
                <h2>GPU 및 CPU에서 더 빠른 슬라이딩 메시 시뮬레이션</h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/1Y4qtH_viBBTEeAnmXhd_HTyD0yA7RaMM/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  회전 바퀴가 포함된 외부 차량 공력 시뮬레이션처럼 강체 운동이
                  필요한 경우에 슬라이딩 메시 기법이 사용되는데, 기존의 방식은
                  인터페이스 교차가 매 시간 단계마다 수행되어 큰 자원 소모가
                  발생합니다.
                </p>
                <div className={styles.newImg1}>
                  {imageSrc1[6] && (
                    <Image
                      src={imageSrc1[6]}
                      alt="전자기기 및 반도체"
                      fill
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  이번에 추가된 &#39;경계 인터페이스 캐싱&#39; 전략을 사용하면
                  인터페이스 데이터를 한 번만 계산하고 이후 시간 단계에 재사용할
                  수 있으므로 GPU 및 CPU 모두에서 슬라이딩 메시 시뮬레이션
                  속도를 대폭 향상시킵니다.
                </p>
              </div>
              <div className={styles.newDescription}>
                <h2>GPU에서 차량 열 관리 시뮬레이션 가속화</h2>
                <div>
                  <Swiper
                    className={styles.swiper}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                  >
                    {[imageSrc1[7], imageSrc1[8], imageSrc1[9]].map(
                      (src, index) =>
                        src && (
                          <SwiperSlide key={index}>
                            <Image
                              src={src}
                              alt={`TOCS 이미지 ${index + 1}`}
                              width={910}
                              height={510}
                              style={{ objectFit: "cover" }}
                              unoptimized
                            />
                          </SwiperSlide>
                        ),
                    )}
                  </Swiper>
                </div>
                <p>
                  자동차 산업은 열을 효과적으로 관리하면서 에너지 효율을
                  향상시키는 것이 과제입니다. 최신 버전은 더 많은 GPU-기반
                  솔버를 지원하여 이 과제를 해결합니다. 새롭게 GPU에 최적화된
                  이중 스트림 열교환기 방법과 고체 쉘 영역용 에너지 솔버는 GPU의
                  가속 기능을 활용해 헤드램프의 복합열전달, 배터리 및 전자장비
                  냉각 해석도 빠르게 수행할 수 있으며, 정방향 등방성, 비등방성
                  및 횡등방성 재료 모델도 GPU 네이티브 방식으로 처리되어 일관된
                  결과와 계산 효율을 제공합니다.
                </p>
              </div>
              <div className={styles.newDescription}>
                <h2>고급 공력 및 터보기계 워크플로우의 자동화 기능 내장화</h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/1YBB-xWVr2D3pcMzTmidFUI1HKO3isV0w/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  고급 공력 해석 및 터보기계 시뮬레이션을 위한 워크플로우 자동화
                  기능이 기본 탑재되어, 복잡한 해석 과정을 더 쉽게 설정하고
                  실행할 수 있으며, 특히 반복적이고 계산량이 많은 워크플로우에서
                  생산성과 일관성을 높여줍니다.
                </p>
              </div>
            </div>

            <div className={styles.newWrapperdes}>
              <div className={styles.newDescription}>
                <h3>통합 유지</h3>
                <h2>
                  E-머신 설계를 위한 간소화된 데이터 교환: Simcenter Data
                  Exchange (SCDX)
                </h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/14S_vsea4HIBd2T14xuPjKJEXPLvYt_hF/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  전기 기계 설계자와 CFD 해석자가 서로 다른 데이터 형식 때문에
                  협업에 어려움을 겪는 경우가 많습니다. SCDX는 원활한 데이터
                  전송을 가능하게 하여 빠른 프로젝트 완료를 지원하고, 오류를
                  줄이며 효율적인 협업을 가능하게 합니다.
                </p>
              </div>
              <div className={styles.newDescription}>
                <h2>클라우드에서 즉시 실행되는 Simcenter X HPC</h2>
                <div>
                  <iframe
                    className={styles.iframe}
                    src="https://drive.google.com/file/d/1RTH4JNo0nDBGuOu0NXG57TvSIUSu_EWo/preview"
                    allow="autoplay"
                    allowFullScreen
                    style={{ marginTop: "20px" }}
                  ></iframe>
                </div>
                <p>
                  HPC 클러스터를 위한 대규모 투자 없이도 클라우드 기반에서 클릭
                  몇 번으로 STAR-CCM+ 시뮬레이션을 실행할 수 있습니다. STAR-CCM+
                  2502는 물론 2410, 2406, 2306 등의 이전 버전도 사용할 수 있어
                  유연한 버전 관리가 가능합니다. 수백에서 수천 개 코어를 가진
                  클러스터를 즉시 사용할 수 있습니다.
                </p>
              </div>
              <div className={styles.finishP}>
                <p>
                  이상으로 소개한 기능은 STAR-CCM+ 2502의 일부에 불과합니다. 이
                  기능들은 복잡한 엔지니어링 과제를 빠르고 정밀하게 해결하도록
                  도와주며, 제품 경쟁력을 높일 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
