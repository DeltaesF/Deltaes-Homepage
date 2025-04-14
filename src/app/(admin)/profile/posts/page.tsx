"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Posts() {
  const { postsList, fetchPostsList } = usePostsList();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  useEffect(() => {
    fetchPostsList();
  }, []);

  // 현재 페이지의 게시글을 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsList.slice(indexOfFirstPost, indexOfLastPost);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(postsList.length / postsPerPage);

  return (
    <section>
      <article>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>카테고리</th>
              <th>작성자</th>
              <th>게시글</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post.id}>
                <td className={styles.postCategory}>{post.category}</td>
                <td>{post.username}</td>
                <td>
                  <Link
                    href={`/profile/posts/${post.id}`}
                    className={styles.postLink}
                  >
                    {post.title}
                  </Link>
                </td>
                <td>
                  {new Date(post.created_at).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td>
                  <div className={styles.views}>
                    <svg
                      viewBox="0 0 18 18"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M9.5,15 C6.83333333,15 4.66666667,13.1666667 3,9.5 C4.66666667,5.83333333 6.83333333,4 9.5,4 C12.1666667,4 14.3333333,5.83333333 16,9.5 C14.3333333,13.1666667 12.1666667,15 9.5,15 Z M9.5,5 C7.37890843,5 5.58760092,6.44000147 4.10454935,9.5 C5.58760092,12.5599985 7.37890843,14 9.5,14 C11.6210916,14 13.4123991,12.5599985 14.8954507,9.5 C13.4123991,6.44000147 11.6210916,5 9.5,5 Z M9.5,12 C8.11928813,12 7,10.8807119 7,9.5 C7,8.11928813 8.11928813,7 9.5,7 C10.8807119,7 12,8.11928813 12,9.5 C12,10.8807119 10.8807119,12 9.5,12 Z M9.5,11 C10.3284271,11 11,10.3284271 11,9.5 C11,8.67157288 10.3284271,8 9.5,8 C8.67157288,8 8,8.67157288 8,9.5 C8,10.3284271 8.67157288,11 9.5,11 Z"></path>
                    </svg>
                    {post.views}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
      </article>
    </section>
  );
}
