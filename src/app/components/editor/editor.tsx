"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styles from "./editor.module.css";

// ✅ SSR(서버사이드 렌더링) 비활성화 설정
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 제목 크기
        [{ font: [] }], // 폰트 종류
        [{ list: "ordered" }, { list: "bullet" }], // 번호 목록, 불릿 목록
        ["bold", "italic", "underline", "strike"], // 글씨 굵게, 기울기, 밑줄, 취소선
        [{ color: [] }, { background: [] }], // 글자색, 배경색
        [{ align: [] }], // 정렬
        ["blockquote", "code-block"], // 인용구, 코드 블록
        ["link", "image", "video"], // 링크, 이미지, 비디오 추가
        ["clean"], // 서식 초기화
      ],
    },
  };

  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
      />
    </div>
  );
}
