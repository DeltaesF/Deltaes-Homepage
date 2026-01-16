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
  getRedirectResult, // 👈 리디렉션 결과 확인용 함수 직접 import
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

  // 사용자에게 진행 상황을 알려주는 메시지 상태
  const [successMessage, setSuccessMessage] =
    useState("로그인 상태 확인 중...");

  const router = useRouter();

  // ✅ 1. [모바일 해결 핵심] 페이지 로드 시 리디렉션 결과부터 확인 (단 1번 실행)
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        // 모바일 구글 로그인 후 돌아왔을 때, 결과를 여기서 받아옵니다.
        const result = await getRedirectResult(auth);
        if (result) {
          setSuccessMessage("구글 인증 성공! 사용자 정보를 저장합니다...");
          // 결과가 있으면 아래 onAuthStateChanged가 곧 유저를 감지합니다.
          // 여기서 굳이 이동시키지 않아도 됩니다. (중복 방지)
        }
      } catch (error) {
        console.error("리디렉션 에러:", error);
        const err = error as Error;
        setError({ general: "로그인 중 오류가 발생했습니다: " + err.message });
        setSuccessMessage(""); // 에러 났으니 메시지 지움
      }
    };

    handleRedirectResult();
  }, []);

  // ✅ 2. [로그인 감지] 유저 상태가 변하면 즉시 반응
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        // 🔥 로그인이 확인됨 (이메일 로그인 or 구글 리디렉션 성공 등)
        setSuccessMessage("로그인되었습니다. 메인 페이지로 이동합니다.");

        try {
          // DB에 유저 정보 저장 (registerUser 내부에서 중복 체크 함)
          await registerUser({
            uid: user.uid,
            email: user.email || "",
            userName: user.displayName || "이름없음",
            phoneNumber: user.phoneNumber || "",
            isChecked: true,
            role: "user",
            lastLogin: new Date(),
          });
        } catch (e) {
          console.error("유저 정보 저장 실패:", e);
        }

        // 약간의 딜레이 후 확실하게 이동
        setTimeout(() => {
          router.replace("/main");
        }, 500);
      } else {
        // 로그인이 안 된 상태 (초기 상태이거나 로그아웃 상태)
        // 위쪽 handleRedirectResult가 돌고 있으므로 여기서는 "대기" 메시지만 지워줍니다.
        if (successMessage === "로그인 상태 확인 중...") {
          setSuccessMessage("");
        }
      }
    });

    return () => unsubscribe();
  }, [router]); // successMessage는 의존성에서 제외하여 불필요한 재실행 방지

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
      await signInWithEmailAndPassword(auth, email, password);
      // 성공하면 useEffect(onAuthStateChanged)가 감지해서 이동시킴
    } catch (error) {
      const err = error as Error;
      setError({ general: err.message });
      setSuccessMessage("");
    }
  };

  const handleGoogleClick = async () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 📱 모바일: 리디렉션 방식
      setSuccessMessage("구글 인증 페이지로 이동합니다...");
      const provider = new GoogleAuthProvider();

      // 리디렉션 시작 (페이지가 넘어감)
      await signInWithRedirect(auth, provider);
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

        {/* 👇 상태 메시지 표시 (사용자 안심용) */}
        {successMessage && (
          <p
            className={styles.success}
            style={{
              fontWeight: "bold",
              textAlign: "center",
              margin: "1rem 0",
              color: "#0070f3",
            }}
          >
            {successMessage}
          </p>
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
            {/* 기존 Input 필드들 유지 */}
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
