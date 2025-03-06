"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Energy() {
  const { imageSrc, loading, error } = useFetchImages([
    "energy1.avif",
    "energy2.avif",
    "energy3.avif",
    "energy4.avif",
    "energy5.avif",
    "energy6.avif",
    "energy7.avif",
    "energy8.avif",
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
                  <h1>발전 / 에너지 / 유틸리티</h1>
                  <div className={styles.leftAlignContent}>
                    <h2>에너지 및 유틸리티 산업을 위한 디지털화</h2>
                    <p>
                      발전, 에너지, 유틸리티 소프트웨어는 필수적인 에너지 및
                      유틸리티 자산의 설계, 시공, 유지 관리 및 폐기에서 공급망의
                      협력을 촉진하는 광범위한 모범 사례 중심 소프트웨어
                      솔루션을 기업 소유자와 운영자, 유틸리티 서비스 회사 및
                      설비 제조업체에 제공합니다.
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
                    <h3>소유자, 운영자</h3>
                    <p>에너지 및 유틸리티 시설 소유자 및 운영자.</p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/power-utilities.html"
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
                    <h3>EPC / AEC</h3>
                    <p>
                      프로젝트 기반 에너지 및 유틸리티 서비스를 제공하는
                      엔지니어링
                    </p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/power-utilities/power-utilities-webinars.html"
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
                    <h3>장비 제조업체</h3>
                    <p>에너지 및 유틸리티 장비, 조립 제조업체</p>
                    <div className={styles.detailButton}>
                      <Link
                        href="https://xcelerator.siemens.com/global/en/industries/oil-gas.html"
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
                <h3>디지털 라이프사이클 최적화</h3>
                <p>
                  에너지 및 유틸리티 산업은 더욱 역동적인 시장, 진화하는 기술,
                  공공 정책 및 규제 프레임워크의 중대한 변화로 인해 어려움을
                  겪고 있습니다. 수십 년 동안 확립된 문서 중심 프로세스는 지식
                  근로자에게 최고 수준의 성과를 제공하는 데 필요한 정확한 정보를
                  신속하게 제공하지 못할 것입니다. 에너지 및 유틸리티의 미래는
                  자산의 디지털 라이프사이클 최적화에서 탁월한 성과를 달성할 수
                  있는 조직에 속할 것입니다.
                </p>
                <Link
                  href="https://www.sw.siemens.com/ko-KR/digital-thread/integrated-lifecycle-management/enterprise-asset-management/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
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
            <div className={styles.siemens2}>
              <div className={styles.siemensDes2}>
                <h3>운영 효율성</h3>
                <p>
                  에너지 및 유틸리티 산업은 빠르게 발전하고 있습니다. 앞서
                  나가기 위해 에너지 기업은 디지털 혁신을 가속화하고 운영 및
                  정보 기술을 통합하여 데이터 기반 기업으로서 새로운 수준의
                  민첩성과 탄력성을 제공해야 합니다.
                  <br />
                  당사의 솔루션을 사용하면 시스템과 프로세스를 실시간으로
                  지속적으로 최적화하고 운영 성과와 지속 가능성에 대한 새로운
                  통찰력을 제공하여 비즈니스 성과와 혁신을 촉진하는 완전히
                  연결된 디지털 플랜트를 만들 수 있습니다.
                </p>
                <Link
                  href="https://www.sw.siemens.com/ko-KR/digital-thread/smart-manufacturing/industrial-energy-management/"
                  target="_blank"
                >
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
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
            <div className={styles.siemens3}>
              <div className={styles.siemensDes3}>
                <h3>통합 설계 및 구성</h3>
                <p>
                  대규모 자본 자산의 성공적인 설계 및 구축에는 속도, 정확성 및
                  여러 이해관계자 간의 긴밀한 협력이 필요합니다. 그러나 건설
                  회사는 낮은 성과와 생산성, 비용 초과, 낮은 마진으로 인해
                  어려움을 겪는 경우가 많습니다. 강력한 리더로 부상하려면 조직은
                  산업화된 건설 접근 방식으로 전환하여 프로젝트 기반 접근
                  방식에서 제품 기반 접근 방식으로 전환해야 합니다. <br />{" "}
                  Siemens의 통합 설계 및 구성 솔루션 포트폴리오는 에너지, 화학
                  및 인프라 기업이 설계 프로세스를 산업화할 수 있도록
                  설계되었습니다. 여기에는 자본 자산에 모듈식 설계를 사용하고
                  향상된 성능과 지속 가능성을 위해 최적화하는 것이 포함됩니다.
                </p>
                <Link href="https://www.sw.siemens.com/ko-KR/" target="_blank">
                  <button>자세한 내용 보기</button>
                </Link>
              </div>
              <div className={styles.siemensImage}>
                {imageSrc[6] && (
                  <Image
                    src={imageSrc[6]}
                    alt="전자기기 및 반도체"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
            <div className={styles.siemens2}>
              <div className={styles.siemensDes2}>
                <h3>자본 자산 수명주기 관리</h3>
                <p>
                  오늘날 에너지 및 유틸리티 산업은 과거의 어느 때 보다 비용
                  경쟁력이 높아졌으며, 이로써 효율성을 확보해야 상황에 처해
                  있습니다. 프로세스 및 데이터 관리에 대한 라이프사이클 방식은
                  이 산업에 대한 귀사의 기여도가 얼마인지에 관계없이 이러한 해결
                  과제를 충족하는 데 매우 중요합니다.
                  <br />
                  Siemens의 솔루션은 변경을 관리하고, 작업 프로세스를 실행하고,
                  품질을 향상하고, 외부 공급업체 및 고객과 연결하는 방식을
                  개선합니다. 기술 정보를 중앙화하고 이러한 정보를 액세스 가능한
                  최신 상태로 유지하고자 하는 Siemens의 라이프사이클 관리 방식은
                  지식 노동자가 더욱 효율적으로 근무하고 더 높은 수준의 성과를
                  달성할 수 있음을 의미합니다.
                </p>
                <Link
                  href="https://plm.sw.siemens.com/ko-KR/teamcenter/solutions/"
                  target="_blank"
                >
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
          </div>
        </div>
      )}
    </div>
  );
}
