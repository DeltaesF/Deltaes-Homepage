"use client";

// import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";

// // 메타데이터 추가
// export const metadata: Metadata = {
//   title: "엔지니어링 시뮬레이션 전문기업",
//   description:
//     "Simcenter T3Ster SI는 패키지화된 반도체 장비(Diode, BJT, MOSFET, IGBT, LED 등)의 열 성능을 평가하기 위한 장비입니다.",
//   keywords: ["Simcenter", "T3STER SI", "열 성능 평가", "Simcenter T3STER SI"],
//   openGraph: {
//     title: "엔지니어링 시뮬레이션 전문기업",
//     description:
//       "Simcenter T3Ster SI는 패키지화된 반도체 장비(Diode, BJT, MOSFET, IGBT, LED 등)의 열 성능을 평가하기 위한 장비입니다.",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dvqn2grb6/image/upload/v1749546071/t3ster1_dhmqcu.avif",
//         width: 528,
//         height: 450,
//         alt: "T3STER SI 제품 이미지",
//       },
//     ],
//   },
// };

export default function T3ster() {
  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "t3ster1_dhmqcu",
    "t3ster2_zyg97y",
    "t3ster3_l0q3im",
    "t3ster4_y1mrce",
    "t3ster5_zjuyxk",
    "t3ster6_uky5ft",
    "t3ster7_zcdcgo",
    "t3ster8_caidse",
    "t3ster9_mqzvvn",
    "t3ster10_xqt4jv",
    "t3ster11_ixabdg",
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
              <h2>Simcenter</h2>
              <h1>T3STER SI</h1>
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
                    Simcenter T3Ster SI는 패키지화된 반도체 장비(Diode, BJT,
                    MOSFET, IGBT, LED 등)의 열 성능을 평가하기 위한 장비입니다.
                    Simcenter T3Ster SI는 JEDEC의 JESD51-1 Standard에 기술된
                    Static mode방법을 준수하여 실시간 측정을 진행합니다.
                    1μm단위의 시간과 0.01℃단위의 온도 Resolution으로 보다 정확한
                    샘플의 Thermal Transient 곡선을 얻을 수 있습니다. 이 외에도
                    JESD51-1의 Dynamic mode와 JESD51-14에 기술된 TDIM(Transient
                    dual interface method)를 통한 열저항 측정 등 다양한 기능
                    역시 지원합니다.
                  </p>
                  <p>
                    Simcenter T3Ster SI에서 측정한 샘플의 데이터는 후처리를 위해
                    별도로 사용 가능한 T3Ster Master라는 소프트웨어에서 확인할
                    수 있습니다. Simcenter T3Ster SI의 측정을 통해 얻을 수 있는
                    그래프 중 가장 중요하다고 할 수 있는 구조 함수(Structure
                    Function)와 임피던스, 펄스 열저항 등 다양한 파라미터 확인이
                    가능합니다. 이 중 구조 함수는 반도체 패키지의 Junction에서
                    임의의 지점으로 열이 방열되는 구조를 열저항과 열용량의
                    그래프로 나타내어줍니다. 구조 함수를 통해 JEDEC에서 제공하는
                    방법에 근거하여 RJC 및 RJA와 같은 열저항, 특정 방열
                    경로에서의 열저항, 열용량 및 재료 특성을 분석할 수 있습니다.
                  </p>
                  <button>구매 문의</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondWrapper}>
            <div className={styles.secondContent}>
              <h2>주요 특징</h2>
              <p>
                Simcenter Micred Powertester는 유효 전력 사이클링과 천이 열
                특성화 및 열 구조 조사를 결합합니다. 장치를 장착하는 동안 비파괴
                구조-기능 평가를 수행하여 장치에 대한 완전한 전기 및 구조 평가를
                제공합니다.
              </p>
              <div className={styles.secondDes}>
                <div>
                  <h3>01</h3>
                  <p>
                    <strong>Real-time measurement</strong>
                    <br />
                    T3Ster SI 는 JEDEC JESD51-1 : static test method 준수,
                    실시간 thermal transient 곡선 획득 가능. 그 외에 JESD51-1
                    dynamic test method, JESD51-14 transient dual interface
                    method, JESD 51-5x 시리즈 및 MIL standard 750E 등의 다양한
                    표준 측정 방법에 대한 지원 가능
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    <strong>단일 프레임으로 최대 10개의 PIU 호스팅</strong>
                    <br />
                    최대 5개의 난방 전류 출력 및 40개의 측정 채널 조정 가능(난방
                    및 측정 채널 수 조정 가능)
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    <strong>Structure Function</strong>
                    <br />
                    Structure Function 분석을 통해 다음과 같은 정보를 알아낼 수
                    있습니다.
                    <br />· JEDEC 표준 thermal metric 분석 (JA 열저항, JC 열저항
                    등) <br />· 방열 경로를 따라 부분 열저항 및 부분 열용량 파악
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>Simcenter Micred T3STER SI의 이점</h2>
              <div className={styles.thirdDes}>
                <p>
                  Simcenter Micred T3STER(트리스터) SI는 패키징된 반도체
                  장치(다이오드, BJT, 전력 MOSFET, IGBT, 전력 LED) 및 멀티다이
                  장치의 열 특성화를 위한 첨단 비파괴 천이 열 테스터입니다. 실제
                  열 천이 응답을 정상 상태 방법보다 더 효율적으로 측정합니다.
                  측정값은 최대 1마이크로초 시간 해상도에서 ±0.01°C입니다. 구조
                  함수는 열 흐름 경로를 따라 응답을 패키지 기능의 열 저항 및
                  정전 용량을 나타내는 플롯으로 후처리합니다. Simcenter Micred
                  T3STER SI는 이상적인 응력 전 및 응력 후 고장 감지 도구입니다.
                  열 모델 보정을 위해 측정값을 내보낼 수 있으므로 열 설계 작업의
                  정확성을 뒷받침합니다. ​
                </p>
                <p>
                  <strong>단 한 번의 테스트로 더 빠른 결과 제공</strong>
                  <br />
                  Simcenter Micred T3STER SI는 사용하기 쉽고 빠릅니다. 완벽하게
                  재현 가능한 결과를 생성하므로 각 테스트를 한 번만 수행하면
                  됩니다. Simcenter Micred T3STER SI는 전원 공급 및 감지를 위해
                  전기 연결만 사용하여 패키지 IC를 테스트하므로 빠르고 반복
                  가능한 결과를 제공하며 동일한 파트를 대상으로 여러 테스트를
                  수행할 필요가 없습니다. 컴포넌트를 현장에서 테스트할 수 있으며
                  테스트 결과는 소형 열 모델로 사용하거나 세부 모델을 보정하는
                  데 사용할 수 있습니다.
                </p>
                <p>
                  <strong>모든 유형의 패키징된 반도체 테스트</strong>
                  <br />
                  전력 다이오드 및 트랜지스터부터 보드에 장착되거나 제품에
                  패키징되는 파트를 포함하여 매우 복잡하고 큰 디지털 IC까지 거의
                  모든 유형의 패키징된 반도체를 테스트할 수 있습니다. 간단히
                  말해서 전력 펄스가 컴포넌트에 주입되고 온도 응답이 시간에 대해
                  매우 정확하게 기록됩니다. 반도체 자체는 파트에 전력을 공급하고
                  트랜지스터 또는 다이오드 구조와 같은 다이 표면의 온도에 민감한
                  매개변수를 사용하여 온도 응답을 감지하는 데 사용됩니다. ​
                </p>
                <p>
                  <strong>우수한 소프트웨어에 액세스</strong>
                  <br />
                  Simcenter Micred T3STER SI와 함께 제공되는 소프트웨어는
                  솔루션의 많은 가치를 제공합니다. Simcenter Micred T3STER SI
                  소프트웨어가 온도 대 시간 추적을 소위 구조 함수로 변환할 수
                  있기 때문입니다. Simcenter Micred T3STER SI는 이 플롯에서 다이
                  부착과 같은 패키지의 개별 기능을 감지할 수 있어 제품 개발에
                  탁월한 진단 도구입니다. 이 플롯은 Simcenter Flotherm에서
                  상세한 3D 열 모델을 보정하는 데에도 사용할 수 있으며, 99%
                  이상의 정확도로 공간과 시간 모두에서 온도를 예측하는 칩
                  패키지의 열 모델을 생성할 수 있습니다.
                </p>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <h2>Simcenter T3STER SI 기능</h2>
                    <p>
                      <strong>열테스트</strong>
                      <br />열 특성화 하드웨어 솔루션 제품군은 컴포넌트 및
                      시스템 공급업체에 반도체 집적 회로 패키지, 단일 및 어레이
                      LED, 스택 및 멀티다이 패키지, 전력 전자 모듈, TIM(열 전달
                      물질) 속성 및 전체 전자 시스템을 정확하고 효율적으로
                      테스트 및 측정하고 열적으로 특성화하는 기능을 제공합니다.
                    </p>
                    <p>
                      Siemens의 하드웨어 솔루션은 패키징된 반도체 장치의 실제
                      가열 또는 냉각 곡선을 여러 개별 테스트 결과에서 인위적으로
                      구성하는 대신 지속적으로, 실시간으로 직접 측정합니다.
                      이러한 방식으로 실제 열 천이 응답을 측정하는 것이 훨씬 더
                      효율적이고 정확하며 정상 상태 방법보다 더 정확한 열
                      메트릭을 얻을 수 있습니다. 측정은 정상 상태 방법처럼
                      반복적으로 수행하여 평균을 구하는 것이 아니라 샘플당 한
                      번만 수행하면 됩니다.
                    </p>
                  </div>
                  <div className={styles.thirdImg}>
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
              </div>
            </div>
          </div>
          <div className={styles.fourWrapper}>
            <div className={styles.fourContent}>
              <h2>9 Key Simcenter T3STER SI Strengths </h2>
              <div className={styles.fourNewImg}>
                <div className={styles.fourNewImg1}>
                  <div className={styles.fourNewImg1_1}>
                    <div className={styles.fourNewImgDes}>
                      <h2>1. Simple & Easy</h2>
                      <p>
                        Measuring with Simcenter T3STER SI is very easy. Fix the
                        sample to the desired thermal environment, connect it
                        through electrical wires to the tester, similarly to the
                        normal operating conditions in case of discrete devices
                        such as diodes, LED-s or transistors. Even complex
                        digital IC-s can be tested through their substrate
                        diodes, using 4 wires. <br />
                        The software provides guidance for the connections to
                        make the system more easy to learn and use.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  </div>
                  <div className={styles.fourNewImg1_2}>
                    <div className={styles.fourNewImgDes}>
                      <h2>3. Wide Variety of Semiconductor Components</h2>
                      <p>
                        Simcenter T3STER SI can test most common semiconductor
                        types, diodes, MOSFET-s, IGBT-s, digital VLSI IC-s and
                        more. Our engineering team is always keen on finding
                        suitable test approaches for more {"exotic"} devices if
                        necessary.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  </div>
                  <div className={styles.fourNewImg1_3}>
                    <div className={styles.fourNewImgDes}>
                      <h2>5. Fast Throughput (non-Repetitive)</h2>
                      <p>
                        Simcenter T3STER SI measurements are fast, as fast as
                        the physical properties of a device allow. Using the
                        JEDEC JESD 51-1 static test method, Simcenter T3STER
                        will heat up a component once, then capture the cooling
                        curve in real time, as the device cools down. Due to the
                        excellent signal-to-noise ratio, it is enough to capture
                        the response curve only once. It is safe to say that
                        Simcenter T3STER SI applies the fastest test methodology
                        possible.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  <div className={styles.fourNewImg1_4}>
                    <div className={styles.fourNewImgDes}>
                      <h2>7. Tests Components in Situ</h2>
                      <p>
                        Simcenter T3STER SI allows in-situ tests, it can measure
                        the thermal performance of samples in their native,
                        operational environment, no matter it is air cooling,
                        cold plate mounting, a water jacket, or a component on a
                        PCB. Our technology does not use thermocouples nor
                        requires opening up the package as IR tests would do.
                        This way we test the true thermal performance without
                        distracting the thermal boundary conditions even to the
                        slightest extent.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
                        {imageSrc1[8] && (
                          <Image
                            src={imageSrc1[8]}
                            alt="전자기기 및 반도체"
                            fill
                            style={{ objectFit: "cover" }}
                            unoptimized
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.fourNewImg1_5}>
                    <div className={styles.fourNewImgDes}>
                      <h2>9. Detailed Thermal Model Calibration</h2>
                      <p>
                        For more accurate simulations, a detailed 3D equivalent
                        of the package is the best, generic option. Simulation
                        results are however as accurate as the model itself, any
                        modeling error in material properties or geometry can
                        result in inaccurate simulation data. Unfortunately
                        material properties of thermal interface layers are
                        often uncertain parameters even for component makers.
                        Using Simcenter T3STER SI measurements as reference, our
                        Simcenter Flotherm and Simcenter FLOEFD tools can
                        calibrate component models to create true digital twins
                        of the real component to achieve utmost modeling
                        accuracy. Once the component model is calibrated to
                        Simcenter T3STER SI tests, it should behave as the real
                        physical sample for any arbitrary power input, making
                        even complex transient simulations highly accurate.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
                        {imageSrc1[10] && (
                          <Image
                            src={imageSrc1[10]}
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
                <div className={styles.fourNewImg2}>
                  <div className={styles.fourNewImg2_1}>
                    <div className={styles.fourNewImgDes}>
                      <h2>2. Repeatable & Reproducible</h2>
                      <p>
                        Simcenter T3STER SI provides both repeatable and
                        reproducible test results. Repeated measurements on the
                        same sample will provide the same test data over and
                        over again, eliminating the need for multiple test runs
                        and averaging in most standard situations. This saves
                        valuable testing time.
                      </p>
                      <p>
                        Simcenter T3STER SI measurements are reproducible as
                        well. Measuring the same sample with any calibrated
                        Simcenter T3STER SI system we produce will always
                        provide comparable test results. This makes Simcenter
                        T3STER SI measurements a {"common language"} among
                        different test groups and organizations when they share
                        and compare information on semiconductor thermal
                        performance.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  </div>
                  <div className={styles.fourNewImg2_2}>
                    <div className={styles.fourNewImgDes}>
                      <h2>4. Insight into Thermal Structure</h2>
                      <p>
                        The thermal transient response curves are used for
                        further analysis after Simcenter T3STER SI measurements.
                        Our Simcenter T3STER-Master software provided with the
                        hardware can convert the thermal responses into
                        structure functions, which describe the heat-flow path
                        from the semiconductor junction to the ambient.
                        Structure functions have multiple use, can help define
                        standard thermal metrics, such as RthJC, RthJA, can help
                        comparison among different material choices or support
                        failure analysis by highlighting potential structural
                        errors in key thermal interface layers in a
                        semiconductor package and its thermal environment.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  </div>
                  <div className={styles.fourNewImg2_3}>
                    <div className={styles.fourNewImgDes}>
                      <h2>6. Non-Destructive</h2>
                      <p>
                        Simcenter T3STER SI measurements are non-destructive.
                        After taking a test on a sample, in every case the
                        sample remains operational. This allows Simcenter T3STER
                        SI tests to be used in quality check, or even makes
                        monitoring and sorting of actual production units based
                        on their thermal performance.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
                        {imageSrc1[7] && (
                          <Image
                            src={imageSrc1[7]}
                            alt="전자기기 및 반도체"
                            fill
                            style={{ objectFit: "cover" }}
                            unoptimized
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.fourNewImg2_4}>
                    <div className={styles.fourNewImgDes}>
                      <h2>8. Test-Based Compact Thermal Models</h2>
                      <p>
                        Structure functions calculated based on Simcenter T3STER
                        SI test results are thermal R-C network models. Cutting
                        the model at the case node of the component provides a
                        1D thermal behavior model of the tested package.
                        Exporting this model to Simcenter Flotherm or Simcenter
                        FLOEFD allows a quick and reliable method to generate a
                        test based thermal model and simulate its behavior in a
                        complex 3D CFD environment. This method is recommended
                        for discrete power semiconductor packages, such as
                        TO-220, TO-247 or common LED packages.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
                        {imageSrc1[9] && (
                          <Image
                            src={imageSrc1[9]}
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
