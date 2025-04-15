"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import FBSignup from "@/app/lib/fbsignup";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [showDetails, setShowDetails] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    phoneNumber: "",
    isChecked: false,
  });
  const [message, setMessage] = useState("");

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const toggleEmailForm = () => {
    setShowEmailForm((prevState) => !prevState);
  };

  const passwordRegex = /^.{8,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const errors: Record<string, string> = {}; // 오류를 객체로 받아서 추가합니다.

    const {
      userName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      isChecked,
    } = form;

    // 🔍 유효성 검사
    if (!userName) {
      errors.userName = "사용자 이름을 입력해주세요.";
    }
    if (!email) {
      errors.email = "이메일을 입력해주세요.";
    }
    if (!password) {
      errors.password = "비밀번호를 입력해주세요.";
    } else if (!passwordRegex.test(password)) {
      errors.password = "비밀번호는 8자 이상이어야 합니다.";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "비밀번호 확인란을 입력해주세요.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "전화번호를 입력해주세요.";
    }
    if (!isChecked) {
      errors.checkbox = "개인정보 수집·이용 동의서를 체크해주세요.";
    }

    if (Object.keys(errors).length > 0) {
      // errors에 오류가 있으면 setError(errors)를 호출하여 오류 상태를 업데이트
      setError(errors);
      return;
    }

    // ✅ 회원가입 요청
    const result = await FBSignup({
      email,
      password,
      userName,
      phoneNumber,
      isChecked,
    });

    if (result.success) {
      setMessage("회원가입이 완료되었습니다!");
      setError({});
      router.push("/login");
    } else {
      setMessage(`회원가입 실패: ${result.error}`);
    }
  };

  return (
    <section className={styles.signupContainer}>
      <article className={styles.signupWrapper}>
        <h1>가입하기</h1>
        <p>
          이미 계정이 있습니까?
          <Link href="/login" className={styles.login}>
            로그인
          </Link>
        </p>
        {!showEmailForm ? (
          <nav className={styles.signupButtonWrapper}>
            <button
              onClick={toggleEmailForm}
              className={styles.signupEmailForm}
            >
              이메일로 가입
            </button>
          </nav>
        ) : (
          <form onSubmit={handleSubmit} className={styles.signupForm}>
            <fieldset className={styles.formGroup}>
              <label htmlFor="userName" className={styles.signupLabel}>
                이름
              </label>
              <input
                id="userName"
                type="text"
                placeholder="사용자 이름"
                name="userName"
                value={form.userName}
                onChange={handleChange}
                className={styles.signupInput}
                autoFocus
              />
            </fieldset>
            {error.userName && (
              <span className={styles.error}>{error.userName}</span>
            )}

            <fieldset className={styles.formGroup}>
              <label htmlFor="email" className={styles.signupLabel}>
                이메일
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@example.com"
                value={form.email}
                onChange={handleChange}
                className={styles.signupInput}
              />
            </fieldset>
            {error.email && <span className={styles.error}>{error.email}</span>}

            <fieldset className={styles.formGroup}>
              <label htmlFor="password" className={styles.signupLabel}>
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="8자 이상 입력해주세요."
                value={form.password}
                onChange={handleChange}
                className={styles.signupInput}
              />
            </fieldset>
            {error.password && (
              <span className={styles.error}>{error.password}</span>
            )}
            <fieldset className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.signupLabel}>
                비밀번호 확인
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 확인해주세요."
                value={form.confirmPassword}
                onChange={handleChange}
                className={styles.signupInput}
              />
            </fieldset>
            {error.confirmPassword && (
              <span className={styles.error}>{error.confirmPassword}</span>
            )}
            <fieldset className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.signupLabel}>
                연락처
              </label>
              <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                placeholder="연락처를 입력해주세요."
                value={form.phoneNumber}
                onChange={handleChange}
                className={styles.signupInput}
              />
            </fieldset>
            {error.phoneNumber && (
              <span className={styles.error}>{error.phoneNumber}</span>
            )}
            <button type="submit" className={styles.signupButton}>
              가입하기
            </button>
            {message && <span className={styles.success}>{message}</span>}
            {error.general && (
              <span className={styles.error}>{error.general}</span>
            )}
          </form>
        )}

        <aside className={styles.container}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={form.isChecked}
            onChange={(e) => setForm({ ...form, isChecked: e.target.checked })}
          />
          <label className={styles.label}>
            (필수)개인정보 수집·이용 동의서
            <span onClick={toggleDetails} className={styles.toggleLink}>
              {showDetails ? "접기" : "자세히 보기"}
            </span>
          </label>
          {showDetails && (
            <div className={styles.details}>
              deltaes는 홈페이지 회원 가입 시 회원 서비스 제공에 필요한 최소한의
              정보를 수집하고 있으며 개인정보파일에 수집되는 항목은 다음과
              같습니다. - 이름, 이메일, 연락처 <br />
              <br />
              deltaes가 제공하는 맞춤화된 서비스(각종 서비스 안내 및 참가신청,
              고객문의 등)을 위해 수집합니다. <br />
              <br />
              deltaes는 원칙적으로 이용자의 개인정보를 수집 및 이용 목적범위
              내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여
              처리하거나 제3자에게 제공하지 않습니다. <br />
              <br />
              개인정보의 보유기간 - 회원탈퇴 시까지
            </div>
          )}
        </aside>
        {error.checkbox && (
          <span className={styles.error}>{error.checkbox}</span>
        )}
        <div className={styles.close}>
          <Link href="/main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill-rule="evenodd"
                filter="url(#close_svg__a)"
                transform="translate(-421 -24)"
              >
                <path d="m439.77 28 1.23 1.23-6.77 6.77 6.77 6.77-1.23 1.23-6.77-6.77-6.77 6.77-1.23-1.23 6.769-6.77L425 29.23l1.23-1.23 6.77 6.769L439.77 28z"></path>
              </g>
            </svg>
          </Link>
        </div>
      </article>
    </section>
  );
}
