"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Announcements() {
  const { postsList, error, fetchPostsList } = usePostsList();

  useEffect(() => {
    fetchPostsList();
  }, []);

  console.log(postsList);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>공지사항</h1>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div className={styles.gridItemPost}>
              <h1>
                안녕하세요 반갑습니다 글자 줄 설정 중 입니다. 3줄 까지만 보이고
                나머지 글을 ...으로 표현이 됩니다.
              </h1>
              <img src="https://placehold.co/70x70" />
            </div>
          </div>
          {postsList.map((post) => (
            <div key={post.id} className={styles.gridItem}>
              <div className={styles.gridItemPost}>
                <h1>{post.title}</h1>
                {Array.isArray(post.images) && post.images.length > 0 ? (
                  post.images.map((image, index) => (
                    <img key={index} src={image} alt={`이미지 ${index}`} />
                  ))
                ) : post.images && post.images.length > 0 ? (
                  <img src={post.images} alt="이미지" />
                ) : null}{" "}
                {/* images가 없으면 렌더링하지 않음 */}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.solutionMail}>솔루션 문의</div>
      </div>
    </div>
  );
}
