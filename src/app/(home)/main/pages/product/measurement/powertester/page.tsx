"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Powertester() {
  const { imageSrc, loading, error } = useFetchImages([
    "powertester1.jpg",
    "powertester2.jpg",
    "powertester3.jpg",
    "powertester4.jpg",
    "powertester5.jpg",
    "powertester6.jpg",
    "powertester7.jpg",
    "powertester8.jpg",
    "powertester9.jpg",
    "powertester10.jpg",
    "powertester11.jpg",
    "powertester12.jpg",
    "powertester13.jpg",
    "powertester14.jpg",
    "powertester15.jpg",
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
              <h1>Powertester</h1>
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
                    Simcenter Micred Powertester는 Simcenter T3Ster 또는
                    Simcenter T3Ster SI 기반의 Thermal Transient 측정을 다양한
                    채널에서 여러 개의 샘플을 동시에 측정할 수 있는 장비입니다.
                  </p>
                  <p>
                    Simcenter T3Ster에서 측정할 수 있는 K-factor와 열저항은 물론
                    파워 사이클링 테스트를 진행할 수 있습니다. 또한 사이클링
                    테스트 도중 실시간으로 Thermal transient 측정을 진행하여
                    샘플의 변화를 실시간으로 분석할 수 있습니다.
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
                    <strong>신뢰할 수 있는 도구 사용</strong>
                    <br />
                    Simcenter Micred Powertester는 제조 현장에서 전력 컴포넌트의
                    가능한 고장 원인에 대한 자동 테스트 및 진단을 지원합니다.
                    소비자 가전과 산업용 전자 시스템의 에너지 수요가 증가하는
                    가운데, 전기 전자제품 컴포넌트 공급업체와 OEM은 항공,
                    전기차, 기차, 발전 및 재생 에너지 생산을 위해 고도로
                    안정적인 시스템을 제공해야 한다는 까다로운 과제에 직면해
                    있습니다. Simcenter Micred Powertester는 수만 개에서 최대
                    수백만 개의 주기 동안 모듈에 전력을 공급하는 동시에 실시간
                    작동 중 고장 진단 기능을 제공합니다.
                  </p>
                </div>
                <div>
                  <h3>02</h3>
                  <p>
                    <strong>실시간 고장 진단 수신</strong>
                    <br />
                    Simcenter Micred Powertester는 자동화된 전력 사이클을
                    실행하면서 실시간 작동 중 고장 진단을 위한 분석 데이터를
                    생성하는 실험실 환경 및 제조를 위해 제작된 유일한
                    기계입니다. 이 제품은 전력 전자 모듈을 사용하는
                    애플리케이션의 안정성을 테스트하기 위해 수명 주기 내내
                    테스트를 수행하도록 설계되었습니다.
                  </p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>
                    <strong>프로세스 가속화</strong>
                    <br />
                    Simcenter Micred Powertester는 프로세스 중에 테스트를 진행
                    중인 장치를 제거할 필요 없이 동일한 기계에서 완전히 자동화된
                    전력 테스트 및 사이클링을 동시에 제공한다는 점에서
                    독보적입니다. 간편한 터치스크린 인터페이스로 제조 현장의
                    기술자 및/또는 실험실의 고장 해석 엔지니어가 사용할 수
                    있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}>
            <div className={styles.thirdContent}>
              <h2>왜 Powertester를 사용해야 할까요?</h2>
              <div className={styles.thirdDes}>
                <div className={styles.thirdImgP}>
                  <div className={styles.thirdDes2}>
                    <h3>Real – Time Failure Diagnosis</h3>
                    <p>
                      Simcenter Power Cycle Tester 는 생 산 현 장 또 는
                      실험실에서 전력반도체 부품이 고장에 이르는 과정을
                      실시간으로 분석하고 기록할 수 있는 전세계 유일의
                      장비입니다.
                      <br />이 장비는 전력 반도체 모듈을 사용하는 시스템의
                      신뢰성을 테스트하여, 제품의 수명주기를 산출할 수 있도록
                      설계되었습니다. Power Tester 는 전력반도체 (IGBT, MosFET),
                      LED, 전자부품 성능 평가에 필수인 “열 측정 및 분석” 기 술의
                      정 점으 로 불리 는 Simcenter T3Ster(트리스터)의 산업용
                      모델로 개발되었습니다. <br />
                      특히 신뢰성 테 스트를 위한 실험 도 중 DUT(Device Under
                      Tester:테스트 제품)의 변경이나 제품 이동 등이 전혀 필요
                      없으며, 하나의 장비 (Simcenter Power Cycle Tester)에서
                      모든 Power cycling test를 진행 할 수 있어 높은 실험의
                      신뢰도를 확보 할 수 있습니다.
                      <br />
                      터치 스크린 기반의 간결한 GUI는 사용하기 쉽고 직관적으로
                      구성 되어 있어, 전문 분석 엔지니어부터 비 전문가인 생산
                      부서 직원까지 누구나 쉽게 사용할 수 있도록 되어 있습니다.
                    </p>
                  </div>
                  <div className={styles.thirdImg}>
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
                <div className={styles.thirdImgP3}>
                  <div className={styles.thirdImg3}>
                    {imageSrc[2] && (
                      <Image
                        src={imageSrc[2]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.thirdDes3}>
                    <p>
                      Simcenter Power Cycle Tester 는 테스트 중 온도 , 전압 ,
                      전류 등을 측정함과 동시에 구조분석 그래프(Structure
                      Function)을 통해 패키지의 변화와 고장을 분석하며, 패키지의
                      개발, 신뢰성 분석 및 생산 투입 전 부품에 대한
                      배치(Batch)체크를 속도와 품질을 향상 시키기 위해서도 사용
                      할 수 있습니다.
                    </p>
                    <p>
                      파워사이클 테스트를 하는 동안 측정된 실시간 구조분석
                      그래프(Structure Function)은 DUT가 고장에 이르는 과정에
                      대해 기록하며, 각 부분의 열화 시점 및 사이클 횟수를 쉽게
                      확인 할 수 있어 진행된 실험에 대한 별도의 사후분석이
                      필요하지 않습니다 . 따라서 다수의 샘플을 장기간 사이클
                      테스트를 하면서 열화가 되는 구간과 시기를 일일이 확인할
                      필요가 없어졌습니다.
                    </p>
                    <p>
                      또한 정확한 열화 구간 확인을 위해 진행해온 별도의 열 저항
                      측정도 필요 없습니다. DUT를 Simcenter Power Cycle Tester
                      에 연결하고 사이클링과 열 저항 측정에 대한 조건만 입력하면
                      됩니다. Simcenter Power Cycle Tester 를 통해서 전력반도체
                      공급자는 안정적인 제품 설계를 통해 향상된 제품을 시장에
                      공급할 수 있으며, 사용자에게는 신뢰성 있는 사양을 제공할
                      수 있습니다. Simcenter Power Cycle Tester 에서 산출된 실험
                      및 분석 데이터는 Simcenter Flotherm, Simcenter Floefd 와
                      같은 CFD(전산유체역학) 소프트웨어를 통해 세부 모델을
                      보정하고 검증하는데 사용할 수 있습니다.
                    </p>
                  </div>
                </div>
                <div className={styles.thirdImgP4}>
                  <h3>Simcenter POWERTESTER comparison table</h3>
                  <div className={styles.thirdImg4}>
                    {imageSrc[3] && (
                      <Image
                        src={imageSrc[3]}
                        alt="전자기기 및 반도체"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.thirdImg5}>
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
              </div>
            </div>
          </div>
          <div className={styles.fourWrapper}>
            <div className={styles.fourContent}>
              <h2>10 Key Simcenter Powertester Strengths</h2>
              <div className={styles.fourNewImg}>
                <div className={styles.fourNewImg1}>
                  <div className={styles.fourNewImg1_1}>
                    <div className={styles.fourNewImgDes}>
                      <h2>1. Broad Range of Available Hardware</h2>
                      <p>
                        The Simcenter POWERTESTER range of products combine
                        active power cycling tests with thermal transient
                        measurements, allowing users to understand the failure
                        mechanisms of power electronics components during a
                        lifetime test. Each system supports standard thermal
                        transient testing as well, at elevated power levels.
                      </p>
                      <p>
                        To meet the powering requirements of various industries
                        and applications, our team has created a range of
                        systems starting from 500A output all the way up to a
                        combined powering capability of 3600A. We offer the test
                        of multiple devices from 3 to 16 depending on the
                        configuration. The systems are also available with and
                        without cold-plate solutions, depending on the cooling
                        requirements of the power modules to be tested.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  <div className={styles.fourNewImg1_2}>
                    <div className={styles.fourNewImgDes}>
                      <h2>3. Workflow Dedicated Software</h2>
                      <p>
                        Each system is equipped with a touch screen and runs a
                        software which was engineered to resemble the most
                        common thermal testing and power cycling workflows. The
                        operation of the software is easy to learn as it is set
                        to guide our users through the most important settings.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  <div className={styles.fourNewImg1_3}>
                    <div className={styles.fourNewImgDes}>
                      <h2>5. Short & Long Duration (PCsec & PCmin) Support</h2>
                      <p>
                        Compared to many cycling systems used in the industry
                        the Simcenter POWERTESTER line of products offers the
                        advantage that it is capable of providing its nominal
                        current (even up to 3600A) for extended times, allowing
                        tests in the several minutes range without any further
                        concern. This way not only PCSec, but PCmin cycling
                        strategies are supported.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  </div>
                  <div className={styles.fourNewImg1_4}>
                    <div className={styles.fourNewImgDes}>
                      <h2>7. Remote Monitoring</h2>
                      <p>
                        Connecting the Simcenter POWERTESTER to a local area
                        network the test process can be monitored on any browser
                        enabled device connected to the same network. Power
                        cycling tests may take a long time, even up to the range
                        of several weeks, this feature allows remote monitoring
                        of the test progress with ease.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  <div className={styles.fourNewImg1_5}>
                    <div className={styles.fourNewImgDes}>
                      <h2>9. Safety Feature & High Reliability</h2>
                      <p>
                        As each system is designed for autonomous operation,
                        Simcenter POWERTESTERs are equipped with safety sensors,
                        monitoring potential smoke, coolant leakage, over
                        temperature, etc. An exception is the 2400A system,
                        which allows tests to be carried out in customer
                        specific environments, therefore instead of pre-mounted
                        sensors, our team provides sensor inputs to comply with
                        the safety requirements of user laboratories.
                      </p>
                      <p>
                        In case of a potential power outage, each system will
                        switch to a built-in UPS, which is not enough to
                        continue the power cycling, however it gives the
                        Simcenter POWERTESTER enough time to save all the test
                        data recorded before the time of the event in a safe
                        way, making sure no data loss will happen.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
                        {imageSrc[13] && (
                          <Image
                            src={imageSrc[13]}
                            alt="전자기기 및 반도체"
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.fourNewImg2}>
                  <div className={styles.fourNewImg2_1}>
                    <div className={styles.fourNewImgDes}>
                      <h2>2. Wide Range of Discretes & Modules</h2>
                      <p>
                        A range of modules and discrete power semiconductor
                        devices can be tested by our systems. Diodes, MOSFET-s
                        and IGBT devices are supported in multiple operating
                        modes. The systems are prepared for testing SiC devices
                        as well.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  </div>
                  <div className={styles.fourNewImg2_2}>
                    <div className={styles.fourNewImgDes}>
                      <h2>4. Range of Power Cycling Strategies (AQG-324)</h2>
                      <p>
                        Each Simcenter POWERTESTER offers a range of power
                        cycling test strategies. It is possible to set up a
                        constant current level which will be maintained all
                        along the cycling process, or our users can choose among
                        constant junction temperature change or constant case
                        temperature change controlled cycling modes, where the
                        system will automatically adjust the cycling current to
                        meet the desired criteria. The power cycling tester
                        offers AQG-324 compliant operation, to meet automotive
                        test requirements.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  </div>
                  <div className={styles.fourNewImg2_3}>
                    <div className={styles.fourNewImgDes}>
                      <h2>6. High Precision Monitoring</h2>
                      <p>
                        Simcenter POWERTESTER offer high-precision monitoring of
                        possible failure parameters. Junction temperature
                        change, maximum junction temperature, device Voltage at
                        cycling current, gate leakage current, dynamic thermal
                        resistance data and more are available at each and every
                        cycle to monitor the health of the components. Changes
                        in the junction temperature or device Voltage may
                        indicate degradation of structural elements or
                        electrical interconnects, which the system can detect
                        and can help analyse.
                      </p>
                      <p>
                        The captured data can be viewed during the cycling
                        session on the touch screen, on a remote device or even
                        exported to a csv format for analysis in third party
                        software.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
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
                  </div>
                  <div className={styles.fourNewImg2_4}>
                    <div className={styles.fourNewImgDes}>
                      <h2>8. Minimum User Effort</h2>
                      <p>
                        Setting up the tests is simple and can be achieved
                        without in-depth electrical/thermal engineering
                        knowledge. Our team can provide dedicated trainings on
                        demand, where thanks to the well thought interface and
                        the simplicity of the connections we can teach all
                        features of the systems in a day.
                      </p>
                      <div className={styles.fourNewImgDesImg}>
                        {imageSrc[12] && (
                          <Image
                            src={imageSrc[12]}
                            alt="전자기기 및 반도체"
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.fourNewImg2_5}>
                    <div className={styles.fourNewImgDes}>
                      <h2>10. Understand Damage Mechanism Cause & Effect</h2>
                      <p>
                        The combination of thermal transient measurements and
                        active power cycling provides a true, unique advantage:
                        the system can monitor changes in the thermal stack of
                        the packages periodically, giving clear information on
                        the thermal impact of structural changes during the
                        cycling process. This is achieved by transforming the
                        thermal transient responses to structure functions,
                        which will provide a thermal map of the heat flow from
                        the semiconductor junction to the ambient. Should any
                        change happen in the stack, structure functions will
                        reveal it, help point out the location or locations of
                        the issues and their exact effect on the devices’
                        thermal resistance.
                      </p>

                      <div className={styles.fourNewImgDesImg}>
                        {imageSrc[14] && (
                          <Image
                            src={imageSrc[14]}
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
