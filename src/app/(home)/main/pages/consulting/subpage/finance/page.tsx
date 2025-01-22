"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Finance() {
  const { imageSrc, error } = useFetchImages(["subpageFinance1.jpg"]);

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
              <h1>보험 및 안전</h1>
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
