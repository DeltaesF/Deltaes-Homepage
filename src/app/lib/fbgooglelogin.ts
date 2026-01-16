import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  User,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { registerUser } from "./registerUser";

// 1. [PC용] 팝업 로그인
export const loginWithPopup = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  await checkAndRegisterUser(result.user); // DB 등록
  return result.user;
};

// 2. [모바일용] 리다이렉트 로그인 (페이지 이동됨)
export const loginWithRedirect = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);
};

// 3. [공통] 유저 DB 등록 로직
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
    }
  } catch (error) {
    console.error("DB Error:", error);
  }
};
