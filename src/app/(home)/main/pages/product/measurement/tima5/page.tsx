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
    "tima5_2.png",
    "tima5_3.png",
    "tima5_5.avif",
    "tima5_6.avif",
    "tima5_7.avif",
    "tima5_8.avif",
    "tima5_9.avif",
    "tima5_10.avif",
    "timapulse2.avif",
    "tima5_11.jpg",
    "tima5_12.png",
    "tima5_13.jpg",
    "tima5_14.jpg",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const pdfUrls = [
    "https://drive.google.com/file/d/1n3xnm97VMHk9txdo2yO3iujuuG5Lp7Gm/view?usp=sharing",
    "https://drive.google.com/file/d/1bgbPhcpSTMeD35su4gUHXw3UV9UFnYvG/view?usp=sharing",
  ];

  const openPdfInNewTab = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

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
                  </p>
                  <p>
                    열 인터페이스 재료의 분석이 간단하고, 포괄적인 TIMA 5는 높은
                    수준의 기능성과 탁월한 사용 편의성을 제공 합니다.
                  </p>
                  <button>구매 문의</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondWrapper}>
            {imageSrc[9] && (
              <Image
                src={imageSrc[9]}
                alt="TIMA 배경 이미지"
                fill
                sizes="100vw"
                style={{ objectFit: "cover", zIndex: -1 }}
                priority
              />
            )}
            <div className={styles.secondContent}>
              <div className={styles.secondDes}>
                <div>
                  <h2>TIMA 5 제품 영상</h2>
                  <h3>TIMA 5 기능 · 강점 요약한 영상입니다.</h3>
                  <button onClick={() => openPdfInNewTab(pdfUrls[0])}>
                    브로슈어 Download
                  </button>
                  <button onClick={() => openPdfInNewTab(pdfUrls[1])}>
                    TIMA pulse DATASHEET
                  </button>
                </div>
                <div>
                  <iframe
                    src="https://drive.google.com/file/d/1HseRmhC9S2wYT-rncS6sOBwx3vLI7Sdx/preview"
                    width="564"
                    height="280"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <div className={styles.thirdPoint}>
                <ul>
                  <h2>주요 특징</h2>
                  <li>» ASTM D5470 완전 준수</li>
                  <li>» 컴팩트 및 올인원 디자인</li>
                  <li>» 자동화 및 예약 테스트 기능</li>
                  <li>» 신속 교체 가능한 테스트 헤드</li>
                  <li>» 고정밀 두께 모니터링</li>
                  <li>» 사용자 경험 최적화 및 간편한 사용성</li>
                </ul>
                <ul>
                  <h3>주요 소재 및 컴파운드 물성치</h3>
                  <li>» 열저항</li>
                  <li>» 체적 열전도율</li>
                  <li>» 접촉 저항</li>
                </ul>

                <ul>
                  <h3>Key testing schemes</h3>
                  <li>» 온도 의존성</li>
                  <li>» 압력 의존성</li>
                  <li>» 열적 성능</li>
                  <li>» 인터페이스 품질</li>
                  <li>» 열기계적 안정성</li>
                  <li>» 노화 거동 / 수명 예측</li>
                </ul>

                <ul>
                  <h3>Scope of samples</h3>
                  <li>» TIM 소재</li>
                  <li>» 페이스트 및 그리스</li>
                  <li>» 갭 패드 및 갭 필러</li>
                  <li>» 포일 및 시트</li>
                  <li>» 접착제 및 경화 소재</li>
                  <li>» 몰드 컴파운드</li>
                  <li>» 언더필러</li>
                  <li>» 기판 및 인터포저</li>
                </ul>
              </div>
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
              <h2>Sample properties & Measurement conditions</h2>
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
              <h2>Measurement accuracy</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg1_4}>
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
              <h2>Software screenshots</h2>
              <div className={styles.thirdImgP}>
                <div className={styles.thirdImg1_5}>
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
              <div className={styles.thirdPoint2_1}>
                <h3>단순하면서도 다재 다능한 솔루션</h3>
                <p>
                  TIMA5는 실험실 및 산업용 열 측정을 위한 종합적인 장비로, ASTM
                  D5470 규정에 따라 다양한 열 특성 분석을 수행할 수 있도록
                  설계되었습니다.
                </p>
              </div>
              <div className={styles.thirdPoint2}>
                <ul>
                  <h2>샘플 범위</h2>
                  <li>◎ Greases and pastes</li>
                  <li>◎ Cured gap fillers and adhesives</li>
                  <li>◎ Anisotropic composites</li>
                  <li>◎ Phase change materials</li>
                </ul>
                <ul>
                  <h3>출력 데이터</h3>
                  <li>◎ Overall thermal resistance</li>
                  <li>◎ Effective and bulk thermal conductivity</li>
                  <li>◎ Thermal interface resistance</li>
                  <li>◎ Pressure and temperature dependency</li>
                </ul>
                <ul>
                  <h3>고급 응용 분야</h3>
                  <li>◎ Curing parameters study</li>
                  <li>◎ Boundary conditions study</li>
                  <li>◎ In-situ reliability investigation</li>
                  <li>◎ Extreme conditions testing</li>
                </ul>
              </div>
              <div className={styles.thirdPoint2Img1}>
                {imageSrc[10] && (
                  <Image
                    src={imageSrc[10]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                )}
              </div>
              <div className={styles.thirdPointDeC}>
                <div className={styles.thirdPointDe}>
                  <h2>ASTM D 5470 표준을 넘어선 혁신적인 성능</h2>
                  <p>
                    TIMA 5는 ASTM 표준 D5470-17에서 규정된 시험 방법을 완벽히
                    충족하는 동시에, 완전 자동화된 특성 평가 및 선택적 TTV
                    모듈을 추가하여 ASTM에 포함되지 않는 여러 Test를 제공합니다.
                  </p>
                  <ul>
                    <li>◎ Interchangeable test heads</li>
                    <li>◎ High-precision curing tool</li>
                    <li>◎ Optional TTV module</li>
                    <li>◎ Fully automated measurement</li>
                    <li>◎ Up to 150°C sample temperature</li>
                    <li>
                      ◎ ± 300 N clamping and tensile force with integrated load
                      cell
                    </li>
                  </ul>
                </div>
                <div className={styles.thirdPointDeImg}>
                  <div className={styles.thirdPoint2Img1_2}>
                    {imageSrc[11] && (
                      <Image
                        src={imageSrc[11]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    )}
                  </div>

                  <div className={styles.thirdPointDeImgBottom}>
                    <div className={styles.thirdImg2_1}>
                      {imageSrc[6] && (
                        <Image
                          src={imageSrc[6]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                    <div className={styles.thirdImg3_1}>
                      {imageSrc[7] && (
                        <Image
                          src={imageSrc[7]}
                          alt="전자기기 및 반도체"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.thirdPoint2_1}>
                <h3>열화 및 신뢰성 평가</h3>
                <p>
                  TIMA는 열 기계적 스트레스에 노출된 열 인터페이스 소재의 가속
                  수명 테스트를 수행할 수 있습니다. 실제 적용 환경에서 발생하는
                  기계적 변형을 정밀하게 재현함으로써, 소재의 신뢰성과 장기
                  안정성을 평가할 수 있습니다.
                </p>
              </div>
              <div className={styles.thirdPointDeImg2}>
                <div className={styles.thirdPoint2Img1_3}>
                  {imageSrc[12] && (
                    <Image
                      src={imageSrc[12]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </div>
                <div className={styles.thirdPoint2Img1_4}>
                  {imageSrc[13] && (
                    <Image
                      src={imageSrc[13]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.thirdPoint}>
                <ul>
                  <li>◎ In-situ monitoring of aging / degradation</li>
                  <li>◎ Highly accelerated: 5000 cycles per day</li>
                </ul>
                <ul>
                  <li>◎ Application-related testing conditions</li>
                  <li>◎ Thickness- and pressure-controlled cycling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
