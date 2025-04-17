"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SolutionMail from "@/app/components/solution/SolutionMail";

// Google Drive 이미지 URL 변환 함수
const convertGoogleDriveURL = (url: string) => {
  if (url.includes("drive.google.com")) {
    const match = url.match(/id=([^&]+)/);
    return match ? `https://lh3.googleusercontent.com/d/${match[1]}` : null;
  }
  return url;
};

export default function Clients() {
  const { postsList } = usePostsList();

  const categories = [
    "고객별 맞춤교육",
    "전자기기/반도체/디스플레이",
    "환경",
    "건축/토목/산업용기계",
    "자동차",
    "소비재",
    "에너지",
  ];

  // 필터링된 게시글 목록
  const filteredPosts = postsList.filter((post) =>
    categories.includes(post.category),
  );

  // 최신 게시글이 먼저 나오도록 정렬 (id 역순)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => b.created_at.getTime() - a.created_at.getTime(),
  );

  // 페이지네이션 설정
  const postsPerPage = 10;
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = (totalPages - currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>컨설팅 사례</h1>
        </div>

        <div className={styles.gridContainer}>
          {currentPosts
            .sort(
              (a, b) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime(),
            )
            .map((post) => {
              const images = Array.isArray(post.images)
                ? post.images
                : JSON.parse(post.images || "[]");
              const mainImage = images.length > 0 ? images[0] : null;
              const validSrc = mainImage
                ? convertGoogleDriveURL(mainImage) || mainImage
                : null;

              return (
                <div key={post.id} className={styles.gridItem}>
                  <div className={styles.gridItemPost}>
                    <Link
                      href={`/main/pages/consulting/engineering/subpage/${post.id}`}
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
                  <div className={styles.created}>
                    <span>
                      {post?.created_at
                        ? new Date(post.created_at).toLocaleDateString(
                            "ko-KR",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )
                        : "날짜 없음"}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>

        {/* 페이지네이션 */}
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
      </div>
    </div>
  );
}
