"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { db } from "@/app/lib/firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import DOMPurify from "isomorphic-dompurify";

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

  const router = useRouter();

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
          created_at: data.createdAt?.toDate?.() || new Date(),
          userName: data.userName,
          views: data.views || 0,
        });

        console.log(data.content);
      } else {
        setErrorMessage("메시지를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchPost();
  }, [id]);

  // 1. DOMPurify를 사용해 HTML을 안전하게 처리합니다.
  const cleanContent = DOMPurify.sanitize(post?.content || "", {
    // 2. style 속성을 허용하도록 설정합니다.
    ADD_TAGS: ["iframe"], // iframe 같은 태그도 허용하려면 추가
    ADD_ATTR: ["target", "style", "class"], // target, style 속성 허용
  });

  const handleEdit = () => {
    if (!post) return;
    router.push(`/profile/posts/edit/${post.id}`);
  };

  const handleDelete = async () => {
    if (!post) return;

    const ok = confirm("정말 삭제하시겠습니까?");
    if (!ok) return;

    try {
      await deleteDoc(doc(db, "posts", post.id));
      alert("삭제되었습니다.");
      router.push("/profile"); // 게시글 목록으로 이동
    } catch (error) {
      console.error("삭제 오류:", error);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <div className={styles.header}>
            <span>작성자: {post.userName}</span>
            <span>조회수: {post.views}</span>
            <span>카테고리: {post.category}</span>
            <span>
              {post.created_at
                ? new Date(post.created_at).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "날짜 없음"}
            </span>
            <div
              className={styles.menuIcon}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={styles.menuIcon}>...</div>
              <div
                className={`${styles.dropdown} ${menuOpen ? styles.active : ""}`}
              >
                <ul>
                  <li onClick={handleEdit}>수정하기</li>
                  <li onClick={handleDelete}>삭제하기</li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className={styles.title}>{post?.title}</h1>
        </header>
        <div className={styles.divider}></div>
        <div
          dangerouslySetInnerHTML={{ __html: cleanContent }}
          className={styles.postContent}
        ></div>
      </div>
      {errorMessage && (
        <div className={styles.errorContainer}>{errorMessage}</div>
      )}
    </div>
  );
}
