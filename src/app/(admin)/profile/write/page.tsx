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
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null,
  );
  const [isSaved, setIsSaved] = useState(false);
  const [fontSize, setFontSize] = useState("14px");
  const [textColor, setTextColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    const contentDiv = e.currentTarget;
    setContent(contentDiv.innerHTML);

    // 마지막 입력된 노드를 가져옴
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const lastNode = range.startContainer;

    if (lastNode.nodeType === Node.ELEMENT_NODE) {
      const lastElement = lastNode as HTMLElement;

      // 현재 줄의 첫 번째 요소가 <span> 태그라면 스타일 제거
      if (lastElement.tagName === "SPAN") {
        lastElement.removeAttribute("style");
      }
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const insertImageAtCursor = (imageUrl: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "업로드된 이미지";
    img.style.maxWidth = "100%"; // 이미지 크기 조절 (선택 사항)

    // 이미지 삽입
    range.deleteContents(); // 기존 선택된 내용 지우기 (선택된 텍스트가 있을 경우)
    range.insertNode(img);
    // 커서를 이미지 뒤로 이동시켜서, 이후에 텍스트 입력이 가능하도록
    range.setStartAfter(img);
    range.setEndAfter(img);
  };

  const uploadImage = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload API Response:", data);

      const FTP_HOST = process.env.FTP_HOST;

      if (response.ok) {
        // 이미지 URL을 받아와서 이미지 다운로드 API URL로 변환
        const fileUrl = data.fileUrl.replace(
          `${FTP_HOST}/images/`,
          "/api/getftp/",
        );
        setImageUrl(fileUrl);
        insertImageAtCursor(fileUrl); // contentEditable에 이미지 삽입
      } else {
        alert("이미지 업로드 실패");
      }
    } catch (error) {
      console.error("업로드 중 오류 발생:", error);
    }
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
          images: imageUrl ? [imageUrl] : [], // 이미지 URL을 배열로 전달
        }),
      });

      const data = await response.json();

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

    if (span && span.tagName === "SPAN") {
      // 이미 적용된 스타일이면 원래대로 되돌리기
      if (span.style[style as any] === value) {
        span.style[style as any] = defaultValue;

        // 스타일이 없으면 span 제거
        if (span.getAttribute("style") === "") {
          span.replaceWith(...span.childNodes);
        }
      } else {
        // 기존 스타일이 없으면 스타일 적용
        span.style[style as any] = value;
      }
    } else {
      // 새로운 <span> 생성 후 스타일 적용
      const newSpan = document.createElement("span");
      newSpan.style[style as any] = value;

      try {
        range.surroundContents(newSpan);
      } catch (error) {
        console.warn("선택된 범위가 올바르지 않습니다.", error);
      }
    }
  };

  // 글자 크기 변경
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSize = e.target.value;
    setFontSize(selectedSize);
    toggleStyle("fontSize", selectedSize, "16px");
  };

  // 텍스트 색상 변경
  const handleTextColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = e.target.value;
    setTextColor(selectedColor);
    toggleStyle("color", selectedColor, "black");
  };

  // 배경색 변경
  const handleBgColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBgColor = e.target.value;
    setBgColor(selectedBgColor);
    toggleStyle("backgroundColor", selectedBgColor, "white");
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
            <div className={styles.centered}>
              <label htmlFor="fontSize">크기</label>
              <select
                id="fontSize"
                value={fontSize}
                onChange={handleFontSizeChange}
                className={styles.select}
              >
                {[
                  "6",
                  "8",
                  "10",
                  "12",
                  "14",
                  "16",
                  "18",
                  "20",
                  "24",
                  "28",
                  "32",
                  "36",
                  "40",
                  "44",
                  "48",
                  "52",
                  "60",
                  "72",
                ].map((size) => (
                  <option key={size} value={`${size}px`}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.centered}>
              <label htmlFor="textColor">색상</label>
              <select
                id="textColor"
                value={textColor}
                onChange={handleTextColorChange}
                className={styles.select}
              >
                {[
                  "white",
                  "black",
                  "red",
                  "orange",
                  "yellow",
                  "green",
                  "turquoise",
                  "blue",
                  "pink",
                  "purple",
                  "brown",
                  "skyblue",
                ].map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.centered}>
              <label htmlFor="bgColor">배경색</label>
              <select
                id="bgColor"
                value={bgColor}
                onChange={handleBgColorChange}
                className={styles.select}
              >
                {[
                  "white",
                  "black",
                  "red",
                  "orange",
                  "yellow",
                  "green",
                  "turquoise",
                  "blue",
                  "pink",
                  "purple",
                  "brown",
                  "skyblue",
                ].map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
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
      <input type="file" onChange={handleImageChange} />
      <button type="button" onClick={uploadImage}>
        이미지 업로드
      </button>

      {/* 이미지 미리보기 */}
      {imageUrl && <img src={imageUrl} alt="업로드된 이미지" />}
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
