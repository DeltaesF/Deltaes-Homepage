// lib/fbgooglelogin.ts
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  User,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { registerUser } from "./registerUser";

// 1. [데스크톱용] 팝업 로그인
export const loginWithPopup = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // 팝업은 즉시 결과를 반환하므로 바로 DB 처리
  await checkAndRegisterUser(result.user);
  return result.user;
};

// 2. [모바일용] 리다이렉트 로그인 (결과 반환 없음, 페이지 이동됨)
export const loginWithRedirect = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);
};

// 3. [공통] DB 유저 등록 로직
export const checkAndRegisterUser = async (user: User) => {
  try {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

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
      console.log("새 유저 DB 등록 완료");
    } else {
      console.log("기존 유저 로그인 확인");
    }
  } catch (error) {
    console.error("DB 등록 중 오류:", error);
    throw error;
  }
};
