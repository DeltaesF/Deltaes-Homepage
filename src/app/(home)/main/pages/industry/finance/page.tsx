import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Finance() {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/finance1.jpg"
            alt="전자기기 및 반도체"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.firstDes}>
            <div className={styles.firstDesWrapper}>
              <h1>보험 및 금융</h1>
              <div className={styles.leftAlignContent}>
                <h2>
                  변경 사항을 효과적으로 관리하고 의사 결정 가시성을 보장하며
                  조직의 협업을 보호하세요.
                </h2>
                <p>
                  당사의 솔루션을 통해 보험 및 금융 회사는 독특하고 고유한 제품
                  개발 프로세스를 효율적으로 유지하는 동시에 복잡성을 관리하고
                  품질을 보장할 수 있습니다. 이러한 요구 사항은 입증된 통합 ALM
                  플랫폼이 지원하는 신속한 응용 프로그램 개발의 필요성을
                  해결합니다. 단일 개발 프레임워크를 통해 제공되는 기능은 모든
                  자산을 포착하고 소프트웨어 개발 프로세스 전반에 걸쳐 절차와
                  데이터를 결합하는 동시에 이해관계자에게 완전한 의사결정
                  가시성과 연결성을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.siemens}>
          <div className={styles.siemensDes}>
            <h2>금융 서비스를 위한</h2>
            <h3>프로세스 가속화 및 업계 규정 준수 확인</h3>
            <p>
              Polarion ALM을 사용하면 소프트웨어 개발자는 물론 회사 내 다양한
              분야의 사람들에게도 도움이 됩니다. 결과적으로, 소프트웨어 개발자는
              Polarion ALM을 사용하여 프로세스를 개선할 수 있을 뿐만 아니라
              자동화를 사용하여 동료의 작업량을 크게 줄일 수도 있습니다. 이를
              통해 프로세스와 프로세스에 영향을 미치는 테스트의 보안 수준이 훨씬
              높아져 규정 준수가 눈에 띄게 향상됩니다.
            </p>
          </div>
          <div className={styles.siemensImage}>
            <Image
              src="/images/finance2.jpg"
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
