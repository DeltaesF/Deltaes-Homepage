import Image from "next/image";
import styles from "./page.module.css";

export default function Consumer() {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/subpageAerospace1.jpg"
            alt="전자기기 및 반도체"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.firstDes}>
            <div className={styles.firstDesWrapper}>
              <h1>항공 / 우주 / 방산</h1>
              <div className={styles.leftAlignContent}>
                <p>
                  항공우주 산업 전반에서 고객의 기대(비용 절감, 표준 향상, 기능
                  증대)가 높아지고 프로그램의 복잡성이 증가함에 따라 경쟁이 더욱
                  어려워지고 있습니다.
                  <br />
                  <br />
                  가스와 재료 가격의 상승에도 불구하고 항공우주 및 방위 산업은
                  계속 성장하고 있습니다. 지난 몇 년 동안 이 업계에서는 대규모
                  통합이 이루어지고 있으며, 그에 따라 경쟁력을 유지할 방법을
                  찾아야 하는 압박이 심해지고 있습니다. 공급업체를 비롯한 전체
                  업계는 글로벌 업무를 수행하고 프로세스를 향상하며 현재
                  시스템을 활용하여 시장에 빠르게 진입하고 비용을 절감하면서
                  품질을 높이는 방법을 찾아야 합니다. 항공 우주 개발 프로세스는
                  용량, 무게, 강도, 효율성, 신뢰성 및 안전성 요구 사항 간의
                  복잡한 균형을 유지해야 합니다.
                  <br />
                  <br />
                  오늘날의 비행체는 기압, 온도 및 구조적 하중의 변화를 포함하여
                  혹독한 작동 조건을 겪습니다. 이러한 비행체에는 함께 안정적으로
                  작동되어야 하는 복잡한 다기능 하위 시스템이 통합되어 있습니다.
                  기술적 불확실성은 모두 남김없이 확인되어야 합니다. 사실적인
                  시뮬레이션의 효과적인 사용은 이러한 프로세스에 반드시 필요한
                  요소입니다. 항공우주 및 방위 제조업체와 공급업체는 통합 개발
                  환경의 일부로 SIMULIA 솔루션을 사용하여 설계 대안을 평가하고
                  프로젝트에 대해 협업하며 컴퓨팅 리소스를 활용하여 해석의
                  효율성을 높이고 있습니다.
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
                      src="/images/subpageAerospace2.gif"
                      alt="소비자 및 산업용 전자 기기"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    클린룸 부스 내 기류해석
                  </div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    <Image
                      src="/images/subpageConsumer3.jpg"
                      alt="소비자 및 산업용 전자 기기"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    자동차 프론트 임팩트 빔의
                  </div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    <Image
                      src="/images/subpageConsumer4.jpg"
                      alt="소비자 및 산업용 전자 기기"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    자동차 디젤엔진 냉각수 유
                  </div>
                </div>
                <div className={styles.aIsFdiv}>
                  <div className={styles.aIsFdivImage}>
                    <Image
                      src="/images/subpageConsumer5.gif"
                      alt="소비자 및 산업용 전자 기기"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.aIsFdivTitle}>
                    감속기 내 오일처닝현상에
                  </div>
                </div>
              </div>
              <div className={styles.aIsS}>
                <div className={styles.aIsSDes}>
                  <div>
                    <p>항공 엔진</p>
                    <ul>
                      <li>
                        ● Solve difficult contact problems with state-of-the-art
                        contact capabilities
                      </li>
                      <li>
                        ● Thermal boundary conditions that can be specified as
                        an analytic field
                      </li>
                      <li>● Linear dynamic capabilities</li>
                      <li>
                        ● Simplify modeling of periodic structures with cyclic
                        symmetry boundary conditions
                      </li>
                      <li>
                        ● User-defined stress and thermal material behavior
                        capabilities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>항공 구조</p>
                    <ul>
                      <li>
                        ● Simulate rivets and other connections with mesh
                        independent fasteners
                      </li>
                      <li>
                        ● Complete composite material modeling including pre and
                        postprocessing
                      </li>
                      <li>
                        ● Damage and failure prediction for composite materials
                      </li>
                      <li>
                        ● Linear and nonlinear capabilities in one software
                        package
                      </li>
                      <li>
                        ● Buckling and post-buckling prediction for metals and
                        composites
                      </li>
                      <li>
                        ● Reduce computational time and improve design
                        turnaround with best-in-class scaling of multiple CPU
                        analysis
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>항공 전자 공학</p>
                    <ul>
                      <li>● Transient response</li>
                      <li>● Steady-state response (frequency domain)</li>
                      <li>
                        ● Heat transfer boundary conditions and thermal
                        “contact”
                      </li>
                      <li>● Coupled thermal-structural analysis</li>
                      <li>● Coupled kinematic-stress analysis</li>
                      <li>● Coupled electrical-structural simulations</li>
                    </ul>
                  </div>
                  <div>
                    <p>탄도학 및 폭발</p>
                    <ul>
                      <li>● Transient response</li>
                      <li>● Steady-state response (frequency domain)</li>
                      <li>
                        ● Heat transfer boundary conditions and thermal
                        “contact”
                      </li>
                      <li>● Coupled thermal-structural analysis</li>
                      <li>● Coupled kinematic-stress analysis</li>
                      <li>● Coupled electrical-structural simulations</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.aIsSDes}>
                  <div>
                    <p>복합 구조</p>
                    <ul>
                      <li>
                        ● Unified modeling and simulation environment based on
                        Abaqus/CAE
                      </li>
                      <li>● Best-in-class element and material libraries</li>
                      <li>● Highly optimized parallel explicit solver</li>
                      <li>
                        ● Coupled Eulerian-Lagrangian (CEL) approach for
                        problems involving extreme deformations and multiple
                        physical domains
                      </li>
                      <li>● Build-in fabric models</li>
                    </ul>
                  </div>
                  <div>
                    <p>착륙 장치</p>
                    <ul>
                      <li>● Transient response</li>
                      <li>● Steady-state response (frequency domain)</li>
                      <li>
                        ● Heat transfer boundary conditions and thermal
                        “contact”
                      </li>
                      <li>● Coupled thermal-structural analysis</li>
                      <li>● Coupled kinematic-stress analysis</li>
                      <li>● Coupled electrical-structural simulations</li>
                    </ul>
                  </div>
                  <div>
                    <p>우주 시스템</p>
                    <ul>
                      <li>● Dynamic analysis (both implicit and explicit)</li>
                      <li>
                        ● Linear and nonlinear static and dynamic simulations
                      </li>
                      <li>● Coupled thermal-structural analysis</li>
                      <li>● Coupled kinematic-stress analysis</li>
                      <li>● Accurate modeling of contact events</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.aIsSDesL}>
                <p>
                  ㈜ Delta ES 의 축적된 기술 및 각종 솔루션을 통하여
                  항공우주/국방산업 분야 CFD 전문가에게 지금까지 경험해 보지
                  못했던 CAE/CFD 해석의 고난이도 분야에 해석기술을 적용할 수
                  있도록 도전 과제에 대한 해결책을 제시합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
