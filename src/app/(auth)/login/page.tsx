"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  User,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import FBGoogleLogin from "@/app/lib/fbgooglelogin"; // 팝업 방식 사용
import { registerUser } from "@/app/lib/registerUser";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // 중복 클릭 방지
  const router = useRouter();

  // ✅ 로그인 상태 감지 (이메일 로그인 및 자동 로그인 처리용)
  useEffect(() => {
    // 1. 지속성 강제 설정
    setPersistence(auth, browserLocalPersistence).catch(console.error);

    // 2. 로그인 감지
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        setSuccessMessage("로그인 성공! 메인으로 이동합니다...");
        try {
          // DB 저장
          await registerUser({
            uid: user.uid,
            email: user.email || "",
            userName: user.displayName || "이름없음",
            phoneNumber: user.phoneNumber || "",
            isChecked: true,
            role: "user",
            lastLogin: new Date(),
          });

          setTimeout(() => {
            router.replace("/main");
          }, 500);
        } catch (e) {
          const err = e as Error;
          setError({ general: "오류 발생: " + err.message });
          router.replace("/main");
        }
      }
    });
    return () => unsubscribe();
  }, [router]);

  const toggleLoginForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return; // 중복 방지

    const errors: Record<string, string> = {};
    if (!email) errors.email = "이메일을 입력해주세요.";
    if (!password) errors.password = "비밀번호를 입력해주세요.";

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    try {
      setIsProcessing(true);
      setSuccessMessage("로그인 시도 중...");
      await signInWithEmailAndPassword(auth, email, password);
      // 성공 시 useEffect가 처리함
    } catch (error) {
      const err = error as Error;
      setError({ general: err.message });
      setSuccessMessage("");
      setIsProcessing(false);
    }
  };

  // ✅ 구글 로그인 (모바일/PC 모두 팝업 사용)
  const handleGoogleClick = async () => {
    if (isProcessing) return; // 중복 클릭 방지
    setError({});
    setIsProcessing(true);
    setSuccessMessage("구글 인증 창을 띄우는 중입니다...");

    try {
      // 🚀 모바일이어도 팝업 방식(FBGoogleLogin)을 강제로 사용합니다.
      // 페이지가 이동되지 않고, 새 창이 떴다가 닫히면서 로그인이 완료됩니다.
      const result = await FBGoogleLogin();

      if (result.success) {
        setSuccessMessage("인증 성공! 이동 중...");
        router.replace("/main");
      } else {
        setError({ general: result.error || "구글 로그인에 실패했습니다." });
        setSuccessMessage("");
        setIsProcessing(false);
      }
    } catch (e) {
      const err = e as Error;
      setError({ general: "오류 발생: " + err.message });
      setSuccessMessage("");
      setIsProcessing(false);
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

        {/* 상태 메시지 */}
        {successMessage && (
          <div
            style={{
              textAlign: "center",
              margin: "20px 0",
              color: "#0070f3",
              fontWeight: "bold",
            }}
          >
            {successMessage}
          </div>
        )}

        {/* 로딩 중이면 폼 숨김 (깔끔하게) */}
        {isProcessing && !error.general ? (
          <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
            잠시만 기다려주세요...
          </div>
        ) : !showLoginForm ? (
          <nav className={styles.loginButtonWrapper}>
            <button
              className={styles.googleButton}
              onClick={handleGoogleClick}
              disabled={isProcessing}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  style={{ fill: "#4285f4" }}
                  d="M12.238 9.816v4.649h6.586c-.289 1.496-1.156 2.762-2.457 3.613l3.969 3.02c2.316-2.094 3.652-5.172 3.652-8.825 0-.851-.078-1.668-.222-2.457Zm0 0"
                />
                <path
                  style={{ fill: "#34a853" }}
                  d="m5.379 14.285-.895.672-3.171 2.422A12.268 12.268 0 0 0 12.238 24c3.305 0 6.075-1.07 8.098-2.902l-3.973-3.02c-1.09.719-2.48 1.156-4.125 1.156-3.183 0-5.886-2.105-6.855-4.941Zm0 0"
                />
                <path
                  style={{ fill: "#fbbc05" }}
                  d="M1.313 6.621A11.659 11.659 0 0 0 0 12c0 1.941.477 3.762 1.313 5.379 0 .012 4.074-3.098 4.074-3.098A7.047 7.047 0 0 1 4.997 12c0-.797.144-1.559.39-2.281Zm0 0"
                />
                <path
                  style={{ fill: "#ea4335" }}
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
              disabled={isProcessing}
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
                disabled={isProcessing}
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
                disabled={isProcessing}
              />
            </fieldset>
            {error.password && (
              <span className={styles.error}>{error.password}</span>
            )}
            {error.general && (
              <span className={styles.error}>{error.general}</span>
            )}

            <p>비밀번호 찾기</p>
            <button
              type="submit"
              className={styles.loginButton}
              disabled={isProcessing}
            >
              로그인
            </button>
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
