"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import {
  loginWithPopup,
  loginWithRedirect,
  checkAndRegisterUser,
} from "@/app/lib/fbgooglelogin";

// Firebase 에러 타입 정의 (message와 code를 가짐)
interface FirebaseError {
  code?: string;
  message: string;
}

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string>>({});
  const router = useRouter();

  // 1. 모바일 리다이렉트 후 복귀 처리 & 로그인 감지 통합
  useEffect(() => {
    // A. 리다이렉트로 돌아왔을 때 결과 처리 (모바일용)
    getRedirectResult(auth).then(async (result) => {
      if (result) {
        console.log("리다이렉트 로그인 성공:", result.user.email);
        await checkAndRegisterUser(result.user);
        router.push("/main");
      }
    });

    // B. 실시간 인증 상태 감지 (PC/모바일 공통 안전장치)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 이미 로그인 된 상태면 메인으로
        router.push("/main");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const toggleLoginForm = () => setShowLoginForm(!showLoginForm);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // ... (이메일 로그인 검증 로직 등) ...
    const errors: Record<string, string> = {};
    if (!email) errors.email = "이메일을 입력해주세요.";
    if (!password) errors.password = "비밀번호를 입력해주세요.";
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // router.push("/main"); // onAuthStateChanged가 처리해주므로 생략 가능
    } catch (error) {
      // 👇 [수정됨] any 제거하고 Error 타입으로 단언
      const err = error as Error;
      setError({ general: err.message });
    }
  };

  // 기기별 로그인 방식 분기
  const handleGoogleClick = async () => {
    setError({});
    // 모바일 감지
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    try {
      if (isMobile) {
        // 모바일: 리다이렉트 (페이지 이동)
        await loginWithRedirect();
      } else {
        // PC: 팝업 (새창)
        await loginWithPopup();
        router.push("/main");
      }
    } catch (error) {
      // 👇 [수정됨] any 제거하고 커스텀 인터페이스나 객체 타입으로 단언
      // Firebase 에러는 code 속성이 있을 수 있으므로 이를 포함한 타입으로 지정
      const err = error as FirebaseError;

      // 팝업 닫음 등은 무시
      if (err.code === "auth/popup-closed-by-user") return;

      setError({ general: "구글 로그인 실패: " + err.message });
    }
  };

  return (
    <section className={styles.loginContainer}>
      <article className={styles.loginWrapper}>
        <h1>로그인</h1>
        <p>
          아직 계정이 없으신가요?
          <Link href="/signup" className={styles.signup}>
            가입하기
          </Link>
        </p>
        {!showLoginForm ? (
          <nav className={styles.loginButtonWrapper}>
            <button className={styles.googleButton} onClick={handleGoogleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#4285f4",
                    fillOpacity: 1,
                  }}
                  d="M12.238 9.816v4.649h6.586c-.289 1.496-1.156 2.762-2.457 3.613l3.969 3.02c2.316-2.094 3.652-5.172 3.652-8.825 0-.851-.078-1.668-.222-2.457Zm0 0"
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#34a853",
                    fillOpacity: 1,
                  }}
                  d="m5.379 14.285-.895.672-3.171 2.422A12.268 12.268 0 0 0 12.238 24c3.305 0 6.075-1.07 8.098-2.902l-3.973-3.02c-1.09.719-2.48 1.156-4.125 1.156-3.183 0-5.886-2.105-6.855-4.941Zm0 0"
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#fbbc05",
                    fillOpacity: 1,
                  }}
                  d="M1.313 6.621A11.659 11.659 0 0 0 0 12c0 1.941.477 3.762 1.313 5.379 0 .012 4.074-3.098 4.074-3.098A7.047 7.047 0 0 1 4.997 12c0-.797.144-1.559.39-2.281Zm0 0"
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#ea4335",
                    fillOpacity: 1,
                  }}
                  d="M12.238 4.777c1.801 0 3.403.614 4.684 1.79l3.504-3.434C18.3 1.187 15.543 0 12.238 0 7.453 0 3.328 2.695 1.313 6.621l4.07 3.098c.969-2.836 3.672-4.942 6.855-4.942Zm0 0"
                />
              </svg>
              <span>Google로 로그인</span>
            </button>
            <div className={styles.divider}>
              <span>또는</span>
            </div>
            <button
              onClick={toggleLoginForm}
              className={styles.loginFormButton}
            >
              이메일로 로그인
            </button>
          </nav>
        ) : (
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <fieldset className={styles.formGroup}>
              <label htmlFor="email" className={styles.loginLabel}>
                이메일
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.loginInput}
              />
            </fieldset>
            {error.email && <span className={styles.error}>{error.email}</span>}

            <fieldset className={styles.formGroup}>
              <label htmlFor="password" className={styles.loginLabel}>
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                placeholder="8자 이상 입력해주세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.loginInput}
              />
            </fieldset>
            {error.password && (
              <span className={styles.error}>{error.password}</span>
            )}
            {error.general && (
              <span className={styles.error}>{error.general}</span>
            )}

            <p>비밀번호 찾기</p>
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </form>
        )}
        <div className={styles.close}>
          <Link href="/main">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              {/* 닫기 아이콘 생략 가능 */}
            </svg>
          </Link>
        </div>
      </article>
    </section>
  );
}
