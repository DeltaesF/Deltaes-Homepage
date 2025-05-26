"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";
import Image from "next/image";
import { useEffect } from "react";
import { useUser } from "@/app/context/UserContext";

// Google Drive 주소 변환 함수
const convertGoogleDriveURL = (url: string): string | null => {
  const match = url.match(/[-\w]{25,}/);
  return match
    ? `https://drive.google.com/uc?export=view&id=${match[0]}`
    : null;
};

export default function Resources() {
  const { postsList, fetchPostsList } = usePostsList();
  const { user } = useUser();

  const filteredPosts = postsList.filter((post) => post.category === "자료실");

  useEffect(() => {
    fetchPostsList();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault();
      alert("로그인이 필요한 서비스입니다.");
    }
  };

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
                    onClick={handleLinkClick}
                  >
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
              </article>
            );
          })}
        </section>
        <SolutionMail />
      </section>
    </main>
  );
}
