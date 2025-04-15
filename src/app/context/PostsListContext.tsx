// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// interface Post {
//   id: number;
//   title: string;
//   views: number;
//   created_at: string;
//   updated_at: string;
//   username: string;
//   images: string;
//   category: string;
// }

// interface PostsListContextType {
//   postsList: Post[];
//   error: string | null;
//   fetchPostsList: () => Promise<void>;
// }

// const PostsListContext = createContext<PostsListContextType | undefined>(
//   undefined,
// );

// export function PostsListProvider({ children }: { children: React.ReactNode }) {
//   // ✅ 이름 변경
//   const [postsList, setPostsList] = useState<Post[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   const fetchPostsList = async () => {
//     try {
//       const res = await fetch("/api/write"); // ✅ API 경로 확인
//       const data = await res.json();

//       if (res.ok) {
//         setPostsList(data.posts); // ✅ API 응답 필드 확인
//       } else {
//         setError(data.error || "게시글을 불러오는 데 실패했습니다.");
//       }
//     } catch (error) {
//       console.error("글 목록 조회 실패:", error);
//       setError("서버와 연결할 수 없습니다.");
//     }
//   };

//   useEffect(() => {
//     fetchPostsList();
//   }, []);

//   return (
//     <PostsListContext.Provider value={{ postsList, error, fetchPostsList }}>
//       {children}
//     </PostsListContext.Provider>
//   );
// }

// export function usePostsList() {
//   const context = useContext(PostsListContext);
//   if (!context) {
//     throw new Error("usePostsList는 PostsListProvider 내에서 사용해야 합니다.");
//   }
//   return context;
// }
