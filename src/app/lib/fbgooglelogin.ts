import {
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult, // 👈 추가됨
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { registerUser } from "./registerUser";

// 1. PC용 팝업 로그인
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
    const err = error as Error;
    return { success: false, error: err.message };
  }
}

// 2. 👇 [필수 추가] 모바일 리디렉션 결과 확인용 함수
export async function GoogleRedirectResult() {
  try {
    // 리디렉션 후 돌아왔을 때 에러가 있었는지 확인
    const result = await getRedirectResult(auth);
    if (!result) return null;

    // 로그인 성공 처리는 login page의 onAuthStateChanged에서 하므로
    // 여기서는 "에러가 없다"는 사실만 전달하면 됩니다.
    return { success: true, uid: result.user.uid };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
}
