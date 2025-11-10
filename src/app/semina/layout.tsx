// 로그인과 회원가입을 새창으로 보여주기 위해 제작

export default function SeminarFormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="login-layout antialiased" style={{ all: "unset" }}>
        {children} {/* 로그인, 회원가입 콘텐츠 */}
      </body>
    </html>
  );
}
