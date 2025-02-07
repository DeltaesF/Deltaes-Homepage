// 관리자 페이지 새창으로 보여주기 위해 제작

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="login-layout antialiased" style={{ all: "unset" }}>
        {children}
      </body>
    </html>
  );
}
