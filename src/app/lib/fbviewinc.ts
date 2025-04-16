import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

// 글 조회수 증가 함수
const incrementViews = async (postId: string) => {
  try {
    const postRef = doc(db, "posts", postId); // 해당 게시물의 문서 참조
    await updateDoc(postRef, {
      views: increment(1), // 조회수를 1 증가시킴
    });
  } catch (error) {
    console.error("조회수 증가 중 오류 발생:", error);
  }
};

// 게시글 클릭 시 조회수 증가 함수 호출
export const handlePostClick = (postId: string) => {
  incrementViews(postId); // 해당 글의 조회수를 1 증가시킴
  // 추가적으로 글 상세 페이지로 이동하는 로직을 작성할 수 있습니다.
};
