import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <input type="text" placeholder="Search..." />
        <h1>
          <Link href="/">Logo</Link>
        </h1>
      </div>
      <div>
        <div>로그인</div>
        <div>
          <p>Partner</p>
          SIEMENS
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
        </ul>
        <div>
          <button>MENU</button>
        </div>
      </nav>
    </header>
  );
}
