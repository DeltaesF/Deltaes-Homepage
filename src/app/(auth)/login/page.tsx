"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  getRedirectResult,
  setPersistence, // 👈 추가: 로그인 유지 설정
  browserLocalPersistence, // 👈 추가: 로컬 저장소 강제 사용
  User,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import FBGoogleLogin from "@/app/lib/fbgooglelogin";
import { registerUser } from "@/app/lib/registerUser";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string>>({});

  // 초기 상태를 "확인 중"으로 두어 깜빡임 방지
  const [successMessage, setSuccessMessage] = useState(
    "로그인 정보를 확인하고 있습니다...",
  );
  const router = useRouter();

  // ✅ 1. 로그인 감지 및 리디렉션 처리 통합
  useEffect(() => {
    // (1) 로그인 지속성 강제 설정 (모바일 세션 유실 방지 핵심)
    const setAuthPersistence = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (e) {
        console.error("Persistence error:", e);
      }
    };
    setAuthPersistence();

    // (2) Auth 상태 감지기 가동
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        // 🔥 로그인이 확인됨!
        setSuccessMessage("로그인 성공! 메인으로 이동합니다.");

        try {
          // DB 저장 (중복 체크는 내부에서 함)
          await registerUser({
            uid: user.uid,
            email: user.email || "",
            userName: user.displayName || "이름없음",
            phoneNumber: user.phoneNumber || "",
            isChecked: true,
            role: "user",
            lastLogin: new Date(),
          });

          router.replace("/main");
        } catch (err) {
          console.error(err);
          router.replace("/main");
        }
      } else {
        // ❌ 로그인이 안 된 상태 (user === null)

        // 혹시 리디렉션으로 돌아온 직후인지 확인 (세션 복구 시도)
        try {
          const result = await getRedirectResult(auth);
          if (result && result.user) {
            // 리디렉션 결과가 있다면 여기서 수동으로 처리하지 않아도
            // 위의 onAuthStateChanged가 곧 user를 감지합니다.
            setSuccessMessage("인증 확인됨. 로그인 처리 중...");
            return;
          }
        } catch (e) {
          console.error("Redirect Error:", e);
          const err = e as Error;
          setError({ general: "모바일 로그인 오류: " + err.message });
        }

        // 진짜 로그아웃 상태라면 메시지 지우고 폼 보여주기
        setSuccessMessage("");
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
      setSuccessMessage("로그인 시도 중...");
      await setPersistence(auth, browserLocalPersistence); // 이메일 로그인도 유지 설정
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const err = error as Error;
      setError({ general: err.message });
      setSuccessMessage("");
    }
  };

  const handleGoogleClick = async () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    try {
      // 로그인 시도 전에도 지속성 강제 설정
      await setPersistence(auth, browserLocalPersistence);

      if (isMobile) {
        setSuccessMessage("구글 인증 페이지로 이동합니다...");
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider);
      } else {
        const result = await FBGoogleLogin();
        if (result.success) {
          router.push("/main");
        } else {
          setError({ general: result.error || "구글 로그인 실패" });
        }
      }
    } catch (e) {
      const err = e as Error;
      setError({ general: "로그인 설정 오류: " + err.message });
      setSuccessMessage("");
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

        {/* 상태 메시지: 모바일에서 멈춘 느낌을 없애기 위해 중요 */}
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
            {/* 간단한 로딩 스피너 역할 (점점점) */}
            <span className={styles.loadingDots}></span>
          </div>
        )}

        {!showLoginForm ? (
          <nav className={styles.loginButtonWrapper}>
            <button className={styles.googleButton} onClick={handleGoogleClick}>
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
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </Link>
        </div>
      </article>
    </section>
  );
}
