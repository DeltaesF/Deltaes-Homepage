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
  category: string;
}

export default function HomePosts() {
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
        console.log(error);
        setError("서버와 연결할 수 없습니다.");
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    if (post) {
      console.log("Post data:", post);
    }
  }, [post]);

  return (
    <article className={styles.container}>
      <section className={styles.content}>
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
            <span>카테고리: {post?.category}</span>
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
        <section
          dangerouslySetInnerHTML={{ __html: post?.content || "" }}
          className={styles.postContent}
        ></section>
        {/* 이미지 출력 */}
        <figure className={styles.images}>
          {(Array.isArray(post?.images)
            ? post?.images
            : JSON.parse(post?.images || "[]")
          ).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Uploaded Image ${index}`}
              width={9000} // 원본보다 너무 작게 설정하지 않기
              height={9000}
              style={{ width: "100%", height: "auto" }}
              quality={100} // 화질 개선
            />
          ))}
        </figure>
      </section>
    </article>
  );
}
