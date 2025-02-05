"use client";

import { createContext, useContext, useEffect, useState } from "react";

// 사용자 정보에 포함될 필드 (username, email)
interface User {
  username: string;
  email: string;
}

// 인증 상태와 관련된 값과 메서드
interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// 로그인 상태와 관련된 정보와 메서드를 관리하는 Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // 서버에서 리프레시 토큰을 이용해 새 액세스 토큰을 요청
  const refreshAccessToken = async () => {
    const res = await fetch("/api/auth/refresh", { credentials: "include" });
    const data = await res.json();
    if (res.ok) {
      // 새로 받은 액세스 토큰과 사용자 정보를 상태에 저장
      setAccessToken(data.accessToken);
      setUser(data.user);
    }
  };

  // 리프레시 토큰 재생성
  useEffect(() => {
    refreshAccessToken();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setAccessToken(data.accessToken);
      setUser(data.user);
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setAccessToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth는 AuthProvider 내부에서 사용해야 합니다.");
  return context;
}
