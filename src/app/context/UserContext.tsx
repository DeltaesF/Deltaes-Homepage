// context/UserContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
interface User {
  uid: string;
  email: string;
  userName: string;
  phoneNumber?: string;
  isChecked?: boolean;
  role: "user" | "admin";
  createdAt: Date;
  lastLogin?: Date;
}

interface UserContextType {
  user: User | null;
  users: User[];
  loading: boolean;
  logout: () => void;
  fetchUsers: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  users: [],
  loading: true,
  logout: () => {},
  fetchUsers: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // 로그인 상태 감지 및 Firestore에서 사용자 정보 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data() as User);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
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
    } catch (error) {
      console.error("유저 목록을 가져오는 데 실패했습니다.", error);
    }
  };

  // 컴포넌트 마운트 후 자동으로 유저 목록을 불러오도록 처리
  useEffect(() => {
    fetchUsers(); // 자동으로 유저 목록을 불러옵니다.
  }, []); // 빈 배열을 넣어 컴포넌트가 처음 렌더링될 때만 실행

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Users:", users);
  }, [loading, users]);

  return (
    <UserContext.Provider value={{ user, users, loading, logout, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
