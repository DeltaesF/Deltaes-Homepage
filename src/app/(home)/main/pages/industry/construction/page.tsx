"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Construction() {
  const { imageSrc, error } = useFetchImages([
    "construction1.jpg",
    "construction2.jpg",
    "construction3.jpg",
    "construction4.jpg",
    "construction5.gif",
    "construction6.jpg",
    "construction7.jpg",
    "construction8.jpg",
    "construction9.jpg",
    "construction10.jpg",
    "construction11.jpg",
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
              <h1>건설 / 토목</h1>
              <div className={styles.leftAlignContent}>
                <h2>건축, 토목 위한 디지털화 ​</h2>
                <p>
                  전 세계의 도시 인구 증가로 스마트 도시의 개념이 도입되었으며,
                  여기서 도시의 오래된 도전 과제를 해결하기 위해서 디지털 혁신이
                  사용됩니다. 관련된 건설 붐은 구조와 시스템을 아름답고
                  효율적으로 구축할뿐만 아니라 장기적인 지속 가능성을 위해
                  설계하고 여러 이해 관계자에게 다양한 문제를 해결하도록
                  요구하고 있습니다.
                  <br />
                  건축물 설계나 공조기, 송풍기, 팬, 압축펌프, 열교환기, 버너
                  등과 같은 HVAC 장비를 설계할 때, CFD 시뮬레이션을 통해 건물
                  또는 각종 장치의 효율 및 성능을 극대화하고 낭비요소를 제거한
                  효과적이고 경제적인 설계를 하는것이 일반화 되고 있습니다.
                  <br />
                  (주)Delta ES 가 제공하는 1D 및 3D 해석 솔루션과 전문기술을
                  통하여 사무실, 극장, 쇼핑몰, 공항 등 모든 종류의 건물에 대한
                  HVAC 해석, 데이터센터나 클린룸과 같은 특수한 환경에 대한 HVAC
                  및 열관리 해석, 실험실, 병원, 지하주차장 등의 공간에 대한
                  환기, 쾌적성 및 오염도 해석을 수행합니다. 또한 도시나 지형에
                  대한 바람 해석 및 설계평가 등 도시 환경에 대한 시뮬레이션을
                  통하여 쾌적하고 안락한 도시가 설계되도록 합니다.
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
                <h3>클린룸 설계 (Clean Room Design)</h3>
                <p>
                  클린룸 설계시 다양한 조건으로 시뮬레이션 해볼 수 있어 필수적인
                  해석입니다.
                </p>
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
                <h3>데이터 센터 (Data Center)</h3>
                <p>
                  데이터 센터의 에너지 저감 및 냉각성능 향상을 위한 해석 입니다.
                </p>
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
                <h3>빌딩 공조 (Building HVAC)</h3>
                <p>
                  빌딩 공조 설계에 활용되어 실내 환경의 효율성과 쾌적성을
                  향상시키는 데 중요한 역활을 합니다.
                </p>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[4] && (
                  <Image
                    src={imageSrc[4]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>교량구조물 (Bridge )</h3>
                <p>
                  설계자가 보다 안전하고 효율적인 교량을 설계하는데 도움이 될 수
                  있습니다.
                </p>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[5] && (
                  <Image
                    src={imageSrc[5]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>스마트 시티 (Smart City)</h3>
                <p>
                  ​대기오염 예측 저감, 건물 에너지 효율 향상, 재난 예방 등
                  다양한 방식으로 적용 됩니다.
                </p>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[6] && (
                  <Image
                    src={imageSrc[6]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>도시 바람길 분석</h3>
                <p>도시 바람길을 해석하여 최적의 도시 설계를 제공 합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.siemens}>
          <div className={styles.siemensDes}>
            <h2>주요 솔루션</h2>
            <h3>스마트 시티 자전거 운송</h3>
            <p>
              시티 그래프를 기반으로 한 솔루션은 사람들에게 이용하는데 있어
              장점이 부각될 경우, 차량에서 자전거 또는 전동 킥보드를 선택하는
              동기를 부여하는 데 도움이 되도록 합니다. 신제품 이니셔티브는
              <br />
              교통 혼잡 감소 <br />
              많은 도시에서 교통 혼잡이 증가했으며, 특히 메르스, 코로나19 등의
              바이러스 유행하는 시대에 많은 시민들이 공공 교통에서 민간 교통으로
              변화하는 비율이 증가했습니다. 불행히도, 대부분의 사람들은 자전거나
              전동 킥보드에 대한 강력한 인프라가 도시 내에서 제공 될 수 있지만,
              자전거 나 전동 킥보드대신 자동차로 전환했습니다. 자전거나 전동
              킥보드 타기는 자동차로 여행하는 것과 비교하여, 특히 도시 내 단거리
              여행에 몇 가지 장점이 있을 수 있습니다: 자전거 나 전동 킥보드 타는
              사람은 목적지에 더 빨리 도달하고 혼잡한 도로의 스트레스를 피하고
              연료 비용을 절감할 수 있습니다. 이는 도시가 도로상에 CO2 가스의
              배출량 감소와 교통 감소의 혜택을 누릴 수 있도록 해 줍니다. 따라서
              중요한 문제는 시민들이 어떻게 자동차 대신 자전거나 전동 킥보드 를
              사용하도록 장려할 수 있느냐 하는 것입니다. 이러한 시스템이
              확산된다면 도시 인프라와 오염에 많은 이점이 제공될 것입니다.
            </p>
            <Link
              href="https://plm.sw.siemens.com/ko-KR/nx/manufacturing/additive-manufacturing/"
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
        <div className={styles.siemens2}>
          <div className={styles.siemensDes2}>
            <h3>자전거 또는 전동 킥보드 출퇴근률 증가</h3>
            <p>
              사람들이 차량에서 자전거나 전동 킥보드를 선택하도록 동기를
              부여하는데 도움이 되도록 하는 이점을 제시 합니다. 이는 사용자가
              현재 조건에 따라 최적의 교통 수단을 선택할 수 있도록 자동차와
              자전거 또는 전동 킥보드로 여행하는 것을 비교하는 포괄적인
              경로계획, 파일롯 주행 정보 등을 제공함으로써 달성 될 수 있을 것
              입니다.
              <br />
              사용 가능한 주차 및 비용, 사고 핫스팟, 교통신호 및 날씨, 풍압,
              바람에 의한 저항, 악취 영향권 내 들어가는지 여부, 각종 사고와
              재해로부터의 안전성, 자전거 또는 킥보드 여행에 영향을 미칠 수 있는
              위험 등 간단한 이동 시간을 넘어 데이터를 통합함으로써 사용자가
              당일 계획에 따라 자전거 또는 전동 킥보드로 여행을 안전하게 할 수
              있는지에 대한 선택을 할 수 있도록 신뢰할 수 있는 정보 등을 제공
              합니다.
              <br />
              Delta ES는 도시 디자인의 디지털 모델을 지원하는 개방형 도시
              플랫폼으로, 도시 계획 및 문제 해결을 지원하기 위해 개방형 디지털
              트윈을 개발하는 각종 정보를 시뮬레이션 데이터로부터 확보하여
              데이터 통합을 위한 정보제공을 가능케 할 것 입니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/solutions/engineering-simulation/"
              target="_blank"
            >
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
        <div className={styles.siemens4}>
          <div className={styles.siemensDes4}>
            <h3>전기 자동차 충전</h3>
            <p>
              Delta ES 는 전기 자동차 충전 수요 예측 및 인프라에 미치는 영향에
              대한 명확한 이해를 개선하기 위한 애플리케이션 및 전문 서비스를
              제공하는 솔루션에 각종 필요 정보를 제공합니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/digital-thread/advanced-machine-engineering/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
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
        <div className={styles.siemens2}>
          <div className={styles.siemensDes2}>
            <h3>스마트 시티 - 전기 자동차 충전</h3>
            <p>
              도시는 시민과 경제를 위한 에너지 공급과 관련하여 수많은 도전에
              직면해 있습니다. 한편으로는 분산에너지 생성이 점점 더 중요해지고
              있습니다. 한편, 특히 전자 이동성 및 전기 난방/냉각 공급이 증가함에
              따라 점점 더 많은 전기 에너지가 요구됩니다. 국제 에너지 기구 (IEA)
              보고서(2019)에 따르면 " 전기는 2040년까지 주로 전기자동차 등에
              의해 지속적인 소비 증가를 보이는 몇 안되는 에너지원 중 하나 “ 라고
              밝히고 있습니다. 이는 재생 가능 에너지 생산에 대한 피크 에너지
              네트워크 관리를 수행해야 하는 동시에, 전기 충전 및 운송과 같은
              단기적으로 증가 하는 에너지 요구에도 불구하고 정전으로 이어지지
              않도록 포괄적인 관리를 해야 합니다.
              <br />
              <br />
              Delta ES 가 제공하는 솔루션은 충전 수요의 예측을 개선하고 인프라에
              미치는 영향 등에 대한 명확한 이해를 개선하기 위한 신재생 에너지
              등을 통한 발전응용 및 전문 서비스를 제공하는 해법을 제공합니다.
              이를 통해 네트워크 공급자는 네트워크 확장을 더 잘 계획하고 대규모
              추가 용량 증설을 고려할 필요가 없습니다. 따라서 수요 증가에도
              불구하고 신 재생에너지 공급을 받아 도시전력 그리드는 더 탄력적일
              것이며, 시민들은 최적의 에너지 관련 세금, 시간 및 시스템 비용
              등으로 자동차를 충전하는 혜택을 누릴 수 있을 것 입니다. 이는
              디지털 트윈기술을 통해 간소화된 데이터 모델링, 데이터 수집,
              스트리밍 분석, 컨텍스트화 및 분리 뿐 아니라 비즈니스 프로세스
              모델링 및 분석을 가능하게 합니다.
            </p>
            <Link href="https://www.sw.siemens.com/ko-KR/" target="_blank">
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[10] && (
              <Image
                src={imageSrc[10]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens3}>
          <div className={styles.siemensDes3}>
            <h3>스마트 시티 (Smart City)</h3>
            <p>이러한 솔루션은 아래와 같은 기능을 부여 할 수 있도록 합니다.</p>
            <div className={styles.siemensDes3Ul}>
              <ul>
                <li>스마트 시티 온톨로지 디자인</li>
                <li>디지털 트윈 상태 예측을 위한 AI/ML 기반 알고르즘</li>
                <li>전기 네트워크 데이터 및 토플로지</li>
                <li>변압기 및 충전 지점의 전기 부하 정보</li>
                <li>정적 맵 데이터</li>
                <li>고통 정보 및 교통 흐름</li>
                <li>날씨 및 개방형 정부 데이터와 같은 추가 관련 데이터 활용</li>
              </ul>
            </div>
            <p>
              이를 통해 도시 시민 및 이해 관계자는 다음과 같은 혜택을 기대할 수
              있습니다.
            </p>
            <div className={styles.siemensDes3Ul}>
              <ul>
                <li>
                  모든 이해 관계자 (시만, 네트워크 사업자, 에너지 공급자)에 대한
                  전기 충전 구매력 증대
                </li>
                <li>에너지 부하 균형 개선</li>
                <li>탄력있는 도시의 지속 가능한 인프라에 기여</li>
                <li>전기 네트워크의 효율적인 계획 및 활용</li>
              </ul>
            </div>
            <Link
              href="https://www.sw.siemens.com/ko-KR/digital-thread/advanced-machine-engineering/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
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
        <div className={styles.strengthWrapper}>
          <div className={styles.strngth}>
            <h2>Simulation for the Smart City Planning:</h2>
            <h3>Delta ES가 가장 잘 할 수 있는 분야 입니다.</h3>
            <div className={styles.strngthDes}>
              <p>
                1, 바람길 시뮬레이션 <br />
                2, 수변환경개발 또는 빗물펌프장 등의 비점오염(오염항목 TN, TP,
                BOD, SS 80% 등) 저감
                <br /> - 비점오염저감시설의 저감효율 예측 및 효과적 설계 3.
                지하공간 공기 질 / 공조/화재/피난 대책
                <br /> 4. 재난 및 재해 시뮬레이션 <br />
                재해발생 및 인명피해 방지를 위한 도심지 고층빌딩 화재발생시
                화염전파 및 피난시뮬레이션
                <br /> 태풍, 홍수, 해일 등의 재해 대책 시뮬레이션
                <br /> - 태풍에 의한 풍하중 시뮬레이션
                <br /> - 홍수 시 침수지역 가능성 분석 시뮬레이션 <br />
                5. 도심지 내 온열환경 시뮬레이션
                <br /> - 열섬시뮬레이션 (주행 차량들의 배기가스, 건물내 HVAC
                설비 가동 등에 따른 도심지 내 열섬 현상 파악) <br />
                6. 도심지 내 악취발생 및 추적 <br />
                7. 유해가스 폭발 등에 의해 인명 피해 최소화 시뮬레이션 <br />
                8. COVID FREE ZONE simulation (학교 대상) <br />
                9. 자원 재활용 시설 및 쓰레기 소각장 등에대한 시뮬레이션 결과로
                특정악취와 복합악취로부터 영향 최소화를 위한 설비성능 최적화
                설계안 마련.
                <br />
                <br />
              </p>
              <p>
                <strong>
                  Delta ES는 Smart City 기획단계에서 상세설계까지 지원 합니다.
                  <br />
                  자세한 문의는 Delta ES 고객센터에 문의하여 주시기 바랍니다.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
