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
  setPersistence,
  browserLocalPersistence,
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

  // 👇 초기 상태를 '확인 중'으로 설정 (메시지가 사라지는 문제 방지)
  const [successMessage, setSuccessMessage] = useState(
    "로그인 정보를 확인하고 있습니다...",
  );

  // 👇 리디렉션 확인이 끝났는지 체크하는 상태 추가
  const [isRedirectChecking, setIsRedirectChecking] = useState(true);

  const router = useRouter();

  // 🔄 1. 리디렉션 결과 확인 (모바일 구글 로그인 후 돌아왔을 때)
  useEffect(() => {
    const checkRedirect = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence); // 지속성 강제 설정
        const result = await getRedirectResult(auth);

        if (result && result.user) {
          setSuccessMessage("구글 인증 성공! 사용자 정보를 불러옵니다...");
          // 여기서 성공하면 아래 onAuthStateChanged가 곧 유저를 감지합니다.
          // 따라서 여기서는 isRedirectChecking을 false로 바꾸지 않고 유지해서 폼이 뜨는 걸 막습니다.
        } else {
          // 리디렉션 결과가 없으면 (그냥 접속했으면) 체크 종료
          setIsRedirectChecking(false);
        }
      } catch (error) {
        console.error("Redirect Error:", error);
        const err = error as Error;
        // 에러가 났으면 사용자에게 보여주고 폼을 띄움
        setError({ general: "로그인 오류: " + err.message });
        setIsRedirectChecking(false);
      }
    };

    checkRedirect();
  }, []);

  // 🔄 2. 로그인 상태 감지기 (실제 로그인 처리)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        // ✅ 로그인이 확인됨!
        setSuccessMessage("로그인 성공! 메인 페이지로 이동합니다.");

        try {
          // DB 유저 정보 저장
          await registerUser({
            uid: user.uid,
            email: user.email || "",
            userName: user.displayName || "이름없음",
            phoneNumber: user.phoneNumber || "",
            isChecked: true,
            role: "user",
            lastLogin: new Date(),
          });

          // 0.5초 뒤 이동
          setTimeout(() => {
            router.replace("/main");
          }, 500);
        } catch (err) {
          console.error("DB Error:", err);
          router.replace("/main");
        }
      } else {
        // ❌ 로그인이 안 된 상태
        // [중요] 리디렉션 체크가 아직 안 끝났으면 메시지를 지우지 않음!
        if (!isRedirectChecking) {
          setSuccessMessage(""); // 체크가 다 끝났는데도 유저가 없으면 그때 메시지 삭제
        }
      }
    });

    return () => unsubscribe();
  }, [router, isRedirectChecking]); // isRedirectChecking 의존성 추가

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
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const err = error as Error;
      setError({ general: err.message });
      setSuccessMessage("");
    }
  };

  const handleGoogleClick = async () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setError({}); // 기존 에러 초기화

    try {
      await setPersistence(auth, browserLocalPersistence);

      if (isMobile) {
        // 📱 모바일
        setSuccessMessage("구글 인증 페이지로 이동합니다...");
        setIsRedirectChecking(true); // 이동하니까 체크 상태로 변경 (폼 숨기기)

        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider);
        // 페이지 이동됨
      } else {
        // 💻 PC
        const result = await FBGoogleLogin();
        if (result.success) {
          router.push("/main");
        } else {
          setError({ general: result.error || "구글 로그인 실패" });
        }
      }
    } catch (e) {
      const err = e as Error;
      setError({ general: "초기화 오류: " + err.message });
      setSuccessMessage("");
      setIsRedirectChecking(false);
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

        {/* 👇 상태 메시지가 있으면 표시 */}
        {successMessage && (
          <div
            style={{
              textAlign: "center",
              margin: "20px 0",
              color: "#0070f3",
              fontWeight: "bold",
              minHeight: "24px",
            }}
          >
            {successMessage}
          </div>
        )}

        {/* 👇 리디렉션 체크 중이거나 메시지가 떠있을 때는 폼을 숨겨서 깜빡임 방지 */}
        {isRedirectChecking || successMessage ? (
          <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
            잠시만 기다려주세요...
          </div>
        ) : !showLoginForm ? (
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
