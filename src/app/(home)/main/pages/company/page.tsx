"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Company() {
  // const { imageSrc, error } = useFetchImages([
  //   "adt1.jpg",
  //   "adt2.jpg",
  //   "adt3.jpg",
  // ]);

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("파일을 선택하세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/drive", {
        method: "POST",
        body: formData, // 🔹 Content-Type 자동 설정 (따로 지정하면 안 됨)
      });

      const data = await response.json();
      console.log("📌 Upload response:", data); // 📌 응답 데이터 디버깅

      if (response.ok) {
        setMessage(`파일 업로드 성공! File ID: ${data.fileId}`);
      } else {
        setMessage(`업로드 실패: ${data.error}`);
      }
    } catch (error) {
      console.error("❌ Upload error:", error);
      setMessage("업로드 중 오류 발생");
    }
  };

  const [files, setFiles] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    fetch("/api/drive/list")
      .then((res) => res.json())
      .then((data) => setFiles(data.files));
  }, []);

  return (
    // <div>
    //   {imageSrc[0] && (
    //     <div>
    //       <Image src={imageSrc[0]} alt="소비자" width={300} height={300} />
    //     </div>
    //   )}
    //   {imageSrc[1] && (
    //     <div>
    //       <Image src={imageSrc[1]} alt="소비자" width={300} height={300} />
    //     </div>
    //   )}
    //   {imageSrc[2] && (
    //     <div>
    //       <Image src={imageSrc[2]} alt="소비자" width={300} height={300} />
    //     </div>
    //   )}
    // </div>
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Google Drive 파일 업로드</h1>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        업로드
      </button>
      {message && <p className="mt-2">{message}</p>}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {files.length > 0 ? (
          files.map((file) => (
            <Image
              key={file.id}
              src={`https://drive.google.com/uc?id=${file.id}`}
              alt={file.name}
              width={200}
              height={200}
            />
          ))
        ) : (
          <p>이미지를 불러오는 중...</p>
        )}
      </div>
    </div>
  );
}
