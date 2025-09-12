"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import { useEffect } from "react";
import Link from "next/link";
import SolutionMail from "@/app/components/solution/SolutionMail";
import Image from "next/image";

export default function Testing() {
  const { postsList, fetchPostsList } = usePostsList();

  useEffect(() => {
    fetchPostsList();
  }, []);

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

  const convertGoogleDriveURL = (url: string) => {
    if (url.includes("drive.google.com")) {
      const match = url.match(/id=([^&]+)/);
      return match ? `https://lh3.googleusercontent.com/d/${match[1]}` : null;
    }
    return url;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>컨설팅 사례</h1>
        </div>
        <div className={styles.gridContainer}>
          {filteredPosts.map((post) => {
            const images = Array.isArray(post.images) ? post.images : [];

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
        </div>

        <SolutionMail />
      </div>
    </div>
  );
}
