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

  useEffect(() => {
    const fetchInquiriesWithPreview = async () => {
      try {
        const inquirySnapshot = await getDocs(collection(db, "inquiries"));

        const inquiryData = await Promise.all(
          inquirySnapshot.docs.map(async (inquiryDoc) => {
            const inquiry = {
              id: inquiryDoc.id,
              ...(inquiryDoc.data() as Omit<Inquiry, "id" | "previewMessage">),
            };

            // 메시지 중 가장 오래된 하나 가져오기
            const messagesRef = collection(
              db,
              "inquiries",
              inquiryDoc.id,
              "messages",
            );
            const messageQuery = query(
              messagesRef,
              orderBy("createdAt"),
              limit(1),
            );
            const messageSnapshot = await getDocs(messageQuery);

            const previewMessage =
              messageSnapshot.docs[0]?.data().content || "(메시지 없음)";
            return { ...inquiry, previewMessage };
          }),
        );

        setInquiries(inquiryData);
      } catch (error) {
        console.error("문의 목록 불러오기 실패:", error);
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
              <th>등록일</th>
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
    </section>
  );
}
