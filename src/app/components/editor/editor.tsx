"use client";

import React, { useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./editor.module.css";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const quillRef = useRef<ReactQuill | null>(null);

  // 🖼️ 이미지 업로드 핸들러
  const imageHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/driveupload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const imageUrl = data.fileUrl;
      console.log("imageUrl");

      const editor = quillRef.current?.getEditor();
      const range = editor?.getSelection();

      if (editor && range) {
        editor.insertEmbed(range.index, "image", imageUrl);
        editor.setSelection(range.index + 1, 0);
      } else {
        alert("에디터에 커서를 먼저 클릭해 주세요!");
      }
    } catch (err) {
      console.error("이미지 업로드 실패:", err);
    }
  };

  // 📎 파일 업로드 핸들러 (이미지 포함 감지)
  const fileHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute(
      "accept",
      ".pdf,.doc,.docx,.xls,.xlsx,.hwp,.ppt,.pptx,.txt,image/*",
    );
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;

      // 👉 이미지인 경우 imageHandler로 처리
      if (file.type.startsWith("image/")) {
        await imageHandler(file);
        return;
      }

      // 📄 일반 파일 업로드 처리
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/driveupload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        const fileUrl = data.fileUrl;
        console.log("fileUrl");

        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection();

        if (editor && range) {
          editor.insertText(range.index, file.name, "link", fileUrl);
          editor.setSelection(range.index + file.name.length, 0);
        } else {
          alert("에디터에 커서를 먼저 클릭해 주세요!");
        }
      } catch (err) {
        console.error("파일 업로드 실패:", err);
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          [{ font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["blockquote", "code-block"],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: () => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.addEventListener("change", () => {
              const file = input.files?.[0];
              if (file) {
                imageHandler(file);
              }
            });
          },
        },
      },
    }),
    [],
  );

  const formats = [
    "header",
    "font",
    "list",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
    "video",
  ];

  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
      <button
        type="button"
        onClick={fileHandler}
        className={styles.uploadButton}
      >
        📎 파일 업로드
      </button>
    </div>
  );
}
