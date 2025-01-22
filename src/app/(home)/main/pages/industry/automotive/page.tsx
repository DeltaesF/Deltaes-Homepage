"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Automotive() {
  const { imageSrc, error } = useFetchImages([
    "automotive1.jpg",
    "automotive2.jpg",
    "automotive3.jpg",
    "automotive4.jpg",
    "automotive5.jpg",
    "automotive6.jpg",
    "automotive7.jpg",
    "automotive8.jpg",
    "automotive9.jpg",
    "automotive10.jpg",
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
              <h1>자동차 및 운송</h1>
              <div className={styles.leftAlignContent}>
                <h2>자동차 및 운송 산업을 위한 디지털화</h2>
                <p>
                  차세대 설계 및 개발 도구로 자율주행, 전기, 공유 모빌리티 및
                  커넥티비티와 관련된 교통 혁명을 선도합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondWrapper}>
          <h2>세부 산업 분야</h2>
          <div className={styles.secondGrid}>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[1] && (
                  <Image
                    src={imageSrc[1]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>자동차 OEM</h3>
                <p>
                  OEM은 업계를 휩쓸고 있는 디지털 혼란 시대에 맞춰 스스로
                  발전하고 있습니다.
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/automotive-manufacturing.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
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
                <h3>자동차 부품업체</h3>
                <p>
                  자동차 부품업체를 위한 통합 솔루션으로 프로그램을 개선 합니다.
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/automotive-manufacturing.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
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
                <h3>트럭, 버스 및 특수 차량</h3>
                <p>
                  가상 시제품 제작을 통해 트럭과 버스 제조사가 조기에 설계
                  문제를 해결하도록 지원합니다.
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/automotive-manufacturing.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
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
                <h3>모터사이클, 자전거 및 부품</h3>
                <p>
                  운전 경험 제공을 지원하는 첨단 설계, 시뮬레이션 및 테스트 도구
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/automotive-manufacturing.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
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
                <h3>철도 시스템</h3>
                <p>
                  성능과 안락함을 위한 철도 시스템 설계를 최적화 하는 솔루션
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/automotive-manufacturing.html"
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
      <div className={styles.third}>
        <div className={styles.siemens}>
          <div className={styles.siemensDes}>
            <h2>주요 솔루션</h2>
            <h3>ADAS 및 자율주행차 개발</h3>
            <p>
              자율주행차와 기능은 안전하고, 보안이 유지되고, 인증된 경우에만
              성공적으로 배포할 수 있습니다. 그러나 컴퓨터가 인간만큼 또는
              인간보다 더 안전하게 운전하도록 구현하기가 예상보다 더 복잡한
              것으로 나타났습니다. ADAS(첨단 운전자 보조 시스템) 및
              AV(자율주행차) 영역에 대한 관심이 더욱 고조됨에 따라 Siemens는
              설계를 혁신, 최적화 및 검증하는 데 도움이 되는 맞춤형 솔루션을
              제공하고 있습니다. Siemens의 강력한 도구를 사용하면 기능적 디지털
              트윈, 시뮬레이션, 실제 기록 및 특허받은 중요 시나리오 방법론을
              활용하여 안전하고 보안이 유지되며 고성능의 규정을 준수하는
              자율주행의 구현을 가속할 수 있습니다.
            </p>
            <Link href="https://www.sw.siemens.com/ko-KR/" target="_blank">
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
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
        <div className={styles.siemens2}>
          <div className={styles.siemensDes2}>
            <h3>​전기차 솔루션</h3>
            <p>
              더욱 엄격해지는 환경 규제, 경쟁 심화, 소비자 수요 증가에 직면한
              자동차 제조업체의 성공은 장거리 안전하고 편안한 전기 자동차(EV)의
              전체 라인업을 얼마나 빨리 시장에 출시할 수 있는지에 달려 있습니다.{" "}
              <br />
              자동차 산업을 위한 당사의 차량 전기화 소프트웨어 솔루션은
              엔지니어가 제조에 미치는 영향을 미리 고려하면서 EV 설계, 검증 및
              검증을 가속화하는 데 도움을 줍니다. 한 플랫폼에서 다른 플랫폼으로
              설계를 변환하는 데 필요한 시간을 최소화함으로써 고객이 구매하고
              싶어하는 안전하고 신뢰할 수 있으며 편안한 전기 옵션으로 EV
              포트폴리오를 빠르게 확장할 수 있습니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/digital-thread/design-engineering/vehicle-electrification/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
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
        <div className={styles.siemens3}>
          <div className={styles.siemensDes3}>
            <h3>자동차 성능 엔지니어링</h3>
            <p>
              연비 및 에너지 효율과 성능을 조화시키는 작업과 같은 최신 차량
              설계에 따르는 과제를 성공적으로 해결하려면 디지털 방식으로
              탐색하고 물리적으로 확인하는 혁신적 설계가 필요합니다. Siemens
              Digital Industries Software는 엔지니어링 서비스뿐 아니라 폭넓은
              시뮬레이션과 테스트 솔루션을 제공해 어려운 설계 결정을 해결할 수
              있도록 지원합니다. 성능 엔지니어링 및 메카트로닉 시스템 검증을
              지원하기 위한 테스트와 시뮬레이션의 조합으로 디지털 트윈이라는
              개념이 탄생했습니다. 이는 처음부터 제대로 된 성능 엔지니어링과
              설계를 프런트로딩하기 위한 솔루션을 제공하는 데 핵심적인 역할을
              하며, 동급 최강의 모델링, 동급 최강의 테스트이자 이 둘의
              조합입니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/solutions/engineering-simulation/automotive-engineering/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
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
        <div className={styles.siemens2}>
          <div className={styles.siemensDes2}>
            <h3>스마트 제조</h3>
            <p>
              자동차 제조업체는 세계화, 더욱 엄격한 지속 가능성, 규제 요구사항,
              새롭고 혁신적인 설계 및 기능에 대해 갈수록 증가하는 소비자 요구를
              포함하여 업계에 영향을 미치는 끊임없는 변화에 직면해 있으며, 이에
              대한 압박이 커지고 있습니다. 이와 더불어, 생산 목표를 달성하고
              수익성을 유지해야 한다는 지속적인 압박에 시달리고 있습니다.
              전통적인 '제작, 테스트, 분해' 사고 방식과 제조에 대한 단절된 접근
              방식을 취하고 있는 자동차 제조업체는 차세대 자동차를 유지하고
              제공하기 위해 고군분투하고 있습니다. 실시간 제조 성능 및 오류
              식별에 필수적인 인사이트가 없으면 결국 실패로 이어져 생산 속도가
              느려지고 경쟁력을 위태롭게 할 수 있습니다. 제조업체는 오늘날
              빠르게 변화하는 자동차 환경에서 경쟁하기 위해 스마트 제조 접근
              방식을 채택하고 제조 조직의 단절된 지점 전체에 여러 솔루션을
              구현해야 합니다.
            </p>
            <Link href="https://www.sw.siemens.com/ko-KR/" target="_blank">
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[9] && (
              <Image
                src={imageSrc[9]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
