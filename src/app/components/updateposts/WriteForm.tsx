"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";
import styles from "./writeForm.module.css";
import useFetchImages from "@/app/hooks/useFetchImages";
import Image from "next/image";
interface WriteProps {
  setSelectMenu: (menu: string) => void;
}

export default function WriteForm({ setSelectMenu }: WriteProps) {
  const { imageSrc, error } = useFetchImages([
    "text.png",
    "textBackground.png",
    "bold.png",
    "italic.png",
    "underline.png",
    "image.png",
  ]);
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null,
  );
  const [isSaved, setIsSaved] = useState(false);
  const [fontSize, setFontSize] = useState("14px");
  const [textColor, setTextColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  const [showTextColor, setShowTextColor] = useState(false);
  const [showBgColor, setShowBgColor] = useState(false);
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState<HTMLImageElement | null>(
    null,
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
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
    console.log("선택된 파일:", file);
    if (file) {
      setImage(file);
    }
  };

  const insertImageAtCursor = (imageUrl: string) => {
    const contentDiv = document.getElementById("content");
    if (!contentDiv) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "";
    img.style.maxWidth = "100%";
    img.style.display = "block"; // 줄 바꿈 효과 적용
    img.onclick = () => setSelectedImage(img);

    range.deleteContents();
    range.insertNode(img);

    // 이미지 삽입 후, 커서를 이미지 다음 위치로 이동
    range.setStartAfter(img);
    range.setEndAfter(img);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const uploadImage = async () => {
    if (!image) return;
    console.log("업로드할 이미지:", image); // ✅ 업로드할 파일 정보 확인

    const formData = new FormData();
    formData.append("image", image);

    for (const pair of formData.entries()) {
      console.log("FormData 내용:", pair[0], pair[1]); // ✅ FormData에 이미지가 제대로 들어가는지 확인
    }

    try {
      const response = await fetch("/api/driveupload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        const fileUrl = data.fileUrl;
        setImageUrl((prevUrls) => [...prevUrls, fileUrl]);
        insertImageAtCursor(fileUrl); // ✅ 이미지 삽입 함수 호출
        console.log(fileUrl);
        console.log("업로드 성공:", data); // ✅ 업로드 성공 여부 확인
      } else {
        alert("이미지 업로드 실패");
        console.error("업로드 실패:", data);
      }
    } catch (error) {
      console.error("업로드 오류:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // content에서 blob: URL 제거
    const filteredContent = content.replace(/<img src="blob:[^"]+"[^>]*>/g, "");

    console.log("저장할 내용:", filteredContent);
    console.log("저장할 이미지 배열:", imageUrl);

    try {
      const response = await fetch("/api/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content: filteredContent,
          user_id: user?.id, // 로그인된 사용자 ID를 서버로 전달
          images: imageUrl, // 이미지 URL을 배열로 전달
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

  // ✅ 선택한 이미지 삭제 기능
  const removeSelectedImage = () => {
    if (selectedImage) {
      selectedImage.remove();
      setSelectedImage(null);
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

    if (!selectedText && style !== "hr") return; // 텍스트가 선택되지 않으면 <hr /> 삽입만 허용

    let span = range.commonAncestorContainer.parentElement as HTMLSpanElement;

    if (style === "hr") {
      // 수평선 추가
      const hr = document.createElement("hr");
      try {
        range.insertNode(hr); // 커서 위치에 <hr /> 삽입
      } catch (error) {
        console.warn("수평선 삽입 실패", error);
      }
    } else {
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

  const handleTextImageClick = () => {
    setShowTextColor(!showTextColor); // 토글 상태 변경
  };

  const handleBgImageClick = () => {
    setShowBgColor(!showBgColor); // 토글 상태 변경
  };

  // 수평선 추가 버튼 클릭 핸들러
  const handleInsertHr = () => {
    toggleStyle("hr", "", ""); // style 파라미터에 'hr'을 전달하여 <hr /> 삽입
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.titleCategoryContainer}>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className={styles.input}
            placeholder="제목을 입력해주세요"
          />
          <select
            value={category}
            onChange={handleCategoryChange}
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
        <div className={styles.editorContainer}>
          <div className={styles.toolbar}>
            <div className={styles.centered}>
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
              {imageSrc[0] && (
                <div onClick={handleTextImageClick}>
                  <Image
                    src={imageSrc[0]}
                    alt="text"
                    width={20}
                    height={20}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              {showTextColor && (
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
              )}
            </div>

            <div className={styles.centered}>
              {imageSrc[1] && (
                <div onClick={handleBgImageClick}>
                  <Image
                    src={imageSrc[1]}
                    alt="text-background"
                    width={24}
                    height={24}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              {showBgColor && (
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
              )}
            </div>

            <button
              type="button"
              onClick={() => toggleStyle("fontWeight", "bold", "normal")}
              className={styles.styleBtn}
            >
              {imageSrc[2] && (
                <Image
                  src={imageSrc[2]}
                  alt="bold"
                  width={20}
                  height={20}
                  style={{ objectFit: "cover" }}
                />
              )}
            </button>
            <button
              type="button"
              onClick={() => toggleStyle("fontStyle", "italic", "normal")}
              className={styles.styleBtn}
            >
              {imageSrc[3] && (
                <Image
                  src={imageSrc[3]}
                  alt="text"
                  width={20}
                  height={20}
                  style={{ objectFit: "cover" }}
                />
              )}
            </button>
            <button
              type="button"
              onClick={() => toggleStyle("textDecoration", "underline", "none")}
              className={styles.styleBtn}
            >
              {imageSrc[4] && (
                <Image
                  src={imageSrc[4]}
                  alt="underline"
                  width={20}
                  height={20}
                  style={{ objectFit: "cover" }}
                />
              )}
            </button>
            <button
              type="button"
              onClick={handleInsertHr} // 수평선 삽입
              className={styles.styleBtn}
            >
              ---
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <label htmlFor="file-input">
          {imageSrc[5] ? (
            <Image
              src={imageSrc[5]}
              alt="Selected"
              width={28}
              height={28}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div style={{ width: 200, height: 200, border: "1px solid #ccc" }}>
              이미지 선택
            </div>
          )}
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }} // input 숨기기
        />
        <button type="button" onClick={uploadImage}>
          이미지 업로드
        </button>
        <button type="button" onClick={removeSelectedImage}>
          이미지 삭제
        </button>
      </div>

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
