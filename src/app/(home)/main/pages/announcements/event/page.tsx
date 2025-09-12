"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";
import Image from "next/image";
import { useEffect, useState } from "react";

// Google Drive 주소 변환 함수
const convertGoogleDriveURL = (url: string): string | null => {
  const match = url.match(/[-\w]{25,}/);
  return match
    ? `https://drive.google.com/uc?export=view&id=${match[0]}`
    : null;
};

export default function Evnet() {
  const { postsList, fetchPostsList } = usePostsList();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const filteredPosts = postsList.filter(
    (post) => post.category === "행사소식",
  );

  useEffect(() => {
    fetchPostsList();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.title}>
          <h1>행사소식</h1>
        </header>
        <section className={styles.gridContainer}>
          {currentPosts.map((post) => {
            const images = Array.isArray(post.images)
              ? post.images
              : JSON.parse(post.images || "[]");
            const mainImage = images.length > 0 ? images[0] : null;
            const validSrc = mainImage
              ? convertGoogleDriveURL(mainImage) || mainImage
              : null;

            return (
              <article key={post.id} className={styles.gridItem}>
                <div className={styles.gridItemPost}>
                  <div className={styles.gridItemTop}>
                    <Link href={`/main/pages/announcements/${post.id}`}>
                      <h1>{post.title}</h1>
                    </Link>
                    {validSrc && (
                      <div>
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
                  <span>
                    {post.created_at
                      ? new Date(post.created_at).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "날짜 없음"}
                  </span>
                </div>
              </article>
            );
          })}
        </section>
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
