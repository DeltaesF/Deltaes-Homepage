"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Consumer() {
  const { imageSrc, error } = useFetchImages([
    "consumer1.jpg",
    "consumer2.jpg",
    "consumer3.jpg",
    "consumer4.jpg",
    "consumer5.jpg",
    "consumer6.jpg",
    "consumer7.jpg",
    "consumer8.jpg",
    "consumer9.jpg",
    "consumer10.jpg",
    "consumer11.jpg",
    "consumer12.jpg",
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.imageWrapper}>
          {imageSrc[0] && (
            <Image
              src={imageSrc[0]}
              alt="전자기기 및 반도체"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          <div className={styles.firstDes}>
            <div className={styles.firstDesWrapper}>
              <h1>소비재</h1>
              <div className={styles.leftAlignContent}>
                <h2>소비재 및 소매업을 위한 디지털화</h2>
                <p>
                  소비재 기업은 시장의 대폭적인 변화에 대응할 수 있도록
                  변화되어야 합니다. 글로벌화, 규제 요구의 증가, 모바일 커머스,
                  소비자 행동의 변화에 따라 소비재 기업은 시장 출시 시간과
                  공급망에서 필요한 민첩성을 재정립하고 있습니다. 기업은 디지털
                  비즈니스 요소 없이는 더 이상 복잡성을 관리할 수 없습니다.
                  다양한 경험과 소프트웨어 솔루션은 기업 가치 체인 전체에서
                  소비재의 디지털화를 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondWrapper}>
          <h2>세부 산업 분야</h2>
          <div className={styles.secondGrid}>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[1] && (
                  <Image
                    src={imageSrc[1]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>의류, 신발 및 악세서리</h3>
                <p>
                  디지털화를 통해 패션 산업을 변화시키고 개인 맞춤형 제품 제공
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/machinebuilding/textile-industry.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[2] && (
                  <Image
                    src={imageSrc[2]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>스포츠 용품 및 장난감</h3>
                <p>
                  스마트한 제품을 제공하기 위한 통합 설계, 시뮬레이션 및 테스트
                  툴
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/food-beverage/consumer-packed-goods.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[3] && (
                  <Image
                    src={imageSrc[3]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>홈 & 사무용품</h3>
                <p>
                  출시 시기를 단축하면서 고객 요구사항에 부합하는 제품을
                  만들도록 지원 합니다.
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/food-beverage/consumer-packed-goods.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[4] && (
                  <Image
                    src={imageSrc[4]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>​식음료</h3>
                <p>식품 안전, 규정 준수 및 제조 우수성을 지원하는 솔루션</p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/food-beverage.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[5] && (
                  <Image
                    src={imageSrc[5]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>뷰티, 개인 및 홈케어</h3>
                <p>
                  설계, 민첩성, 추적 가능성 및 프로그램 실행을 최적화 하는 통합
                  솔루션
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/pharmaceutical-life-science-industries.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.gridDes}>
                {imageSrc[6] && (
                  <Image
                    src={imageSrc[6]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3>소매</h3>
                <p>
                  혁신을 위해 많은 파트너가 필요하다는 생각으로 소매업체가
                  미래를 준비할 수 있도록 지원합니다.
                </p>
                <div className={styles.detailButton}>
                  <Link
                    href="https://xcelerator.siemens.com/global/en/industries/food-beverage/consumer-packed-goods.html"
                    target="_blank"
                  >
                    <button>자세한 내용 보기 </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.siemens}>
          <div className={styles.siemensDes}>
            <h2>주요 솔루션</h2>
            <h3>프로그램 수명주기 관리</h3>
            <p>
              신제품 이니셔티브는 소비재 기업의 핵심 비즈니스 동력입니다. 이
              동력을 추진하려면 프로그램과 프로젝트 관리 우수 사례를 구현하는
              적응형 도구가 필요합니다. Siemens 통합 프로그램 라이프사이클 관리
              솔루션은 기존 기능에 제품 및 생산 라이프사이클 관리를 결합합니다.
              완전한 프로세스 투명성을 제공하며, 이해 관계자들이 신뢰할 수 있는
              의사 결정을 내리기 위한 세부 데이터를 생성하고 지식 재산을 쉽게
              재사용 할 수 있도록 지원합니다. 이 조합으로 비즈니스 관리의 다음
              단계에 대한 직관적인 참여, 쉬운 제어 및 모니터링이 이뤄집니다.
            </p>
            <Link href="https://www.sw.siemens.com/ko-KR/" target="_blank">
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[7] && (
              <Image
                src={imageSrc[7]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens2}>
          <div className={styles.siemensDes2}>
            <h3>대량생산 제품 디자인</h3>
            <p>
              고객은 건강하고 환경 친화적이며 저렴한 혁신적 제품을 요구합니다.
              이와 같은 요구는 제품 개발 시 막대한 부담으로 작용합니다. 출시
              시간을 단축하고 유연성과 효율성을 향상시키려면 정교한 배합 설계와
              시뮬레이션, 상세 자재 특성 관리 등과 같은 관리 기능, 효율적인 후보
              선택 메커니즘, 품질 테스트를 위한 매개변수화가 필요합니다.
              Siemens의 Digital Formulation Solutions는 완전한 R&D 및 제조
              통합과 결합돼 R&D 관련 프로세스를 간소화·최적화하며, 비견할 수
              없는 경쟁 우위를 가져다 줍니다.
            </p>
            <Link
              href="https://plm.sw.siemens.com/ko-KR/opcenter/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[8] && (
              <Image
                src={imageSrc[8]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens3}>
          <div className={styles.siemensDes3}>
            <h3>실험실 관리</h3>
            <p>
              제품이 소비자 건강에 미칠 수 있는 영향, 고품질 성분에 대한 요구,
              고품질 생산 프로세스 및 지속가능성 등 제품 품질에 대한 고객
              관심도가 급격히 증가했습니다. 정부 및 비정부 기관 모두 새로운
              규제에 대응해 나가고 있습니다. 연구 프로세스 디지털화는 제품 및
              생산 검증과 품질을 보장하고 기업이 새로운 안목을 갖춘 밀레니얼
              소비자의 마음을 사로잡을 수 있는 방식으로 신제품 출시를 앞당길 수
              있는 능력을 제공합니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/solutions/laboratory-information-management/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[9] && (
              <Image
                src={imageSrc[9]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens2}>
          <div className={styles.siemensDes2}>
            <h3>아크웍 개발</h3>
            <p>
              아트웍은 브랜드 품질과 구매를 불러일으키는 데 필요한 중요 정보를
              전달하는 주요 수단입니다. 아트웍은 정확하고 규정을 준수해야 하며
              제품의 주장하는 바와 이점을 전달해야 합니다. PLM 기반 위에 제작된
              아트웍은 민첩성과 품질을 개선하고 리콜 위험을 줄이고 구매력과
              충성도를 높이는 창의적인 측면에 초점을 두는 설계자의 능력을
              향상시킵니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/solutions/label-design/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[10] && (
              <Image
                src={imageSrc[10]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className={styles.siemens3}>
          <div className={styles.siemensDes3}>
            <h3>패키지 디자인</h3>
            <p>
              패키징은 브랜드가 사용할 수 있는 최고의 마케팅 수단이지만
              일상적으로 사용된다는 점을 감안해 이뤄져야 합니다. 설계자는 환경
              규제와 소셜 미디어로 인해 빨라진 제품 사이클, 활발한 온라인 거래
              사용에 따른 견고한 기계 구성 요구사항 등을 해결해야 합니다.
              설계자는 Siemens의 패키지 디자인 및 시각화 기능을 사용해 구조적
              통합과 효율적이며 효과적인 제조 환경 보장을 통해 소비자가 선호하는
              패키지를 제작할 수 있습니다.
            </p>
            <Link
              href="https://www.sw.siemens.com/ko-KR/solutions/product-design/"
              target="_blank"
            >
              <button>자세한 내용 보기</button>
            </Link>
          </div>
          <div className={styles.siemensImage}>
            {imageSrc[11] && (
              <Image
                src={imageSrc[11]}
                alt="전자기기 및 반도체"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
