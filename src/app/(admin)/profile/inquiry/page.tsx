"use client";

import styles from "./page.module.css";
import { db } from "@/app/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Inquiry {
  id: string;
  userId: string;
  userName: string;
  email: string;
  createdAt: Timestamp;
  previewMessage?: string;
}

export default function InquiryList() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // 모든 문의 목록을 가져오고 각 문의에 마지막 메시지를 미리보기로 추가하는 함수
    const fetchInquiriesWithPreview = async () => {
      try {
        const inquirySnapshot = await getDocs(collection(db, "inquiries"));

        const inquiryData = await Promise.all(
          inquirySnapshot.docs.map(async (inquiryDoc) => {
            const inquiry = {
              id: inquiryDoc.id,
              ...(inquiryDoc.data() as Omit<
                Inquiry,
                "id" | "previewMessage" | "createdAt"
              >),
            };

            const messagesRef = collection(
              db,
              "inquiries",
              inquiryDoc.id,
              "messages",
            );

            // 가장 마지막 메시지를 가져오는 쿼리
            const latestMessageQuery = query(
              messagesRef,
              orderBy("createdAt", "desc"),
              limit(1),
            );
            const messageSnapshot = await getDocs(latestMessageQuery);

            const lastMessage = messageSnapshot.docs[0];
            const previewMessage =
              lastMessage?.data().content || "(메시지 없음)";
            const latestCreatedAt =
              lastMessage?.data().createdAt || inquiryDoc.data().createdAt;

            return {
              ...inquiry,
              previewMessage,
              createdAt: latestCreatedAt, // 🔁 여기서 마지막 메시지의 시간으로 등록일 대체
            };
          }),
        );

        // ✅ 최신 메시지 시간 기준 내림차순 정렬
        inquiryData.sort(
          (a, b) => b.createdAt.toMillis() - a.createdAt.toMillis(),
        );

        setInquiries(inquiryData);
        setInquiries(inquiryData);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
        setErrorMessage("문의 목록을 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchInquiriesWithPreview();
  }, []);

  return (
    <section>
      <article>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>이름</th>
              <th>이메일</th>
              <th>내용</th>
              <th>최근대화</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id}>
                <td>{inquiry.userName}</td>
                <td>{inquiry.email}</td>
                <td>
                  <Link
                    href={`/profile/inquiry/${inquiry.id}`}
                    className={styles.postLink}
                  >
                    {inquiry.previewMessage}
                  </Link>
                </td>
                <td>
                  {inquiry.createdAt.toDate().toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
      {errorMessage && (
        <div className={styles.errorContainer}>{errorMessage}</div>
      )}
    </section>
  );
}
