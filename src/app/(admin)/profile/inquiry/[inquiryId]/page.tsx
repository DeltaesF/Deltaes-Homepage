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
  userId: string;
};

export default function ChatRoom() {
  const { inquiryId } = useParams();

  console.log("inquiryId", inquiryId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [inquirerName, setInquirerName] = useState("");
  const { user } = useUser();
  const [errorMessage, setErrorMessage] = useState("");
  const [inquirerUserId, setInquirerUserId] = useState("");

  // 사용자 메시지 읽음 처리 함수
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
        console.log("🔥 messageRef 경로:", messageRef.path);
        return updateDoc(messageRef, { isRead: true });
      });

      await Promise.all(updatePromises);
    } catch {
      setErrorMessage("사용자 메시지 읽음 처리에 오류가 발생했습니다.");
    }
  };

  // 문의자의 이름을 불러오는 함수
  const fetchInquirerName = async () => {
    try {
      const docRef = doc(db, "inquiries", inquiryId as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setInquirerName(data.userName || "알 수 없음");
        setInquirerUserId(data.userId || ""); // 여기서 userId도 저장
      }
    } catch {
      setErrorMessage("문의자 이름을 불러오는 중 오류가 발생했습니다.");
    }
  };

  // 메시지 목록을 가져오는 함수
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
    } catch {
      setErrorMessage("메시지 목록을 불러오는 중 오류가 발생했습니다.");
    }
  };

  // 관리자 답변을 전송하는 함수
  const handleSendReply = async () => {
    if (!reply.trim() || !user) return;
    try {
      await addDoc(
        collection(db, "inquiries", inquiryId as string, "messages"),
        {
          userId: inquirerUserId,
          content: reply,
          sender: "admin",
          createdAt: serverTimestamp(),
        },
      );
      setReply("");
      fetchMessages();
    } catch {
      setErrorMessage("관리자 답변 중에 오류가 발생했습니다.");
    }
  };

  // 컴포넌트 로드 시 실행: 메시지, 이름 불러오기 + 읽음 처리
  useEffect(() => {
    if (inquiryId) {
      fetchMessages();
      fetchInquirerName();
      markMessagesAsRead();
    }
  }, [inquiryId]);

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

      <div>
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
      {errorMessage && (
        <div className={styles.errorContainer}>{errorMessage}</div>
      )}
    </div>
  );
}
