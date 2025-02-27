"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Module() {
  const { imageSrc, loading, error } = useFetchImages([
    "flothermxt11.jpg",
    "flothermxt12.jpg",
    "flothermxt14.jpg",
    "flothermxt15.jpg",
    "flothermxt16.jpg",
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
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <h2>Simcenter</h2>
              <h1>Flotherm</h1>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h2>추가모듈</h2>
              <div className={styles.imgP1}>
                <div className={styles.des1}>
                  <h3>EDA Bridge</h3>
                  <p>
                    Simcenter Flotherm Flexx EDA Bridge 는 설계 제품의 Art
                    work에 대한 방열설계 최적화를 위해 PCB 설계 파일을 다양한
                    형태로 변환하여 MCAD S/W로 전달하는 기능을 제공합니다.
                  </p>
                  <p>
                    기존 방열해석을 위해 사용하던 IDF 파일의 경우 PCB의 패턴을
                    처리하는데 많은 어려움이 있었습니다. EDA Bridge를 사용하면
                    PCB의 형상, 재료 및 IC의 열특성을 쉽게 3D CAD로 변환 할 수
                    있습니다.
                  </p>
                </div>
                <div className={styles.img1}>
                  {imageSrc[0] && (
                    <Image
                      src={imageSrc[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.imgP2}>
                <div className={styles.des2}>
                  <h3>Package Creator</h3>
                  <p>
                    Simcenter Flotherm Flexx Package Creator 는 열해석
                    엔지니어가 신속하고 정확한 패키지 모델링과, 제작된 상세
                    패키지 모델로 부터 정확한 열설계를 할 수 있도록 지원합니다.
                  </p>
                </div>
                <div className={styles.img2}>
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
              <div className={styles.imgP1}>
                <div className={styles.des1}>
                  <h3>FloMCAD™ Bridge</h3>
                  <p>
                    주요 MCAD 3D CAD(NX, CATIA V5, Creo, Solid Edge, Solidworks
                    등) Import 가능하며, Original CAD DATA를 Simcenter Flotherm
                    entity 로 변환이 가능합니다.
                  </p>
                  <p>
                    또한, 불필요한 부품 형상 제거 기능으로 계산 속도 효율성을
                    크게 향상시킬 수 있습니다.
                  </p>
                </div>
                <div className={styles.img1}>
                  {imageSrc[0] && (
                    <Image
                      src={imageSrc[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.imgP2}>
                <div className={styles.des2}>
                  <h3>T3STER™ – Flotherm Automatic Calibration</h3>
                  <p>
                    Automatic Calibration 기능은 상세한 패키지 시뮬레이션 결과를
                    T3STER 측정결과와 일치시키는 자동 보정기능 입니다.
                  </p>
                  <p>
                    (위) T3STER™ 를 이용한 과도 응답(Transient Response) 측정
                    Simcenster T3STER™ Master 소프트웨어는 열용량 값을 구조
                    함수로 변환.
                  </p>
                  <p>
                    (아래) Model Calibration으로 패키지 내부를 정확히 모델링,
                    해석결과가 측정값에 일치하도록 자동보정하여 정확한 온도분포
                    예측
                  </p>
                </div>
                <div className={styles.img2}>
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
              <div className={styles.imgP1}>
                <div className={styles.des1}>
                  <h3>Flotherm Pack</h3>
                  <p>
                    Siemens Flotherm Flotherm Pack은 전자 기기 설계 시 열 관리
                    문제를 해결하는 데 사용되는 전문적인 전산 유체 역학(CFD)
                    소프트웨어 패키지입니다. 엔지니어들은 이 소프트웨어를
                    사용하여 전자 기기의 열 성능을 시뮬레이션하고 분석하여 과열
                    문제를 방지하고 최적의 설계를 달성할 수 있습니다.
                  </p>
                  <ul>
                    <li>
                      3D 열 유동 및 열전달 시뮬레이션: Flotherm은 전자 기기
                      내부의 복잡한 열 유동 및 열전달 현상을 정확하게
                      시뮬레이션할 수 있습니다.
                    </li>
                    <li>
                      다양한 물리 모델 지원: Flotherm은 난류, 복사, 열전도 등
                      다양한 열 물리 현상을 모델링하는 데 필요한 다양한 물리
                      모델을 제공합니다.
                    </li>
                    <li>
                      자동 메쉬 생성 및 적응: Flotherm은 사용자가 직접 메쉬를
                      생성할 필요 없이 자동으로 메쉬를 생성하고 적응시킬 수 있어
                      사용 편의성을 높입니다.
                    </li>
                    <li>
                      포괄적인 결과 분석: Flotherm은 온도 분포, 열 유속,
                      열전달량 등 다양한 결과를 시각화하고 분석하는 데 필요한
                      다양한 도구를 제공합니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.img1}>
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
              <div className={styles.imgP2}>
                <div className={styles.des2}>
                  <h3>HyperLynx PI</h3>
                  <p>
                    Siemens Flotherm HyperLynx PI는 전자 시스템 설계 및 분석을
                    위한 통합 소프트웨어 플랫폼입니다. 이 플랫폼은 전자 시스템의
                    열, 유체, 전기 성능을 시뮬레이션하고 분석하는 데 필요한 모든
                    도구를 제공합니다.
                  </p>
                  <ul>
                    <li>
                      열 시뮬레이션: Flotherm은 전자 시스템의 열 성능을
                      시뮬레이션하는 업계 최고의 도구입니다. 이 도구를 사용하여
                      컴퓨터, 통신 장비, 자동차 부품 등 다양한 전자 제품의 온도
                      분포, 열 유속, 열 저항 등을 계산할 수 있습니다.
                    </li>
                    <li>
                      유체 시뮬레이션: HyperLynx PI는 전자 시스템의 유체 성능을
                      시뮬레이션하는 기능을 제공합니다. 이 기능을 사용하여 냉각
                      시스템의 유동 패턴, 압력 강하, 온도 분포 등을 계산할 수
                      있습니다.
                    </li>
                    <li>
                      전기 시뮬레이션: HyperLynx PI는 전자 시스템의 전기 성능을
                      시뮬레이션하는 기능을 제공합니다. 이 기능을 사용하여 전력
                      분배, 전압 강하, 접지 루프 임피던스 등을 계산할 수
                      있습니다.
                    </li>
                    <li>
                      통합 분석: Flotherm HyperLynx PI는 다양한 시뮬레이션
                      결과를 통합하여 분석하는 기능을 제공합니다. 이 기능을
                      사용하여 전자 시스템의 열, 유체, 전기 성능 간의 상호
                      작용을 이해할 수 있습니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.img2}>
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
      )}
    </div>
  );
}
