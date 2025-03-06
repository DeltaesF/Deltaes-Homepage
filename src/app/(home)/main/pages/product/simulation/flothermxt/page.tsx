"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function FlothermXT() {
  const { imageSrc, loading, error } = useFetchImages([
    "flothermxt1.avif",
    "flothermxt2.avif",
    "flothermxt3.avif",
    "flothermxt4.avif",
    "flothermxt5.avif",
    "flothermxt6.avif",
    "flothermxt7.avif",
    "flothermxt8.avif",
    "flothermxt9.avif",
    "flothermxt10.avif",
    "flothermxt11.avif",
    "flothermxt12.avif",
    "flothermxt13.avif",
    "flothermxt14.avif",
    "flothermxt15.avif",
    "flothermxt16.avif",
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
          <div className={styles.firstWrapper}>
            <div className={styles.firstContent}>
              <h2>Simcenter</h2>
              <h1>Flotherm XT</h1>
              <div className={styles.firstImgP}>
                <div className={styles.firstImg}>
                  {imageSrc[0] && (
                    <Image
                      src={imageSrc[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.firstDes}>
                  <p>
                    Simcenter Flotherm XT는 내장된 CAD importing 기능을 통해 3D
                    CAD 형상데이터를 불러오고, 전장부품의 방열설계 및 열 관리
                    성능을 시뮬레이션하는 프로그램으로 전기/전자 산업분야의 기구
                    및 회로설계자가 개념설계 단계에서 전자 장비 및 제 품에 대한
                    방열해석을 수행하고, PC core수 무제한, 3D Solid 형상을
                    포함한 상태에서 사용가능, 격자수 무제한 등의 기능 과, 그
                    결과에 근거하여 최적화 알고리즘을 통한 설계최적화를 목적으로
                    합니다.
                  </p>
                  <p>
                    Chip level, Board level, System level 에 이르기까지 MCAD 및
                    EDA 데이터를 한 파일로 통합하여 반도체 패키징, PCB, System,
                    반도체 부품 등 모든 전자 부품과 다양한 기구물들의 공기 흐름
                    및 열전달을 계산할 수 있습니다.
                  </p>
                  <p>
                    각종 반도체 칩과 전자 부품에 대한 풍부한 라이브러리와 많은
                    논문, 이용 사례 등을 갖추고 있으며, 대 다수 Flotherm
                    사용자가 추천하는 검증된 전기/전자분야 전용 열관리솔루션
                    입니다.
                  </p>
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
                    ECAD 및 MCAD 데이터 통합 : Flotherm XT EDA Bridge를 사용하면
                    전자 장치의 ECAD 및 MCAD 모델을 쉽게 가져오고 열 시뮬레이션
                    모델에 통합할 수 있습니다. 이를 통해 열 엔지니어는 전자
                    장치의 실제 설계를 보다 정확하게 반영하는 시뮬레이션을
                    수행할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    자동화된 CFD 메쉬 및 강력한 솔버 : Flotherm XT는 자동화된
                    메쉬를 사용하여 강력한 Cartesian 기반 메쉬와 SmartCell™
                    메쉬 기술을 사용합니다. 이를 통해 열 엔지니어는 메쉬 생성
                    시간을 크게 단축하고 보다 정확한 시뮬레이션 결과를 얻을 수
                    있습니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    다양한 열 전달 모델 : Flotherm XT는 다양한 열 전달 모델을
                    제공합니다. 이를 통해 열 엔지니어는 다양한 전자 장치의 열
                    문제를 보다 정확하게 시뮬레이션할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>04</h3>
                  <p>
                    강력한 시각화 및 분석 도구 : Flotherm XT는 강력한 시각화 및
                    분석 도구를 제공합니다. 이를 통해 열 엔지니어는 시뮬레이션
                    결과를 쉽게 이해하고 최적화된 설계를 식별할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>05</h3>
                  <p>
                    Simcenter T3Ster™ 를 이용해 측정된 과도적인 열측정값과 자동
                    보정하는 방법 구현으로 시뮬레이션 데이터 정확성을 극대화하고
                    개발 제품 신뢰도를 높일 수 있습니다
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Simcenter Flotherm XT을 사용해야 할까요?</h2>
              <div className={styles.thirdDes}>
                <div>
                  <p>
                    CAD 중심의 전자 냉각 CFD 소프트웨어인 Simcenter Flotherm
                    XT를 사용하면 열 엔지니어가 ECAD 및 MCAD 설계 흐름을
                    연결하여 전자 장치의 개발 시간을 단축하고 열 관리를 프로세스
                    초기에 최적화할 수 있습니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>전자 장치 열 설계 프로세스의 압축</strong> <br />
                    MCAD 및 EDA 설계 흐름을 열 설계에 더 가까지 가져와 해석
                    프로세스에 소요되는 시간을 최소 2배 단축합니다(기존 범용
                    시뮬레이션 도구와 비교 시).
                  </p>
                </div>
                <div>
                  <p>
                    <strong>EDA 데이터의 신속한 통합</strong> <br />
                    보드 및 컴포넌트 레이아웃 가져오기를 통해 복잡한 ECAD
                    데이터를 쉽게 처리할 수 있습니다. Simcenter Flotherm XT EDA
                    Bridge를 사용하면 위치, 크기, 방향, 형상 및 모델링 수준을
                    빠르게 수정할 수 있습니다. EDA Bridge는 ODB++를 포함한 모든
                    주요 EDA 소프트웨어 공급업체 파일 형식을 지원합니다. PCB
                    설계 흐름과의 이와 같은 상호 운용성은 시간이 많이 소요되는
                    데이터 변환을 줄이고 비용이 많이 드는 오류의 위험을
                    최소화합니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      CAD 중심 인터페이스로 CAD 지오메트리 복잡성 처리
                    </strong>
                    <br />
                    CAD 중심의 사용자 인터페이스와 지오메트리 엔진을 활용하여
                    최신 전자 제품의 복잡한 곡선 및 임의 형상을 구현할 수
                    있습니다. 모든 주요 파일 형식 가져오기, 조작 및 지오메트리
                    수정 등 고급 CAD 모델링 기능 덕분에 Simcenter Flotherm XT
                    CAD 연결을 시작하는 학습 곡선이 짧아 빠르게 생산성을 발휘할
                    수 있습니다. 사용자는 가장 널리 사용되는 전자 부품의
                    지오메트리 및 비지오메트리 SmartPart와 라이브러리를 활용하여
                    빠르고 정확하게 모델을 생성할 수 있습니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>파라메트릭 스터디 및 열 관리 최적화 수행</strong>
                    <br />열 설계를 최적화하려면 지오메트리, 속성 및 솔루션
                    매개변수의 파라메트릭 변형을 사용하여 결과를 정의, 해결 및
                    분석할 수 있는 통합 환경을 최대한 활용하십시오. 실험
                    계획법을 사용하면 여러 스터디를 설정하고 다양한 매개변수를
                    설정하며 설계 분야에 대한 최상의 적용 범위를 보장할 수
                    있습니다.
                  </p>
                </div>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <h3>Simcenter Flotherm XT 는</h3>
                    <p>
                      다양한 전자 장치의 열 관리를 위한 강력하고 유연한
                      도구입니다.
                      <br />
                      다음과 같은 전자 장치에 사용할 수 있습니다.
                    </p>
                    <ul>
                      <li>
                        컴퓨터, 스마트폰 및 태블릿과 같은 소비자 전자 제품
                      </li>
                      <li>
                        자동차, 항공기 및 의료 장비와 같은 산업용 전자 제품
                      </li>
                      <li>반도체 및 태양광 패널과 같은 고성능 전자 제품</li>
                    </ul>
                  </div>
                  <div className={styles.thirdImg}>
                    {imageSrc[1] && (
                      <Image
                        src={imageSrc[1]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fourWrapper}>
            <div className={styles.fourContent}>
              <h2>주요 기능</h2>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>복잡하고, 덜 정리된 형상을 격자화하는 SmartCells 기능</h3>
                  <p>
                    SmartCells 기능 사용으로 복잡한 형상 도는 CAD 정리가 덜된
                    형상에 대해 격자 품질 걱정 없이, 쉽고 빠르게 자동 격자
                    생성으로 해석 시간을 단축합니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
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
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>CAD 기반 SmartParts 로 모델구축 속도 향상</h3>
                  <p>
                    Flotherm XT의 SmartParts 기능은 내장 라이브러리 사용으 로
                    빠른 시간 내 3D CFD 해석 모델링을 가능하게 합니다.
                  </p>
                </div>
                <div className={styles.fourImg2}>
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
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>내장된 파라메트릭 연구 기능</h3>
                  <ul>
                    <li>
                      Flotherm XT에 내장된 Parametric Study 기능으로 CFD 해석 을
                      통한 설계 최적화 기법을 활용할 수 있습니다.
                    </li>
                    <li>
                      또한, 별도의 최적설계 자동화 소프트웨어 HEEDS 와 연계하 여
                      설계 시나리오 생성 및 해석을 통한 최적 모델 선정
                      가능합니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.fourImgD}>
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
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>정교하고, 상세한 IC 패키지 모델 구현</h3>
                  <ul>
                    <li>
                      Flotherm XT에 내장된 Package Creator 기능으로 더욱
                      정교하고 상세한 IC 패키지 등의 모델링을 구현할 수
                      있습니다.
                    </li>
                    <li>
                      정교한 IC 매키지 모델링 기능외에도 Flotherm XT에서 생성한
                      BCI-ROM(경계조건독립 차수감소모델)을 사용하여 최대
                      40,000배 빠르게 전자 냉각관련 설계 문제 해결이 가능합니다.
                    </li>
                    <li>
                      BCI-ROM은 차량 전력 전자 장치, 스마트폰과 같은 가전 제품,
                      반도체 패키징 설계 등 다양한 응용 분야에 적용할 수
                      있습니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.fourImg2}>
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
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>
                    방열 시뮬레이션 결과의 정밀도 향상을 위한 측정
                    <br />
                    데이터와의 자동 보정 기능
                  </h3>
                  <ul>
                    <li>
                      업계 최초로 CFD 해석결과를 Simcenster T3Ster 온도 및
                      열저항 측정데이 터 측정값에 맞도록, 자동 보정 기능
                      제공합니다.
                    </li>
                    <li>
                      모델링에서 결과검증까지 모든 단계에서 test data
                      지원합니다.
                    </li>
                    <li>측정데이터의 활용은 해석결과 정확도 크게 향상 시킴.</li>
                  </ul>
                </div>
                <div className={styles.fourImg1}>
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
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>포괄적인 EDA interface, PCB 패턴 묘사</h3>
                  <p>
                    EDA 툴, 특히 Mentor 도구(Xpedition, PADS)와의 양방향 통신은
                    물론 Cadence, Zuken 등도 지원합니다.
                  </p>
                </div>
                <div className={styles.fourImg2}>
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
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>내장된 3D CAD를 이용한 접근성 확대</h3>
                  <ul>
                    <li>
                      Flotherm XT는 SolidWorks의 내장 3D CAD 사용으로 형상
                      데이터 불러 오기 기능과 지능형 형상 처리 기능은 3D CAD
                      오차 최소화 및 형상 단 순화 등으로 계산시간 대폭 단축
                      가능합니다.
                    </li>
                    <li>MCAD 형상 수정, 삭제 단순화 및 생성 지원 합니다.</li>
                  </ul>
                </div>
                <div className={styles.fourImg1}>
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
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>Flotherm 프로젝터 및 어셈블리 파일 불러오기 기능</h3>
                  <p>
                    Flotherm에서 작업한 프로젝트 및 어셈블리 파일을 불러와
                    Flotherm XT에서 사용 가능 합니다
                  </p>
                </div>
                <div className={styles.fourImg2}>
                  {imageSrc[9] && (
                    <Image
                      src={imageSrc[9]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fiveWrapper}>
            <div className={styles.fiveContent}>
              <div className={styles.fiveHeader}>
                <h2>추가 모듈</h2>
                <Link href="/main/pages/product/simulation/flothermxt/module">
                  <button>자세히 보기</button>
                </Link>
              </div>
              <div className={styles.fiveImgGrid}>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
                    {imageSrc[10] && (
                      <Image
                        src={imageSrc[10]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>FloEDA Bridge</h3>
                  </div>
                </div>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
                    {imageSrc[11] && (
                      <Image
                        src={imageSrc[11]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>Package Creater</h3>
                  </div>
                </div>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
                    {imageSrc[12] && (
                      <Image
                        src={imageSrc[12]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>FloMCAD™ Bridge</h3>
                  </div>
                </div>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
                    {imageSrc[13] && (
                      <Image
                        src={imageSrc[13]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>PackaT3STER™ – Flotherm Automatic</h3>
                  </div>
                </div>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
                    {imageSrc[14] && (
                      <Image
                        src={imageSrc[14]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>Flotherm Pack</h3>
                  </div>
                </div>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
                    {imageSrc[15] && (
                      <Image
                        src={imageSrc[15]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.fiveDes1}>
                    <span className={styles.contantSquare}></span>
                    <h3>HyperLynx PI</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
