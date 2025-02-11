"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
interface WriteProps {
  setSelectMenu: (menu: string) => void;
}

export default function Write({ setSelectMenu }: WriteProps) {
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
    setContent(e.currentTarget.innerHTML); // 변경된 HTML을 저장
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

  // 스타일 적용 / 제거 함수
  const toggleStyle = (style: string, value: string, defaultValue: string) => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (!selectedText) return;

    let span = range.commonAncestorContainer.parentElement as HTMLSpanElement;

    if (span && span.tagName === "SPAN" && span.style[style as any] === value) {
      // 이미 스타일이 적용된 경우, 스타일을 초기값으로 변경
      span.style[style as any] = defaultValue;

      // 기본 스타일로 돌아가면 span을 제거 (텍스트를 다시 원래 상태로)
      if (span.getAttribute("style") === "") {
        span.replaceWith(...span.childNodes);
      }
    } else {
      // 새로운 <span> 태그 생성하여 스타일 적용
      const newSpan = document.createElement("span");
      newSpan.style[style as any] = value;
      range.surroundContents(newSpan);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className={styles.input}
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div className={styles.editorContainer}>
          <div className={styles.toolbar}>
            <button
              type="button"
              onClick={() => toggleStyle("fontSize", "20px", "inherit")}
            >
              큰 글씨
            </button>
            <button
              type="button"
              onClick={() => toggleStyle("fontWeight", "bold", "normal")}
            >
              굵게
            </button>
            <button
              type="button"
              onClick={() => toggleStyle("fontStyle", "italic", "normal")}
            >
              기울이기
            </button>
            <button
              type="button"
              onClick={() => toggleStyle("textDecoration", "underline", "none")}
            >
              밑줄
            </button>
            <button
              type="button"
              onClick={() => toggleStyle("color", "red", "black")}
            >
              빨강
            </button>
          </div>
          <div
            id="content"
            contentEditable
            onInput={handleContentChange}
            className={styles.content}
          ></div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          글 작성
        </button>
      </form>
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
