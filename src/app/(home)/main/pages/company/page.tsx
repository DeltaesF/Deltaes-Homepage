"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Company() {
  const imageSlice = [
    "/images/timapulse3.jpg",
    "/images/timapulse4.jpg",
    "/images/timapulse5.jpg",
  ];

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
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
        style={{ width: "450px", height: "220px" }}
      >
        {imageSlice.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={450}
              height={220}
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1>Fetched Image</h1>
      {imageSrc && (
        <Image src={imageSrc} alt="Fetched from FTP" width={500} height={500} />
      )}
    </div>
  );
}
