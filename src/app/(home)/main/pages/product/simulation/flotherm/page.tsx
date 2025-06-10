"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Flotherm() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "flotherm1_mjjawu",
    "flotherm2_kwcjax",
    "flotherm3_brok1x",
    "flotherm4_tkqgah",
    "flotherm5_w1fdfq",
    "flotherm6_k7x0ud",
    "flotherm7_mc5lmo",
    "flothermxt8_tngnq2",
    "flotherm8_wth13p",
    "flothermxt7_ud3nqk",
    "flotherm9_qsnhm8",
    "flotherm10_ikfbyr",
    "flothermxt11_lpb6vn",
    "flothermxt12_smbbma",
    "flothermxt13_vcrjxb",
    "flothermxt14_t5bb4w",
    "flothermxt15_gce9yn",
    "flothermxt16_kld7ch",
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
              <h1>Flotherm</h1>
              <div className={styles.firstImgP}>
                <div className={styles.firstImg}>
                  {imageSrc1[0] && (
                    <Image
                      src={imageSrc1[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.firstDes}>
                  <p>
                    Simcenter Flotherm 은 MCAD-Bridge를 사용하여, 3D CAD
                    형상데이터를 불러오고, 이를 통해 방열설계 및 열관리 성능을
                    시 뮬레이션하는 프로그램으로 전기/전자 산업분야의 기구 및
                    회로설계자가 개념설계 단계에서 전자 장비 및 제품에 대한 방
                    열해석을 수행하고, PC core수 무제한, 3D Solid 형상을 포함한
                    상태에서 사용가능, 격자수 무제한 등의 기능과, 그 결과에
                    근거하여 최적화 알고리즘을 통한 설계최적화를 목적으로
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
                    논문, 이용 사례 등을 갖추고 있으며, 전 세계 사용자의 약 98%
                    가 추천하는 검증된 전기/전자분야 전용 열관리솔루션 입니다.
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
                    SmartPart™ (히트싱크, 팬, 인클로저, TEC, PCM 등의
                    라이브러리 D/B)를 사용하여 모든 전자 제품에 대한 방열설계
                    map 을 쉽게 만들 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    MCAD 및 ECAD로 모델링한 형상을 손쉽게 변환하여 사용이
                    가능하기 때문에, 실제 형상 및 모든 PCB 레이아웃 정보에
                    근거한 정확한 해석이 가능합니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    Instamesh™ 는 형상이 복잡하고 수 천개의 부품이 구성되어
                    있어도 쉽고, 빠르게 격자를 생성할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>04</h3>
                  <p>
                    Simcenter T3STER™ 를 이용해 측정된 과도적인 열측정값과 자동
                    보정하는 방법 구현으로 시뮬레이션 데이터 정확성을 극대화하고
                    개발 제품 신뢰도를 높일 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Simcenter Flotherm을 사용해야 할까요?</h2>
              <div className={styles.thirdSubContent}>
                <div className={styles.thirdImg}>
                  {imageSrc1[1] && (
                    <Image
                      src={imageSrc1[1]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.thirdImgDes}>
                  <p>
                    Simcenter Flotherm Flexx 에서 지원하는 전용 모듈들의 활용 예
                  </p>
                </div>
                <div className={styles.thirdDes}>
                  <div>
                    <p>
                      자동차, 철도차량, 항공 우주, 방산, 전자 및 반도체 등 모든
                      산업 분야에서 전자제품과 부품은 점점 고속화, 소형화,
                      복잡화 되면서 기계 및 전자 설계 흐름을 제한하고 전력
                      밀도를 높여 나가고 있습니다. 이로 인해 열을 효율적으로
                      제거하기가 그 어느 때 보다 어려워졌으며 제품의 성능 및
                      신뢰성 문제가 발생할 수 있습니다. Simcenter Flotherm은
                      빠른 시간 내 제품의 방열설계 최적화를 가능하도록 하는
                      지멘스 최고의 열관리 해석 제품입니다
                    </p>
                  </div>
                  <div>
                    <p>
                      34년 이상 축적된 개발 및 사용자 피드백을 바탕으로 만들어진
                      Simcenter Flotherm은 전자 열 해석을 위한 선도적인 전자
                      냉각 시뮬레이션 소프트웨어 솔루션입니다. IC 패키지, PCB 및
                      인클로저부터 데이터 센터와 같은 대규모 시스템까지 다양한
                      수준에서 개발 시간을 단축합니다.
                    </p>
                  </div>
                  <div className={styles.thirdImgP}>
                    <div className={styles.thirdImg2}>
                      {imageSrc1[2] && (
                        <Image
                          src={imageSrc1[2]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                    <div className={styles.thirdDes2}>
                      <ul>
                        <li>다양한 형상 및 기능의 SmartPart™</li>
                        <li>전자부품 및 물성치 데이터베이스 지원</li>
                        <li>MCAD, EDA의 완벽한 호환성</li>
                        <li>자체기능을 통한 실험계획법 및 최적화 지원</li>
                        <li>설계최적화 솔루션 HEEDS와 연동 가능</li>
                        <li>열해석 엔지니어를 위한 전자 제품 냉각 솔루션</li>
                        <li>3D CAD와 동일한 작업 환경</li>
                        <li>설계자를 위한 자동 격자</li>
                      </ul>
                    </div>
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
                  <h3>InstaMesh™ 및 FloXML 을 활용한 작업 자동화</h3>
                  <ul>
                    <li>
                      nstaMeshTM™시스템 사용으로 격자 품질 걱정 없이 쉽고빠르
                      게 자동 격자 생성으로 해석 시간을 단축 합니다
                    </li>
                    <li>
                      데이터 통합을 위한 FloXML 모델 및 형상 정보 가져오기
                      기능이 가능합니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.fourImgD}>
                  {imageSrc1[3] && (
                    <Image
                      src={imageSrc1[3]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>설계 공간 탐색 자동화</h3>
                  <ul>
                    <li>
                      최적설계 자동화 소프트웨어 HEEDS 연계로 설계 시나리오 생성
                      및 해석을 통한 최적 모델 선정합니다.
                    </li>
                    <li>
                      Simcenter Flotherm과 동시 작동되며, NX 3D CAD에 외부 3D
                      CAD 형상 매개 변수로 추가 가능합니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.fourImgD2}>
                  {imageSrc1[4] && (
                    <Image
                      src={imageSrc1[4]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>C-DC 공급망을 지원하는 ECXLM & 라이브러리</h3>
                  <ul>
                    <li>
                      전자장비 열관리 분석에는 IC 패키지와 이들이 발산하는 열이
                      존재 합니다.
                    </li>
                    <li>
                      이 장치의 열 모델을 정확하게 파악하는것이 중요 합니다.
                    </li>
                    <li>
                      Simcenter Flotherm은 간단한 부품부터 복잡한 시스템까지,
                      모든 모델링 수준을 지원하며, 다양한 분석 옵션을 제공
                      합니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.fourImgD3}>
                  {imageSrc1[5] && (
                    <Image
                      src={imageSrc1[5]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>복잡한 IC 패키지의 콤팩트 모델화</h3>
                  <p>
                    EDA 툴, 특히 Mentor 도구(Xpedition, PADS)와의 양방향 통신은
                    물론 Cadence, Zuken 등도 지원합니다.
                  </p>
                </div>
                <div className={styles.fourImg2}>
                  {imageSrc1[6] && (
                    <Image
                      src={imageSrc1[6]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>포괄적인 EDA interface, PCB 패턴 묘사</h3>
                  <p>
                    EDA 툴, 특히 Mentor 도구(Xpedition, PADS)와의 양방향 통신은
                    물론 Cadence, Zuken 등도 지원 합니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
                  {imageSrc1[7] && (
                    <Image
                      src={imageSrc1[7]}
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
                  <ul>
                    <li>
                      전자 패키지의 열모델을 쉽고 빠르게 생성하여 높은 수준의
                      정확도를 유지하면서 더 빠른 속도로 해석하는 컴팩트 감소
                      차수 모델(Boundary-Condition-Independent Reduced-Order
                      Models)을 생성할 수 있습니다.
                    </li>
                    <li>
                      광범위한 열 환경을 CFD로 해결하기에는 시간이 상당량
                      소모되기 때문에 Simcenter Flotherm의 BCI-ROM 기능을
                      사용하여 모델을 추출하여 반복계산을 통해 기존 방식보다 약
                      40,000배 빠른 해결 속도를 보입니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.fourImg2}>
                  {imageSrc1[8] && (
                    <Image
                      src={imageSrc1[8]}
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
                    방열 시뮬레이션 결과의 정밀도 향상을 위한 측정 <br />{" "}
                    데이터와의 자동 보정 기능
                  </h3>
                  <p>
                    업계 최초로 CFD 해석결과를 Simcenster T3Ster 온도 및 열저항
                    측정데이터 측정값 에 맞도록, 자동 보정 기능 제공합니다.
                    <br />
                    모델링에서 결과검증까지 모든 단계에서 test data 지원합니다.
                    <br />
                    측정데이터의 활용은 해석결과 정확도 크게 향상 시킵니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
                  {imageSrc1[9] && (
                    <Image
                      src={imageSrc1[9]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>완벽한 3D CAD와의 연결성</h3>
                  <p>
                    MCAD-Bridge를 통한 3D CAD 형상 데이터 깨지지 않고 원시파일로
                    불러들여 옵니다.
                  </p>
                </div>
                <div className={styles.fourImgD4}>
                  {imageSrc1[10] && (
                    <Image
                      src={imageSrc1[10]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>Hyperlink 와 연결하여 SI,PI & Thermal 해석 가능</h3>
                  <ul>
                    <li>
                      Simcenter Flotherm은 Hyperlinx에서 Powermap을 import 하여
                      PI(Power Integrity) 전력 분배에 따른 열 해석이 가능합니다.
                    </li>
                    <li>
                      Simcenter Flotherm XT는 Hyperlinx와 Co-Simulation하여
                      PI(Power Integrity) 열 해석이 가능합니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.fourImgD5}>
                  {imageSrc1[11] && (
                    <Image
                      src={imageSrc1[11]}
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
                <Link href="/main/pages/product/simulation/flotherm/module">
                  <button>자세히 보기</button>
                </Link>
              </div>
              <div className={styles.fiveImgGrid}>
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveImg1}>
                    {imageSrc1[12] && (
                      <Image
                        src={imageSrc1[12]}
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
                    {imageSrc1[13] && (
                      <Image
                        src={imageSrc1[13]}
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
                    {imageSrc1[14] && (
                      <Image
                        src={imageSrc1[14]}
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
                    {imageSrc1[15] && (
                      <Image
                        src={imageSrc1[15]}
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
                    {imageSrc1[16] && (
                      <Image
                        src={imageSrc1[16]}
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
                    {imageSrc1[17] && (
                      <Image
                        src={imageSrc1[17]}
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
