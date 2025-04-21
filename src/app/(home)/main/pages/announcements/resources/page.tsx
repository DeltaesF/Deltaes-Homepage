"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";
import Image from "next/image";
import { useEffect } from "react";

// Google Drive 주소 변환 함수
const convertGoogleDriveURL = (url: string): string | null => {
  const match = url.match(/[-\w]{25,}/);
  return match
    ? `https://drive.google.com/uc?export=view&id=${match[0]}`
    : null;
};

export default function Resources() {
  const { postsList, fetchPostsList } = usePostsList();

  const filteredPosts = postsList.filter((post) => post.category === "자료실");

  useEffect(() => {
    fetchPostsList();
  }, []);

  console.log(postsList);

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.title}>
          <h1>자료실</h1>
        </header>
        <section className={styles.gridContainer}>
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
                    href={`/main/pages/announcements/${post.id}`}
                    className={styles.postLink}
                  >
                    <h1>{post.title}</h1>
                  </Link>
                  {validSrc && (
                    <div className={styles.imageWrapper}>
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
        </section>
        <SolutionMail />
      </section>
    </main>
  );
}
