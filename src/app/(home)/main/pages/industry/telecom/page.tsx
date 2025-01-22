"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Telecom() {
  const { imageSrc, error } = useFetchImages(["telecom1.jpg", "telecom2.jpg"]);

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
              alt="가전제품 및 산업용 전자 기기"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          <div className={styles.firstDes}>
            <div className={styles.firstDesWrapper}>
              <h1>이동통신 및 미디어</h1>
              <div className={styles.leftAlignContent}>
                <h2>미디어 및 통신 산업을 위한 혁신적인 디지털 솔루션</h2>
                <p>
                  우리의 디지털 솔루션을 구현함으로써 미디어 및 통신 회사는 국제
                  통신 대기업부터 일상적으로 사용하는 휴대용 장치에 이르기까지
                  모든 것을 지원하는 더 빠르고 안정적인 최첨단 기술을 제공하고
                  있습니다. 제품과 프로세스가 더욱 복잡해짐에 따라 완전한
                  투명성을 제공하는 확장 가능하고 유연한 프레임워크가
                  필수적입니다. 고급 디지털화 기능 덕분에 우리는 다음 세대를
                  위한 혁신적이고 원활한 소프트웨어 애플리케이션 개발 절차를
                  통해 기업을 미래로 안내하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.secondWrapper}>
          <div className={styles.secondDes}>
            <h2>주요 솔루션</h2>
            <h3>혁신을 가속화할 수 있는 3가지 방법</h3>
            <p>
              Polarion ALM 사용자는 시너지 효과를 발휘하고 완전한 추적성을
              달성하며 실시간 협업을 통해 소프트웨어 프로젝트를 보다 빠르고
              안정적이며 체계적으로 구현할 수 있습니다. 많은 장점 중 일부는
              다음과 같습니다.
            </p>
            <div className={styles.secondUl}>
              <ul>
                <li>
                  혁신 가속화 - 협업 - 추적 - 재사용 <br />
                  요구 사항, 코딩, 테스트 및 릴리스를 위한 단일 통합 솔루션을
                  사용하여 팀과 프로젝트를 연결하고 애플리케이션 개발 프로세스를
                  개선합니다.
                </li>
                <li>
                  안전한 협업 <br /> Polarion ALM을 사용하면 팀이 공유 자산에
                  대해 쉽고 안전하게 협업할 수 있습니다. 세분화된 권한 제어와
                  강력하게 구성 가능한 워크플로우 자동화를 통해 누가 무엇을 볼
                  수 있는지, 누가 무엇을 변경할 수 있는지, 언제 변경할 수 있는지
                  제어할 수 있습니다.
                </li>
                <li>
                  자동화된 추적성 <br /> Polarion ALM을 사용하면 개발 프로세스의
                  모든 단계에 대한 정보의 완전성을 보장할 수 있습니다. 모든
                  단계는 클릭 한 번이면 됩니다. 수정된 코드 줄부터 시작하여 높은
                  수준의 변경 요청까지 가능합니다.
                </li>
                <li>
                  효율적인 재사용 <br /> 연구에 따르면 요구 사항, 코드 및
                  테스트의 60~80%가 프로젝트 간에 공유됩니다. Polarion ALM을
                  사용하면 효과적인 순차 또는 병렬 프로젝트 및 제품 라인 개발을
                  위해 데이터를 재사용하거나 분기할 수 있습니다.
                </li>
                <li>
                  Polarion 유연성 및 접근성 <br />
                  Polarion은 회사의 모범 사례 워크플로우를 따를 수 있는 가능성을
                  제공하는 프로젝트 구성에 유연성을 제공하며 이는 엔지니어가
                  지침에 따라 이러한 사례에 따라 행동할 수 있도록 도와줍니다.
                </li>
              </ul>
            </div>
            <p>
              10년 넘게 고객 만족과 성장을 이어온 Polarion ALM 사용자가 어떻게
              시너지 효과를 발휘하고 완전한 추적성을 달성하며 실시간으로
              협업하는지 알아보세요.
            </p>
          </div>
          <div className={styles.secondImage}>
            {imageSrc[1] && (
              <Image
                src={imageSrc[1]}
                alt="가전제품 및 산업용 전자 기기"
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
