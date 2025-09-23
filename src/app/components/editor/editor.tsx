"use client";

import React, { useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./editor.module.css";
import "../hr/hr";

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

  // 🖥️ 비디오 업로드 핸들러
  const videoHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "video/mp4");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/driveupload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        const fileId = data.fileId;
        const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;

        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection();

        if (editor && range) {
          // ✅ iframe으로 embed
          editor.clipboard.dangerouslyPasteHTML(
            range.index,
            `<iframe src="${previewUrl}" 
                   width="800" 
                   height="480" 
                   allow="autoplay" 
                   allowfullscreen></iframe>`,
          );
          editor.setSelection(range.index + 1, 0);
        }
      } catch (err) {
        console.error("비디오 업로드 실패:", err);
      }
    });
  };

  // 🧩 hr 핸들러 추가
  const insertHr = () => {
    const editor = quillRef.current?.getEditor();
    const range = editor?.getSelection();
    if (editor && range) {
      editor.insertEmbed(range.index, "hr", true);
      editor.setSelection(range.index + 1, 0);
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "hr"],
          [{ color: [] }, { background: [] }],
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
          hr: insertHr,
          video: videoHandler,
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
    "hr",
  ];

  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value || ""} // ✅ null 방지
        onChange={(content, delta, source, editor) => {
          onChange(editor.getHTML()); // ✅ HTML을 직접 넘겨야 스타일 유지됨
        }}
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
