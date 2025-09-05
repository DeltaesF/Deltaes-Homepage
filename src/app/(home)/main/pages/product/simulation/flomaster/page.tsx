"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Flomaster() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "flomaster1_y7zuno",
    "flomaster2_xgi3km",
    "flomaster3_l9efdo",
    "flomaster4_wwioao",
    "flomaster5_qztq5r",
    "flomaster6_yhnj9j",
    "flomaster7_dh8bkv",
    "flomaster8_duc5g4",
    "flomaster9_ybnlxf",
    "Nflomaster1_htrkph",
    "Nflomaster2_e0bwoc",
    "Nflomaster3_vto7it",
    "Nflomaster4_puo7vr",
    "Nflomaster5_bclyj6",
    "Nflomaster6_vx2lox",
    "Nflomaster7_wantk3",
    "Nflomaster8_nwaifl",
    "Nflomaster9_obzr4y",
    "Nflomaster10_lu5rd7",
    "Nflomaster11_vqh0xl",
    "Nflomaster12_iyv6pl",
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
            unoptimized
          />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.firstWrapper}>
            <div className={styles.firstContent}>
              <h2>Simcenter</h2>
              <h1>Flomaster</h1>
              <div className={styles.firstImgP}>
                <div className={styles.firstImg}>
                  {imageSrc1[0] && (
                    <Image
                      src={imageSrc1[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
                <div className={styles.firstDes}>
                  <p>
                    Simcenter Flomaster 는 각종 플랜트설비, 항공, 우주, 조선,
                    해양,철도차량, 반도체, 디스플레이 및 자동차 산업분야의
                    배관망, 공기순환 급배기 덕트, 유압/공압 시스템 등에 대한
                    최적설계 및 다이나믹 해석을 위해 사용되는 열-유체 시스템
                    시뮬레이션 툴 입니다.
                  </p>
                  <p>
                    Simcenter Flomaster 는 신뢰할 수 있는 성능 데이터의 풍부한
                    라이브러리를 사용하여, 최종 설계 및 부품 공급업체가 선정되기
                    전에 개념 설계수준의 P&ID로부터 시스템 설계를 시작할 수
                    있습니다.
                    <br />
                    소프트웨어의 유연성으로 인해 구성부품들의 정보가 설계주기
                    동안에 하나씩 구체화 되면 업데이트를 통하여 전체 시스템
                    모델이 완성됩니다.
                  </p>
                  <p>
                    <a href="#flomaster-2504">
                      Simcenter Flomaster 2504 업데이트 내용이 추가되었습니다.
                    </a>
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
                    엔지니어링 효율성 향상 : 소프트웨어 사용 및 직관적인
                    인터페이스로 작업 효율성 향상 및 D.S. Miller 데이터, NIST
                    REFPROP 데이터 베이스 기반의 400개 이상 즉시 사용 가능한
                    구성요소 제공
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    비용 절감 : 각종 플랜트설비 설계과정 초기에 시스템
                    시뮬레이션을 통해 대폭적인 비용 절감이 가능한 설계안을
                    확보할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    시간 단축 : 각 산업분야의 샘플 시스템, 빠르고 강력한 솔버,
                    기타 CAE 툴과의 협업 등을 기반으로 하여 쉽고, 빠른 모델링이
                    가능합니다.
                  </p>
                </div>
                <div>
                  <h3>04</h3>
                  <p>
                    시스템 성능 향상 : Flomaster 엔지니어는 몇 분 안에 수백 개,
                    또는 수천 개의 분석을 실행할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>05</h3>
                  <p>
                    안전 및 규정 준수 보장 : 고장 시나리오 식별이 가능하기에,
                    경감장치 설계 및 심각한 사고를 설계 초기에 방지할 수 있으며,
                    고장 발생 시 긴급조치 또는 복구에 걸리는 시간 파악이
                    가능합니다
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>Simcenter Flomaster의 주요 기능</h2>
              <div className={styles.thirdSubContent}>
                <div className={styles.thirdImg}>
                  {imageSrc1[1] && (
                    <Image
                      src={imageSrc1[1]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
                <div className={styles.thirdImgDes}>
                  <p>
                    전 제조 산업체에 대한 simcenter Flomaster 의 적용 분야 예
                  </p>
                </div>
                <div className={styles.thirdDes}>
                  <div>
                    <ul>
                      <li>액체, 기체, Two Phase 시스템 정적/동적 시뮬레이션</li>
                      <li>시스템 상호작용을 포함한 내부/외부 열흐름</li>
                      <li>유체 시스템의 유동 밸런싱</li>
                      <li>내부유동 시스템의 통합 성능 데이터 (D.S. Miller)</li>
                      <li>
                        전 제조 산업체 적용이 가능한 광범위한 컴포넌트
                        라이브러리
                      </li>
                      <li>캐비테이션을 포함한 신속한 다이나믹 해석 모델링</li>
                      <li>배관시스템 시운전을 포함한 시스템 스타트-업</li>
                      <li>상대습도 및 절대습도 추적</li>
                      <li>압축 시스템에서 초킹</li>
                      <li>주울-톰슨 효과</li>
                      <li>과도 전류 시스템의 열용량</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>유체 혼합</li>
                      <li>실험설계 파라메트릭 및 몬테카를로 연구 분석</li>
                      <li>기하학적 공동 및 스월 포함 가스터빈 2차 유동</li>
                      <li>시뮬레이션 기반의 3D 특성화 성능곡선</li>
                      <li>1D-3D 연성해석</li>
                      <li>MATLAB/Excel 등의 엔지니어링 도구에 링크</li>
                      <li>사용자가 제작하는 구성 요소</li>
                      <li>제로 흐름 열전달</li>
                      <li>열교환기 냉각팩의 3D 시각화 및 세분화</li>
                      <li>파라메트릭 시뮬레이션 및 FMI 모델 생성</li>
                      <li>3D CAD파일 가져오기</li>
                      <li>시스템 통합 및 자동화를 위한 개방형 API</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={styles.newContent}
                id="flomaster-2504"
                style={{ scrollMarginTop: "270px" }}
              >
                <h2>Simcenter Flomaster 2504</h2>
                <div className={styles.newDescription}>
                  <h3>🔹 Wobbe Index 계산 개선</h3>
                  <p>
                    연료 비교 시 사용되는 Wobbe Index 계산에서 밀도 정의를
                    사용자가 선택할 수 있게 되어, 기준값 또는 현재 시점의 값
                    중에서 쉽게 전환할 수 있습니다. 이를 통해 온라인 계산으로
                    결과 정확도를 더욱 향상시킬 수 있습니다.
                  </p>
                  <div className={styles.newImg}>
                    {imageSrc1[9] && (
                      <Image
                        src={imageSrc1[9]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "contain" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 2상 과도 유동(Transient Two-Phase Flow)</h3>
                    <p>
                      기존 준정상(quasi-steady) 해석 방법 외에 새로운
                      과도(transient) 모델이 추가되어, 압축성과 관성력을 고려한
                      시간에 따른 2상 흐름의 해석이 가능해졌습니다. 이는 밸브
                      작동과 같은 실제 상황에 대한 더 깊이 있는 이해를
                      제공합니다.
                    </p>
                    <div className={styles.newImg1}>
                      {imageSrc1[10] && (
                        <Image
                          src={imageSrc1[10]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 시스템 섹션 On/Off 기능</h3>
                    <p>
                      시스템의 특정 부분을 제외할 수 있습니다(제외된 섹션의 구성
                      요소와 노드는 시뮬레이션에 영향을 미치지 않습니다). 이
                      기능은 대규모 시스템 작업(초기 조사 시뮬레이션 속도를
                      높이기 위해 섹션을 제외할 수 있는 경우)이나 시스템의 특정
                      부분을 조사하거나 문제를 해결할 때 유용합니다.
                    </p>
                    <div className={styles.newImg2}>
                      {imageSrc1[11] && (
                        <Image
                          src={imageSrc1[11]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 Pipeline Plot Tool</h3>
                    <p>
                      시스템의 길이에 따른 변수 분포를 직관적으로 파악할 수
                      있도록 하는 새로운 플롯 도구가 추가되었습니다. 결과를
                      이미지나 영상으로 손쉽게 내보낼 수 있어 협업 및 보고에도
                      용이합니다.
                    </p>
                    <div className={styles.newImg3}>
                      {imageSrc1[12] && (
                        <Image
                          src={imageSrc1[12]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 Min/Max 자동 추출 기능</h3>
                    <p>
                      시스템 내 특정 지점에서의 최대값/최소값을 자동으로
                      계산하여 사용자에게 제공합니다. 해당 값이 발생한 컴포넌트
                      또는 노드 위치도 함께 표시되어 시스템 이상 탐지 및 설계
                      개선에 활용할 수 있습니다.
                    </p>
                    <div className={styles.newImg4}>
                      {imageSrc1[13] && (
                        <Image
                          src={imageSrc1[13]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>
                      🔹 여러 시나리오를 동시에 실행(Parallel simulations for
                      Experiments)
                    </h3>
                    <p>
                      실험 기능(Experiments)에서 시뮬레이션을 병렬로 실행할 수
                      있는 기능이 추가되어, 최대 40배 빠른 시뮬레이션 속도를
                      구현할 수 있습니다. 또한, API를 활용한 사용자 맞춤형
                      응용프로그램도 손쉽게 개발 가능합니다.
                    </p>
                    <div className={styles.newImg5}>
                      {imageSrc1[14] && (
                        <Image
                          src={imageSrc1[14]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 단위 설정 기능 강화</h3>
                    <p>
                      실험 기능(Experiments)에서 시뮬레이션을 병렬로 실행할 수
                      있는 기능이 추가되어, 최대 40배 빠른 시뮬레이션 속도를
                      구현할 수 있습니다. 또한, API를 활용한 사용자 맞춤형
                      응용프로그램도 손쉽게 개발 가능합니다.
                    </p>
                    <div className={styles.newImg6}>
                      {imageSrc1[15] && (
                        <Image
                          src={imageSrc1[15]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>
                      🔹 라이선스 없는 FMU 내보내기 (License-Free FMU Export)
                    </h3>
                    <p>
                      이제 Simcenter Flomaster 라이선스가 없는 환경에서도 실행
                      가능한 FMU(Functional Mock-up Unit)를 내보낼 수 있습니다.
                      라이선스 서버가 없는 외부 환경, 협력사 공유 등에 매우
                      유용한 기능입니다.
                    </p>
                    <div className={styles.newImg7}>
                      {imageSrc1[16] && (
                        <Image
                          src={imageSrc1[16]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 xDT 플랫폼 라이선스</h3>
                    <p>
                      Simcenter의 Executable Digital Twin(xDT)을 엣지 디바이스에
                      배포할 수 있도록 하는 새로운 라이선스 옵션이
                      추가되었습니다. 복잡한 라이선스 설정 없이 유연하게 디지털
                      트윈을 배포할 수 있어 인프라 운영 효율성을 높입니다.
                    </p>
                    <div className={styles.newImg8}>
                      {imageSrc1[17] && (
                        <Image
                          src={imageSrc1[17]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 P&ID 속성 매핑 기능</h3>
                    <p>
                      P&ID 파일에서 가져온 요소들의 속성을 시뮬레이션 컴포넌트의
                      데이터 필드에 자동 매핑할 수 있게 되어, CAD 데이터의
                      재사용성을 높이고 시스템 구축 시간을 단축할 수 있습니다.
                    </p>
                    <div className={styles.newImg9}>
                      {imageSrc1[18] && (
                        <Image
                          src={imageSrc1[18]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 Simcenter Flomaster 2504 신규 기능 요약 표</h3>
                    <div className={styles.newImg10}>
                      {imageSrc1[19] && (
                        <Image
                          src={imageSrc1[19]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.newDescription}>
                    <h3>🔹 Preview 기능 (사용자 설정 시 활성화 가능)</h3>
                    <div className={styles.newImg11}>
                      {imageSrc1[20] && (
                        <Image
                          src={imageSrc1[20]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.four}>
            <div className={styles.fourWrapper}>
              <h2>주요 응용 분야</h2>
              <div className={styles.fourGrid}>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc1[2] && (
                      <Image
                        src={imageSrc1[2]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>열유체 시스템 공학을 위한 고급 물리학</h3>
                    <p>
                      열유체 시스템의 안전하고 효율적인 작동을 보장하는 데
                      중요한 복잡한 물리적 현상을 분석합니다.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://plm.sw.siemens.com/ko-KR/simcenter/simulation-test/advanced-physics-thermo-fluid-systems-engineering/"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc1[3] && (
                      <Image
                        src={imageSrc1[3]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>열유체 시스템의 상세 설계</h3>
                    <p>전체 엔지니어링 단계에서 상세 설계를 위한 천이 해석.</p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://plm.sw.siemens.com/ko-KR/simcenter/simulation-test/detailed-design-thermo-fluid-systems/"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc1[4] && (
                      <Image
                        src={imageSrc1[4]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>열유체 시스템의 초기 설계</h3>
                    <p>
                      Simcenter는 비용을 절감하고 출시 기간을 단축하는 데 도움이
                      되는 열유체 시스템용 시뮬레이션 솔루션을 제공합니다.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://plm.sw.siemens.com/ko-KR/simcenter/simulation-test/thermo-fluid-system-early-design/"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc1[5] && (
                      <Image
                        src={imageSrc1[5]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>열유체 시스템의 유지보수, 수리 및 작동</h3>
                    <p>
                      전체 수명 주기에 걸쳐 열유체 시스템의 디지털 트윈을
                      활용하여 투자 수익을 극대화하십시오.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://plm.sw.siemens.com/ko-KR/simcenter/simulation-test/thermo-fluid-systems-maintenance/"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc1[6] && (
                      <Image
                        src={imageSrc1[6]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>열유체 시스템 시뮬레이션</h3>
                    <p>
                      열 유체 시스템의 효율성과 안전성을 보장하면서 혁신을
                      가속화하십시오.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://plm.sw.siemens.com/ko-KR/simcenter/simulation-test/thermo-fluid-system-simulation/"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc1[7] && (
                      <Image
                        src={imageSrc1[7]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>통합 시스템</h3>
                    <p>
                      시스템 시뮬레이션 모델을 통합하여 시뮬레이션 기능의 폭을
                      확장합니다.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://plm.sw.siemens.com/ko-KR/simcenter/simulation-test/system-integration/"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.gridDes}>
                    {imageSrc1[8] && (
                      <Image
                        src={imageSrc1[8]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </div>
                  <div className={styles.textOverlay}>
                    <h3>추진 시스템 생성</h3>
                    <p>
                      미래의 모빌리티 애플리케이션을 위한 첨단 추진 기술을
                      설계합니다.
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://plm.sw.siemens.com/ko-KR/simcenter/simulation-test/propulsion-system-simulation/"
                        target="_blank"
                      >
                        <button>자세한 내용 보기 </button>
                      </Link>
                    </div>
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
