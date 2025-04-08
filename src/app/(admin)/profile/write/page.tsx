"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/app/components/editor/editor"), {
  ssr: false,
});

interface WriteProps {
  setSelectMenu: (menu: string) => void;
}

export default function Write({ setSelectMenu }: WriteProps) {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null,
  );
  const [isSaved, setIsSaved] = useState(false);

  function decodeHTMLEntities(html: string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const decodedContent = decodeHTMLEntities(content);

    try {
      const response = await fetch("/api/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content: decodedContent,
          user_id: user?.id, // 로그인된 사용자 ID를 서버로 전달
          category,
        }),
      });

      const data = await response.json();
      console.log("서버 응답:", data); // ✅ 서버 응답 확인

      if (response.ok) {
        setIsSaved(true);
        setMessage("글이 성공적으로 작성되었습니다!");
        setMessageType("success");

        setTimeout(() => {
          setSelectMenu("게시물 관리");
        }, 1000);
      } else {
        setMessage(data.error || "글 작성에 실패했습니다.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("글 제출 실패:", error);
      setMessage("글 작성에 실패했습니다. 다시 시도해 주세요.");
      setMessageType("error");
    }
  };

  // 페이지 떠날 때 저장되지 않은 글이 있으면 경고창 띄우기
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isSaved) {
        event.preventDefault();
        event.returnValue = ""; // 크롬에서 경고 메시지를 표시하도록 하기 위함
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isSaved]);

  return (
    <div>
      <div className={styles.titleCategoryContainer}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.input}
          placeholder="제목을 입력해주세요"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className={styles.select}
        >
          <option value="" disabled>
            카테고리 선택
          </option>
          <optgroup label="공지사항">
            <option value="공지사항">공지사항</option>
            <option value="행사소식">행사소식</option>
            <option value="제품소식">제품소식</option>
            <option value="자료실">자료실</option>
          </optgroup>
          <optgroup label="엔지니어링 컨설팅 서비스">
            <option value="전자기기/반도체/디스플레이">
              전자기기/반도체/디스플레이
            </option>
            <option value="환경">환경</option>
            <option value="건축/토목/산업용기계">건축/토목/산업용기계</option>
            <option value="자동차">자동차</option>
            <option value="소비재">소비재</option>
            <option value="에너지">에너지</option>
          </optgroup>
        </select>
      </div>
      <Editor value={content} onChange={setContent} />
      <button type="submit" onClick={handleSubmit} className={styles.submitBtn}>
        글 작성
      </button>
      {message && (
        <div
          className={`${styles.message} ${
            messageType === "success" ? styles.success : styles.error
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
