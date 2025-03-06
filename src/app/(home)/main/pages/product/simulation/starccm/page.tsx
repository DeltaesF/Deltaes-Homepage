"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Starccm() {
  const { imageSrc, loading, error } = useFetchImages([
    "starccm1.avif",
    "starccm2.avif",
    "starccm3.avif",
    "starccm4.avif",
    "starccm5.avif",
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
              <h1>STAR-CCM+</h1>
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
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveDes1}>
                    <h3>조선해양, 선박거동 LNG/수소 탱크 평가 등</h3>
                  </div>
                  <div className={styles.fiveImg1}>
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
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveDes1}>
                    <h3>
                      유체기계 (펌프, 팬, 압축기, 가스터빈 등) 성능 분석 등
                    </h3>
                  </div>
                  <div className={styles.fiveImg1}>
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
                <div className={styles.fiveImgP}>
                  <div className={styles.fiveDes1}>
                    <h3>배터리, 전극/셀/팩/시스템 설계 평가 등</h3>
                  </div>
                  <div className={styles.fiveImg1}>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
