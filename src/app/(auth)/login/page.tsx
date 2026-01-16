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

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  // 👇 [1. 모바일 리다이렉트 복귀 처리]
  // 모바일에서 구글 인증 후 돌아왔을 때만 실행됩니다.
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          // 리다이렉트로 로그인 성공 시
          await checkAndRegisterUser(result.user);
          setSuccessMessage("구글 로그인 성공!");
          router.push("/main");
        }
      } catch (err) {
        console.error("Redirect Error:", err);
        // 에러 무시 (팝업 로그인 시도 시 null 에러 방지)
      }
    };
    handleRedirectResult();
  }, [router]);

  // 👇 [2. 통합 로그인 상태 감지]
  // 이미 로그인 된 상태라면 바로 메인으로 보냅니다.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/main");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const toggleLoginForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!email) errors.email = "이메일을 입력해주세요.";
    if (!password) errors.password = "비밀번호를 입력해주세요.";
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage("로그인 성공");
      router.push("/main");
    } catch (error) {
      const err = error as Error;
      setError({ general: err.message });
    }
  };

  // 👇 [3. 핵심 수정] 기기에 따라 방식 선택
  const handleGoogleClick = async () => {
    setError({}); // 에러 초기화

    // 모바일 감지 (간단한 방식)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    try {
      if (isMobile) {
        // 모바일이면 리다이렉트 사용 (페이지 이동됨)
        console.log("모바일 환경 감지: 리다이렉트 로그인 시도");
        await loginWithRedirect();
      } else {
        // 데스크톱이면 팝업 사용 (기존에 잘 되던 방식)
        console.log("PC 환경 감지: 팝업 로그인 시도");
        await loginWithPopup();
        // 팝업은 여기서 await가 끝나면 로그인 성공임
        router.push("/main");
      }
    } catch (err) {
      const error = err as Error;
      // 팝업 닫음 등 사소한 에러는 무시하거나 사용자에게 알림
      if (error.message.includes("closed-by-user")) {
        return;
      }
      setError({ general: "구글 로그인 실패: " + error.message });
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
            {successMessage && (
              <span className={styles.success}>{successMessage}</span>
            )}
          </form>
        )}
        <div className={styles.close}>
          <Link href="/main">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </Link>
        </div>
      </article>
    </section>
  );
}
