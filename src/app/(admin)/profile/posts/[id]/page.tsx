"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/router";

interface Post {
  id: number;
  title: string;
  content: string;
  views: number;
  created_at: string;
  updated_at: string;
  username: string;
  images: string[];
}

export default function DetailPosts() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // 드롭다운 메뉴 상태
  const [isEditing, setIsEditing] = useState(false);

  // 수정할 데이터를 위한 상태
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (!id) return; // id가 없으면 API 요청 안 함

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/write/${id}`);
        const data = await res.json();

        if (res.ok) {
          setPost(data.post);
          // 기존 데이터로 상태 초기화
          setTitle(data.post.title);
          setContent(data.post.content);
          setImages(data.post.images || []);
        } else {
          setError(data.error || "게시글을 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        console.log(error);
        setError("서버와 연결할 수 없습니다.");
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (!id || !post) return;

    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/write/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        alert("게시글이 삭제되었습니다.");
        window.location.href = "/profile/posts"; // 삭제 후 목록 페이지로 이동
      } else {
        alert(data.error || "게시글 삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("삭제 오류:", error);
      alert("서버 오류로 삭제할 수 없습니다.");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // 수정 완료 후 저장
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    const updatedPost = { title, content, images };

    try {
      const res = await fetch(`/api/write/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      if (res.ok) {
        alert("게시글이 수정되었습니다.");
        setPost((prev) =>
          prev
            ? {
                ...prev,
                title,
                content,
                images,
                updated_at: new Date().toISOString(),
              }
            : null,
        );
        setIsEditing(false); // 수정 완료 후 다시 보기 모드로 변경
      } else {
        alert("게시글 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("수정 오류:", error);
      alert("서버 오류로 수정할 수 없습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isEditing ? (
          <form onSubmit={handleSubmit}></form>
        ) : (
          <>
            <header>
              <div className={styles.header}>
                <span>작성자: {post?.username}</span>
                <span>
                  작성일:{" "}
                  {post?.created_at
                    ? new Date(post.created_at).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "날짜 없음"}
                </span>
                <span>조회수: {post?.views}</span>
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
              <span>
                최종 수정일:{" "}
                {post?.updated_at
                  ? new Date(post.updated_at).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "날짜 없음"}
              </span>
            </header>
            <div className={styles.divider}></div>
            <div
              dangerouslySetInnerHTML={{ __html: post?.content || "" }}
              className={styles.postContent}
            ></div>
            {/* 이미지 출력 */}
            <div className={styles.images}>
              {(Array.isArray(post?.images) ? post?.images : []).map(
                (image, index) => (
                  <img key={index} src={image} alt={`Image ${index}`} />
                ),
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
