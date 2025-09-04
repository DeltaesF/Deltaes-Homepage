// hooks/usePostsList.ts
import { useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

interface Post {
  id: string;
  title: string;
  content: string;
  user_id: string;
  category: string;
  images: string[];
  created_at: Date;
  userName: string;
  views: number;
}

export function useNewsList() {
  const [newsList, setNewsList] = useState<Post[]>([]);

  const fetchNewsList = async () => {
    try {
      const q = query(collection(db, " news"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const postsData: Post[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          content: data.content,
          user_id: data.user_id,
          category: data.category,
          images: data.images || [],
          created_at: data.createdAt?.toDate?.() ?? new Date(),
          views: data.views ?? 0,
          userName: data.userName ?? "익명", // Firestore에 없으면 기본값
        };
      });

      setNewsList(postsData);
    } catch (error) {
      console.error("게시글 목록을 가져오는 중 오류 발생:", error);
    }
  };

  return { newsList, fetchNewsList };
}
