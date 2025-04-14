"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";

export default function Resources() {
  const { postsList } = usePostsList();

  const filteredPosts = postsList.filter((post) => post.category === "자료실");

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.title}>
          <h1>자료실</h1>
        </header>
        <section className={styles.gridContainer}>
          {filteredPosts
            .sort((a, b) => a.id - b.id)
            .map((post) => (
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
                    ? JSON.parse(post.images).map((image: string) => (
                        <img
                          key={`${post.id}-${image}`}
                          src={image}
                          alt="게시글 이미지"
                        />
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
