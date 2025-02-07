"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface User {
  last_login: string | number | Date;
  id: number;
  username: string;
  email: string;
  role: string;
}

// UserContext에서 사용할 상태와 메서드를 정의하는 타입입니다.
// users는 유저 목록 배열, setUsers는 상태 업데이트 함수입니다.
interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>; // 유저 목록을 업데이트하는 함수
}

// 로그인 상태와 관련된 정보와 메서드를 관리하는 Context
const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // 예: 유저 목록 API 호출
    async function fetchUsers() {
      // 유저 목록을 받아오는 API 호출
      const response = await fetch("/api/users");
      // 받아온 데이터는 JSON 형태로 파싱하여 상태에 저장합니다.
      const data = await response.json();
      setUsers(data); // 상태 업데이트
    }
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser는 UserProvider 내부에서 사용해야 합니다.");
  return context;
}
