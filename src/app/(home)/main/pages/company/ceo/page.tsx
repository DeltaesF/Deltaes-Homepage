"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Ceo() {
  const { imageSrc, error } = useFetchImages(["ceo.avif"]);

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
          {imageSrc[0] && (
            <Image
              src={imageSrc[0]}
              alt=""
              fill
              style={{ objectFit: "cover" }}
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
            <span>성실함과 꾸준한 노력으로</span>
            <h2>국내 CAE/CFD 해석 분야 엔지니어링 시장을 선도하겠습니다</h2>
            <p>
              당사는 정기적으로 발행하는 on-line 저널 Delta ES 웹진과 CAE/CFD
              해석 컨퍼런스, 각 산업 분야별, 주제별 기술 심포지움 세미나 등을
              통해 동종업계 종사자들과 함께 인적 네트워크를 형성할 수 있는 장을
              만드는데 지속적인 노력을 아끼지 않겠습니다. ​<br />
              <br /> 성실함과 꾸준한 노력으로 국내 CAE/CFD 해석 분야 엔지니어링
              시장을 선도하며, 높은 기술/품질/ 교육/지원 등으로 고객과 함께 더욱
              발전하는 Delta ES가 되겠습니다. <br />
              <br />
              ​고객 분들의 어떠한 문의와 요청도 매우 소중하게 받아들입니다.
              <br /> 망설이지 마시고 young@deltaes.co.kr 혹은 고객 call 센터
              070-8255-6001 로 연락 주세요. <br />
              <br /> 감사합니다.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
