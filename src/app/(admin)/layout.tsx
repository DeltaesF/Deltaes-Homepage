// 관리자 페이지 새창으로 보여주기 위해 제작

"use client";

import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && user.role !== "admin") {
      router.replace("/main");
    }
  }, [user]);

  if (!user) return <div>로딩 중...</div>;
  if (user.role !== "admin") return null;

  return (
    <html lang="en">
      <body className="login-layout antialiased" style={{ all: "unset" }}>
        {children}
      </body>
    </html>
  );
}
