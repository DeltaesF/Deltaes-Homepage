"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Simcenter3d() {
  const { imageSrc, error } = useFetchImages([
    "simcenter3d1.jpg",
    "simcenter3d2.jpg",
    "simcenter3d3.jpg",
    "simcenter3d4.jpg",
    "simcenter3d5.jpg",
    "simcenter3d6.jpg",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.firstWrapper}>
        <div className={styles.firstContent}>
          <h2>Simcenter</h2>
          <h1>3D</h1>
          <div className={styles.firstImgP}>
            <div className={styles.firstImg}>
              {imageSrc[0] && (
                <Image
                  src={imageSrc[0]}
                  alt="전자기기 및 반도체"
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
            <div className={styles.firstDes}>
              <p>
                Simcenter 3D는 설계, 1D 시뮬레이션, 테스트 및 데이터 관리 기능을
                갖춘 확장 가능한 개방형 통합 3D CAE환경입니다.
              </p>
              <p>
                Simcenter 3D는 동급 최고의 지오메트리 편집, 연상 시뮬레이션
                모델링 및 다분야 솔루션을 업계 전문 기술과 통합하여 시뮬레이션
                프로세스 속도를 단축합니다. 빠르고 정확한 솔버는 구조, 음향,
                유동, 열, 모션 및 복합재 해석은 물론, 최적화 및 다중 물리
                시뮬레이션의 성능을 강화합니다.
              </p>
              <p>
                Simcenter 3D는 독립형 시뮬레이션 환경으로 제공됩니다. 또한 NX와
                완벽하게 통합되어 원활한 CAD/CAE 경험을 제공하기도 합니다.
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
                Simcenter 3D는 CAE 전처리 및 후 처리를 모두 수행하는 통합 환경을
                제공 합니다. 모든 CAD 데이터를 처리가능. 포괄적 인 메싱 및
                모델링. 분석 모델을 설계 데이터에 연결이 가능 합니다.
              </p>
            </div>
            <div>
              <h3>02</h3>
              <p>
                Simcenter 3D는 엔지니어링중심 환경에서 업계 표준의 다 분야
                시뮬레이션 솔버를 통합하여 사용 합니다. Structures, acoustics,
                structural dynamics, durability, motion, thermal, flow,
                electromagnetics 등에 대한 Simcenter 3D 시뮬레이션 솔버는 다양한
                물리 영역에 대한 실제 성능을 예측합니다.
              </p>
            </div>
            <div>
              <h3>03</h3>
              <p>
                시뮬레이션 팀을 위해 Simcenter 3D를 더욱 유연하게 만들기 위해
                Simcenter 3D는 가치 기반 토큰 라이선스를 제공합니다. 토큰팩을
                구입하면 대부분의 Simcenter 3D 제품에 즉시 액세스 할 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdWrapper}>
        <div className={styles.thirdContent}>
          <h2>왜 Simcenter 3D를 사용해야 할까요?</h2>
          <div className={styles.thirdDes}>
            <div>
              <p>
                Simcenter 3D는 시뮬레이션 효율성을 획기적으로 개선하여 복잡한
                제품 성능을 모델링하고 평가할 수 있도록 지원합니다. 단일
                시뮬레이션 모델링 환경에서 여러 물리 영역을 통합하여 제품 성능에
                대한 더 나은 인사이트를 더 빠르게 얻을 수 있습니다
              </p>
            </div>
            <div>
              <p>
                <strong>공통 엔지니어링 데스크톱을 통해 더 빠르게 작업</strong>
                <br />
                Simcenter 3D는 모든 CAE 전처리 및 후처리를 수행할 수 있는 통합
                환경입니다. 독보적인 지오메트리 조작 도구를 사용하면 모든
                소스에서 CAD(Computer-Aided Design) 지오메트리를 직관적으로
                디피처링하고 추상화할 수 있습니다. 포괄적인 메싱 및 모델링
                도구는 여러 시뮬레이션 애플리케이션을 지원하며, 해석 모델을 설계
                데이터에 연결할 수 있는 고유한 기능을 제공합니다. 이는 시간이
                오래 걸리는 모델링 프로세스를 빠르게 진행하고 해석 모델을 최신
                설계에 맞게 유지하는 데 도움이 됩니다. ​
              </p>
            </div>
            <div>
              <p>
                <strong>복잡성 모델링 – 많은 물리 현상을 시뮬레이션</strong>
                <br />
                Simcenter 3D는 중앙 집중식 엔지니어링 환경에서 업계 표준의
                다분야 시뮬레이션 솔버를 통합합니다. 구조, 음향, 구조 동역학,
                내구성, 모션, 열, 전자기 등을 위한 Simcenter 3D 시뮬레이션
                솔버는 매우 다양한 물리 영역의 실제 조건에서의 성능을 예측하는
                데 도움이 됩니다. 이와 같이 긴밀한 솔루션 통합은 다른 방식으로는
                수행하기가 너무 어려운 다중 물리 프로세스를 간소화합니다.
              </p>
            </div>
            <div>
              <p>
                <strong>시뮬레이션 자동화를 통한 가능성 탐색</strong>
                <br />
                시뮬레이션의 진정한 가치는 필요한 물리적 테스트의 횟수를 줄이는
                데 있을 뿐만 아니라 시뮬레이션을 통해 탐색할 수 있는 설계 옵션의
                개수에도 있습니다. Simcenter 3D를 사용하면 통합 설계 공간 탐색
                도구를 사용하여 탐색할 수 있도록 지오메트리, 시뮬레이션 모델 및
                솔루션 매개변수의 수정을 자동화할 수 있습니다. Simcenter 3D를
                ANSYS, Abaqus, MSC Nastran, LS-Dyna와 같은 그 밖의 일반적인 타사
                솔버를 위한 전처리 및 후처리 도구로 사용할 수도 있습니다. 즉
                뛰어난 CAD 연관성, 지오메트리 편집, 포괄적인 메싱 도구를
                활용하여 모든 시뮬레이션 요구사항을 탐색할 수 있습니다.
              </p>
            </div>
            <div>
              <p>
                <strong>원활한 데이터 관리로 통합 유지</strong>
                <br />
                Simcenter 시뮬레이션 도구 포트폴리오에 포함된 Simcenter 3D는 3D
                시뮬레이션, 1D 시뮬레이션 및 테스트 솔루션을 포괄하는 디지털
                스레드와 통합됩니다. 그러나 시뮬레이션은 제품 개발 프로세스를
                통해 실행되는 더 긴 디지털 스레드의 일부일 뿐입니다. 또한
                Simcenter 3D는 시뮬레이션 데이터 관리와 연결되어 원활하게
                관리되는 환경을 통해 시뮬레이션 프로세스를 이 긴 스레드에 연결된
                상태로 유지합니다. 이렇게 하면 시뮬레이션 프로세스가 CAD,
                라우팅, 제품 요구사항, 제조 프로세스와 같은 디지털 개발
                프로세스와 동기화된 상태로 유지됩니다.
              </p>
            </div>
            <div>
              <p>
                <strong>유연한 라이선싱</strong>
                <br />
                시뮬레이션 팀에서 Simcenter 3D를 더 유연하게 사용할 수 있도록
                Simcenter 3D는 가치 기반의 토큰 라이선싱을 제공합니다. 추가 기능
                모듈마다 개별 라이선스를 구매하는 대신, 사용자와 팀이 대부분의
                Simcenter 3D 모듈에 바로 액세스할 수 있는 토큰 팩을 구매할 수
                있습니다.
              </p>
            </div>
            <div className={styles.thirdImgP}>
              <div className={styles.thirdDes2}>
                <h3>하이라이트</h3>
                <div>
                  <ul>
                    <li>
                      <strong>구조해석 :</strong> 선형해석, 모달해석, 좌굴해석,
                      정상상태 및 과도 열전달, 열변형 해석, 비선형 해석, 이방성
                      재료 및 고무 물성을 적용한 해석
                    </li>
                    <li>
                      <strong>진동음향해석 :</strong> 내부소음, 외부소음, 시간을
                      고려한 내외부 소음 해석, 구조-음향(Vibro-Acoustics) 연성
                      해석, 계산속도 향상을 위한 AML(Automatically Matched
                      Layer) 기법, FEMAO(Adaptive Order), ATV(Acoustic Transfer
                      Function)
                    </li>
                    <li>
                      <strong>열유동해석 :</strong> 전도, 대류, 복사, Thermal
                      Control, 상변화(Phase Change)를 고려한 열응력 해석
                    </li>
                    <li>
                      <strong>동역학해석 :</strong> 동역학적 수치해석, Rigid
                      Body를 기본으로 동작성을 평가, Rflex 방법을 이용하여 응력
                      및 변형 확인, DriveTrain 등 특수 해석 진행
                    </li>
                    <li>
                      <strong>최적화 :</strong> 선형, 진동해석 등의 결과로부터
                      파라메트릭, 토폴로지 등의 다양한 최적화 해석
                    </li>
                    <li>
                      <strong>피로해석 :</strong> 다양한 재료 S-N 물성을 이용한
                      제품의 피로해석 수명 파악
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.thirdImgP2}>
                <div className={styles.thirdImgP2Wrapper}>
                  <h3>2D 모델 결과를 결합, 3D 시각화</h3>
                  <div className={styles.thirdImg2}>
                    {imageSrc[1] && (
                      <Image
                        src={imageSrc[1]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
                <div className={styles.thirdImgP2Wrapper}>
                  <h3>Ray Acoustics 주차 센서 시뮬레이션</h3>
                  <div className={styles.thirdImg2}>
                    {imageSrc[2] && (
                      <Image
                        src={imageSrc[2]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.thirdImgP3}>
                <div className={styles.thirdImg3}>
                  {imageSrc[3] && (
                    <Image
                      src={imageSrc[3]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <h3>
                  적층 제조 공정 자체가 완제품의 피로 및 내구성 동작에 미치는
                  영향 연구
                </h3>
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
              <h3>가장 복잡한 엔지니어링 과제 해결</h3>
              <p>
                현대 엔지니어링의 불편한 진실은 해결하기 쉬운 문제가 남아있지
                않다는 것입니다. 업계의 요구사항을 충족하려면 CFD(전산 유체
                역학) 또는 응력 해석을 수행하는 것만으로는 더 이상 충분하지
                않습니다. 복잡한 산업 문제는 다양한 물리적 현상을 포괄하는
                솔루션이 필요하며, 여러 엔지니어링 분야에 걸친 시뮬레이션 기술을
                사용해야만 해결되는 경우가 많습니다. Simcenter 솔루션은
                엔지니어에게 이러한 문제를 해결할 수 있는 도구 모음을
                제공합니다.
                <br />
                Simcenter는 실제 조건을 보다 정확하게 시뮬레이션할 수 있도록
                다중 물리 시뮬레이션을 간소화할 수 있게 해줍니다. Simcenter는
                세계적인 수준의 솔버를 단일 플랫폼에 통합하여 다중 물리 해석을
                보다 안전하고, 효율적이고, 신뢰할 수 있는 방식으로 수행할 수
                있도록 지원합니다. 해석 간에 결과를 쉽게 연계할 수 있습니다.
              </p>
            </div>
            <div className={styles.fourImg1}>
              {imageSrc[4] && (
                <Image
                  src={imageSrc[4]}
                  alt="전자기기 및 반도체"
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          </div>
          <div className={styles.fourImgP2}>
            <div className={styles.fourDes2}>
              <h3>모델 준비 속도 향상</h3>
              <p>
                유한 요소 해석 시뮬레이션 프로세스에는 일반적으로 '전처리'라는
                모델 준비 단계와 일반적으로 '후처리'라는 결과 해석 단계가
                포함됩니다. 전처리 단계에는 CAD 지오메트리 가져오기, 디피처링 및
                클린업, 유한 요소 메시 생성, 솔루션 매개변수와 하중 및 경계
                조건의 정의가 포함됩니다. 전처리는 종종 시뮬레이션 프로세스에서
                가장 길고 시간이 많이 걸리는 단계입니다.
                <br />
                Simcenter를 통해 제품 성능 평가에 더 많은 시간을 할애하고 모델
                준비에 소요되는 시간을 줄일 수 있습니다. CAE 지오메트리 편집,
                포괄적 메싱, 유한 요소 어셈블리 관리, 다중 CAE 솔버 환경, 빠른
                시뮬레이션 결과 후처리 및 보고 전용 도구를 사용하여 다중 CAD
                지오메트리 데이터에서 실행할 준비가 완료된 완벽한 해석 모델로
                신속하게 전환할 수 있습니다. 정확하고 빠른 시뮬레이션 솔버를
                위해 시뮬레이션 모델을 신속하고 효율적으로 전처리 및 후처리하여
                엔지니어링 혁신에 더 많은 시간을 할애할 수 있습니다.
              </p>
            </div>
            <div className={styles.fourImg2}>
              {imageSrc[5] && (
                <Image
                  src={imageSrc[5]}
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
  );
}
