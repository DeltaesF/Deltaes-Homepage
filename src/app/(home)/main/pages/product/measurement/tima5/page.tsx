"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Tima5() {
  const { imageSrc, loading, error } = useFetchImages([
    "tima5_1.avif",
    "tima5_2.avif",
    "tima5_3.avif",
    "tima5_4.avif",
    "tima5_5.avif",
    "tima5_6.avif",
    "tima5_7.avif",
    "tima5_8.avif",
    "tima5_9.avif",
    "tima5_10.avif",
    "timapulse2.avif",
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
              <h2>NANOTEST</h2>
              <h1>TIMA 5</h1>
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
                    NANOTEST TIMA 5는 열 인터페이스 재료 및 낮은 범위에서 중간
                    범위의 열 전도성을 갖는 기타 재료의 열 특성을 측정하기 위한
                    ASTM D 5470을 완벽하게 준수하는 측정 시스템입니다.
                    <br />
                    유리 칩은 일회용이지만 세척하여 재사용하는 것이 좋습니다.
                    칩홀더는 컴팩트하며 카드키처럼 랙에 삽입됩니다. 더 높은
                    온도에서의 측정을 위해 칩에는 반대쪽에 두 개의 가열 요소가
                    포함되어 있어 최대 180°C까지 가열할 수 있습니다.
                    <br />열 인터페이스 재료의 분석이 간단하고, 포괄적인 TIMA
                    5는 높은 수준의 기능성과 탁월한 사용 편의성을 제공 합니다.
                  </p>
                  <button>구매 문의</button>
                </div>
              </div>
            </div>
          </div>
          {imageSrc[10] && (
            <div
              className={styles.secondWrapper}
              style={{
                backgroundImage: `url(${imageSrc[10]})`, // 동적으로 배경 이미지 설정
              }}
            >
              <div className={styles.secondContent}>
                <div className={styles.secondDes}>
                  <div>
                    <h2>TIMA 5 제품 영상</h2>
                    <h3>TIMA 5 기능 · 강점 요약한 영상입니다.</h3>
                    <button>브로슈어 Download </button>
                    <button>TIMA pulse DATASHEET</button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>Technical Specification</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg1_1}>
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
              <h2>Sample properties</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg1_2}>
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
              <h2>Measurement conditions</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg1_3}>
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
              <h2>Measurement accuracy</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg1_4}>
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
              <h2>Software screenshots</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg1_5}>
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
              <h2>온칩 가열</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdDes2}>
                  <p>
                    열 인터페이스 재료 분석기(TIMA 5)는 열 인터페이스 재료뿐만
                    아니라 낮거나 중간 정도의 열 전도율을 갖는 기타 재료 등급의
                    열 및 열-기계적 특성을 분석하기 위한 범용 시스템입니다.
                    <br /> ASTM D5470는 업계 전반의 일반적으로 사용되는 TIM
                    특성화 표준으로, 대부분의 애플리케이션 시나리오에 적응하는
                    데 필요한 가변성을 제공합니다.
                  </p>
                  <p>
                    실험실에 적합하며 컴팩트하고 모든 냉수 공급이 제공됩니다.
                    하루 교육만으로 장치를 완전히 이해하고 모든 유형의 특성화 및
                    재료 연구를 용이하게 수행할 수 있습니다.
                  </p>
                </div>
                <div className={styles.thirdImg}>
                  {imageSrc[6] && (
                    <Image
                      src={imageSrc[6]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <h2>우수한 TIM 특성화</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg2}>
                  {imageSrc[7] && (
                    <Image
                      src={imageSrc[7]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.thirdDes2}>
                  <p>
                    ASTM 표준 D5470은 열 재료를 특성화하고 다음을 얻는 절차를
                    설명합니다.벌크 열전도율그리고인터페이스 저항. 첫 번째 값은
                    재료별로 다르지만 두 번째 값은 상황에 가장 민감하며 현대
                    응용 분야에서 그 중요성이 점점 더 커지고 있습니다. 특히 TIM
                    특성화의 경우 ASTM D5470은 기존의 다른 방법보다 우수합니다.
                    일반적으로 인터페이스 저항은 다음 매개변수에 따라 달라지며,
                    이 매개변수는 모두 TIMA에서 구성 가능한 옵션입니다.
                  </p>
                  <ul>
                    <li>TIM 및 그 구성(매트릭스, 입자 등)</li>
                    <li>표면 재질, 품질 및 거칠기</li>
                    <li>접촉력 및 접착력</li>
                    <li>표면 온도</li>
                  </ul>
                </div>
              </div>
              <h2>원동력</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdDes2}>
                  <p>
                    강력한 모터를 사용하면 최대 300N의 수직력으로 시료 재료를
                    압축하고 인장할 수 있습니다. 이는 샘플 단면에 따라 최대
                    3MPa/430PSI로 변환됩니다. 이를 통해 TIM 응용 분야의 상당한
                    부담을 해결하고 재료 개발을 위한 포괄적인 데이터를 얻고
                    데이터시트에 제공할 수 있습니다.
                  </p>
                  <p>
                    샘플에 가해지는 힘을 제어하는 ​​동안 TIMA는 몇 미크론
                    분해능으로 샘플 두께를 정밀하게 모니터링하여 재료 압축에
                    대한 정확한 정보를 제공하고 샘플의 유효 열전도도를
                    모니터링합니다.
                  </p>
                </div>
                <div className={styles.thirdImg3}>
                  {imageSrc[8] && (
                    <Image
                      src={imageSrc[8]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <h2>자동화되고 표준화된 측정</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg2}>
                  {imageSrc[9] && (
                    <Image
                      src={imageSrc[9]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.thirdDes2}>
                  <p>
                    TIMA 측정 시스템은 완전 자동화되어 있어서 재료를 넣고 측정을
                    생산성을 높일 수 있습니다. ASTM D 5470 표준에 따른 다양한
                    두께의 내구성 테스트와 페이스트나 갭 필러의 주기적인 검사를
                    포함합니다. 모든 측정 데이터는 현장에서 바로 모니터링되고
                    저장되어, 관련 소프트웨어를 통해 쉽게 확인이 가능합니다.
                    이를 통해 측정이나 샘플의 노화 정도를 적시에 확인하고,
                    적절한 시점에 다음 단계로 넘어가기 위한 결정을 할 수
                    있습니다. 이러한 과정은 시간을 절약하고 개발 속도를
                    가속화하는 데 도움을 줍니다. TIMA 소프트웨어는 회사의 표준
                    작업 절차를 마련하고, 측정의 반복성과 비교 가능성을 높이는
                    데에도 유용합니다.
                  </p>
                  <div className={styles.thirdDes2_1}>
                    <div>
                      <h3>주요 특징</h3>
                      <ul>
                        <li>TIM 및 그 구성(매트릭스, 입자 등)</li>
                        <li>표면 재질, 품질 및 거칠기</li>
                        <li>접촉력 및 접착력</li>
                        <li>표면 온도</li>
                      </ul>
                    </div>
                    <div>
                      <h3>주요 출력 재료 및 복합 특성</h3>
                      <ul>
                        <li>TIM 및 그 구성(매트릭스, 입자 등)</li>
                        <li>표면 재질, 품질 및 거칠기</li>
                        <li>접촉력 및 접착력</li>
                        <li>표면 온도</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.thirdDes2_1}>
                    <div>
                      <h3>주요 테스트 계획</h3>
                      <ul>
                        <li>TIM 및 그 구성(매트릭스, 입자 등)</li>
                        <li>표면 재질, 품질 및 거칠기</li>
                        <li>접촉력 및 접착력</li>
                        <li>표면 온도</li>
                      </ul>
                    </div>
                    <div>
                      <h3>샘플 범위</h3>
                      <ul>
                        <li>TIM 및 그 구성(매트릭스, 입자 등)</li>
                        <li>표면 재질, 품질 및 거칠기</li>
                        <li>접촉력 및 접착력</li>
                        <li>표면 온도</li>
                      </ul>
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
