"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import SolutionMail from "@/app/components/solution/SolutionMail";
import useFetchImages from "@/app/hooks/useFetchImages";
import Image from "next/image";
import { usePostsList } from "@/app/context/PostsListContext";
import Link from "next/link";

type TabName =
  | "전자기기/반도체/디스플레이"
  | "환경"
  | "건축/토목/산업용기계"
  | "자동차"
  | "소비재"
  | "에너지";

// Google Drive URL 변환 함수 (이미 있다면 중복 정의 방지)
const convertGoogleDriveURL = (url: string): string | null => {
  const match = url.match(/[-\w]{25,}/);
  return match
    ? `https://drive.google.com/uc?export=view&id=${match[0]}`
    : null;
};

export default function Engineering() {
  const { postsList, fetchPostsList } = usePostsList();
  const { loading, error } = useFetchImages([]);
  const [activeTab, setActiveTab] =
    useState<TabName>("전자기기/반도체/디스플레이");

  const tabs: TabName[] = [
    "전자기기/반도체/디스플레이",
    "환경",
    "건축/토목/산업용기계",
    "자동차",
    "소비재",
    "에너지",
  ];

  useEffect(() => {
    fetchPostsList();
  }, []);

  const renderPosts = (category: TabName) => {
    const filteredPosts = postsList.filter(
      (post) => post.category === category,
    );

    if (filteredPosts.length === 0) {
      return <p>공지사항이 없습니다.</p>;
    }

    return (
      <div className={styles.gridContainer}>
        {filteredPosts.map((post) => {
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
      </div>
    );
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <Image
            src="/loading1.gif"
            alt="Loading..."
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h1>엔지니어링 컨설팅</h1>
            </div>
            <div className={styles.subTitle}>
              <h2>{activeTab}</h2>
            </div>
            <div className={styles.tabBtnWrapper}>
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`${styles.tabBtn} ${
                    tab === activeTab ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span>{tab}</span>
                </div>
              ))}
            </div>
            <div className={styles.tabContent}>{renderPosts(activeTab)}</div>
            <div className={styles.solutionMail}>
              <SolutionMail />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
