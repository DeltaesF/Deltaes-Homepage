"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Company() {
  const [imageSrc, setImageSrc] = useState<string[] | null[]>([null]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const imageNames = ["adt1.jpg", "adt2.jpg", "adt3.jpg"];

        // 각 이미지를 fetch하고 Blob URL로 변환
        const imagePromises = imageNames.map(async (imageName) => {
          const res = await fetch(`/api/getftp/${imageName}`);
          if (!res.ok) throw new Error(`Failed to load ${imageName}`);
          const imageBlob = await res.blob(); // 응답에서 Blob 형태로 이미지를 받아옵니다.
          return URL.createObjectURL(imageBlob); // 상태를 업데이트하여 이미지 URL을 설정합니다.
        });

        // 모든 이미지 요청을 동시에 처리
        const imageUrls = await Promise.all(imagePromises);
        setImageSrc(imageUrls); // 모든 이미지를 상태에 설정
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
      {imageSrc[0] && (
        <div>
          <Image src={imageSrc[0]} alt="소비자" width={300} height={300} />
        </div>
      )}
      {imageSrc[1] && (
        <div>
          <Image src={imageSrc[1]} alt="소비자" width={300} height={300} />
        </div>
      )}
      {imageSrc[2] && (
        <div>
          <Image src={imageSrc[2]} alt="소비자" width={300} height={300} />
        </div>
      )}
    </div>
  );
}
