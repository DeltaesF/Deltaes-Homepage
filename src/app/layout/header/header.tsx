import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerInputLogo}>
          <div className={styles.headerInputBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="5 5 14 14"
              width="14px"
              height="14px"
            >
              <path
                fill="currentColor"
                d="m15.683 14.6 3.265 3.265a.2.2 0 0 1 0 .282l-.8.801a.2.2 0 0 1-.283 0l-3.266-3.265a5.961 5.961 0 1 1 1.084-1.084zm-4.727 1.233a4.877 4.877 0 1 0 0-9.754 4.877 4.877 0 0 0 0 9.754z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className={styles.headerInput}
            />
          </div>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt="logo"
                width="176"
                height="52"
              />
            </Link>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.loginPartner}>
            <div className={styles.login}>로그인</div>
            <div className={styles.partner}>
              <Image
                src="/images/partner.jpg"
                alt="partner"
                width="117"
                height="57"
              />
            </div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}></li>
              <li>
                <Link href="/pages/product">제품안내</Link>
              </li>
              <li>
                <Link href="/pages/">적용산업</Link>
              </li>
              <li>
                <Link href="/pages/">엔지니어링 컨설팅 서비스</Link>
              </li>
              <li>
                <Link href="/pages/">공지사항</Link>
              </li>
              <li>
                <Link href="/pages/">회사소개</Link>
              </li>
              <li>
                <button className={styles.menu}>MENU</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
