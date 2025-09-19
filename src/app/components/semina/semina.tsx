"use client";

import { useState } from "react";
import styles from "./semina.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";
import Image from "next/image";

export default function Semina() {
  const [isOpen, setIsOpen] = useState(true);
  const [showInvitation, setShowInvitation] = useState(false);

  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "banner1_ksbtad",
    "ADT_rxslsf",
  ]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생!</p>;
  if (!isOpen || !imageSrc1[0]) return null;

  return (
    <>
      {/* 1️⃣ 첫 번째 배너 팝업 */}
      {!showInvitation && (
        <div className={styles.overlay}>
          <div className={styles.bannerPopup}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div
              className={styles.linkWrapper}
              onClick={() => setShowInvitation(true)}
            >
              <Image
                src={imageSrc1[0]}
                alt="행사 배너"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

      {/* 2️⃣ 두 번째 초대장 팝업 */}
      {showInvitation && (
        <div className={styles.overlay}>
          <div className={styles.invitationPopup}>
            <button
              className={styles.closeBtn}
              onClick={() => setShowInvitation(false)}
            >
              ✕
            </button>

            {/* 초대장 이미지 전체 표시 */}
            <div className={styles.invitationContent}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe8pGnXHMG6nnz9stqp5ZYr2mKfuAyhiiDTTmGWFM-NaKIydQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                {imageSrc1[1] && (
                  <Image
                    src={imageSrc1[1]}
                    alt="행사 초대장"
                    width={900} // 원하는 최대 너비
                    height={0} // 자동 비율
                    style={{ width: "100%", height: "auto" }}
                    unoptimized
                  />
                )}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
