import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Software() {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/software1.jpg"
            alt="전자기기 및 반도체"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.firstDes}>
            <div className={styles.firstDesWrapper}>
              <h1>소프트웨어 개발</h1>
              <div className={styles.leftAlignContent}>
                <h2>
                  소프트웨어 개발에서 효과적인 협업, 재사용 및 추적성 제공
                </h2>
                <p>
                  가장 효율적인 시장 출시를 위해 요구 사항, 코드 및 테스트
                  사례를 재사용할 수 있는 능력은 성공적인 소프트웨어 개발에 매우
                  ​​중요합니다. 당사의 솔루션은 귀사가 요구 사항 생성부터 빌드,
                  테스트 및 배포에 이르기까지 소프트웨어 개발 라이프사이클을
                  효과적으로 협업하고, 전달하고, 추적하는 데 도움이 될 수
                  있습니다. 전 세계에 위치한 팀과 함께 더 빠르게 고품질
                  소프트웨어를 출시하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.siemens}>
          <div className={styles.siemensDes}>
            <h2>주요 솔루션</h2>
            <h3>소프트웨어 요구사항 관리의 3가지 핵심</h3>
            <p>
              소프트웨어 엔지니어링 우수성을 달성하기 위해 Polarion 요구 사항을
              어떻게 사용할 수 있습니까? 소프트웨어 요구 사항 코딩, 테스트 및
              릴리스를 위한 단일 통합 솔루션을 통해 팀과 프로젝트를 연결하여
              애플리케이션 개발을 개선합니다.
            </p>
            <div>
              <span>소프트웨어 요구사항 관리의 3가지 핵심 요소:</span>
            </div>
            <div className={styles.siemensDesUl}>
              <ul>
                <li>
                  협업 - 세분화된 권한 제어 및 워크플로 자동화를 통해 보안
                  환경에서 자산을 공유합니다.
                </li>
                <li>
                  추적성 - 개발 프로세스의 모든 단계에서 정보의 완전성을
                  보장합니다.
                </li>
                <li>
                  재사용 - 효과적인 프로젝트 또는 제품 라인 개발을 위해 데이터를
                  재사용, 분기 및 병합합니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.siemensImage}>
            <Image
              src="/images/software2.jpg"
              alt="siemens"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
