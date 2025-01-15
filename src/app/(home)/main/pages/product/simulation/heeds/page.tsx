import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Heeds() {
  return (
    <div className={styles.container}>
      <div className={styles.firstWrapper}>
        <div className={styles.firstContent}>
          <h2>Simcenter</h2>
          <h1>HEEDS</h1>
          <div className={styles.firstImgP}>
            <div className={styles.firstImg}>
              <Image
                src="/images/heeds1.jpg"
                alt="Flotherm XT"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.firstDes}>
              <p>
                시뮬레이션을 사용하여 혁신을 추구하고 계십니까? HEEDS를 사용하면
                패러다임을 변경하여 이러한 혁신을 수행할 수 있습니다. 더 이상
                성능 하나만을 평가하기 위해 설계를 시작하고 시뮬레이션을
                사용하지 않아도 됩니다. 이제 원하는 성능을 정의하고 HEEDS 및
                시뮬레이션 툴을 사용하여 양질의 설계를 확인할 수 있습니다.
              </p>
              <p>
                HEEDS는 엔지니어링 설계 공간 탐색 프로세스를 자동화하고
                가속화합니다. 간단한 컴포넌트나 복잡한 다중 분야 간 시스템의
                성능을 개선해야 하는 상황이든 상관없이, HEEDS는 요구 사항을
                최상으로 충족하는 설계 구성을 찾기에 충분한 유연성을 제공합니다.
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
                <strong>설계 공간 탐색 :</strong> HEEDS는 독점적인 설계 공간
                탐색 알고리즘을 사용하여 설계 공간을 효율적으로 탐색합니다. 이
                알고리즘은 설계 공간을 자세히 파악하여 할당된 시간 내에 최고의
                솔루션을 찾을 수 있도록 합니다.
              </p>
            </div>
            <div>
              <h3>02</h3>
              <p>
                <strong>성능 평가 :</strong>HEEDS는 다양한 시뮬레이션 툴과
                통합되어 설계 개념의 성능을 평가할 수 있습니다. 이러한 평가를
                통해 설계 개념이 성능 요구사항을 충족하는지 여부를 확인할 수
                있습니다.
              </p>
            </div>
            <div>
              <h3>03</h3>
              <p>
                <strong>최적화 :</strong> HEEDS는 설계 개념을 최적화하기 위한
                다양한 최적화 알고리즘을 제공합니다. 이러한 알고리즘을 사용하여
                설계 개념의 성능을 더욱 향상시킬 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdWrapper}>
        <div className={styles.thirdContent}>
          <h2>왜 HEEDS를 사용해야 할까요?</h2>
          <div className={styles.thirdDes}>
            <div>
              <p>
                <strong>
                  HEEDS는 분석 워크플로를 자동화하고, 사용 가능한 컴퓨팅
                  하드웨어 및 소프트웨어 리소스를 극대화하고, 혁신적인 솔루션을
                  위한 설계 공간을 효율적으로 탐색하는 동시에 성능 요구사항을
                  충족하기 위해 새로운 개념을 평가하여 제품 개발 프로세스를
                  가속화합니다.
                </strong>
              </p>
            </div>
            <div>
              <p>
                <strong>프로세스 자동화 지원</strong>
                <br />
                HEEDS는 워크플로를 자동화하여 제품 개발 프로세스를 쉽게
                실행하도록 지원합니다. 상업용 CAD(Computer-Aided Design) 및
                CAE(Computer-Aided Engineering) 도구에 대해 개발된 광범위한
                인터페이스를 사용하여 HEEDS는 맞춤형 스크립팅 없이 많은 기술을
                빠르고 쉽게 통합합니다. 데이터가 모델링과 시뮬레이션 제품 간에
                자동으로 공유되어 성능 균형 및 설계 견고성을 평가할 수 있습니다.
              </p>
            </div>
            <div>
              <p>
                <strong>분산 실행 사용</strong>
                <br />
                HEEDS는 기존 하드웨어에 대한 투자를 활용하여 사용 가능한 모든
                하드웨어 리소스를 효율적으로 사용합니다. Windows 및 Linux 기반
                워크스테이션 또는 클러스터를 현장 또는 해외에서 사용할 수 있을
                뿐만 아니라 클라우드 컴퓨팅 리소스를 사용하여 혁신적인 제품
                개발을 가속화할 수 있습니다.
              </p>
            </div>
            <div>
              <p>
                예를 들어, 지오메트리 수정은 Windows 운영 체제가 설치된 랩톱에서
                자동화할 수 있습니다. 구조 변형 시뮬레이션은 Linux
                워크스테이션에서 수행할 수 있습니다. CFD(전산 유체 역학)
                시뮬레이션은 Linux 클러스터 또는 클라우드의 여러 코어에서 수행할
                수 있습니다.
              </p>
            </div>
            <div>
              <p>
                <strong>효율적인 검색 활용</strong>
                <br />
                모든 설계자와 엔지니어는 HEEDS를 사용하여 혁신을 실현할 수
                있으며, 이는 효율적인 검색을 위해 고도로 전문화된 기술 전문
                지식과 간소화된 모델이 필요한 대부분의 기존 최적화 도구와는
                대조적입니다.
              </p>
            </div>
            <div>
              <p>
                HEEDS에는 성능 요구사항 이상의 설계 개념을 효율적으로 찾기 위한
                독점적인 설계 공간 탐색 기능이 있습니다. HEEDS를 통해 검색
                전략을 자동으로 조정하여 설계 공간을 자세히 파악함으로써 할당된
                시간 내에 최고의 솔루션을 찾을 수 있습니다. 사용하기 쉽고
                마감일을 맞추도록 설계되었으며 상당한 가치를 제공할 수 있습니다.
              </p>
            </div>
            <div>
              <p>
                <strong>인사이트 확보 및 탐색</strong>
                <br />
                HEEDS는 특성과 견고성이 우수한 여러 설계의 성능을 쉽게 비교할 수
                있는 기능을 제공합니다. 이를 통해 사용자는 다양한 플롯, 표,
                그래프 및 이미지를 사용하여 상충하는 목표와 제약 조건 간의 설계
                성능 균형을 시각화하며 인사이트를 얻고 혁신적인 솔루션을 파악할
                수 있습니다. 또한 생산 준비가 완료된 설계를 쉽게 개발하여 진정한
                디지털 트윈을 구현할 수 있습니다.
              </p>
            </div>
            <div className={styles.thirdImgP}>
              <div className={styles.thirdDes2}>
                <h3>하이라이트</h3>
                <div>
                  <ul>
                    <li>CAD 및 CAE 소프트웨어와의 쉬운 연계 인터페이스</li>
                    <li>기존 하드웨어와 효율적으로 통합</li>
                    <li>
                      적은 시간에 보다 많은 설계 옵션을 탐색 하여 혁신적인
                      솔루션을 제공
                    </li>
                    <li>시뮬레이션 자동화</li>
                    <li>더 효과적인 디자인을 보다 빠르게 개발</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fourWrapper}>
        <div className={styles.fourContent}>
          <h2>주요 특징</h2>
          <div className={styles.fourImgP1}>
            <div className={styles.fourDes1}>
              <h3>프로세스 자동화 (Process Automation)</h3>
              <p>
                HEEDS는 제품 개발 과정의 편의성을 위하여 자동화 워크플로우를
                제공합니다.
              </p>
              <ul>
                <li>다양한 CAD 및 CAE 소프트웨어와의 연계 인터페이스 제공</li>
                <li>상호 시뮬레이션 또는 순차적 워크플로우 지원</li>
                <li>
                  다양한 소프트웨어와의 프로세스 자동화를 통한 폭 넓은 설계 공간
                  탐색
                </li>
                <li>메시 재생성 및 시뮬레이션 업데이트</li>
              </ul>
            </div>
            <div className={styles.fourImg1}>
              <Image
                src="/images/heeds2.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.fourImgP2}>
            <div className={styles.fourDes2}>
              <h3>분산 실행 (Distributed Execution)</h3>
              <p>
                HEEDS 사용할 경우 기존 하드웨어 리소스를 효과적으로 활용 할 수
                있습니다.
              </p>
              <ul>
                <li>사용 가능한 계산 자원을 최대 활용</li>
                <li>
                  다양한 수준의 병렬화(예: 워크플로우, 작업 및 코어)를 사용하여
                  시뮬레이션 처리 시간 단축
                </li>
                <li>플랫폼 및 운영 체제 전반에 걸쳐 시뮬레이션 작업을 조율</li>
                <li>
                  효율적인 라이선스 체계, 고성능 컴퓨터 (HPC), 클라우드 자원
                  활용 가능
                </li>
                <li>실행 가용성으로 가상 시뮬레이션에 대한 투자 극대화</li>
              </ul>
            </div>
            <div className={styles.fourImg2}>
              <Image
                src="/images/heeds3.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.fourImgP1}>
            <div className={styles.fourDes1}>
              <h3>효율적인 탐색 (Efficient Search)</h3>
              <p>
                전문적인 기술 지식 및 모델 단순화가 필요한 대부분의 기존 최적화
                소프트웨어와 다르게, HEEDS는 모든 설계자와 엔지니어가 사용할 수
                있습니다.
              </p>
              <ul>
                <li>설계안을 효과적으로 탐색하기 위한 설계 탐색기능 포함</li>
                <li>설계안에 대한 다양한 탐색기능 제공</li>
                <li>
                  효과적인 탐색을 통한 제품 개발 비용 감소 및 제품 설계 위험
                  회피
                </li>
              </ul>
            </div>
            <div className={styles.fourImg1}>
              <Image
                src="/images/heeds4.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.fourImgP2}>
            <div className={styles.fourDes2}>
              <h3>통찰력과 발견 (Insight & Discovery)</h3>
              <p>
                HEEDS는 디자인 특성을 효과적을 비교할 수 있는 기능이 제공됩니다.
                <br />
                다양한 플롯, 테이블 ,그래프와 이미지들을 통하여 최적의 솔루션을
                찾을 수 있습니다.
              </p>
              <ul>
                <li>제품 설계안에 대한 통찰력 확보</li>
                <li>성능이 가장 뛰어난 설계군 식별</li>
                <li>비용 효율적인 설계 변경 영역 표시</li>
                <li>설계 변수에 대한 민감도를 제공하여 설계 검토 지원</li>
                <li>제조 공차에 대한 강건성 최적화 검토</li>
              </ul>
            </div>
            <div className={styles.fourImg2}>
              <Image
                src="/images/heeds5.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
