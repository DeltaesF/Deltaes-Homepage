// lib/fbgooglelogin.ts
import {
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult, // 👈 추가
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { registerUser } from "./registerUser";

// 1. 기존 데스크톱용 팝업 로그인 (변경 없음)
export default async function FBGoogleLogin() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // 유저 DB 확인 및 저장 로직
    const userDoc = await getDoc(doc(db, "users", user.uid));
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
}

// 2. 👇 [추가됨] 모바일 리디렉션 후 에러 체크용 함수
export async function GoogleRedirectResult() {
  try {
    const result = await getRedirectResult(auth);
    if (!result) return null; // 리디렉션 결과가 없으면 종료

    // 성공 시 로직은 로그인 페이지의 onAuthStateChanged에서 처리하므로
    // 여기서는 에러가 안 났는지만 확인해도 충분합니다.
    return { success: true, uid: result.user.uid };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
}
