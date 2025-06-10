"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Battery() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "battery1_teigs4",
    "battery2_qse513",
    "battery3_rdkvra",
    "battery4_fszado",
    "battery5_paswo8",
    "battery6_yqoqnx",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <Image
            src="/loading1.gif"
            alt="Loading..."
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.firstWrapper}>
            <div className={styles.firstContent}>
              <h2>Simcenter</h2>
              <h1>Battery Design Studio</h1>
              <div className={styles.firstImgP}>
                <div className={styles.firstImg}>
                  {imageSrc1[0] && (
                    <Image
                      src={imageSrc1[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.firstDes}>
                  <p>
                    시뮬레이션을 사용하여 혁신을 추구하고 계십니까? HEEDS를
                    사용하면 패러다임을 변경하여 이러한 혁신을 수행할 수
                    있습니다. 더 이상 성능 하나만을 평가하기 위해 설계를
                    시작하고 시뮬레이션을 사용하지 않아도 됩니다. 이제 원하는
                    성능을 정의하고 HEEDS 및 시뮬레이션 툴을 사용하여 양질의
                    설계를 확인할 수 있습니다.
                  </p>
                  <p>
                    HEEDS는 엔지니어링 설계 공간 탐색 프로세스를 자동화하고
                    가속화합니다. 간단한 컴포넌트나 복잡한 다중 분야 간 시스템의
                    성능을 개선해야 하는 상황이든 상관없이, HEEDS는 요구 사항을
                    최상으로 충족하는 설계 구성을 찾기에 충분한 유연성을
                    제공합니다.
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
                    <strong>상세한 기하학적 셀 사양 :</strong> 엔지니어는 셀의
                    모든 기하학적 특성을 모델링할 수 있습니다. 여기에는 셀의
                    크기, 모양, 재료, 구성 요소 등이 포함됩니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    <strong>셀 성능 시뮬레이션 :</strong>엔지니어는 셀의 전기,
                    열, 기계적 성능을 시뮬레이션할 수 있습니다. 여기에는 전압,
                    전류, 용량, 온도, 응력 등이 포함됩니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    <strong>다양한 성능 모델 :</strong> Simcenter Battery Design
                    Studio는 다양한 수준의 성능 모델을 제공합니다. 물리 기반
                    매크로 균질 모델은 셀의 전기 화학 메커니즘에 대한 통찰력을
                    제공합니다. 등가 RCR 회로 모델은 셀의 동작을 보다 효율적으로
                    모델링합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Simcenter Battery Design Studio를 사용해야 할까요?</h2>
              <div className={styles.thirdDes}>
                <div>
                  <p>
                    <strong>
                      Simcenter Battery Design Studio는 엔지니어가 상세한
                      기하학적 셀 사양과 셀 성능 시뮬레이션을 통해 리튬 이온 셀
                      설계를 디지털 방식으로 검증할 수 있도록 지원합니다. 배터리
                      셀의 광범위한 컴포넌트 뿐만 아니라 재료 데이터베이스도
                      제공되므로 모델 개발에도 유용합니다.
                    </strong>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>디지털 방식의 설계 검증</strong>
                    <br />
                    상세한 기하학적 전지 사양 및 전지 성능 시뮬레이션을 통해
                    리튬 이온 전지 설계를 디지털 방식으로 검증합니다. 모델
                    개발을 지원하는 배터리 셀의 광범위한 컴포넌트와 재료
                    데이터베이스에 액세스할 수 있습니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>성능 모델링 활용</strong>
                    <br />
                    Simcenter Battery Design Studio는 전지의 전기 화학
                    메커니즘에 대한 통찰력을 얻기 위한 물리 기반 매크로 균질
                    모델과 전지의 동작을 매우 효과적인 방식으로 모델링하는
                    경험적 접근 방식인 등가 RCR 회로 모델 등 여러 수준의 성능
                    모델을 제공합니다.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>최적화된 의사 결정</strong>
                    <br />
                    Simcenter Battery Design Studio를 사용하여 추가적으로 이해한
                    내용은 설계 의사 결정과 시스템 성능에 미치는 영향을 더욱
                    정확하게 고려하는 데 도움이 됩니다. 당사의 솔루션은 실현
                    가능한 선택을 최적화할 수 있도록 지원합니다.
                  </p>
                </div>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <h3>하이라이트</h3>
                    <div>
                      <ul>
                        <li>셀 크기 및 비용</li>
                        <li>화학 선택</li>
                        <li>가상 테스트</li>
                        <li>에이징 모델링</li>
                        <li>배터리 오남용 모델링 (열폭주)</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.thirdDes2}>
                    <h3>셀 설계 적용 사례</h3>
                    <div>
                      <ul>
                        <li>항공 운송</li>
                        <li>전기 자동차 (PHEV, BEV)</li>
                        <li>소비자 전자제품</li>
                        <li>군사 및 항공 우주</li>
                        <li>오프로드 차량</li>
                        <li>모터사이클</li>
                        <li>고성능 차량</li>
                        <li>세미 트럭</li>
                        <li>해양</li>
                        <li>철도</li>
                        <li>농기계</li>
                        <li>건설장비</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fourWrapper}>
            <div className={styles.fourContent}>
              <h2>주요 기능</h2>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>물리적 셀 설명</h3>
                  <p>
                    imcenter Battery Design Studio의 첫 번째 단계는 셀 구성
                    요소의 형상과 특성을 지정하는 것입니다. 팀 책임에 따라
                    액세스할 수 있거나 셀 공급업체에서 제공하거나 구성요소
                    리버스 엔지니어링을 통해 얻을 수도 있습니다.
                  </p>
                  <p>
                    Simcenter Battery Design Studio는 리튬이온 배터리 구성
                    요소에 대한 표준화된 사양을 제공합니다. 사용자는 파우치,
                    원통형 또는 각형에서 셀 모양을 선택한 다음 전극, 탭, 집전체
                    디자인 등과 같은 개별 구성 요소를 선택할 수 있습니다. 각
                    구성 요소는 전극의 중앙 탭 디자인과 같은 특성을 사용하여
                    보다 세밀하게 정의되거나 집전체의 재료 및 두께와 목록이
                    계속해서 셀을 완전히 구성합니다.
                  </p>
                  <p>
                    일반적으로 혼합물 공식이 알려진 경우 정확한 값은 처음부터
                    추측하는 경우가 많습니다. 그러나 문헌이나 실험적 특성화에서
                    얻을 수 있는 활물질 평형 전압 곡선에서 시작하여 사용자는
                    혼합물을 조정하여 저전류 방전 곡선에 잘 맞도록 하고 매우
                    정확한 용량 상관 관계를 얻을 수 있습니다. 계산된{" "}
                    <span>{"빌드 보고서"}</span>는 예를 들어 셀의 최종 에너지
                    밀도 또는 무게를 확인하여 항목을 검증하는 데 매우 유용할
                    수도 있습니다.
                  </p>
                  <p>
                    사용자는 또한 젤리 롤 섹션의 그래픽 출력을 자동으로 생성하여
                    전극 권선이 예상대로인지 검토할 수도 있습니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
                  {imageSrc1[1] && (
                    <Image
                      src={imageSrc1[1]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>셀 성능 시뮬레이션</h3>
                  <p>
                    Simcenter Battery Design Studio는 여러 수준의 성능 모델을
                    제공합니다. 즉, 셀의 듀티 사이클 중 전압 손실 메커니즘과
                    같은 셀의 전기화학적 메커니즘에 대한 통찰력을 얻거나 전극
                    전체의 농도 또는 열 발생 분포를 이해하기 위한 물리학 기반의
                    거시 균질 모델입니다. 그리고 등가 RCR 회로 모델은 매우
                    효과적인 계산 방식으로 셀의 동작을 모델링하는 경험적 접근
                    방식입니다.
                  </p>
                  <p>
                    시뮬레이션은 또한 전위 분포, 전극 전체의 탭 근처에 집중된
                    전류 밀도 측면에서 셀 내부에서 무슨 일이 일어나고 있는지
                    알려줄 수 있습니다.{" "}
                  </p>
                </div>
                <div className={styles.imageD}>
                  {imageSrc1[2] && (
                    <Image
                      src={imageSrc1[2]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.additionalContent}>
                <p>
                  전에 대한 셀 전류 밀도 분포 <br />
                  그렇다면 저나 Siemens 엔지니어링 서비스 팀으로서의 저의 배경을
                  아시거나 Simcenter SPEED 소프트웨어 에 대한 저의 이전 게시물을
                  읽으셨다면 제 다음 질문이 무엇인지 아실 것입니다. 이러한 모델
                  기반 시스템 엔지니어링 접근 방식의 실제 예상 결과는
                  무엇입니까? 답변: 개발 주기를 통해 시스템 성능에 대한 디자인
                  선택의 프런트로드 영향을 이해하고 파악하십시오. 귀하의 도구는
                  귀하가 최적화되고 실행 가능한 선택을 할 수 있도록 지원해야
                  합니다.
                </p>
                <p>
                  예를 들어, Saft 회사가 Simcenter Battery Design Studio를
                  사용하여 고에너지 양극 셀을 설계하는 방법을 보여주는
                  Silicon-Graphite 셀에 대한 온디맨드 웨비나를 시청해 보세요.
                </p>
                <p>
                  하지만 귀하의 시스템뿐만이 아닙니다. 병렬/직렬 셀 모듈과
                  배터리 팩 주변 요소 간의 상호 작용도 고려해야 합니다.
                </p>
              </div>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>다중 물리학 소프트웨어와의 원활한 연결</h3>
                  <p>
                    이를 위해 우리는 일반적으로 고객에게 Simcenter Battery
                    Design Studio를 사용하여 팩의 3D 전열 시뮬레이션 전용 셀
                    전압 동작을 나타내는 RCR 경험적 모델을 생성할 것을
                    권장합니다. 물리학 기반 모델을 사용할 수 있지만 RCR 경험적
                    모델은 결과의 특정 정확성을 유지하면서 계산 비용을 개선하고
                    배터리 모듈 수준에서 작업하는 비전문가 사용자에게 더
                    적합합니다. 따라서 HPPC 테스트(셀 SOC, 온도 및 전류에 따라
                    달라지는 저항을 특성화하기 위한 방전 및 재생 펄스)는 합성
                    또는 측정에서 입력 데이터로 사용되며 Simcenter Battery
                    Design Studio는 RCR 3D 경험적 모델 매개변수를 자동으로
                    생성하여 매우 계산적으로 효율적인 방식으로 Simcenter
                    STAR-CCM+ 내에서 배터리 팩의 3D 동작 모델에 사용됩니다 .
                    <br />
                    위에 언급된 두 Simcenter Portfolio 소프트웨어 간의 연결은
                    Simcenter Battery Design Studio 출력 파일인 TBM(텍스트
                    배터리 모델) 파일을 통해 수행됩니다.
                    <br />
                    TBM 파일은 Simcenter STAR-CCM+의 배터리 시뮬레이션 모듈
                    애드온에서 원하는 배터리 모듈 3D 모델을 구축하는 데
                    사용됩니다. Simcenter STAR-CCM+의 형상, 셀 성능 모델 및 열
                    솔버를 결합함으로써 배터리 모듈 엔지니어는 과도 시나리오에서
                    전체 배터리 팩의 전열 시뮬레이션을 실행할 수 있습니다.
                  </p>
                  <p>
                    사용자는 버스 바, 전기 절연 패드, 냉각 채널 및 배터리
                    케이스와 같은 배터리 팩의 다른 구성 요소 부분을
                    추가하고(STAR-CCM+ 3D-CAD 또는 타사 CAD 소프트웨어 사용)
                    자동 메싱을 수행하고 지정할 수 있습니다. 재료/냉각수 특성.
                  </p>
                </div>
                <div className={styles.fourImg1Wrapper}>
                  <div className={styles.fourImg1}>
                    {imageSrc1[3] && (
                      <Image
                        src={imageSrc1[3]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.fourImg1P1}>
                    <p>
                      마지막 단계는 듀티 사이클 또는 응용 분야의 모든 종류의
                      전류 과도 여기 프로필 기능에 대한 과도 시뮬레이션을
                      수행하는 것입니다. 다음은 25degC 환경 온도 및 일정한 냉각
                      펌프 속도에서 US06 사이클에 대한 배터리 모듈 온도 분포
                      결과의 예입니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <p>
                    액체 냉각판 상단에 18650개의 셀이 배치된 4P12S 모듈의
                    예(여기에는 표시되지 않음) 결과는 냉각 시스템이 조화로운
                    온도 분포를 유지할 수 없기 때문에 모듈 전반에 걸쳐 큰 온도
                    구배를 보여줍니다.
                    <br />
                    목표는 통합 설계를 검증하고 문제가 발생할 수 있는 하드웨어
                    중에 시간을 낭비하지 않고 배터리 모듈의 다중 물리{" "}
                    <span>{"디지털 트윈"}</span>을 사용하여 개발 주기에서 가능한
                    결함, 원치 않는 제어 동작 또는 안전 문제를 초기에 감지하는
                    것입니다. 과정에서 너무 늦게 발견되었습니다.
                  </p>
                </div>
                <div className={styles.fourImg2}>
                  {imageSrc1[4] && (
                    <Image
                      src={imageSrc1[4]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP3}>
                <div className={styles.fourDes3}>
                  <h3>자동화된 설계 공간 탐색 및 최적화</h3>
                  <p>
                    이러한 시뮬레이션 결과를 바탕으로 엔지니어는 셀 수준에서
                    설계 공간 탐색 연구를 시작하여 용량을 최대화할 수 있습니다.
                    예를 들어 고정 팩 설계를 고려하면서 셀 화학에 대해
                    작업하거나, 배터리 모듈 수준에서 형상 및 특성에 대해
                    작업하는 등의 작업을 수행할 수 있습니다. 이러한 설계 공간
                    탐색 연구는 Simcenter STAR-CCM+의 일부인 Design Manager 와
                    Simcenter Portfolio의 HEEDS 소프트웨어 일부를 사용하여
                    수행할 수 있습니다. 이것이 제가 디지털 트윈 매직이라고
                    부르는 것입니다. 시뮬레이션 엔지니어는 다중 속성 성능의
                    균형을 맞추고 시스템 제약 조건을 존중하기 위해 수백 가지
                    설계를 반자동으로 효율적이고 안전하게 탐색할 수 있습니다.
                  </p>
                  <p>
                    비효율적인 냉각수 흐름 분포로 인해 배터리 모듈 전체에 온도가
                    잘 분산되지 않아 위의 배터리 팩 열 성능이 향상될 수 있다는
                    것을 빠르게 확인할 수 있습니다. 이는 확실히 과열된 셀의
                    전기적 성능에 영향을 미치고 심지어 셀 수명을 손상시킬 수도
                    있습니다. 또는 안전.
                  </p>
                  <p>
                    아래에는 설계 탐색 입력, 채널 직경, 채널 수, 냉각수 유량
                    전략과 같은 변수를 설정한 연구 예가 나와 있습니다. 설계 탐구
                    목적을 위해 젤리롤의 셀 온도 차이를 2°C 미만으로 설정하고
                    압력 강하 감소를 설정했습니다. 모듈에 대한 향상된 온도
                    균질성을 보여주는 연구 결과를 아래에서 볼 수 있습니다.
                  </p>
                </div>
                <div className={styles.fourImg3}>
                  {imageSrc1[5] && (
                    <Image
                      src={imageSrc1[5]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
