"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Marine() {
  const { imageSrc, error } = useFetchImages([
    "subpageMarine1.avif",
    "subpageMarine2.gif",
    "subpageMarine3.gif",
    "subpageMarine4.gif",
    "subpageMarine5.avif",
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
              <h1>조선 / 해양</h1>
              <div className={styles.leftAlignContent}>
                <p>
                  조선/해양산업 분야에서는 선형 및 해양구조물 설계 시에 많은
                  시간과 비용이 소모되는 수조시험 및 의장, 공조, 환기, 엔진룸
                  냉각 시험 등을 대체하기 위한 방안으로 CFD해석을 통한 연구 및
                  설계지원 업무가 활발히 적용되고 있습니다. CFD는 운항 목적에
                  맞는 선체 설계에서부터 각종 선박의 부품 설계 및 성능 평가까지
                  조선/해양 산업의 전반에 걸쳐 활용되고 있습니다.
                  <br />
                  <br />
                  (주)Delta ES 는 이러한 조선/해양/중공업 분야의 특성에 적합한
                  솔루션들을 갖추고 있습니다. 3D 솔루션들로 유체유동, 열전달 및
                  단순 형태의 강체 동역학 해석, 선박 또는 해양구조물의 운동
                  안전성을 진단할 수 있는 6자유도 해석 (6 DOF), Free Surface
                  해석 등을 포함한 넓고 다양한 물리계의 해석뿐만 아니라, 상호
                  연계를 통해 바다 등의 유체와 선체의 상호 관계 등을 연구하는
                  유체-구조 연성해석(FSI)등으로 엔지니어의 목적에 따라 그
                  사용분야가 무한합니다.
                  <br />
                  <br />
                  1D 열유체 시스템 시뮬레이션 소프트웨어를 사용하여
                  조선/해양/중공업 시스템 엔지니어들이 압력 서지, 압력 강하,
                  유량, 온도 및 시스템 응답 시간을 조사할 수 있게 하여 유체 유동
                  시스템에서 불확실성을 제거합니다.
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
                    파력 발전기 부유체 형상 설
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
                  <div className={styles.aIsFdivTitle}></div>
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
                    풍력발전기 터빈 블레이드
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
                  <div className={styles.aIsFdivTitle}></div>
                </div>
              </div>
              <div className={styles.aIsS}>
                <div className={styles.aIsSDes}>
                  <div>
                    <ul>
                      <li>● 공기역학</li>
                      <li>● 선체기술</li>
                      <li>● LNG 선박 슬로싱 (Sloshing)</li>
                      <li>● 해양 구조물의 공학적 타당성 검토</li>
                      <li>● 유체 유동에 대한 선체 흔들림 (6 DOF)</li>
                      <li>● 공력 소음</li>
                      <li>● 화재의 기체 확산 예상 및 방지</li>
                      <li>● 동력전달 장치</li>
                      <li>● 부품 열 관리</li>
                      <li>● 선박 Funnel 해석</li>
                      <li>● Rudder 해석</li>
                      <li>● 프로펠러 추진 해석</li>
                      <li>
                        ● 진동 및 소음 감소를 위한 FSI 해석, 단순 선형 구조물
                        응력 예측
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.aIsSDes}>
                  <div>
                    <ul>
                      <li>● 승무원실, 객실 등의 공조 성능 해석</li>
                      <li>● 화재 예방을 위한 대책, 안정성확보</li>
                      <li>● 화재 대비 피해 최소화 예방 시스템 설계</li>
                      <li>
                        ● 펌프, 팬 압축기 등을 포함한 회전기기에 대한 최적 설계
                      </li>
                      <li>● 엔진 룸 최적 냉방, 공조 성능 해석</li>
                      <li>
                        ● 최적 연료 소비와 소비율 감소를 위한 엔진 설계 과정에
                        대한 해석 등
                      </li>
                      <li>● 기뢰 폭발 Simulation</li>
                      <li>● Chilled Water 시스템 해석</li>
                      <li>● Potable Water 시스템 해석</li>
                      <li>● Ballast 시스템 해석</li>
                      <li>● Heavy Duty 디젤 엔진</li>
                      <li>● 파이프라인 해석</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.aIsSDesL}>
                <p>
                  ㈜ Delta ES 의 축적된 기술 및 각종 솔류션을 통하여
                  조선/해양산업 분야 CFD 전문가에게 지금까지 경험해 보지 못했던
                  CAE/CFD 해석의 고난이도 분야에 해석기술을 적용할 수 있도록
                  도전 과제에 대한 해결책을 제시합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
