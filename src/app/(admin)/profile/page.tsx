"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Posts from "./posts/page";
import Users from "./users/page";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import Write from "./write/page";

export default function AdminPage() {
  const [selectMenu, setSelectMenu] = useState("게시물 관리");
  const { user } = useAuth();

  const renderContent = () => {
    if (selectMenu === "게시물 관리") {
      return <Posts />;
    } else if (selectMenu === "회원 관리") {
      return <Users />;
    } else if (selectMenu === "글 작성") {
      return <Write />;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <span>
          <Link href="/main" className={styles.link}>
            홈으로 이동
          </Link>
        </span>
        <span>{user?.username} 관리자</span>
        <ul className={styles.menuList}>
          <li>
            <button
              className={styles.menuButton}
              onClick={() => setSelectMenu("게시물 관리")}
            >
              게시물
            </button>
          </li>
          <li>
            <button
              className={styles.menuButton}
              onClick={() => setSelectMenu("회원 관리")}
            >
              회원 관리
            </button>
          </li>
          <li>
            <button
              className={styles.menuButton}
              onClick={() => setSelectMenu("글 작성")}
            >
              글 작성
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
}
