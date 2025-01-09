import Image from "next/image";
import styles from "./page.module.css";

export default function Construction() {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/subpageEnergy1.jpg"
            alt="전자기기 및 반도체"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.firstDes}>
            <div className={styles.firstDesWrapper}>
              <h1>발전 / 에너지 / 유틸리티</h1>
              <div className={styles.leftAlignContent}>
                <p>
                  석유와 가수 공정 및 발전 등의 에너지 분야에서도 많은
                  위험요소가 존재하며, 엔지니어가 시스템을 설계할 때 이런
                  위험요소들이 배제된 신뢰성 있고 정확히 운전되는 시스템이
                  되도록 하는 것이 무엇보다 중요합니다.
                  <br />
                  <br />
                  (주)Delta ES 에서 제공하는 1D시스템 해석 솔루션 및 전문 기술을
                  통해서 신규 시스템 설계 시의 검증, 운용 중인 시스템의 유지보수
                  또는 잠재적인 문제점 선결 등 시스템의 위험성을 최소화하고
                  신뢰성 있는 설계가 되로록 지원하고 있습니다.
                  <br />
                  <br />
                  특히 발전 분야에서는 화석연료의 가격 상승으로 원자력 에너지에
                  대한 관심이 커지는 상황에서 일본 후쿠시마 원전 사고로 인하여
                  신규 원전 의 효율 및 안전에 대한 감시가 강화되고 있으며,
                  가스터빈이나 디젤엔진에 의한 발전, 환경 친화적인 신재생 에너지
                  시스템에서도 시스템의 개발 및 분석에 필요한 다양한 해석이
                  필수적입니다.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondWrapper}>
          <div className={styles.secondWrapperTitle}>
            <h2>실제 사례</h2>
            <p>
              아래의 열거된 과제 수행 항목은 저희 기술진이 지금까지 여러 차례
              수행하였던 엔지니어링 컨설팅 프로젝트 및 기술용역 항목으로 건설 /
              토목 산업 분야의 엔지니어링 설계 및 해석 과제 중 가장 자신 있게
              수행항 수 있는 엔지니어링 시뮬레이션 항목입니다.
            </p>
          </div>
          <div className={styles.aBg}>
            <div className={styles.aIs}>
              <div className={styles.aIsF}>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    <Image
                      src="/images/subpageEnergy2.gif"
                      alt="소비자 및 산업용 전자 기기"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    수직진동형 교반기 설계최적
                  </div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    <Image
                      src="/images/subpageEnergy3.jpg"
                      alt="소비자 및 산업용 전자 기기"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    화학 플랜트 및 석유화학 공
                  </div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    <Image
                      src="/images/subpageEnergy4.jpg"
                      alt="소비자 및 산업용 전자 기기"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    CFD 해석을 통한 소수력 발
                  </div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    <Image
                      src="/images/subpageEnergy5.gif"
                      alt="소비자 및 산업용 전자 기기"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    저수조 내 슬러지 청소 장치
                  </div>
                </div>
              </div>
              <div className={styles.aIsS}>
                <div className={styles.aIsSDes}>
                  <div>
                    <ul>
                      <li>● 발열 및 열전달 장비의 열 특성 분석</li>
                      <li>● 재료 혼합</li>
                      <li>● 다상 유동 시스템</li>
                      <li>● 배관 해석</li>
                      <li>● 반응기 설계</li>
                      <li>● 분해, 여과, 증류</li>
                      <li>● Onshore 해석</li>
                      <li>● 해저 광로 해석</li>
                      <li>● Topsides 해석</li>
                      <li>● 파이프라인 해석</li>
                      <li>● Compressor Stations 해석</li>
                      <li>● 원자력발전 시스템</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.aIsSDes}>
                  <div>
                    <ul>
                      <li>● 가스터빈 시스템</li>
                      <li>● 신재생 에너지 시스템</li>
                      <li>● 대형 디젤 엔진 시스템</li>
                      <li>● 냉각시스템 해석</li>
                      <li>● 안전시스템 해석</li>
                      <li>● Transportation & Distribution 시스템</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.aIsSDesL}>
                <p>
                  (주)Delta ES 에서 제공하는 1D 및 3D CFD 솔루션들은 증가된
                  능력, 규제 만족, 제품 품질 향상, 적은 에너지 비용, 개발 시간의
                  감소, 작업처리량의 증가로 더 많은 제품 개발 기회를 제공합니다.
                  이러한 능력들은 공정과 장비 성능의 최적화, 짧은 설계 사이클,
                  비용투자와 위험 감소를 이끌어 냅니다. 또한, 에너지의 중요성 및
                  환경오염에 대한 심각성이 이슈화되면서 정부에서는 환경오염
                  규제를 강화하고 있는 상황이며, 법정 규제치를 만족시키기 위한
                  설비 개선 및 오염물질 감소 노력이 적극적으로 진행되고
                  있습니다.
                </p>
                <p>
                  화학 플랜트, 석유화학 공정 및 재료 분야는 설비의 복잡한 형상
                  및 다양한 물리 화학적 현상을 동반하는 매우 어려운 해석분야이나
                  (주)델타이에스에서는 전문적인 모델링 용역 수행 및 엔지니어링
                  서비스를 해오고 있으며, 보다 나은 해법을 제공해드리고자 항상
                  노력하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
