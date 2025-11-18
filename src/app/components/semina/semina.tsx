"use client";

import { useEffect, useState } from "react";
import styles from "./semina.module.css";
import useFetchCloudinaryImages from "@/app/hooks/useFetchCloudinaryImages";
import Image from "next/image";
import ReactDOM from "react-dom";
import Link from "next/link";

export default function Semina() {
  const [isOpen, setIsOpen] = useState(true);
  const [showInvitation, setShowInvitation] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { imageSrc1, loading, error } = useFetchCloudinaryImages([
    "11banner1_w3jxik",
    "26delta_seminar_invitation_1103_1_page-0002_e59pz9",
  ]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생!</p>;
  if (!isOpen || !imageSrc1[0]) return null;

  // 👈 1. portal-root 요소를 변수에 저장
  const portalRoot = document.getElementById("portal-root");

  // 👈 2. portalRoot가 존재하는지 반드시 확인!
  if (!portalRoot) {
    // 만약 portal-root div가 없다면 에러를 방지하기 위해 null을 반환
    return null;
  }

  return ReactDOM.createPortal(
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
              <Link href="/semina">
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
              </Link>
            </div>
          </div>
        </div>
      )}
    </>,
    portalRoot,
  );
}
