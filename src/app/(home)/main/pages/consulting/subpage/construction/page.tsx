"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Construction() {
  const { imageSrc, error } = useFetchImages([
    "construction1.jpg",
    "subpageConstruction1.jpg",
    "construction7.jpg",
    "subpageConstruction2.jpg",
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
                <p>
                  전 세계의 도시 인구 증가로 스마트 도시의 개념이 도입되었으며,
                  여기서 도시의 오래된 도전 과제를 해결하기 위해서 디지털 혁신이
                  사용됩니다. 관련된 건설 붐은 구조와 시스템을 아름답고
                  효율적으로 구축할뿐만 아니라 장기적인 지속 가능성을 위해
                  설계하고 여러 이해 관계자에게 다양한 문제를 해결하도록
                  요구하고 있습니다. <br />
                  <br />
                  건축물 설계나 공조기, 송풍기, 팬, 압축펌프, 열교환기, 버너
                  등과 같은 HVAC 장비를 설계할 때, CFD 시뮬레이션을 통해 건물
                  또는 각종 장치의 효율 및 성능을 극대화하고 낭비요소를 제거한
                  효과적이고 경제적인 설계를 하는것이 일반화 되고 있습니다.
                  <br />
                  <br />
                  (주)Delta ES 가 제공하는 1D 및 3D 해석 솔루션과 전문기술을
                  통하여 사무실, 극장, 쇼핑몰, 공항 등 모든 종류의 건물에 대한
                  HVAC 해석, 데이터센터나 클린룸과 같은 특수한 환경에 대한 HVAC
                  및 열관리 해석, 실험실, 병원, 지하주차장 등의 공간에 대한
                  환기, 쾌적성 및 오염도 해석을 수행합니다. 또한 도시나 지형에
                  대한 바람 해석 및 설계평가 등 도시 환경에 대한 시뮬레이션을
                  통하여 쾌적하고 안락한 도시가 설계되도록 합니다.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondWrapper}>
          <div className={styles.secondWrapperTitle}>
            <h2>실제 사례</h2>
            <p>
              아래의 열거된 과제 수행 항목은 저희 기술진이 지금까지 여러 차례
              수행하였던 엔지니어링 컨설팅 프로젝트 및 기술용역 항목으로 건설 /
              토목 산업 분야의 엔지니어링 설계 및 해석 과제 중 가장 자신 있게
              수행항 수 있는 엔지니어링 시뮬레이션 항목입니다.
            </p>
          </div>
          <div className={styles.aBg}>
            <div className={styles.aIs}>
              <div className={styles.aIsF}>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    {imageSrc[1] && (
                      <Image
                        src={imageSrc[1]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    댐 수문 개폐시 수문의 flow
                  </div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    {imageSrc[2] && (
                      <Image
                        src={imageSrc[2]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.aIsFdivTitle}>도시 바람길 해석</div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    {imageSrc[3] && (
                      <Image
                        src={imageSrc[3]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    데이터센터의 에너지 저감
                  </div>
                </div>
              </div>
              <div className={styles.aIsS}>
                <div className={styles.aIsSDes}>
                  <div>
                    <p>자원 재활용 시설 소각로 해석</p>
                    <ul>
                      <li>● 소각로 내부유동 및 연소해석</li>
                      <li>● SCR / SNCR 노즐 위치 선정해석</li>
                      <li>● 폐열 보일러 유동해석</li>
                      <li>● 건식 반응탑(SDR) 가스유동해석</li>
                      <li>● 백필터 내 확산가스유동 및 활성탄 입자괘적해석</li>
                    </ul>
                  </div>
                  <div>
                    <p>건축기계설비</p>
                    <ul>
                      <li>● 소각동 내부 환기 해석</li>
                      <li>● 부지경계 내 소음진동 해석</li>
                      <li>● 반입장 내 벙커내 환기 및 각종 악취 거동 해석</li>
                      <li>● 음식물 처리동 해석</li>
                      <li>● 홍보실 / 중앙제어동 등 화재연층해석</li>
                      <li>● 결로해석</li>
                      <li>● 사계절에 따른 주풍향/풍속의 대기오염 확산분석</li>
                      <li>● 굴뚝 대기 각종 오염 분석</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.aIsSDes}>
                  <div>
                    <p>슬러지 자원화시설 및 하수처리장 해석</p>
                    <ul>
                      <li>● 하수처리 설비 내 악취/환기 해석</li>
                      <li>● 화재 해석 및 피난 시뮬레이션</li>
                      <li>● 부지경계 내 소음 진동 해석</li>
                      <li>● 대기환경 및 오염 확산 분석</li>
                      <li>
                        ● 건조기 슬러지 믹싱/ 이동전달 경로 및 함수율 해석
                      </li>
                      <li>● 건조실 내 악취 해석</li>
                    </ul>
                  </div>
                  <div>
                    <p>각종 배관망 시뮬레이션</p>
                    <ul>
                      <li>
                        ● 각종 배관 내 서지 압력 개선 설계를 위한 유동
                        시뮤레이션
                      </li>
                      <li>● 각종 배관 내 수충격 해석</li>
                      <li>
                        ● 항공기/자동차/건설기계 등 유압 시스템 시뮬레이션
                      </li>
                      <li>● 각종 플랜트 설비 내 배관 망 해석</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>바이오메스 설비 해석</li>
                      <li>음식물 처리장 해석</li>
                      <li>쓰레기 처리장 해석</li>
                      <li>음폐수 처리장 해석</li>
                      <li>각종 교반기 시스템 해석</li>
                      <li>각종 필터 설비 해석</li>
                      <li>​기타 환경 분야 해석</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.aIsSDesL}>
                <p>
                  ㈜ Delta ES 의 축적된 기술 및 각종 솔루션을 통하여
                  건설/도시/국토산업 분야 CFD 전문가에게 지금까지 경험해 보지
                  못했던 CAE/CFD 해석의 고난이도 분야에 해석기술을 적용할 수
                  있도록 도전 과제에 대한 해결책을 제시합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
