"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  Timestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { useUser } from "@/app/context/UserContext";
import { useParams } from "next/navigation";
import { db } from "@/app/lib/firebase";

type Message = {
  id: string;
  content: string;
  sender: "user" | "admin";
  createdAt: Timestamp;
};

export default function ChatRoom() {
  const { inquiryId } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [inquirerName, setInquirerName] = useState("");
  const { user } = useUser();

  console.log(inquiryId);
  console.log(inquirerName);

  const fetchInquirerName = async () => {
    try {
      const docRef = doc(db, "inquiries", inquiryId as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setInquirerName(data.userName || "알 수 없음");
      }
    } catch (err) {
      console.error("문의자 이름 불러오기 실패:", err);
    }
  };

  useEffect(() => {
    if (inquiryId) {
      fetchMessages();
      fetchInquirerName(); // 🔹 추가
    }
  }, [inquiryId]);

  // 🔹 메시지 불러오기 (한 번만)
  const fetchMessages = async () => {
    try {
      const q = query(
        collection(db, "inquiries", inquiryId as string, "messages"),
        orderBy("createdAt", "asc"),
      );
      const snapshot = await getDocs(q);
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
    } catch (err) {
      console.error("메시지 불러오기 실패:", err);
    }
  };

  useEffect(() => {
    if (inquiryId) {
      fetchMessages();
    }
  }, [inquiryId]);

  // 🔹 관리자 답변 전송
  const handleSendReply = async () => {
    if (!reply.trim() || !user) return;
    try {
      await addDoc(
        collection(db, "inquiries", inquiryId as string, "messages"),
        {
          content: reply,
          sender: "admin",
          createdAt: serverTimestamp(),
        },
      );
      setReply("");
      fetchMessages(); // 메시지 다시 불러오기
    } catch (error) {
      console.error("답변 전송 실패:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>문의 채팅 {inquirerName}</h2>

      <div className={styles.chatBox}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender === "admin" ? styles.messageAdmin : styles.messageUser
            }
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button onClick={fetchMessages} className={styles.refreshButton}>
          🔄 새로고침
        </button>
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="관리자 답변 입력..."
          className={styles.input}
        />
        <button onClick={handleSendReply} className={styles.button}>
          전송
        </button>
      </div>
    </div>
  );
}
