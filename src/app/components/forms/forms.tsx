"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Award } from "lucide-react";
import styles from "./forms.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";
import Image from "next/image";
import { db } from "@/app/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// 폼 데이터 타입을 정의합니다.
interface FormData {
  name: string;
  company: string;
  department: string;
  title: string;
  workPhone: string;
  email: string;
  mobilePhone: string; // 선택
  attendedBefore: "yes" | "no" | "";
  previousEventName: string;
  marketingConsent: "yes" | "no" | "";
}

// 폼 제출 상태 타입을 정의합니다.
type SubmitStatus = {
  status: "idle" | "success" | "error";
  message: string;
};

// 폼 초기 상태
const initialFormData: FormData = {
  name: "",
  company: "",
  department: "",
  title: "",
  workPhone: "",
  email: "",
  mobilePhone: "",
  attendedBefore: "",
  previousEventName: "",
  marketingConsent: "",
};

export default function Forms() {
  // --- 상태 관리 ---
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    status: "idle",
    message: "",
  });
  const [validationError, setValidationError] = useState<string>("");

  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "agenda_gzhphe",
  ]);

  // --- 이벤트 핸들러 ---

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 폼 유효성 검사 (수정된 부분)
  const validateForm = (): boolean => {
    // 1. fieldNames 객체를 먼저 정의합니다.
    const fieldNames = {
      name: "성함",
      company: "소속",
      department: "부서명",
      title: "직함",
      workPhone: "회사연락처",
      email: "이메일주소",
    };

    // 2. fieldNames의 키로 필수 필드 타입을 만듭니다. (이것이 핵심 수정 사항)
    type RequiredFieldKey = keyof typeof fieldNames;

    // 3. 'keyof FormData' 대신 'RequiredFieldKey' 타입을 사용합니다.
    const requiredFields: RequiredFieldKey[] = [
      "name",
      "company",
      "department",
      "title",
      "workPhone",
      "email",
    ];

    for (const field of requiredFields) {
      // 이제 'field'는 'RequiredFieldKey' 타입이므로
      // formData[field]와 fieldNames[field] 모두 타입-세이프합니다.
      if (!formData[field]) {
        setValidationError(
          `필수 항목을 모두 입력해주세요: ${fieldNames[field]}`,
        );
        return false;
      }
    }
    // 간단한 이메일 형식 검사
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setValidationError("올바른 이메일 주소를 입력해주세요.");
      return false;
    }
    setValidationError("");
    return true;
  };

  // --- 🔽 폼 제출 핸들러 (HTTP 확장 프로그램 호출 로직 추가) 🔽 ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus({ status: "idle", message: "" });

    try {
      // 1. 제출할 데이터 준비 (Firestore용)
      const dataToSubmitFirestore = {
        ...formData,
        // '아니오' 선택 시 이전 행사명은 비움
        previousEventName:
          formData.attendedBefore === "yes" ? formData.previousEventName : "",
        submittedAt: serverTimestamp(), // 서버 시간 기준으로 타임스탬프 기록
      };

      // 2. Firestore에 문서(document) 추가 (백업용으로 저장)
      const collectionRef = collection(db, "seminar_11th_registrations");
      await addDoc(collectionRef, dataToSubmitFirestore);

      // 3. (추가!) Google Sheets 확장 프로그램 URL로 데이터 전송
      // 확장 프로그램에서 제공한 고유 URL
      const extensionUrl = `https://asia-northeast3-homepage-30170.cloudfunctions.net/ext-http-export-sheets-saveRecord`;

      // JSON으로 보내는 데이터에는 serverTimestamp 대신 클라이언트 시간을 ISO 문자열로 보냅니다.
      const dataForSheet = {
        ...formData,
        previousEventName:
          formData.attendedBefore === "yes" ? formData.previousEventName : "",
        submittedAt: new Date().toISOString(),
      };

      // HTTP POST 요청
      const response = await fetch(extensionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForSheet),
      });

      // HTTP 요청이 실패한 경우 오류 처리
      if (!response.ok) {
        // 응답 본문을 텍스트로 읽어 오류 메시지에 포함
        const errorBody = await response.text();
        console.error("HTTP Extension Error Body:", errorBody);
        throw new Error(
          `HTTP error! status: ${response.status}. Body: ${errorBody}`,
        );
      }

      // 4. 성공 처리
      console.log(
        "Form Data Submitted to Firestore and Google Sheets:",
        dataForSheet,
      );
      setSubmitStatus({
        status: "success",
        message: "사전등록이 성공적으로 완료되었습니다. 감사합니다.",
      });
      setFormData(initialFormData); // 폼 초기화
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        status: "error",
        message: "등록 중 오류가 발생했습니다. 다시 시도해주세요.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생!</p>;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* --- 1. 세미나 정보 --- */}
        <div className={styles.card}>
          <h1 className={styles.mainTitle}>
            &apos;제 11회 전력반도체 신뢰성평가 및 열관리 기술세미나&apos;
            사전등록
          </h1>
          <h2 className={styles.subTitle}>
            제 11회 전력반도체 신뢰성평가 및 열관리 기술세미나
          </h2>

          <div className={styles.infoList}>
            <p className={styles.infoItem}>
              <strong className={styles.infoLabel}>주최</strong>: (주)델타이에스
            </p>
            <p className={styles.infoItem}>
              <Calendar className={styles.infoIcon} />
              <strong className={styles.infoLabel}>일시</strong>: 2025년 11월
              21일(금) 10:00 ~ 16:30
            </p>
            <p className={styles.infoItem}>
              <MapPin className={styles.infoIcon} />
              <strong className={styles.infoLabel}>장소 </strong>: 한양대학교
              백남학술정보관 국제회의실
            </p>
            <p className={styles.infoItem}>
              <Award className={styles.infoIcon} />
              <strong className={styles.infoLabel}>후원 </strong>: 한국
              지멘스디지털인더스트리소프트웨어, (사)한국전력소자산업회
            </p>
          </div>

          <div className={styles.greeting}>
            <h3 className={styles.greetingTitle}>모시는 글</h3>
            <div className={styles.greetingBody}>
              <p>
                Delta ES는 제 11회 전력반도체 신뢰성평가 및 열관리 기술세미나를
                2025년 11월 21일(금) 한양대학교 백남학술정보관 국제회의실에서
                개최합니다.
              </p>
              <p>
                저희 Delta ES는 지멘스 DISW의 Tier 1 파트너사로, 수명 가속시험을
                통한 전력반도체의 신뢰성 평가기술과 전장부품 방열 설계 최적화를
                위한 열계 면 소재(TIM)의 열물성 측정 및 전자장비 열관리/냉각
                분야에 대한 공학 시물레이션/각종 시험 기술을 소개하는 &quot;제
                11회 전력반도체 신뢰성평가 및 열관리 기술세미나&quot;를 아래와
                같이 개최합니다.
              </p>
              <p>
                이번 행사는 전력반도체관련 미래기술, 연구개발 및 사업협력 방안을
                선도하고 있는 약 130여개 기업체, 출연연구기관, 대학교 연구실
                등으로 구성된 한국전력소자산업협회의 후원으로 진행되기에 더욱
                뜻깊다 할 수 있겠습니다.
              </p>
              <p>
                전력반도체 신뢰성 평가 및 전자장비 열관리/냉각기술 분야에서
                끊임없는 열정으로 연구에 매진하시는 여러분의 적극적인 참여와
                성원으로, 이번 세미나가 성공적으로 개최될 수 있길 바라며, 우리
                나라 전력반도체 신뢰성 평가 및 전자장비 열관리/냉각기술 분야의
                발전에 기여하고, 더 나아가 세계적인 기술을 선도하는 데 큰 힘이
                되길 희망합니다.
              </p>
              <p>
                끝으로 대회 준비를 위해 수고해주신 행사준비 관계자분들과, 바쁘신
                중에도 불구하고 본 행사에 발표 연사로 참여 해주신 분들께 깊은
                감사의 말씀을 드립니다.
              </p>
              <p>
                우리나라 전력반도체 산업기술과 전자장비 열관리/냉각 기술 분야의
                발전과 관심을 보내주신 여러분의 무궁한 발전과 행복을 기원합니다.
              </p>
              <p className={styles.greetingSignature}>
                2025년 11월 21일
                <br />
                ㈜Delta ES 대표이사 원영수
              </p>
            </div>
          </div>
        </div>

        {/* --- 2. Agenda --- */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Agenda</h2>
          <div className={styles.agendaImageContainer}>
            {/* 이미지를 public 폴더에 넣거나, next/image를 사용하세요.
            <img
              src="https://placehold.co/590x420/e0e7ff/3730a3?text=Agenda+(590x420)"
              alt="Seminar Agenda"
              className={styles.agendaImage}
              width={590}
              height={420}
            /> */}
            {imageSrc1[0] && (
              <Image
                src={imageSrc1[0]}
                alt="Seminar Agenda"
                className={styles.agendaImage}
                width={590}
                height={420}
                unoptimized
              />
            )}
          </div>
        </div>

        {/* --- 3. 등록 폼 --- */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>사전등록</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* --- 필수 입력 사항 --- */}
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  성함 <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>
                  소속 (회사명/기관명){" "}
                  <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="department" className={styles.label}>
                  부서명 <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="title" className={styles.label}>
                  직함 <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="workPhone" className={styles.label}>
                  회사연락처 <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="tel"
                  name="workPhone"
                  id="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="예: 02-123-4567"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  이메일주소 <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="example@company.com"
                />
              </div>

              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label htmlFor="mobilePhone" className={styles.label}>
                  휴대전화 (개인연락처){" "}
                  <span className={styles.optionalText}>(선택)</span>
                </label>
                <input
                  type="tel"
                  name="mobilePhone"
                  id="mobilePhone"
                  value={formData.mobilePhone}
                  onChange={handleChange}
                  className={styles.input2}
                  placeholder="예: 010-1234-5678"
                />
              </div>
            </div>

            {/* --- 설문 항목 --- */}
            <div className={styles.surveySection}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  이전에 Delta ES 에서 주최하는 행사에 참여하신적이 있으십니까?
                </legend>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="attendedBefore"
                      value="yes"
                      checked={formData.attendedBefore === "yes"}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    <span>예</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="attendedBefore"
                      value="no"
                      checked={formData.attendedBefore === "no"}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    <span>아니오</span>
                  </label>
                </div>
              </fieldset>

              {/* 이전 참여 행사명 (조건부 표시) */}
              {formData.attendedBefore === "yes" && (
                <div className={styles.formGroup}>
                  <label htmlFor="previousEventName" className={styles.label}>
                    이전에 참여하신 행사의 이름을 적어주시기 바랍니다.
                  </label>
                  <input
                    type="text"
                    name="previousEventName"
                    id="previousEventName"
                    value={formData.previousEventName}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              )}

              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  향후 Delta ES 의 영업 및 기술 자료를 받아보시기를 원하십니까?
                </legend>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="marketingConsent"
                      value="yes"
                      checked={formData.marketingConsent === "yes"}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    <span>예</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="marketingConsent"
                      value="no"
                      checked={formData.marketingConsent === "no"}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    <span>아니오</span>
                  </label>
                </div>
              </fieldset>
            </div>

            {/* --- 제출 버튼 및 상태 메시지 --- */}
            <div className={styles.formActions}>
              {validationError && (
                <p className={styles.errorMessage}>{validationError}</p>
              )}

              {submitStatus.status === "success" && (
                <p className={styles.successMessage}>{submitStatus.message}</p>
              )}
              {submitStatus.status === "error" && (
                <p className={styles.errorMessage}>{submitStatus.message}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={styles.submitButton}
              >
                {isLoading ? "제출 중..." : "제출하기"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
