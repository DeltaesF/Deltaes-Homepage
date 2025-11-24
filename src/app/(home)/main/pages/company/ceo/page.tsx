"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Ceo() {
  const { imageSrc1, error } = useFetchCloudinaryImages(["ceo_kafkb5"]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
        <section className={styles.title}>
          <h1>CEO 인사말</h1>
          <p className={styles.titleSub}>
            (주) Delta ES 홈페이지를 방문해 주신
          </p>
          <p className={styles.titleSub2}>여러분을 진심으로 환영합니다.</p>
        </section>
        <figure className={styles.ceoImg}>
          {imageSrc1[0] && (
            <Image
              src={imageSrc1[0]}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              unoptimized
            />
          )}
        </figure>
        <section className={styles.ceoImgDes}>
          <h2>고객의 중요 프로세스활성화​</h2>
          <p>
            우리는 고객이 어디에 있든 협력하여 지 속 가능한 맞춤형 솔루션을
            제공합니다. <br />
            우리는 약 20년 이상 제조산업 현장의 연구 개발 기술자들 및 사업장
            현업에서 고객의 요구 사항과 문제해결 방안에 대해 빠르게 대응할 수
            있는 전문가들로 구성된 강력한 엔지니어링 전문가 네트워크를 구축해
            왔습니다. 우리는 우리 직원과 기업이 우리가 수행하고 있는 엔지니어링
            시뮬레이션 기반의 제품 설계 최적화 기술로 우리나라의 중소기업 혁신에
            기여하고, 지역 사회의 일부라는 사실을 자랑스럽게 생각합니다.
          </p>
        </section>
        <div className={styles.line}></div>
        <section className={styles.cIntroduce}>
          <h2>Delta ES 개요 소개영상</h2>
          <div className={styles.cIntroduceSub}>
            <div className={styles.textBox}>
              <p>
                Delta ES는 고객에게 중요한 프로세스를 개선하여 ROI를 향상시킬 수
                있는 연구개발의 미션 크리티컬 솔루션을 제공합니다.
                <br /> 우리는 고객이 환경 및 운영 효율성을 높이고, 반복적이고
                다량의 CO2 배출을 발생시키는 제품 검증용 Physical Test에서
                엔지니어링 시뮬레이션 기술을 통해 접근함으로써, 비용절감과
                개발기간 단축 및 제품의 성능향상을 통해 탈 탄소화 할 수 있도록
                지원합니다.
                <br /> 우리는 더욱 지속가능한 미래를 향해 나아가고 있습니다.
                Delta ES에서는 모든 사람을 위해 보다 지속 가능한 세상을
                발전시키는 고객의 중요한 프로세스 개선을 지원합니다.
              </p>
            </div>
            <div className={styles.videoBox}>
              <iframe
                src="https://drive.google.com/file/d/1qKLapUEDH0elRZ2KzFR3rS7kL0oFsT7v/preview"
                width="480"
                height="270"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles.line}></div>
          <section className={styles.conclusion}>
            <h2>
              &quot;AI-Driven digital physics & physical testing solutions
              provider for digital twin system&quot;
            </h2>
            <p>
              - 우리는 제품 개발 및 검증을 위한 엔지니어링 시뮬레이션과 물리적
              테스트 연계 기술로 고객의 제품개발 기간단축, 원가절감, 제품
              성능향상으로 고객의 탄소중립 가치실현을 위한 ESG 경영 지원과
              지속가능한 성장 추구에 이바지 합니다. ​<br />
              <br /> - 우리는 전력반도체 신뢰성평가장비, 반도체 열저항 및
              정션온도측정 장비, 열계면 소재 열물성 측정장비 등을 공급 합니다.
              <br />
              <br />
              - 우리는 AI 반도체, Data Center, 미래형 그린모빌리티 및 각종
              전자장비의 냉각기술 및 열관리 솔루션을 공급 합니다.
              <br />
              <br />
              - 우리는 클린 룸 내 공조, 냉각, 기류분석, 파티클 등의 거동을
              추적하고 수율향상 기술을 지원합니다.
              <br />
              <br />
              - 우리는 1D/3D, BCI-ROM 등의 기술을 통해 제품 설계단계에서 설비
              운영단계에 이르기 까지 고객사 R&D의 ROI를 개선하는데 최선을
              기울입니다.
              <br />
              <br />
              - 우리는 CFD / FEA / EMI 등을 포함하는 CAE 해석 소프트웨어 공급 및
              고객의 NEEDS에 대응하는 기술용역, 엔지니어링 서비스를 제공합니다.
              <br />
              <br />
              제품 및 서비스 관련 문의는 당사홈페이지 Q&A (질문과 답변)란을
              이용하시거나,
              <br />
              <strong>young@deltaes.co.kr / 070-8255-6001</strong> 로
              연락주시면, 즉시 지원하겠습니다. <br />
              <br /> 감사합니다.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
