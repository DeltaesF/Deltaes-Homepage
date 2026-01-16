"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react"; // 👈 useEffect 추가
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithRedirect, // 👈 추가: 모바일용 로그인 함수
  GoogleAuthProvider,
  onAuthStateChanged, // 👈 추가: 로그인 상태 감지
  User,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import FBGoogleLogin, { GoogleRedirectResult } from "@/app/lib/fbgooglelogin"; // 👈 수정된 함수 import
import { registerUser } from "@/app/lib/registerUser"; // 👈 유저 저장 함수 import

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState(""); // 상태 메시지
  const router = useRouter();

  // 👇 1. [핵심] 로그인 감지기 설치
  // 모바일에서 구글 인증 후 돌아왔을 때, 이 감지기가 로그인을 마무리하고 페이지를 이동시킵니다.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        // 이미 로그인 되었거나, 모바일 인증 후 돌아온 경우
        setSuccessMessage("로그인 성공! 이동 중입니다...");

        try {
          // DB에 유저 정보 저장 (이미 있으면 registerUser 내부에서 알아서 무시함)
          await registerUser({
            uid: user.uid,
            email: user.email || "",
            userName: user.displayName || "이름없음",
            phoneNumber: user.phoneNumber || "",
            isChecked: true,
            role: "user",
            lastLogin: new Date(),
          });

          // 메인으로 이동
          router.replace("/main");
        } catch (err) {
          console.error("로그인 후처리 중 에러:", err);
        }
      } else {
        // 로그인이 안 된 상태라면 리디렉션 에러가 있었는지 확인
        const checkError = async () => {
          const result = await GoogleRedirectResult();
          if (result && !result.success) {
            setError({ general: result.error || "로그인 실패" });
          }
        };
        checkError();
      }
    });

    return () => unsubscribe(); // 페이지 나갈 때 감지기 끄기
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
      // 성공 시 위의 useEffect(onAuthStateChanged)가 감지해서 자동으로 이동시킴
    } catch (error) {
      const err = error as Error;
      setError({ general: err.message });
    }
  };

  // 👇 2. 구글 버튼 클릭 핸들러 수정
  const handleGoogleClick = async () => {
    // 모바일 기기인지 정규식으로 확인
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 📱 모바일이면: 리디렉션(페이지 이동) 방식 사용
      setSuccessMessage("구글 인증 페이지로 이동합니다...");
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
      // (페이지가 이동되므로 이후 코드는 여기서 멈춤 -> 돌아오면 useEffect가 실행됨)
    } else {
      // 💻 PC면: 기존 팝업 방식 사용
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

        {/* 진행 상황 메시지 표시 */}
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
              {/* SVG 아이콘은 기존 코드 그대로 유지 */}
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
            {/* 기존 폼 내용 그대로 유지 */}
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
            {/* 닫기 아이콘도 기존 그대로 */}
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
