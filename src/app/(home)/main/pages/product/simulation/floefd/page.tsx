import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Floefd() {
  return (
    <div className={styles.container}>
      <div className={styles.firstWrapper}>
        <div className={styles.firstContent}>
          <h2>Simcenter</h2>
          <h1>FLOEFD</h1>
          <div className={styles.firstImgP}>
            <div className={styles.firstImg}>
              <Image
                src="/images/floefd1.jpg"
                alt="Flotherm XT"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.firstDes}>
              <p>
                Simcenter FLOEFD 는 지멘스 NX, Solid Edge, CATIA V5,
                Creo,SolidWorks와 같은 기계설계 3D CAD에 탑재된 CFD 해석
                툴입니다.
              </p>
              <p>
                Simcenter FLOEFD 는 MCAD 환경에서 실행되기 때문에 3DCAD 데이터의
                전환 또는 이동 없이 곧바로 해석을 진행할 수있습니다.Simcenter
                FLOEFD 는 몇 번의 클릭만으로 복잡한 형상에 대한유동해석을 쉽고
                빠르게 수행할 수 있습니다. 설계로부터 성능을평가하고 재설계하는
                반복 시간을 크게 단축 시켜줍니다.
              </p>
              <button>구매 문의</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondWrapper}>
        <div className={styles.secondContent}>
          <h2>주요 특징</h2>
          <div className={styles.secondDes}>
            <div>
              <h3>01</h3>
              <p>
                3D CAD data 정리 신속한 진행 및 3D CAD에서 CFD SW로의 Geometry
                transfer 가 불필요.계산공간 내 유동영역 자동 검출.벽면 근처
                조밀한 격자 불필요 (Integral Boundary Layer Model 사용).수치계산
                - 이론식 - 실험에 의한 경험식 등의 조합을 사용하여 CFD 해석을
                수행.(격자 등의 문제로 수치 해를 구하기 곤란한 곳에, 경험식
                /이론식 자동 적용하여 해를 구할 수 있음.)
              </p>
            </div>
            <div>
              <h3>02</h3>
              <p>
                CFD 해석에 대한 전문지식을 요구하지 않음. (3D CAD 설계자들에
                유리)3D CAD 로 설계와 CFD 해석을 수행, 설계자들은 익숙한
                환경에서 쉽게 사용이 가능함.수치계산-이론식-경험식 등의 자동
                사용으로 수렴성이 매우 뛰어남.자동으로 육면체 격자 제작하여
                해석. 사용자 필요시 수동격자 제작 가능합니다.
              </p>
            </div>
            <div>
              <h3>03</h3>
              <p>
                2015년 일본자동차학회 상용 CFD SW 자동차 외부유동 해석 블라인드
                테스트 시험결과 비교,FLOEFD 는 STAR-CCM+와 함께 가장 정확한
                CFD해석 SW임이 확인 되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdWrapper}>
        <div className={styles.thirdContent}>
          <h2>왜 Simcenter FLOEFD를 사용해야 할까요?</h2>
          <div className={styles.thirdDes}>
            <div>
              <p>
                Simcenter FLOEFD는 설계자와 분석가 등을 위해 다중 물리 기능을
                갖춘 완전한 CAD 임베디드 CFD 소프트웨어입니다. 유체 흐름
                시뮬레이션 및 열 해석을 프런트로드하고 기본 CAD 지오메트리를
                사용하면 일반적인 CFD 접근 방식에 비해 개발 시간을 최대
                65~75%까지 단축할 수 있습니다.
              </p>
            </div>
            <div>
              <p>
                <strong>프런트로드 CFD 시뮬레이션을 통한 개발 시간 단축</strong>{" "}
                <br />
                Simcenter FLOEFD를 사용하면 설계 엔지니어가 설계 프로세스 초기에
                시뮬레이션을 수행할 수 있으며, 이 시점에 문제를 식별 및
                수정하거나 개선 사항을 탐색하는 것이 비용면에서 더 효율적입니다.
                CAD에 통합되면 생산성이 2배에서 40배까지 향상되는 것으로
                나타납니다.
              </p>
            </div>
            <div>
              <p>
                <strong>설계자를 위한 직관적인 CFD 인터페이스 활용</strong>{" "}
                <br />
                설계 엔지니어는 Simcenter FLOEFD CAD 임베디드 인터페이스, 안내식
                시뮬레이션 설정 및 실행, 지능형 자동화 기술, 간단한 결과 보기를
                통해 시뮬레이션을 수행할 수 있습니다. 설계 성능을 조기에 탐색할
                수 있으므로 기존의 장벽을 극복하지 않고도 정보에 입각한 의사
                결정을 내릴 수 있습니다.
              </p>
            </div>
            <div>
              <p>
                <strong>
                  기본 CAD 지오메트리에서 직접 CFD를 수행하고 CFD 오버헤드 제거
                </strong>
                <br />
                도구 간 지오메트리 변환으로 인해 발생하는 지연을 없애고 CFD
                해석을 위한 CAD 형상 준비의 복잡성을 극복할 수 있습니다.
                Simcenter FLOEFD는 기본 지오메트리를 직접 사용하므로 성능을
                탐색하거나 모델의 변경 사항을 평가할 때 CAD 모델이 동시에
                변경됩니다. ​
              </p>
            </div>
            <div>
              <p>
                강력한 자동 메싱과 모든 품질의 CAD 지오메트리를 처리할 수 있는
                고유한 SmartCell 기술의 핵심 강점을 갖추고 있습니다. 이러한
                강점은 어셈블리의 작고 좁은 간격과 표면 불일치를 처리하는 데
                도움이 되는데, 기존 CFD 도구에서는 이 과정을 해결하느라 긴
                지연이 발생하는 경우가 많습니다. 이는 CAD 지오메트리의 자동 밀봉
                및 누출 식별과 같은 전처리를 위한 지능형 자동화에 의해
                보완됩니다.
              </p>
            </div>
            <div>
              <p>
                <strong>
                  시뮬레이션 기반 설계 사용 – 탐색, 비교 및 최적화
                </strong>
                <br />
                파라메트릭 스터디 및 설계 탐색 기능을 활용하여 가용한 시간 내에
                더 많은 설계 옵션을 평가할 수 있습니다. 'what if' 시나리오를
                평가하여 다양한 조건에서 제품 성능과 신뢰성을 보장합니다.
              </p>
            </div>
            <div>
              <p>
                이 소프트웨어를 사용하면 CFD 결과 시각화, 플롯 및 표 형식 결과와
                나란히 두고 설계를 쉽게 비교할 수 있으며, 몇 번의 클릭만으로
                보고서도 생성할 수 있습니다. 시뮬레이션을 사용하여 설계를
                최적화하면 CAD 모델을 다른 엔지니어링 부서에 직접 전달할 수
                있습니다.
              </p>
            </div>
            <div className={styles.thirdImgP}>
              <div className={styles.thirdDes2}>
                <h3>주요산업 분야</h3>
                <div>
                  <ul>
                    <li>
                      정상상태 및 과도상태 해석 (Steady state and transient
                      analysis)
                    </li>
                    <li>
                      전도, 대류, 복사 열전달 해석 (Conduction, convection and
                      radiation)
                    </li>
                    <li>조립제품 및 단품 등에 대한 thermal coupling 해석</li>
                    <li>
                      CFD 해석 결과와 구조해석 SW와의 data interface를 통한
                      열응력, 열변형 등에 대한 구조 안정성 해석
                    </li>
                  </ul>
                  <p>활용산업분야:</p>
                  <ul>
                    <li>
                      반도체, 디스플레이, 모바일기기 등의 전기 및 전자 산업
                    </li>
                    <li>산업용 기기 및 설비, 시스템 산업</li>
                    <li>항공, 우주, 방산 분야</li>
                    <li>
                      자동차 전장부품, 배터리, 공조시스템, 엔진 냉각수 유로
                      설계, In-wheel Motor 등 관련 산업
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fourWrapper}>
        <div className={styles.fourContent}>
          <h2>유동해석 주요기능</h2>
          <div className={styles.fourImgP1}>
            <div className={styles.fourDes1}>
              <h3>CAD 임베디드 CFD 시뮬레이션</h3>
              <p>
                엔지니어는 CAD 임베디드 CFD 시뮬레이션 소프트웨어를 통해 CAD
                설계 환경에서 유체 흐름 시뮬레이션 및 열전달 해석을 수행할 수
                있습니다. 직관적인 인터페이스를 가지고 있으며, 무엇보다도 CAD
                지오메트리를 직접 사용합니다. 이를 통해 CAD 데이터 변환에 드는
                시간 오버헤드를 없앨 수 있습니다. 또한 엔지니어는 여러 설계
                연구를 수행하고 결과를 평가하여 지오메트리 또는 작동 경계 조건을
                수정할 경우 성능에 어떤 영향을 미치는지 확인할 수 있습니다.
                이렇게 하면 시뮬레이션 결과를 개발 초기에 사용할 수 있어 의사
                결정이 개선되며 다른 CAD 기반 엔지니어링 기능과 보다 원활한
                커뮤니케이션이 가능해집니다.
              </p>
            </div>
            <div className={styles.fourImg1}>
              <Image
                src="/images/floefd2.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.fourImgP2}>
            <div className={styles.fourDes2}>
              <h3>자동화된 메시</h3>
              <p>
                Simcenter FLOEFD 자동 유체 체적 감지 및 자동 메싱 기법은 CAD
                지오메트리와 직접 연동되도록 설계되었습니다. 모델을 단순화하지
                않고도 복잡하거나 가변적인 품질의 지오메트리를 처리할 수
                있습니다. SmartCells 기술은 Simcenter FLOEFD의 견고한 데카르트
                침수 경계 그리드 방법을 통한 효율적인 자동 메싱의 핵심입니다.
                SmartCell은 단일 셀 내에서 수많은 고체 및 유체 영역을 정확하게
                분석하여 계산을 위한 여러 제어 볼륨으로 세분화할 수 있습니다.
                이는 간섭이 있는 지오메트리 또는 매우 적은 볼륨과 같은 까다로운
                조건을 자동으로 처리하는 등 복잡한 CAD 모델의 메싱에 매우
                중요합니다. Simcenter FLOEFD는 지오메트리 특징형상을 기반으로
                자동 메시 미세 조정을 적용하며, 흐름 및 열 구배가 더 높은 영역의
                효율적인 메시 해상도를 위해 솔루션 적응형 미세 조정을 활용할 수
                있습니다. 로컬 메싱에 사용할 수 있는 옵션과 메시를 보다 정밀하게
                제어하려는 엔지니어를 위한 수동 제어가 마련되어 있습니다.
                <br />
                Simcenter FLOEFD 메싱 및 솔버 기술은 CFD 문제를 시뮬레이션하기
                위한 고전적인 3D 유한 체적 수치 접근법과 경험적 및 해석적 방법을
                고유하게 조합합니다. 비교적 거친 메시를 빠르고 쉽게 생성할 수
                있어 일반적인 CFD 소프트웨어에 비해 매우 효율적이고 안정적으로
                해석할 수 있으며 상대적으로 높은 정확도를 유지합니다.
                <br />
                Simcenter FLOEFD를 채택하면 메싱에 드는 시간이 며칠에서 몇
                시간으로, 몇 시간에서 몇 분으로 단계적으로 변화하는 경우가
                많습니다. CAD 임베디드 접근 방식의 혁신적인 메싱 기술을 활용하면
                설계 엔지니어와 비전문가가 설계 프로세스 초기에 CFD 해석을
                안정적으로 수행할 수 있습니다. 또한 숙련된 분석가가 광범위한
                일반적인 CFD 문제를 해결할 수 있도록 빠르고 효율적인 대안 접근
                방식도 제공합니다.
              </p>
            </div>
            <div className={styles.fourImg2}>
              <Image
                src="/images/floefd3.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.fourImgP1}>
            <div className={styles.fourDes1}>
              <h3>파라메트릭 스터디</h3>
              <p>
                Simcenter FLOEFD는 매우 유능하고 직관적인 파라메트릭 스터디
                기능을 통합합니다. 이를 사용하여 모델 지오메트리 또는 다양한
                운영 시나리오의 변경 사항을 실험 설계 연구까지 탐색해 보십시오.
                <br />
                Simcenter FLOEFD의 파라메트릭 스터디 기능과 결합된 비교 구성을
                통해 엔지니어는 지오메트리 및 경계 조건의 변화가 성능에 미치는
                영향을 보다 쉽게 이해할 수 있습니다. 사용자는 수치, 그래프,
                시각화된 결과 및 플롯으로 결과를 비교할 수 있습니다.
                <br />
                설계 탐색을 위한 세 가지 기본 방법은 다음과 같습니다. <br />
                'what-if' 스터디는 일련의 변경된 매개변수를 사용하여 결과 설계를
                탐색하고, 비교 도구를 사용하여 최상의 솔루션을 직접 찾습니다.
                <br />
                목표 기반 최적화는 단일 입력 변수에 대한 다양한 변동을 사용하여
                최상의 설계를 찾습니다.
                <br />
                실험 계획법(DOE)을 사용하면 여러 설계 변수에 대한 변형 범위를
                설정한 다음 설계점의 행렬을 풀 수 있습니다. 그런 다음 반응 곡면
                보간법을 사용하면 최적의 설계를 찾을 수 있습니다
                <br />
                또한 엔지니어가 스마트하고 효율적인 검색 및 자동화를 사용하고
                기본 독점 Sherpa 알고리즘을 활용하여 설계 공간 탐색을 수행할 수
                있도록 지원하는 Simcenter HEEDS 플러그인도 제공됩니다. Simcenter
                HEEDS를 활용하면 엔지니어는 기존 최적화 접근 방식보다 더 빠르게
                성능 요구사항을 충족하거나 능가하는 설계 개념을 찾을 수
                있습니다.
              </p>
            </div>
            <div className={styles.fourImg1}>
              <Image
                src="/images/floefd4.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.fourImgP2}>
            <div className={styles.fourDes2}>
              <h3>LED 열 시뮬레이션</h3>
              <p>
                올바른 조명 성능과 신뢰성을 보장하려면 LED 열 관리가 중요합니다.
                Simcenter FLOEFD CAD 임베디드 CFD 소프트웨어를 사용하면 조명
                제품 설계 엔지니어가 개발 초기와 개발 과정 전반에 걸쳐 조명기구
                열 설계를 살펴보고 재스핀을 방지할 수 있습니다.
                <br />
                Simcenter FLOEFD LED 모듈의 특정 기능에는 LED의 결합된 열-전기
                및 광도 모델링과 자체 LED 모델을 가져올 수 있는 기능이
                포함됩니다. LED 컴포넌트의 열 동작을 자세히 모델링하여 순방향
                전류로 전력을 공급받을 때의 정확한 LED 접합 온도와 조명기구에
                설치된 LED의 작동 광 출력(고온 루멘)을 예측할 수 있습니다.
                <br />
                특히 Simcenter FLOEFD 시뮬레이션은 Simcenter Micred T3STER의 RC
                래더 소형 열 모델에 대한 측정 데이터 및 시스템 수준 연구에
                사용할 수 있는 최고 정확도의 테스트 데이터 기반 LED 모델을
                제공하는 Simcenter Micred LED Tester의 광학 특성화 데이터와
                결합할 수 있습니다.
              </p>
              <p>
                이 LED 모듈은 유리와 같은 반투명 고체에서 방사선의 흡수 및
                산란을 시뮬레이션하고 파장 의존성에 대한 굴절 및 반사 효과를
                고려하기 위한 몬테카를로 방사선 모델링을 지원합니다. 자동차 조명
                및 기타 까다로운 응용 분야의 경우 엔지니어는 응결 모델링을
                활용해 박막 응결, 증발, 결빙 및 습도 변화가 수분 흡수에 미치는
                영향을 모델링할 수 있습니다.
              </p>
            </div>
            <div className={styles.fourImg2}>
              <Image
                src="/images/floefd5.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.fourImgP1}>
            <div className={styles.fourDes1}>
              <h3>CAD의 전자 열 및 열 기계 해석</h3>
              <p>
                Simcenter FLOEFD를 사용하면 열 엔지니어와 설계자는 CAD 환경에서
                전자 냉각 시뮬레이션부터 열 기계적 응력 해석에 이르기까지 열
                설계를 가속화할 수 있습니다.
                <br />
                주요 기능으로는 단순하고 상세한(계층화된) 것부터 명시적인 구리
                트레이스에 이르기까지 인쇄 회로 기판(PCB)의 열 해석 설계 단계에
                적합한 옵션이 포함됩니다. 계산 효율적인 모델링 네트워크 어셈블리
                접근 방식인 SmartPCB 옵션을 사용하면 열 상호 시뮬레이션 작업 및
                열 기계적 응력 해석을 지원하는 열 모델링의 정확도를 포기할
                필요가 없습니다. Simcenter FLOEFD EDA Bridge는 PCB 데이터를 모든
                주요 EDA 소프트웨어 파일 형식으로 손쉽게 가져올 수 있도록
                지원합니다. 패키지 모델링 옵션에는 2개의 레지스터, 네트워크
                어셈블리 및 세부 모델이 포함됩니다. Package Creator 유틸리티를
                사용하면 단 몇 분 안에 모든 내부 기하학적 요소를 포함하여 만드는
                것도 가능합니다.
                <br />
                추가 기능에는 최고의 정확도를 달성하기 위한 천이 모델링 및 측정
                보정(Simcenter Micred T3STER 사용)이 포함됩니다. 또한 BCI-ROM
                기술을 통해 전열 회로 시뮬레이션 및 시스템 시뮬레이션 도구에
                사용할 수 있도록 3D 해석에서 차수 감소 모델을 생성할 수도
                있습니다.
              </p>
            </div>
            <div className={styles.fourImg1}>
              <Image
                src="/images/floefd6.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fiveWrapper}>
        <div className={styles.fiveContent}>
          <div className={styles.fiveHeader}>
            <h2>주요 모듈</h2>
            <Link href="/main/pages/product/simulation/floefd/module">
              <button>자세히 보기</button>
            </Link>
          </div>
          <div className={styles.fiveImgGrid}>
            <div className={styles.fiveImgP}>
              <div className={styles.fiveImg1}>
                <Image
                  src="/images/floefd7.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.fiveDes1}>
                <span className={styles.contantSquare}></span>
                <h3>Electronics Cooling</h3>
              </div>
            </div>
            <div className={styles.fiveImgP}>
              <div className={styles.fiveImg1}>
                <Image
                  src="/images/floefd8.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.fiveDes1}>
                <span className={styles.contantSquare}></span>
                <h3>EDA Bridge</h3>
              </div>
            </div>
            <div className={styles.fiveImgP}>
              <div className={styles.fiveImg1}>
                <Image
                  src="/images/floefd9.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.fiveDes1}>
                <span className={styles.contantSquare}></span>
                <h3>LED, Lighting</h3>
              </div>
            </div>
            <div className={styles.fiveImgP}>
              <div className={styles.fiveImg1}>
                <Image
                  src="/images/floefd10.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.fiveDes1}>
                <span className={styles.contantSquare}></span>
                <h3>AutoCalibration</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
