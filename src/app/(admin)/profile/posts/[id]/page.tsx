"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { db } from "@/app/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

interface Post {
  id: string;
  title: string;
  content: string;
  user_id: string;
  category: string;
  images: string[];
  created_at: Date;
  userName: string;
  views: number;
}

export default function DetailPosts() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    // Firestore에서 게시글 데이터를 불러오는 함수
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setPost({
          id: docSnap.id,
          title: data.title,
          content: data.content,
          user_id: data.user_id,
          category: data.category,
          images: data.images || [],
          created_at: data.created_at?.toDate?.() || new Date(),
          userName: data.userName,
          views: data.views || 0,
        });
      } else {
        setErrorMessage("메시지를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <div className={styles.header}>
            <span>작성자: {post.userName}</span>
            <span>조회수: {post.views}</span>
            <span>카테고리: {post.category}</span>
            <div
              className={styles.menuIcon}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={styles.menuIcon}>...</div>
              <div
                className={`${styles.dropdown} ${menuOpen ? styles.active : ""}`}
              >
                <ul>
                  <li>수정하기</li>
                  <li>삭제하기</li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className={styles.title}>{post?.title}</h1>
        </header>
        <div className={styles.divider}></div>
        <div
          dangerouslySetInnerHTML={{ __html: post?.content || "" }}
          className={styles.postContent}
        ></div>
      </div>
      {errorMessage && (
        <div className={styles.errorContainer}>{errorMessage}</div>
      )}
    </div>
  );
}
