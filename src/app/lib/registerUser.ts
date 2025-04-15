import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

interface RegisterUserProps {
  uid: string;
  email: string;
  userName: string;
  phoneNumber?: string;
  isChecked?: boolean;
  role?: "user" | "admin";
  lastLogin?: Date;
}

export async function registerUser({
  uid,
  email,
  userName,
  phoneNumber = "",
  isChecked = true,
  role = "user",
  lastLogin = new Date(),
}: RegisterUserProps) {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid,
      email,
      userName,
      phoneNumber,
      isChecked,
      role,
      createdAt: new Date(),
      lastLogin,
    });
  }
}
