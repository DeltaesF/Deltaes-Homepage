"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";
import Image from "next/image";
import { useUser } from "@/app/context/UserContext";

export default function Announcements() {
  const { postsList, fetchPostsList } = usePostsList();
  const { user } = useUser();

  useEffect(() => {
    fetchPostsList();
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    postCategory: string,
  ) => {
    if (postCategory === "자료실" && !user) {
      e.preventDefault();
      alert("로그인이 필요한 서비스입니다.");
    }
  };

  const categories = ["공지사항", "행사소식", "제품소식", "자료실"];

  // 필터링된 게시글 목록
  const filteredPosts = postsList.filter((post) =>
    categories.includes(post.category),
  );

  // 최신 게시글이 먼저 나오도록 정렬 (id 역순)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => b.created_at.getTime() - a.created_at.getTime(),
  );

  // 페이지네이션 설정
  const postsPerPage = 12;
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage); // 총 페이지 수 계산

  const [currentPage, setCurrentPage] = useState(1); // 1부터 시작

  // 현재 페이지의 게시글을 계산
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const indexOfLastPost = indexOfFirstPost + postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const convertGoogleDriveURL = (url: string) => {
    if (url.includes("drive.google.com")) {
      const match = url.match(/id=([^&]+)/);
      return match ? `https://lh3.googleusercontent.com/d/${match[1]}` : null;
    }
    return url;
  };

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.title}>
          <h1>공지사항</h1>
        </header>
        <section className={styles.gridContainer}>
          {currentPosts.map((post) => {
            const images = Array.isArray(post.images) ? post.images : [];

            const mainImage = images.length > 0 ? images[0] : null;
            const validSrc = mainImage
              ? convertGoogleDriveURL(mainImage) || mainImage
              : null;

            return (
              <article key={post.id} className={styles.gridItem}>
                <div className={styles.gridItemPost}>
                  <Link
                    href={`/main/pages/announcements/${post.id}`}
                    onClick={(e) => handleLinkClick(e, post.category)}
                    className={styles.postLink}
                  >
                    <h1>{post.title}</h1>
                  </Link>
                  {validSrc && (
                    <div className={styles.imageContainer}>
                      <Image
                        src={validSrc}
                        alt="대표 이미지"
                        width={70}
                        height={70}
                        onError={(e) =>
                          console.error("이미지 로드 실패:", validSrc, e)
                        }
                      />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </section>
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
        <SolutionMail />
      </section>
    </main>
  );
}
