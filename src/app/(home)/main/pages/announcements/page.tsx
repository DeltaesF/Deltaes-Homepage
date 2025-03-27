"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";
import Image from "next/image";

export default function Announcements() {
  const { postsList, error } = usePostsList();

  const categories = ["공지사항", "행사소식", "제품소식", "자료실"];

  // 필터링된 게시글 목록
  const filteredPosts = postsList.filter((post) =>
    categories.includes(post.category),
  );

  // 최신 게시글이 먼저 나오도록 정렬 (id 역순)
  const sortedPosts = [...filteredPosts].sort((a, b) => b.id - a.id);

  // 페이지네이션 설정
  const postsPerPage = 12; // 한 페이지당 보여줄 게시글 수
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage); // 총 페이지 수

  // 현재 페이지 상태 (1부터 시작)
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 게시글 범위 설정 (페이지 순서를 뒤집음)
  const indexOfLastPost = (totalPages - currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.title}>
          <h1>공지사항</h1>
        </header>
        <section className={styles.gridContainer}>
          {currentPosts
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
                    ? JSON.parse(post.images).map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                          <Image
                            src={image}
                            alt={`이미지 ${index}`}
                            width={70} // 원하는 기본 너비
                            height={70} // 원하는 기본 높이
                          />
                        </div>
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
            className={styles.pageButton}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            이전
          </button>
          <span className={styles.pageInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            className={styles.pageButton}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
        <div className={styles.solutionMail}>
          <SolutionMail />
        </div>
      </section>
    </main>
  );
}
