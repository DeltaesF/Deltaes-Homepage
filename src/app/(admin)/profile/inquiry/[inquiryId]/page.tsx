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
  where,
  updateDoc,
} from "firebase/firestore";
import { useUser } from "@/app/context/UserContext";
import { useParams } from "next/navigation";
import { db } from "@/app/lib/firebase";

type Message = {
  id: string;
  content: string;
  sender: "user" | "admin";
  createdAt: Timestamp;
  isRead: boolean;
};

export default function ChatRoom() {
  const { inquiryId } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [inquirerName, setInquirerName] = useState("");
  const { user } = useUser();

  // ✅ 메시지 읽음 처리 함수
  const markMessagesAsRead = async () => {
    if (!inquiryId) return;
    try {
      const messagesRef = collection(
        db,
        "inquiries",
        inquiryId as string,
        "messages",
      );
      const q = query(
        messagesRef,
        where("sender", "==", "user"),
        where("isRead", "==", false),
      );
      const snapshot = await getDocs(q);

      const updatePromises = snapshot.docs.map((docSnap) => {
        const messageRef = doc(messagesRef, docSnap.id);
        return updateDoc(messageRef, { isRead: true });
      });

      await Promise.all(updatePromises);
    } catch (err) {
      console.error("메시지 읽음 처리 실패:", err);
    }
  };

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
      fetchInquirerName();
      markMessagesAsRead(); // ✅ 메시지 읽음 처리 실행
    }
  }, [inquiryId]);

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

  const handleSendReply = async () => {
    if (!reply.trim() || !user) return;
    try {
      await addDoc(
        collection(db, "inquiries", inquiryId as string, "messages"),
        {
          content: reply,
          sender: "admin",
          createdAt: serverTimestamp(),
          isRead: false, // ✅ 추가: 유저가 이 답장을 안 읽은 상태이므로 false
        },
      );
      setReply("");
      fetchMessages();
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
