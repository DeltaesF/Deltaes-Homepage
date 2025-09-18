"use client";

import { useState } from "react";
import styles from "./Semina.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";
import Image from "next/image";
import Link from "next/link";

export default function Semina() {
  const [isOpen, setIsOpen] = useState(true);

  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "banner1_ksbtad",
  ]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생!</p>;
  if (!isOpen || !imageSrc1[0]) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <Link
          href="/main/pages/announcements/gkcAXnp85apQrW2uSDOm"
          className={styles.linkWrapper}
        >
          {imageSrc1[0] && (
            <Image
              src={imageSrc1[0]}
              alt="전자기기 및 반도체"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
            />
          )}
        </Link>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          ✕
        </button>
      </div>
    </div>
  );
}
