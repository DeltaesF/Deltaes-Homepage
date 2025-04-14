"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Amesim() {
  const { imageSrc, loading, error } = useFetchImages([
    "amesim1.avif",
    "amesim2.avif",
    "amesim3.avif",
    "amesim4.avif",
    "amesim5.avif",
    "amesim6.avif",
    "amesim7.avif",
    "flomaster8.avif",
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
              <h1>Amesim</h1>
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
                    복잡한 메카트로닉(Mechanics+electronic의 합성어로 통합된
                    다중 물리학 시스템) 제품의 성공적인 설계에는 엔지니어가 초기
                    단계부터 모든 기능적 성능 요구사항을 가장 잘 충족할 수 있는
                    방법을 결정할 수 있는 확장 가능한 다중물리학 시스템
                    시뮬레이션 플랫폼이 필요합니다. 이를 통해 여러 설계 옵션을
                    벤치마킹할 수 있을 뿐 아니라 가장 효율적인 방법으로 최상의
                    설계를 발견할 수 있도록 성능 측면의 균형과 최적화를 앞당길
                    수 있습니다.
                  </p>
                  <p>
                    Simcenter에는 시스템 시뮬레이션 엔지니어가 개발 주기
                    전반에서 처음부터 최종 유효성 검사까지 다중 물리학 동작을
                    빠르고 정확하게 예측할 수 있도록 지원하는 솔루션이 포함되어
                    있습니다.
                  </p>
                  <p>
                    Simcenter AmesimTM 소프트웨어는 통합되고 확장 가능한
                    플랫폼으로서, 엔지니어가 내장된 라이브러리에서 6,500개
                    이상의 구성 요소를 활용할 수 있어 상당한 모델링 시간을
                    절약합니다. 이 구성 요소들은 산업 파트너와 협력하여 개발되고
                    검증되었습니다. 또한, 엔지니어는 자동차, 항공우주, 산업
                    기계, 중장비, 에너지 및 해양과 같은 산업에 적합한
                    애플리케이션 중심 솔루션을 쉽게 찾을 수 있습니다.
                  </p>
                  <p>
                    Simcenter Amesim의 강력한 플랫폼 기능 덕분에 엔지니어는
                    신속하고 정확한 분석을 수행할 수 있습니다. 이는
                    실험계획법(DOE) 및 최적화를 위한 통합 설계 탐색 도구뿐만
                    아니라 시스템의 동적 거동에 대한 더 나은 통찰력을 위해 긴
                    시간 및 주파수 영역 플로팅 기능과 2D 및 3D 애니메이션으로
                    보완됩니다.
                  </p>
                  <p>
                    또한 이 소프트웨어에는 선형 분석 기능이 포함되어 있어
                    엔지니어가 기계적 커플링을 연구하거나 축소된 모델에서 제한된
                    CPU 시간에 동적 시스템 동작을 조사하는 데 사용할 수
                    있습니다. 또한 Excel 또는 데이터 파일에서 매개 변수를
                    가져오거나 시뮬레이션을 자동화하거나 후처리 스크립트를
                    시작하거나 시뮬레이션 결과를 분석하고 플롯을 생성하고
                    보고서를 작성할 수 있습니다.
                  </p>
                  <p>
                    Simcenter Amesim은 또한 엔터프라이즈 프로세스와 통합할 수
                    있는 개방형 환경입니다. 이 소프트웨어는 주요 CAE, CAD 및
                    제어 소프트웨어 패키지와 쉽게 결합할 수 있으며
                    FMI(Functional Mock-up Interface), Modelica®와 상호
                    운용되며 다른 Simcenter 솔루션 및 Teamcenter, Excel에 연결할
                    수 있습니다.
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
                    잡한 메카트로닉 제품의 성공적인 설계에는 엔지니어가 초기
                    단계부터 모든 기능적 성능 요구사항을 가장 잘 충족할 수 있는
                    방법을 결정할 수 있는 확장 가능한 다중물리학 시스템
                    시뮬레이션 플랫폼이 필요합니다. Simcenter Amesim을 사용하면
                    여러 설계 옵션을 벤치마킹할 수 있을 뿐 아니라 가장 효율적인
                    방법으로 최상의 설계를 발견할 수 있도록 성능 측면의 균형과
                    최적화를 앞당길 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    통합되고 확장 가능한 플랫폼으로서, 엔지니어가 내장된
                    라이브러리에서 6,500개 이상의 구성 요소를 활용 할 수 있어
                    상당한 모델링 시간을 절약 가능 합니다. 동급 최고의 기술을
                    사용하여 시뮬레이션 생산성 향상됩니다. <br />
                    선형 분석 기능이 포함, 기계적 커플링을 연구하거나 축소된
                    모델에서 제한된 CPU 시간에 동적 시스템 동작을 조사할 수
                    있습니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    메카트로닉 시스템의 모든 물리현상을 구현하여 시뮬레이션
                    정확도 향상합니다. 시스템 시뮬레이션 엔지니어가 개발 주기
                    전반에서 처음부터 최종 유효성 검사까지 다중 물리학 동작을
                    빠르고 정확하게 예측할 수 있도록 지원하는 솔루션이
                    포함합니다.
                  </p>
                </div>
                <div>
                  <h3>04</h3>
                  <p>
                    엔터프라이즈 프로세스와 통합할 수 있는 개방형 환경입니다.
                    주요 CAE, CAD 및 제어 소프트웨어 패키지와 쉽게 결합할 수
                    있으며 MI(Functional Mock-up Interface), Modelica®와 상호
                    운용되며 다른 Simcenter 솔루션 및 Teamcenter, Excel에
                    연결가능 합니다.
                    <br />
                    시스템 및 제어 모델링용 플랫폼을 공유하여 팀 간의 협업
                    개선합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Simcenter Amesim을 사용해야 하는가?</h2>
              <div className={styles.thirdSubContent}>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <p>
                      Simcenter Amesim은 시스템 성능을 가상으로 평가하고 최적화
                      할 수 있는 확장 가능한 통합 메카트로닉 시스템 시뮬레이션
                      플랫폼입니다. 이를 통해 초기 개발 단계부터 최종 성능 검증
                      및 제어 보정까지 전체 시스템 엔지니어링 생산성이
                      향상됩니다
                    </p>
                    <div className={styles.thirdDesUl}>
                      <div>
                        <ul>
                          <li>시스템 레벨의 성능 시뮬레이션</li>
                          <li>시스템과 시스템의 영향도 분석</li>
                          <li>단일 플랫폼에서 멀티 도메인</li>
                          <li>물리 시스템의 모델링 및 시뮬레이션</li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>Pre-CAD 기반 모델링 프로세스</li>
                          <li>다양한 라이브러리 제공</li>
                          <li>MIL, SIL, HIL 지원</li>
                          <li>FMI/FMU 지원</li>
                        </ul>
                      </div>
                    </div>
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
          <div className={styles.four}>
            <div className={styles.fourWrapper}>
              <h2>Simcenter Amesim 을 통한 실제 모델링</h2>
              <div className={styles.fourGrid}>
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
                    <h3>전기 시스템 시뮬레이션</h3>
                    <p>
                      컨셉트 설계부터 제어 검증까지 전기 및 전자 기계 시스템을
                      시뮬레이션 합니다.
                    </p>
                    <div className={styles.detailButton}></div>
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
                    <h3>추진 시스템 시뮬레이션</h3>
                    <p>
                      차세대 추진 시스템을 개발합니다. 탑재된 추진 기술은 미래
                      설계 성공에 결정적 영향을 미칩니다.
                    </p>
                    <div className={styles.detailButton}></div>
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
                    <h3>유체 시스템 시뮬레이션</h3>
                    <p>
                      유체 시스템의 에너지 효율 및 성능 향상이 가능합니다. 유압
                      및 공압 구성 요소의 동적 거동을 최적화하며 유체 시스템을
                      모델링 할 수 있습니다
                    </p>
                    <div className={styles.detailButton}></div>
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
                    <h3>열관리 시스템 시뮬레이션</h3>
                    <p>
                      설계 사이클의 모든 단계에서 모든 열 상호작용을 고려해
                      시스템의 열관리를 설계 및 최적화하고 성능과 효율성,
                      안정성을 향상시킵니다.
                    </p>
                    <div className={styles.detailButton}></div>
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
                    <h3>메카니컬 시스템 시뮬레이션</h3>
                    <p>
                      모든 기계 시스템의 성능, 에너지 효율성 및 진동 거동을
                      설계하고 최적화 할 수 있는 여러 기능이 포함돼 있습니다.
                    </p>
                    <div className={styles.detailButton}></div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc[7] && (
                      <Image
                        src={imageSrc[7]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>통합 시스템</h3>
                    <p>
                      시스템 시뮬레이션 모델을 통합하여 시뮬레이션 기능의 폭을
                      확장합니다.
                    </p>
                    <div className={styles.detailButton}></div>
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
