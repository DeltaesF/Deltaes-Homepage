"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

export default function Solidedge() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "solidedge1_ld5cky",
    "solidedge2_wssj5i",
    "solidedge3_r2vn3f",
    "solidedge4_svcxhp",
    "solidedge5_xhylx5",
    "solidedge6_uj24je",
    "solidedge7_zoii8k",
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
            unoptimized
          />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.firstWrapper}>
            <div className={styles.firstContent}>
              <h2>Siemens</h2>
              <h1>Solid Edge</h1>
              <div className={styles.firstImgP}>
                <div className={styles.firstImg}>
                  {imageSrc1[0] && (
                    <Image
                      src={imageSrc1[0]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
                <div className={styles.firstDes}>
                  <p>
                    Siemens Solid Edge는 Siemens Digital Industries Software에서
                    개발한 3D CAD 소프트웨어입니다. 1995년에 처음 출시되었으며,
                    현재 전 세계적으로 100만 명 이상의 사용자가 사용하고
                    있습니다.
                  </p>
                  <p>
                    Solid Edge는 제품 개발 프로세스 전반을 지원하는 포괄적인
                    기능을 제공합니다. 솔리드 모델링, 어셈블리 모델링, 도면
                    작성, 시뮬레이션, 제조, 데이터 관리 등의 기능을 통해 설계자,
                    엔지니어, 제조업체들이 제품을 보다 효율적이고 효과적으로
                    개발할 수 있도록 도와줍니다.
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
                    <strong>동기식 기술 :</strong>
                    직접 모델링의 속도와 간단함을 파라메트릭 설계의 유연성 및
                    제어 기능과 통합한 기술입니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    <strong>클라우드 기능 :</strong>
                    여러 기기에서 전문 3D CAD에 쉽게 액세스하고, CAD 환경을
                    각자의 선호에 맞춰 즉시 구성하고, 설계 리소스 전반에서
                    데이터를 공급업체 및 고객과 신속하게 공유할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    <strong>경제성 :</strong>
                    Solid Edge는 경쟁사 제품에 비해 저렴한 가격으로 제공됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Solid Edge를 사용해야 할까요?</h2>
              <div className={styles.thirdDes}>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <p>
                      Solid Edge는 기계, 자동차, 항공우주, 의료, 소비재 등
                      다양한 산업 분야에서 사용되고 있습니다. <br /> Solid
                      Edge는 제품 개발 프로세스를 효율적으로 수행하고자 하는
                      기업에 적합한 3D CAD 소프트웨어입니다.
                    </p>
                    <ul>
                      <li>
                        사용이 간편합니다. Solid Edge는 직관적인 사용자
                        인터페이스를 제공하여 초보자도 쉽게 사용할 수 있습니다.
                      </li>
                      <li>
                        생산성이 높습니다. Solid Edge의 다양한 기능을 활용하면
                        제품 개발 프로세스를 효율적으로 수행할 수 있습니다.
                      </li>
                      <li>
                        확장성이 뛰어납니다. Solid Edge는 다양한 기능을 제공하여
                        사용자의 요구에 따라 확장할 수 있습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fourWrapper}>
            <div className={styles.fourContent}>
              <h2>주요 솔루션</h2>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>Solid Edge 기계 설계</h3>
                  <p>
                    귀하가 선택하는 CAD 소프트웨어는 설계자와 비정기 사용자
                    모두가 사용하기 쉽고 액세스할 수 있고, 미래 지향적
                    솔루션이며 개방형 표준을 기반으로 구축되는 것이 중요합니다.
                    Solid Edge를 사용하면 이러한 점을 모두 포용합니다.
                  </p>
                  <p>
                    Solid Edge 기계 설계 솔루션은 다음과 같은 기능을 제공한다는
                    점에서 차별화됩니다.Solid Edge 기계 설계 솔루션은 우수한
                    부품 모델링, 빠른 조립 성능, 유연한 제도, 동급 최고의 판금
                    기능 및 업계 최고의 시각화를 제공하는 능력으로 차별화됩니다.
                    이러한 속성으로 Solid Edge는 빠르고 유연한 설계 경험을
                    제공하는 동시에 제품 개발에 내재된 과제를 완화할 수
                    있습니다.
                  </p>
                  <p>
                    Solid Edge를 사용하면 SolidWorks, Creo Elements Direct,
                    Creo용 전용 마이그레이션 프로그램을 통해 다른 산업
                    소프트웨어의 3D 모델 및 2D 도면 데이터 마이그레이션이
                    단순화됩니다.
                  </p>
                </div>
                <div className={styles.imageD}>
                  {imageSrc1[1] && (
                    <Image
                      src={imageSrc1[1]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>Solid Edge 전기 설계</h3>
                  <p>
                    제품은 점점 더 스마트해지고 연결되고 있으며 업계에 관계없이
                    생산성을 향상하고 일상 생활을 단순화하도록 설계되었습니다.
                    이러한 제품을 디자인하는 것은 결코 간단하지 않습니다. ​
                  </p>
                  <p>
                    전기 기계 설계는 원활해야 하며 Solid Edge 전기 설계 솔루션은
                    바로 이를 제공합니다. 업계에서 입증된 도구를 사용하면 전기
                    시스템을 설계하는 동시에 기계 영역과 협력하여 제품 설계를
                    최적화할 수 있습니다. 포함된 전기 시뮬레이션을 사용하면
                    설계가 완벽하게 이루어집니다. <br /> 그리고 와이어 하니스
                    엔지니어링을 자동화함으로써 완벽하게 제조 가능한 설계를
                    생성할 수 있습니다.
                  </p>
                  <p>
                    PCB 설계를 단순화하기 위한 스케치 라우팅과 계층적 2D/3D 계획
                    및 배치 도구를 포함하여 동급 최고의 회로도 캡처 및 인쇄 회로
                    기판(PCB) 레이아웃 도구도 사용할 수 있습니다.
                    <br />
                    고유한 협업 도구는 IDX 2.0 및 3.0 형식 지원을 통해 전기 및
                    기계 작업 흐름 간의 설계 측면을 교환하는 데 사용됩니다.
                  </p>
                </div>
                <div className={styles.imageD1}>
                  {imageSrc1[2] && (
                    <Image
                      src={imageSrc1[2]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>Solid Edge simulation</h3>
                  <p>
                    제품 개발 라이프사이클의 설계 단계에서 사용자는 도움을 주기
                    위한 빠르고 사용하기 쉽고 정확한 도구가 필요합니다. <br />
                    그들은 초기에 설계 동작을 이해하고 덜 매력적인 옵션을
                    제거하며 최적화된 동급 최고의 제품을 제공합니다. <br />
                    Solid Edge 시뮬레이션 솔루션은 다음을 통해 이러한 요구
                    사항을 충족합니다.
                    <br />
                    설계 프로세스의 초기 단계에서 설계자가 수행할 가상
                    프로토타입 분석. <br />열 또는 과도 열 전달 해석부터 유한
                    요소(FE) 및 전산유체역학(CFD) 해석까지 Solid Edge는 설계
                    검증 및 최적화를 위한 시뮬레이션 도구를 제공합니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
                  {imageSrc1[3] && (
                    <Image
                      src={imageSrc1[3]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>Solid Edge 데이터 관리</h3>
                  <p>
                    Solid Edge는 제조 조직의 다양한 요구 사항을 충족할 수 있는
                    확장 가능한 데이터 관리 솔루션 세트를 제공합니다.
                    <br /> Solid Edge를 사용하면 데이터 관리 방식을 신속하게
                    구현하여 워크플로를 개선하고 개정 제어 개선, 엔지니어링 변경
                    속도 향상, 오류 감소 등 측정 가능한 결과를 제공할 수
                    있습니다.
                  </p>
                  <p>
                    그리고 Solid Edge는 더욱 강력한 데이터 관리 솔루션으로
                    성장할 준비가 되었을 때 도움이 되는 경로를 제공합니다.
                    Teamcenter® 소프트웨어 Rapid Start 구성은 Solid Edge를
                    Teamcenter와 통합하여 모든 제품 개발 데이터를 관리, 캡처 및
                    공유하고 고급 디지털 제품 개발 에코시스템에 참여할 수 있도록
                    해줍니다.
                  </p>
                </div>
                <div className={styles.imageD2}>
                  {imageSrc1[4] && (
                    <Image
                      src={imageSrc1[4]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP1}>
                <div className={styles.fourDes1}>
                  <h3>Solid Edge 기술 출판물</h3>
                  <p>
                    Solid Edge 기술 출판물을 사용하여 현장에서 만족스러운 제품
                    성능을 제공하고 비즈니스를 성공시키십시오.
                    <br />
                    사용하기 쉽고 완전히 통합된 저작 애플리케이션을 사용하면
                    제품 제조, 설치 및 유지 관리에 대한 상세하고 정확한 지침을
                    명확하게 전달할 수 있습니다.
                    <br />
                    최첨단 일러스트레이션을 작성하든 대화형 3D 기술 문서를
                    작성하든 Solid Edge 기술 출판물을 사용하면 CAD 모델에서
                    콘텐츠를 자동으로 검색할 수 있으므로 해당 데이터를 수동으로
                    다시 생성할 필요가 없습니다.
                  </p>
                </div>
                <div className={styles.fourImg1}>
                  {imageSrc1[5] && (
                    <Image
                      src={imageSrc1[5]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className={styles.fourImgP2}>
                <div className={styles.fourDes2}>
                  <h3>Solid Edge 제조</h3>
                  <p>
                    Solid Edge는 CNC 가공부터 3D 프린팅까지 오늘날의 복잡한
                    제품을 제조하는 데 필요한 고급 도구를 제공합니다.
                    <br />
                    간단한 NC 프로그래밍부터 고속 및 다축 가공에 이르기까지 모든
                    유형의 CNC 제조를 다루는 공작 기계 프로그래밍은 최신 가공
                    기술을 사용하여 CNC를 효율적으로 프로그래밍하는 포괄적이고
                    매우 유연한 시스템인 Solid Edge CAM Pro에서 사용할 수
                    있습니다. 공작 기계.
                    <br />
                    또한 Solid Edge를 사용하면 적층 제조(AM)를 위한 인쇄 준비 및
                    컬러 인쇄 옵션을 자동화할 수 있습니다. <br />
                    사내에서 적층 제조를 수행하든 서비스 사무소를 통해 3D
                    프린팅을 수행하든 Solid Edge를 사용하면 가격과 배송 옵션을
                    비교하여 아이디어를 현실로 만들 수 있습니다.
                  </p>
                </div>
                <div className={styles.imageD3}>
                  {imageSrc1[6] && (
                    <Image
                      src={imageSrc1[6]}
                      alt="전자기기 및 반도체"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
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
