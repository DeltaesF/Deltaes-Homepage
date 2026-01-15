// lib/handleGoogleLogin.ts
import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { registerUser } from "./registerUser";

export default async function FBGoogleLogin() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

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
    // 👇 에러 타입을 지정해야 타입스크립트가 오류 안 냄
    const err = error as Error;
    return { success: false, error: err.message };
  }
}

export async function GoogleRedirectResult() {
  try {
    const result = await getRedirectResult(auth);
    if (!result) return null; // 로그인 결과가 없으면 종료

    const user = result.user;
    const userDoc = await getDoc(doc(db, "users", user.uid));

    // 신규 유저 등록 로직 (기존과 동일)
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
