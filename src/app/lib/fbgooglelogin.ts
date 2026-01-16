// lib/fbgooglelogin.tsx
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "./firebase";

export default async function FBGoogleLogin() {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
    return { success: true };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
}
