"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  onAuthStateChanged, // 👈 추가: 로그인 상태 감지 함수
  User,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import FBGoogleLogin, { GoogleRedirectResult } from "@/app/lib/fbgooglelogin";
import { registerUser } from "@/app/lib/registerUser";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] =
    useState("로그인 정보를 확인 중입니다...");
  const router = useRouter();

  // 👇 1. [핵심 수정] 로그인 상태 감지 (모바일 리디렉션 문제 해결)
  useEffect(() => {
    // 이 함수는 페이지가 로드되자마자 실행되어, 로그인 여부를 계속 감시합니다.
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        // ✅ 로그인이 감지된 경우 (모바일 리디렉션 성공 포함)
        setSuccessMessage("로그인 성공! 메인 페이지로 이동합니다...");

        try {
          // DB에 유저 정보 저장/확인 (registerUser 활용)
          await registerUser({
            uid: user.uid,
            email: user.email || "",
            userName: user.displayName || "이름없음",
            phoneNumber: user.phoneNumber || "",
            isChecked: true,
            role: "user", // 기본 권한
            lastLogin: new Date(),
          });

          // 0.5초 딜레이 후 이동 (너무 빠르면 이동이 씹히는 경우 방지)
          setTimeout(() => {
            router.replace("/main"); // replace를 써야 뒤로가기 시 로그인 페이지로 안 옴
          }, 500);
        } catch (err) {
          console.error("DB 저장 실패:", err);
          router.replace("/main"); // 에러 나도 일단 메인으로 이동
        }
      } else {
        // ❌ 로그인이 안 된 상태
        setSuccessMessage(""); // "확인 중..." 메시지 제거

        // 혹시 에러가 있어서 로그인이 실패했는지 확인 (선택 사항)
        const checkError = async () => {
          const result = await GoogleRedirectResult();
          if (result && !result.success) {
            setError({ general: result.error || "로그인에 실패했습니다." });
          }
        };
        checkError();
      }
    });

    // 컴포넌트가 사라질 때 감지 중단 (메모리 누수 방지)
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
      // 로그인 성공 시 위의 useEffect(onAuthStateChanged)가 감지해서 자동으로 이동시킴
    } catch (error) {
      const err = error as Error;
      setError({ general: err.message });
    }
  };

  const handleGoogleClick = async () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 📱 모바일: 리디렉션 방식
      setSuccessMessage("구글 인증 페이지로 이동합니다...");
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
      // 이후 페이지가 이동되고, 돌아오면 useEffect가 처리함
    } else {
      // 💻 PC: 팝업 방식
      const result = await FBGoogleLogin();
      if (result.success) {
        router.push("/main");
      } else {
        setError({ general: result.error || "구글 로그인에 실패했습니다." });
      }
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

        {/* 상태 메시지가 있으면 표시 (볼드체로 강조) */}
        {successMessage && (
          <p
            className={styles.success}
            style={{ fontWeight: "bold", margin: "10px 0" }}
          >
            {successMessage}
          </p>
        )}

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
              {/* 닫기 아이콘 생략 가능 */}
            </svg>
          </Link>
        </div>
      </article>
    </section>
  );
}
