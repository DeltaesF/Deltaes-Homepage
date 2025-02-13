"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

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

  useEffect(() => {
    if (!id) return; // id가 없으면 API 요청 안 함

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/write/${id}`);
        const data = await res.json();

        if (res.ok) {
          setPost(data.post);
        } else {
          setError(data.error || "게시글을 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        setError("서버와 연결할 수 없습니다.");
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
          </div>
          <h1>{post?.title}</h1>
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
        <div className={styles.images}></div>
        <div dangerouslySetInnerHTML={{ __html: post?.content || "" }}></div>
      </div>
    </div>
  );
}
