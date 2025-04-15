// "use client";

// import { usePostsList } from "@/app/context/PostsListContext";
// import styles from "./page.module.css";
// import { useState } from "react";
// import Link from "next/link";
// import SolutionMail from "@/app/components/solution/SolutionMail";
// import Image from "next/image";

export default function Announcements() {
  return <div />;
  //   const { postsList } = usePostsList();

  //   const categories = ["공지사항", "행사소식", "제품소식", "자료실"];

  //   // 필터링된 게시글 목록
  //   const filteredPosts = postsList.filter((post) =>
  //     categories.includes(post.category),
  //   );

  //   // 최신 게시글이 먼저 나오도록 정렬 (id 역순)
  //   const sortedPosts = [...filteredPosts].sort((a, b) => b.id - a.id);

  //   // 페이지네이션 설정
  //   const postsPerPage = 12; // 한 페이지당 보여줄 게시글 수
  //   const totalPages = Math.ceil(sortedPosts.length / postsPerPage); // 총 페이지 수

  //   // 현재 페이지 상태 (1부터 시작)
  //   const [currentPage, setCurrentPage] = useState(1);

  //   // 현재 페이지의 게시글 범위 설정 (페이지 순서를 뒤집음)
  //   const indexOfLastPost = (totalPages - currentPage + 1) * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  //   console.log(postsList);

  //   const convertGoogleDriveURL = (url: string) => {
  //     if (url.includes("drive.google.com")) {
  //       const match = url.match(/id=([^&]+)/);
  //       return match ? `https://lh3.googleusercontent.com/d/${match[1]}` : null;
  //     }
  //     return url;
  //   };

  //   return (
  //     <main className={styles.container}>
  //       <section className={styles.wrapper}>
  //         <header className={styles.title}>
  //           <h1>공지사항</h1>
  //         </header>
  //         <section className={styles.gridContainer}>
  //           {currentPosts
  //             .sort((a, b) => a.id - b.id)
  //             .map((post) => {
  //               let images: string[] = [];

  //               try {
  //                 const parsedImages = JSON.parse(post.images);
  //                 images = Array.isArray(parsedImages) ? parsedImages.flat() : [];
  //               } catch (error) {
  //                 console.error("이미지 파싱 오류:", error);
  //               }

  //               // ✅ 대표 이미지 1개 선택
  //               const mainImage = images.length > 0 ? images[0] : null;
  //               const validSrc = mainImage
  //                 ? convertGoogleDriveURL(mainImage) || mainImage
  //                 : null;

  //               // ✅ 대표 이미지가 잘 변환됐는지 확인
  //               console.log("대표 이미지 URL:", validSrc);
  //               console.log("포스트 ID:", post.id);
  //               console.log("원본 이미지 데이터:", post.images);
  //               console.log("파싱된 이미지 배열:", images);

  //               return (
  //                 <article key={post.id} className={styles.gridItem}>
  //                   <div className={styles.gridItemPost}>
  //                     <Link
  //                       href={`/main/pages/announcements/${post.id}`}
  //                       className={styles.postLink}
  //                     >
  //                       <h1>{post.title}</h1>
  //                     </Link>
  //                     {/* ✅ 대표 이미지 1개만 표시 */}
  //                     {validSrc && (
  //                       <div className={styles.imageContainer}>
  //                         <Image
  //                           src={validSrc}
  //                           alt="대표 이미지"
  //                           width={70}
  //                           height={70}
  //                           onError={(e) =>
  //                             console.error("이미지 로드 실패:", validSrc, e)
  //                           }
  //                         />
  //                       </div>
  //                     )}
  //                   </div>
  //                 </article>
  //               );
  //             })}
  //         </section>
  //         {/* 페이지네이션 컨트롤 */}
  //         <div className={styles.pagination}>
  //           <button
  //             className={styles.pageButton}
  //             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
  //             disabled={currentPage === 1}
  //           >
  //             이전
  //           </button>
  //           <span className={styles.pageInfo}>
  //             {currentPage} / {totalPages}
  //           </span>
  //           <button
  //             className={styles.pageButton}
  //             onClick={() =>
  //               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  //             }
  //             disabled={currentPage === totalPages}
  //           >
  //             다음
  //           </button>
  //         </div>
  //         <div className={styles.solutionMail}>
  //           <SolutionMail />
  //         </div>
  //       </section>
  //     </main>
  //   );
}
