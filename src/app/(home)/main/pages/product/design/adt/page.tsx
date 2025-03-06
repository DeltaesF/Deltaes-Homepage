"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Adt() {
  const { imageSrc, loading, error } = useFetchImages([
    "adt1.avif",
    "adt2.avif",
    "adt3.avif",
    "flothermxt4.avif",
    "adt5.avif",
    "adt6.avif",
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
              <h2>Advanced Design Technology</h2>
              <h1>TURBOdesign Suite</h1>
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
                    TURBO Design Suite - 3D 공기역학적 터보 기계 설계 소프트웨어
                  </p>
                  <p>
                    TURBO Design Suite는 펌프, 컴프레서, 팬, 터빈 및 토크
                    컨버터와 같은 모든 유형의 터보 기계 블레이드를 위한 고유한
                    공기역학 및 유체역학 3D 설계 패키지입니다.
                  </p>
                  <p>
                    RBOdesign Suite를 사용하면 성능을 최적화하고 신뢰성을
                    향상시키며 다양한 터보 기계 구성 요소의 비용을 절감할 수
                    있습니다. 당사의 소프트웨어는 펌프, 팬, 압축기, 터빈 및 토크
                    컨버터의 획기적인 설계를 생성하도록 제작되었으며, 당사의
                    엔지니어는 이러한 모든 응용 분야에 대한 솔루션을 찾는 데
                    고도로 숙련되고 경험이 많습니다.
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
                    TURBOdesign Suite는 3D 역설계 방법을 사용하는 터보 기계
                    블레이드용 비점성 공기 역학 및 유체 역학 설계
                    소프트웨어입니다. 이 코드는 축, 혼합 흐름 및 원심 구성의 팬,
                    펌프, 압축기, 터빈 및 토크 컨버터와 같은 모든 유형의 터보
                    기계에 적용 가능합니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    <strong>다양한 응용 분야 지원 :</strong>
                    TURBOdesign Suite는 유체 역학, 열 전달, 구조 해석, 전기 및
                    자기학, 유체 및 열 전달, 전기 및 자기학 등 다양한 응용
                    분야를 지원합니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    <strong>강력한 기능 :</strong>
                    TURBOdesign Suite는 유체 역학, 열 전달, 구조 해석, 전기 및
                    자기학, 유체 및 열 전달, 전기 및 자기학 등 다양한 응용
                    분야를 지원합니다.
                  </p>
                </div>
                <div>
                  <h3>04</h3>
                  <p>
                    <strong>직관적인 사용자 인터페이스 :</strong>
                    TURBOdesign Suite는 직관적인 사용자 인터페이스를 제공하여
                    설계 및 분석 프로세스를 쉽게 배우고 사용할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>05</h3>
                  <p>
                    <strong>다양한 공동 작업 도구 :</strong>
                    TURBOdesign Suite는 다양한 공동 작업 도구를 제공하여 설계 및
                    분석 팀이 효율적으로 협업할 수 있습니다. 여기에는 통합 문서
                    관리, 프로젝트 관리 및 온라인 협업 도구가 포함됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>
                우리의 고유한 3D 역설계 기술은 산업 기간에 따라
                <br /> 다분야 설계 및 최적화를 가능하게 합니다.
              </h2>
              <div className={styles.thirdDes}>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <p>
                      "직접" 설계 접근 방식과 달리 TURBOdesign Suite는 스팬 방향
                      작업 분포, 전체 자오선 평면의 블레이드 하중 및 적층 조건과
                      같은 입력을 사용하여 3D 흐름 현상에 직접 영향을 미칩니다.
                    </p>
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
              <h2>주요 솔루션</h2>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>어려운 흐름 문제 해결</h3>
                  <p>
                    ADT의 고유한 방법은 3D 압력장 측면에서 유체 흐름에
                    수행하려는 작업을 식별하는 것부터 시작하여 해당 결과를
                    달성하기 위한 최적의 형상을 도출합니다. 이를 통해 각 설계에
                    소요되는 시간이 크게 단축됩니다.
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
                  <h3>혁신적인 디자인 만들기</h3>
                  <p>
                    전통적인 방법을 사용하는 디자이너는 편안함을 유지하고 디자인
                    공간을 제한하는 경향이 있습니다. 우리의 3D 역설계 방법을
                    통해 사용자는 기존 설계의 제약을 받지 않고 혁신적인 솔루션을
                    탐색하고 어려운 문제를 해결할 수 있습니다.
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
                  <h3>첫 번째 설계 반복에서 듀티 포인트 충족</h3>
                  <p>
                    압력 하중을 지정하고 유량 및 특정 작업 측면에서 필요한 듀티
                    포인트를 항상 충족하는 형상을 생성합니다. 수많은 시행착오를
                    반복할 필요가 없습니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
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
                  <h3>팀과 프로젝트 간 노하우 공유</h3>
                  <p>
                    캐비테이션, 충격 제어, 2차 흐름과 같은 특정 흐름 현상에 대한
                    최적의 설계 입력 선택은 응용 분야마다 일반성을 갖습니다.
                    이는 비전문가가 최소한의 지침으로 도구를 효과적으로
                    사용하면서도 동급 최고의 효율성으로 설계를 달성할 수 있음을
                    의미합니다.
                  </p>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
