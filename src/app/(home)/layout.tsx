import Inquiry from "../components/inquiry/inquiry";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import "../globals.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Inquiry />
      <Footer />
    </div>
  );
}
