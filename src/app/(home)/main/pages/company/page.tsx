"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Company() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch("/api/getftp/adt1.jpg"); // API 경로에 맞게 변경
        if (!res.ok) {
          throw new Error("Failed to load image");
        }

        const imageBlob = await res.blob(); // 응답에서 Blob 형태로 이미지를 받아옵니다.
        const imageUrl = URL.createObjectURL(imageBlob); // 상태를 업데이트하여 이미지 URL을 설정합니다.
        setImageSrc(imageUrl);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    }

    fetchImage();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Fetched Image</h1>
      {imageSrc && (
        <Image src={imageSrc} alt="Fetched from FTP" width={500} height={500} />
      )}
    </div>
  );
}
