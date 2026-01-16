// lib/fbgooglelogin.tsx
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { registerUser } from "./registerUser";

// 1. 구글 로그인 시작 (버튼 클릭 시 실행)
export const startGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    // 모바일 호환성을 위해 Popup 대신 Redirect 사용
    await signInWithRedirect(auth, provider);
    // 리다이렉트 방식은 여기서 함수가 종료되고 페이지가 이동합니다.
  } catch (error) {
    const err = error as Error;
    console.error("Google Login Start Error:", err);
    throw err;
  }
};

// 2. 리다이렉트 후 결과 처리 (페이지 로드 시 실행)
export const checkGoogleLoginResult = async () => {
  try {
    // 페이지가 다시 로드된 후 결과를 가져옵니다.
    const result = await getRedirectResult(auth);

    if (!result) return null; // 로그인 시도가 없었거나 이미 처리됨

    const user = result.user;
    const userDoc = await getDoc(doc(db, "users", user.uid));

    // 유저 정보가 없으면 등록 절차 진행
    if (!userDoc.exists()) {
      await registerUser({
        uid: user.uid,
        email: user.email || "",
        userName: user.displayName || "이름없음",
        phoneNumber: user.phoneNumber || "",
        isChecked: true,
        role: "user",
        lastLogin: new Date(),
      });
    }

    return { success: true, uid: user.uid };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
};
