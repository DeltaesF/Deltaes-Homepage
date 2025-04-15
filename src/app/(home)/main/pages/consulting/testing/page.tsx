// "use client";

// import { usePostsList } from "@/app/context/PostsListContext";
// import styles from "./page.module.css";
// import { useState } from "react";
// import Link from "next/link";
// import SolutionMail from "@/app/components/solution/SolutionMail";

export default function Testing() {
  return <div />;
  //   const { postsList } = usePostsList();

  //   const categories = [
  //     "고객별 맞춤교육",
  //     "전자기기/반도체/디스플레이",
  //     "환경",
  //     "건축/토목/산업용기계",
  //     "자동차",
  //     "소비재",
  //     "에너지",
  //   ];

  //   // 필터링된 게시글 목록
  //   const filteredPosts = postsList.filter((post) =>
  //     categories.includes(post.category),
  //   );

  //   // 최신 게시글이 먼저 나오도록 정렬 (id 역순)
  //   const sortedPosts = [...filteredPosts].sort((a, b) => b.id - a.id);

  //   // 페이지네이션 설정
  //   const postsPerPage = 10; // 한 페이지당 보여줄 게시글 수
  //   const totalPages = Math.ceil(sortedPosts.length / postsPerPage); // 총 페이지 수

  //   // 현재 페이지 상태 (1부터 시작)
  //   const [currentPage, setCurrentPage] = useState(1);

  //   // 현재 페이지의 게시글 범위 설정 (페이지 순서를 뒤집음)
  //   const indexOfLastPost = (totalPages - currentPage + 1) * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.wrapper}>
  //         <div className={styles.title}>
  //           <h1>컨설팅 사례</h1>
  //         </div>
  //         <div className={styles.gridContainer}>
  //           {currentPosts
  //             .sort((a, b) => a.id - b.id)
  //             .map((post) => (
  //               <div key={post.id} className={styles.gridItem}>
  //                 <div className={styles.gridItemPost}>
  //                   <Link
  //                     href={`/main/pages/announcements/${post.id}`}
  //                     className={styles.postLink}
  //                   >
  //                     <h1>{post.title}</h1>
  //                   </Link>
  //                   {Array.isArray(JSON.parse(post.images)) &&
  //                   JSON.parse(post.images).length > 0
  //                     ? JSON.parse(post.images).map((image: string) => (
  //                         <img
  //                           key={`${post.id}-${image}`}
  //                           src={image}
  //                           alt="게시글 이미지"
  //                         />
  //                       ))
  //                     : null}
  //                 </div>
  //                 <div className={styles.created}>
  //                   <span>
  //                     {post?.created_at
  //                       ? new Date(post.created_at).toLocaleDateString("ko-KR", {
  //                           year: "numeric",
  //                           month: "long",
  //                           day: "numeric",
  //                         })
  //                       : "날짜 없음"}
  //                   </span>
  //                 </div>
  //               </div>
  //             ))}
  //         </div>

  //         {/* 페이지네이션 컨트롤 */}
  //         <div className={styles.pagination}>
  //           <button
  //             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
  //             disabled={currentPage === 1}
  //             className={styles.pageButton}
  //           >
  //             이전
  //           </button>
  //           <span className={styles.pageInfo}>
  //             {currentPage} / {totalPages}
  //           </span>
  //           <button
  //             onClick={() =>
  //               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  //             }
  //             disabled={currentPage === totalPages}
  //             className={styles.pageButton}
  //           >
  //             다음
  //           </button>
  //         </div>

  //         <SolutionMail />
  //       </div>
  //     </div>
  //   );
}
