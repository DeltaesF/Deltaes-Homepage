"use client";

import styles from "./page.module.css";
import { usePostsList } from "@/app/context/PostsListContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Google Drive 주소 변환 함수
const convertGoogleDriveURL = (url: string): string | null => {
  const match = url.match(/[-\w]{25,}/);
  return match
    ? `https://drive.google.com/uc?export=view&id=${match[0]}`
    : null;
};

export default function News() {
  const { postsList, fetchPostsList } = usePostsList();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const filteredPosts = postsList.filter((post) => post.category === "뉴스");

  useEffect(() => {
    fetchPostsList();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className={styles.newsContainer}>
      <h1 className={styles.newsTitle}>NEWS 게시판</h1>
      <div className={styles.newsWrapper}>
        {currentPosts.map((post) => {
          const images = Array.isArray(post.images)
            ? post.images
            : JSON.parse(post.images || "[]");
          const mainImage = images.length > 0 ? images[0] : null;
          const validSrc = mainImage
            ? convertGoogleDriveURL(mainImage) || mainImage
            : null;

          return (
            <div key={post.id} className={styles.newsContents}>
              <div className={styles.newsCimg}>
                {validSrc ? (
                  <Image
                    src={validSrc}
                    alt="대표 이미지"
                    width={150}
                    height={150}
                    onError={(e) =>
                      console.error("이미지 로드 실패:", validSrc, e)
                    }
                  />
                ) : (
                  "이미지 없습니다"
                )}
              </div>
              <div className={styles.newsCt}>
                <Link href={`/main/pages/news/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
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
    </div>
  );
}
