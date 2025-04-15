import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

interface SignupUserProps {
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
  isChecked: boolean;
}

export default async function FBSignup({
  email,
  password,
  userName,
  phoneNumber,
  isChecked,
}: SignupUserProps) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "users", uid), {
      uid,
      email,
      userName,
      phoneNumber,
      isChecked,
      role: "user",
      createdAt: new Date(),
      lastLogin: new Date(),
    });

    return { success: true, uid };
  } catch (error) {
    // 👇 에러 타입을 지정해야 타입스크립트가 오류 안 냄
    const err = error as Error;
    return { success: false, error: err.message };
  }
}
