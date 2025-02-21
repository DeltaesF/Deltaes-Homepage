"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import { useEffect } from "react";
import Link from "next/link";

export default function Event() {
  const { postsList, error, fetchPostsList } = usePostsList();

  useEffect(() => {
    fetchPostsList();
  }, []);

  console.log(postsList);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>행사소식</h1>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div className={styles.gridItemPost}>
              <h1>
                안녕하세요 반갑습니다 글자 줄 설정 중 입니다. 3줄 까지만 보이고
                나머지 글을 ...으로 표현이 됩니다.
              </h1>
              <img src="https://placehold.co/70x70" />
            </div>
          </div>
          {postsList.map((post) => (
            <div key={post.id} className={styles.gridItem}>
              <div className={styles.gridItemPost}>
                <Link
                  href={`/main/pages/announcements/${post.id}`}
                  className={styles.postLink}
                >
                  <h1>{post.title}</h1>
                </Link>
                {Array.isArray(JSON.parse(post.images)) &&
                JSON.parse(post.images).length > 0
                  ? JSON.parse(post.images).map((image, index) => (
                      <img key={index} src={image} alt={`이미지 ${index}`} />
                    ))
                  : null}
              </div>
              <div className={styles.created}>
                <span>
                  {post?.created_at
                    ? new Date(post.created_at).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "날짜 없음"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.solutionMail}>솔루션 문의</div>
      </div>
    </div>
  );
}
