"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";

export default function Event() {
  const { postsList } = usePostsList();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const filteredPosts = postsList.filter(
    (post) => post.category === "행사소식",
  );

  // 현재 페이지의 게시글을 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts
    .sort((a, b) => a.id - b.id)
    .slice(indexOfFirstPost, indexOfLastPost);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.title}>
          <h1>행사소식</h1>
        </header>
        <section className={styles.gridContainer}>
          {currentPosts.map((post) => (
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

        {/* 페이지네이션 컨트롤 */}
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            이전
          </button>
          <span className={styles.pageInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            다음
          </button>
        </div>

        <SolutionMail />
      </section>
    </main>
  );
}
