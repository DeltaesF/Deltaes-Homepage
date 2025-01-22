"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import useFetchImages from "@/app/hooks/useFetchImages";

export default function Company() {
  const { imageSrc, error } = useFetchImages([
    "adt1.jpg",
    "adt2.jpg",
    "adt3.jpg",
  ]);

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
