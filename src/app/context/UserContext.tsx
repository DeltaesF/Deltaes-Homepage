// context/UserContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
type User = {
  uid: string;
  email: string;
  userName: string;
  phoneNumber?: string;
  isChecked?: boolean;
  role: "user" | "admin";
  createdAt: Date;
  lastLogin?: Date;
  isAnonymous?: boolean;
};

type UserContextType = {
  user: User | null;
  users: User[];
  loading: boolean;
  errorMessage: string;
  logout: () => void;
  fetchUsers: () => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  users: [],
  loading: true,
  errorMessage: "",
  logout: () => {},
  fetchUsers: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // 로그인 상태 감지 및 Firestore에서 사용자 정보 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      try {
        if (firebaseUser) {
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUser({
              uid: data.uid,
              email: data.email,
              userName: data.userName,
              phoneNumber: data.phoneNumber || "",
              isChecked: data.isChecked || false,
              role: data.role || "user",
              createdAt: data.createdAt?.toDate?.() ?? new Date(),
              lastLogin: data.lastLogin?.toDate?.() ?? null,
              isAnonymous: firebaseUser.isAnonymous,
            });
          } else {
            setUser(null);
            setErrorMessage("사용자 정보를 찾을 수 없습니다.");
          }
        } else {
          setUser(null);
        }
      } catch {
        setErrorMessage("사용자 정보를 불러오는 중 오류가 발생했습니다.");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // 유저 목록을 가져오는 함수
  const fetchUsers = async () => {
    try {
      const userCollection = collection(db, "users");
      const userSnapshot = await getDocs(userCollection);
      const usersList = userSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          uid: data.uid,
          email: data.email,
          userName: data.userName,
          phoneNumber: data.phoneNumber || "정보 없음", // 기본값 설정
          role: data.role,
          createdAt: data.createdAt.toDate(),
          lastLogin: data.lastLogin ? data.lastLogin.toDate() : null,
        };
      });
      setUsers(usersList);
      setErrorMessage("");
    } catch {
      setErrorMessage("유저 목록을 가져오는 데 실패했습니다.");
    }
  };

  // 컴포넌트 마운트 후 자동으로 유저 목록을 불러오도록 처리
  useEffect(() => {
    if (user) {
      fetchUsers();
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, users, loading, errorMessage, logout, fetchUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
