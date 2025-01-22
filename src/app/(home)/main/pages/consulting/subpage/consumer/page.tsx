"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Consumer() {
  const { imageSrc, error } = useFetchImages([
    "subpageConsumer1.jpg",
    "subpageConsumer2.jpg",
    "subpageConsumer3.jpg",
    "subpageConsumer4.jpg",
    "subpageConsumer5.gif",
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
              <h1>소비재</h1>
              <div className={styles.leftAlignContent}>
                <p>
                  주어진 기간 내에, 보다 혁신적인 제품개발을 원하는 시장의
                  요구는 빈번한 형상변경과 복잡한 물리현상 등으로 인해 광범위한
                  CAE 해석을 요구하고 있습니다. ㈜Delta ES 는 오랫동안 CAE/CFD
                  해석 분야에서 산업 현장의 제품개발 업무수행 및 엔지니어링
                  컨설팅 등을 통해 축적된 다양한 경험과 최고의 기술을 가진
                  최고의 전문가 집단입니다.
                  <br />
                  <br />
                  자동차 OEM, 부품협력 업체 등 신제품 개발에 필수적인 열전달,
                  열유동, FSI 해석 등을 포함한 광범위하고 다양한 물리적인 현상에
                  대한 1D 및 3D의 시스템/부품 CAE/CFD 해석을 수행하여 정확한
                  송우션으로 업계의 CAE/CFD 해석 패러다임을 변화해가고 있습니다.
                  특히 1D 및 3D 해석을 결합한 co-simulation 을 통하여 자동차의
                  부품 단위 해석뿐 아니라 시스템 단위의 해석을 동시에 수행하여
                  각각의 해석의 장점을 모두 적용한 우수한 결과를 도출합니다.
                  <br />
                  <br />
                  저희 ㈜Delta ES 기술진은 자동차 분야 고객들이 해결을 원하는
                  다양한 종류의 과제들에 대해, CAE/CFD 해석과 시험결과 분석 등을
                  통해 제품의 품질 평가 및 설계 최적화, 성능 향상 기술 등에 대한
                  노하우를 제공합니다.
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
                    배터리 모듈단위 열폭주 해
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
                  <div className={styles.aIsFdivTitle}>
                    자동차 프론트 임팩트 빔의
                  </div>
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
                    자동차 디젤엔진 냉각수 유
                  </div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    {imageSrc[4] && (
                      <Image
                        src={imageSrc[4]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    감속기 내 오일처닝현상에
                  </div>
                </div>
              </div>
              <div className={styles.aIsS}>
                <div className={styles.aIsSDes}>
                  <div>
                    <ul>
                      <li>
                        ● 차량 공기역학 (항력, 양력, 측풍 및 고속 주행 안전성
                        등)
                      </li>
                      <li>● Leackage 유동해석</li>
                      <li>● 경주용 자동차 공력성능 해석 및 평가</li>
                      <li>● 카울 시스템 구조 해석</li>
                      <li>● 승객식 (cabin)내 쾌적성 해석</li>
                      <li>● 차량 공조 장치의 성능 평가</li>
                      <li>● 차량 공조시스템 해석 및 부품 성능 해석</li>
                      <li>● 실내 환기, 냉난방 성능 평가</li>
                      <li>● 유리창 제상, 제습 해석 및 평가</li>
                      <li>● Powertrain 부품 성능 해석</li>
                      <li>
                        ● 엔진 실린더 내부 유동해석 (포트설계, Swirl Ratio,
                        Tumble Ratio)
                      </li>
                      <li>
                        ● 토크 컨버터 FSI 해석을 통한 열, 유동, 구조 성능 평가
                        및 피로내구 해석
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.aIsSDes}>
                  <div>
                    <ul>
                      <li>
                        ● 가솔린/ 디젤/ 하이브리드 엔진 냉각수 유동해석 및
                        유로설계
                      </li>
                      <li>● 전기자동차 전동모터 냉각성능 해석</li>
                      <li>
                        ● PEM 형 연료전지 시스템 열유동 해석 <br />
                        (바이폴라플레이트, 개질기, 매니폴드 등)
                      </li>
                      <li>● 섀기 열유동 해석</li>
                      <li>● 윈드쉴드 와이퍼 공력성능 해석</li>
                      <li>● 전착도장 해석</li>
                      <li>● 브레이크 디스크 냉각 성능 해석</li>
                      <li>● 연료탱크 저소음 설계를 위한 해석</li>
                      <li>● 탱크 및 오일 팬, 엔진오일 등 Sloshing 해석</li>
                      <li>● 소음기 배압 및 소음해석</li>
                      <li>● After treatment 를 통한 emission control</li>
                      <li>● HVAC 시스템 해석</li>
                      <li>● 윤활 시스템 해석</li>
                      <li>● 기타</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.aIsSDesL}>
                <p>
                  CAE/CFD 해석 기술을 통해 설계를 완성시키는 (ALD analysis leads
                  design) 기술과 제품개발 프로세스 최적화를 통해 ROI 지수를
                  개선하는 ㈜Delta ES 의 노하우와 고객사의 R&D 생산성 향상은
                  물론 제품개발 프로세스 통합을 위한 Virtual Prototyping 의
                  핵심요소 기술을 전달해 드리고자 합니다. 이를 통해 자동차 산업
                  PLM 콘텐츠를 다양화 하고, 자동차 부품의 수명연장 및 에너지
                  손실 최적화 등의 Green Technology 를 통해 자동차 산업을 저탄소
                  녹색성장 산업의 신 성장 동력의 핵심으로 탈바꿈시키는데
                  기여하고자 합니다.
                </p>
                <p>
                  ㈜ Delta ES 의 축적된 기술 및 각종 솔류션을 통하여 자동차 분야
                  CFD 전문가에게는 지금까지 경험해 보지 못했던 CAE/CFD 해석의
                  고난이도 분야에 해석기술을 적용할 수 있도록 도전 과제에 대한
                  해결책을 제시하고, OEM 부품업체 등의 제품 개발 및 시험평가
                  담당 연구원에게는 손쉽고, 빠르게 해석을 통한 설계 지원과 시럼
                  팩터 세팅 컨셉을 결정하는데 도움을 줄 것으로 확신합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
