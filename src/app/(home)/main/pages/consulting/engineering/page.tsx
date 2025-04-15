// "use client";

// import { useState } from "react";
// import styles from "./page.module.css";
// import SolutionMail from "@/app/components/solution/SolutionMail";
// import useFetchImages from "@/app/hooks/useFetchImages";
// import Image from "next/image";
// import { usePostsList } from "@/app/context/PostsListContext";
// import Link from "next/link";

// type TabName =
//   | "전자기기/반도체/디스플레이"
//   | "환경"
//   | "건축/토목/산업용기계"
//   | "자동차"
//   | "소비재"
//   | "에너지";

export default function Engineering() {
  return <div />;
  //   const { postsList } = usePostsList();
  //   const { loading, error } = useFetchImages([]);
  //   // tab으로 제작하기
  //   const [activeTab, setActiveTab] =
  //     useState<TabName>("전자기기/반도체/디스플레이");

  //   const tabs: TabName[] = [
  //     "전자기기/반도체/디스플레이",
  //     "환경",
  //     "건축/토목/산업용기계",
  //     "자동차",
  //     "소비재",
  //     "에너지",
  //   ];

  //   const tabComponents = () => {
  //     if (activeTab === "전자기기/반도체/디스플레이") {
  //       const filteredPosts = postsList.filter(
  //         (post) => post.category === "전자기기/반도체/디스플레이",
  //       );

  //       return (
  //         <div className={styles.gridContainer}>
  //           {filteredPosts.length > 0 ? (
  //             filteredPosts
  //               .sort((a, b) => a.id - b.id)
  //               .map((post) => (
  //                 <article key={post.id} className={styles.gridItem}>
  //                   <div className={styles.gridItemPost}>
  //                     <Link
  //                       href={`/main/pages/consulting/engineering/subpage/${post.id}`}
  //                       className={styles.postLink}
  //                     >
  //                       <h1>{post.title}</h1>
  //                     </Link>
  //                     {Array.isArray(JSON.parse(post.images)) &&
  //                     JSON.parse(post.images).length > 0
  //                       ? JSON.parse(post.images).map((image: string) => (
  //                           <img
  //                             key={`${post.id}-${image}`}
  //                             src={image}
  //                             alt="게시글 이미지"
  //                           />
  //                         ))
  //                       : null}
  //                   </div>
  //                   <div className={styles.created}>
  //                     <span>
  //                       {post?.created_at
  //                         ? new Date(post.created_at).toLocaleDateString(
  //                             "ko-KR",
  //                             {
  //                               year: "numeric",
  //                               month: "long",
  //                               day: "numeric",
  //                             },
  //                           )
  //                         : "날짜 없음"}
  //                     </span>
  //                   </div>
  //                 </article>
  //               ))
  //           ) : (
  //             <p>공지사항이 없습니다.</p>
  //           )}
  //         </div>
  //       );
  //     } else if (activeTab === "환경") {
  //       const filteredPosts = postsList.filter(
  //         (post) => post.category === "환경",
  //       );

  //       return (
  //         <div className={styles.gridContainer}>
  //           {filteredPosts.length > 0 ? (
  //             filteredPosts
  //               .sort((a, b) => a.id - b.id)
  //               .map((post) => (
  //                 <article key={post.id} className={styles.gridItem}>
  //                   <div className={styles.gridItemPost}>
  //                     <Link
  //                       href={`/main/pages/consulting/engineering/subpage/${post.id}`}
  //                       className={styles.postLink}
  //                     >
  //                       <h1>{post.title}</h1>
  //                     </Link>
  //                     {Array.isArray(JSON.parse(post.images)) &&
  //                     JSON.parse(post.images).length > 0
  //                       ? JSON.parse(post.images).map((image: string) => (
  //                           <img
  //                             key={`${post.id}-${image}`}
  //                             src={image}
  //                             alt="게시글 이미지"
  //                           />
  //                         ))
  //                       : null}
  //                   </div>
  //                   <div className={styles.created}>
  //                     <span>
  //                       {post?.created_at
  //                         ? new Date(post.created_at).toLocaleDateString(
  //                             "ko-KR",
  //                             {
  //                               year: "numeric",
  //                               month: "long",
  //                               day: "numeric",
  //                             },
  //                           )
  //                         : "날짜 없음"}
  //                     </span>
  //                   </div>
  //                 </article>
  //               ))
  //           ) : (
  //             <p>공지사항이 없습니다.</p>
  //           )}
  //         </div>
  //       );
  //     } else if (activeTab === "건축/토목/산업용기계") {
  //       const filteredPosts = postsList.filter(
  //         (post) => post.category === "건축/토목/산업용기계",
  //       );

  //       return (
  //         <div className={styles.gridContainer}>
  //           {filteredPosts.length > 0 ? (
  //             filteredPosts
  //               .sort((a, b) => a.id - b.id)
  //               .map((post) => (
  //                 <article key={post.id} className={styles.gridItem}>
  //                   <div className={styles.gridItemPost}>
  //                     <Link
  //                       href={`/main/pages/consulting/engineering/subpage/${post.id}`}
  //                       className={styles.postLink}
  //                     >
  //                       <h1>{post.title}</h1>
  //                     </Link>
  //                     {Array.isArray(JSON.parse(post.images)) &&
  //                     JSON.parse(post.images).length > 0
  //                       ? JSON.parse(post.images).map((image: string) => (
  //                           <img
  //                             key={`${post.id}-${image}`}
  //                             src={image}
  //                             alt="게시글 이미지"
  //                           />
  //                         ))
  //                       : null}
  //                   </div>
  //                   <div className={styles.created}>
  //                     <span>
  //                       {post?.created_at
  //                         ? new Date(post.created_at).toLocaleDateString(
  //                             "ko-KR",
  //                             {
  //                               year: "numeric",
  //                               month: "long",
  //                               day: "numeric",
  //                             },
  //                           )
  //                         : "날짜 없음"}
  //                     </span>
  //                   </div>
  //                 </article>
  //               ))
  //           ) : (
  //             <p>공지사항이 없습니다.</p>
  //           )}
  //         </div>
  //       );
  //     } else if (activeTab === "자동차") {
  //       const filteredPosts = postsList.filter(
  //         (post) => post.category === "자동차",
  //       );
  //       return (
  //         <div className={styles.gridContainer}>
  //           {filteredPosts.length > 0 ? (
  //             filteredPosts
  //               .sort((a, b) => a.id - b.id)
  //               .map((post) => (
  //                 <article key={post.id} className={styles.gridItem}>
  //                   <div className={styles.gridItemPost}>
  //                     <Link
  //                       href={`/main/pages/consulting/engineering/subpage/${post.id}`}
  //                       className={styles.postLink}
  //                     >
  //                       <h1>{post.title}</h1>
  //                     </Link>
  //                     {Array.isArray(JSON.parse(post.images)) &&
  //                     JSON.parse(post.images).length > 0
  //                       ? JSON.parse(post.images).map((image: string) => (
  //                           <img
  //                             key={`${post.id}-${image}`}
  //                             src={image}
  //                             alt="게시글 이미지"
  //                           />
  //                         ))
  //                       : null}
  //                   </div>
  //                   <div className={styles.created}>
  //                     <span>
  //                       {post?.created_at
  //                         ? new Date(post.created_at).toLocaleDateString(
  //                             "ko-KR",
  //                             {
  //                               year: "numeric",
  //                               month: "long",
  //                               day: "numeric",
  //                             },
  //                           )
  //                         : "날짜 없음"}
  //                     </span>
  //                   </div>
  //                 </article>
  //               ))
  //           ) : (
  //             <p>공지사항이 없습니다.</p>
  //           )}
  //         </div>
  //       );
  //     } else if (activeTab === "소비재") {
  //       const filteredPosts = postsList.filter(
  //         (post) => post.category === "소비재",
  //       );
  //       return (
  //         <div className={styles.gridContainer}>
  //           {filteredPosts.length > 0 ? (
  //             filteredPosts
  //               .sort((a, b) => a.id - b.id)
  //               .map((post) => (
  //                 <article key={post.id} className={styles.gridItem}>
  //                   <div className={styles.gridItemPost}>
  //                     <Link
  //                       href={`/main/pages/consulting/engineering/subpage/${post.id}`}
  //                       className={styles.postLink}
  //                     >
  //                       <h1>{post.title}</h1>
  //                     </Link>
  //                     {Array.isArray(JSON.parse(post.images)) &&
  //                     JSON.parse(post.images).length > 0
  //                       ? JSON.parse(post.images).map((image: string) => (
  //                           <img
  //                             key={`${post.id}-${image}`}
  //                             src={image}
  //                             alt="게시글 이미지"
  //                           />
  //                         ))
  //                       : null}
  //                   </div>
  //                   <div className={styles.created}>
  //                     <span>
  //                       {post?.created_at
  //                         ? new Date(post.created_at).toLocaleDateString(
  //                             "ko-KR",
  //                             {
  //                               year: "numeric",
  //                               month: "long",
  //                               day: "numeric",
  //                             },
  //                           )
  //                         : "날짜 없음"}
  //                     </span>
  //                   </div>
  //                 </article>
  //               ))
  //           ) : (
  //             <p>공지사항이 없습니다.</p>
  //           )}
  //         </div>
  //       );
  //     } else if (activeTab === "에너지") {
  //       const filteredPosts = postsList.filter(
  //         (post) => post.category === "에너지",
  //       );
  //       return (
  //         <div className={styles.gridContainer}>
  //           {filteredPosts.length > 0 ? (
  //             filteredPosts
  //               .sort((a, b) => a.id - b.id)
  //               .map((post) => (
  //                 <article key={post.id} className={styles.gridItem}>
  //                   <div className={styles.gridItemPost}>
  //                     <Link
  //                       href={`/main/pages/consulting/engineering/subpage/${post.id}`}
  //                       className={styles.postLink}
  //                     >
  //                       <h1>{post.title}</h1>
  //                     </Link>
  //                     {Array.isArray(JSON.parse(post.images)) &&
  //                     JSON.parse(post.images).length > 0
  //                       ? JSON.parse(post.images).map((image: string) => (
  //                           <img
  //                             key={`${post.id}-${image}`}
  //                             src={image}
  //                             alt="게시글 이미지"
  //                           />
  //                         ))
  //                       : null}
  //                   </div>
  //                   <div className={styles.created}>
  //                     <span>
  //                       {post?.created_at
  //                         ? new Date(post.created_at).toLocaleDateString(
  //                             "ko-KR",
  //                             {
  //                               year: "numeric",
  //                               month: "long",
  //                               day: "numeric",
  //                             },
  //                           )
  //                         : "날짜 없음"}
  //                     </span>
  //                   </div>
  //                 </article>
  //               ))
  //           ) : (
  //             <p>공지사항이 없습니다.</p>
  //           )}
  //         </div>
  //       );
  //     }
  //   };

  //   if (error) {
  //     return <p>Error: {error}</p>;
  //   }

  //   return (
  //     <div>
  //       {loading ? (
  //         <div className={styles.loading}>
  //           <Image
  //             src="/loading1.gif"
  //             alt="Loading..."
  //             width={200}
  //             height={200}
  //           />
  //         </div>
  //       ) : (
  //         <div className={styles.container}>
  //           <div className={styles.wrapper}>
  //             <div className={styles.title}>
  //               <h1>엔지니어링 컨설팅</h1>
  //             </div>
  //             <div>
  //               <div className={styles.subTitle}>
  //                 <h2>{activeTab}</h2>
  //               </div>
  //               <div className={styles.tabBtnWrapper}>
  //                 {tabs.map((tab) => (
  //                   <div
  //                     key={tab}
  //                     className={styles.tabBtn}
  //                     onClick={() => setActiveTab(tab)}
  //                   >
  //                     <span>{tab}</span>
  //                   </div>
  //                 ))}
  //               </div>
  //               <div className={styles.tabContent}>
  //                 <div className={styles.tabContent}>{tabComponents()}</div>
  //               </div>
  //               <div className={styles.solutionMail}>
  //                 <SolutionMail />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
}
