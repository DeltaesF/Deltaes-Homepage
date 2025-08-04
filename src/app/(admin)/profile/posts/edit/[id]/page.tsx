"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import Editor from "@/app/components/editor/editor";

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id || typeof id !== "string") return;
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setContent(data.content);
        setLoading(false);
      } else {
        alert("게시글을 불러올 수 없습니다.");
        router.push("/profile");
      }
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async () => {
    if (!id || typeof id !== "string") return;

    try {
      await updateDoc(doc(db, "posts", id), {
        title,
        content,
        updated_at: serverTimestamp(),
      });
      alert("게시글이 수정되었습니다.");
      router.push(`/profile`);
    } catch (error) {
      console.error("수정 오류:", error);
      alert("수정 중 문제가 발생했습니다.");
    }
  };

  if (loading) return <div>로딩 중...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>게시글 수정</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />

      <Editor value={content} onChange={setContent} />

      <button
        onClick={handleUpdate}
        style={{ marginTop: "1.5rem", padding: "0.5rem 1rem" }}
      >
        수정 완료
      </button>
    </div>
  );
}
