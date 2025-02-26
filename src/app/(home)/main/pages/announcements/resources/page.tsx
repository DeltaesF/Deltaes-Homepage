"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import { useEffect } from "react";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";

export default function Resources() {
  const { postsList, error, fetchPostsList } = usePostsList();

  useEffect(() => {
    fetchPostsList();
  }, []);

  console.log(postsList);

  const filteredPosts = postsList.filter((post) => post.category === "자료실");

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.title}>
          <h1>자료실</h1>
        </header>
        <section className={styles.gridContainer}>
          <article className={styles.gridItem}>
            <div className={styles.gridItemPost}>
              <h1>
                안녕하세요 반갑습니다 글자 줄 설정 중 입니다. 3줄 까지만 보이고
                나머지 글을 ...으로 표현이 됩니다.
              </h1>
              <img src="https://placehold.co/70x70" />
            </div>
          </article>
          {filteredPosts.map((post) => (
            <article key={post.id} className={styles.gridItem}>
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
            </article>
          ))}
        </section>
        <SolutionMail />
      </section>
    </main>
  );
}
