"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";

export default function Write() {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null,
  );
  const [isSaved, setIsSaved] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    setContent(e.currentTarget.innerHTML);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          user_id: user?.id, // 로그인된 사용자 ID를 서버로 전달
        }),
      });

      const data = await response.json();
      console.log("data: 타입", data);

      if (response.ok) {
        setIsSaved(true);
        setMessage("글이 성공적으로 작성되었습니다!");
        setMessageType("success");
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            style={{
              minHeight: "20px",
              border: "1px solid #ddd",
              padding: "10px",
              cursor: "text",
            }}
          />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <div
            id="content"
            contentEditable
            onInput={handleContentChange}
            style={{
              minHeight: "200px",
              border: "1px solid #ddd",
              padding: "10px",
              cursor: "text",
            }}
          ></div>
        </div>
        <button type="submit">글 작성</button>
      </form>
      {message && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor:
              messageType === "success" ? "lightgreen" : "lightcoral",
            color: messageType === "success" ? "green" : "red",
            borderRadius: "5px",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}
