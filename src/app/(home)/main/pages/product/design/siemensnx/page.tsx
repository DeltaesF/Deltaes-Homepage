"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Simensnx() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "simensnx1_iudijt",
    "simensnx2_i3tdhl",
    "simensnx3_x6a9sq",
    "simensnx4_itcjkx",
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
              <h2>Siemens</h2>
              <h1>NX</h1>
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
                    Siemens NX는 지멘스 PLM 소프트웨어가 개발한 통합 설계 및
                    제조(CAD/CAM) 소프트웨어입니다. 제품 개발의 모든 단계를
                    지원하는 강력하고 유연한 도구 세트입니다.
                  </p>
                  <p>
                    NX는 다양한 산업 분야에서 사용되며, 자동차, 항공우주, 의료,
                    제조, 에너지 등에서 널리 사용됩니다.
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
                    <strong>통합성 :</strong>
                    NX는 설계, 제조, 제품 관리를 위한 모든 도구를 단일 플랫폼에
                    통합합니다. 이를 통해 설계자, 엔지니어, 제조업체가 보다
                    효율적으로 협업하고 제품 개발 프로세스를 간소화할 수
                    있습니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    <strong>생산성 :</strong>
                    NX는 사용자 친화적인 인터페이스와 강력한 기능을 통해 설계 및
                    제조 프로세스를 가속화합니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    <strong>확장성 :</strong>
                    NX는 다양한 요구 사항을 충족하기 위해 확장할 수 있습니다.
                    예를 들어, 적층 제조, 인공 지능, 가상 현실과 같은 최신
                    기술을 지원합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Siemens NX를 사용해야 할까요?</h2>
              <div className={styles.thirdDes}>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <p>
                      확장 가능한 NX CAD/CAM(컴퓨터 지원 설계/제조) 소프트웨어는
                      스타트업, 중견 기업 및 다국적 기업이 시장에서 경쟁 우위를
                      확보할 수 있도록 지원합니다. <br /> NX CAD 및 NX CAM
                      솔루션 을 사용하여 팀이 보다 효과적으로 협업하고 비교할 수
                      없는 정밀도로 혁신적인 고품질 제품을 더 빠르게 제공할 수
                      있도록 지원하십시오 .
                    </p>
                    <ul>
                      <li>
                        설계: 2D 및 3D 모델링, 형상 생성, 솔리드 모델링, 표면
                        모델링, 설계 검토, 시뮬레이션 등을 위한 도구
                      </li>
                      <li>
                        제조: 공작 기계 프로그래밍, CAM, 3D 프린팅, CNC 가공,
                        시뮬레이션 등을 위한 도구
                      </li>
                      <li>
                        제품 관리: 제품 데이터 관리(PDM), 협업, 프로젝트 관리,
                        의사 결정 지원 도구
                      </li>
                    </ul>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fourWrapper}>
            <div className={styles.fourContent}>
              <h2>주요 솔루션</h2>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>제품 엔지니어링을 위한 NX CAD</h3>
                  <p>
                    강력하고 통합된 CAD(컴퓨터 지원 설계) 솔루션 제품군을
                    사용하여 혁신을 가로막는 장벽을 제거하고, 제품 설계 효율성과
                    품질을 높이며, 개발 비용을 절감하세요.
                  </p>
                  <Link
                    href="https://plm.sw.siemens.com/ko-KR/nx/cad-online/"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
                <div className={styles.fourImg1}>
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
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>제조용 NX CAD</h3>
                  <p>
                    포괄적인 소프트웨어를 통해 생산을 디지털 방식으로 전환하면
                    고성능 부품 제조를 효과적으로 계획, 협업 및 실행할 수
                    있습니다.
                  </p>
                  <Link
                    href="https://plm.sw.siemens.com/ko-KR/nx/manufacturing/"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
                <div className={styles.fourImg2}>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
