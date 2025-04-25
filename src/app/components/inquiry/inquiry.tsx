"use client";

import { useRef, useState } from "react";
import styles from "./inquiry.module.css";
import { useUser } from "@/app/context/UserContext";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  FieldValue,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";

type Message = {
  id: number;
  content: string;
  sender: "user" | "admin";
  userId: string;
  createdAt: FieldValue;
  email: string;
  userName: string;
};
export default function Inquiry() {
  const [showMessenger, setShowMessenger] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [success, setSuccess] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  const toggleMessenger = () => {
    // user가 null이 아니고, 유효한 로그인 정보인지 확인
    if (user && user.uid) {
      setShowMessenger((prev) => !prev);
    } else {
      alert("로그인 후 사용해주세요.");
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !user) return;

    try {
      const roomId = user.uid;
      const roomRef = doc(db, "inquiries", roomId);
      const roomSnap = await getDoc(roomRef);

      // 1️⃣ 사용자 정보가 없다면 inquiries 문서 생성
      if (!roomSnap.exists()) {
        await setDoc(roomRef, {
          userId: user.uid,
          userName: user.userName,
          email: user.email,
          createdAt: serverTimestamp(),
        });
      }

      // 2️⃣ 메시지를 messages 하위 컬렉션에 추가
      const messagesRef = collection(db, "inquiries", roomId, "messages");
      await addDoc(messagesRef, {
        content: message,
        sender: "user",
        createdAt: serverTimestamp(),
      });

      // 3️⃣ 프론트에 표시할 임시 메시지 객체
      const newMessage = {
        id: Date.now(),
        email: user.email,
        userName: user.userName,
        content: message,
        sender: "user" as const,
        userId: user.uid,
        createdAt: serverTimestamp(),
      };

      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("메시지 전송 실패:", error);
    }
  };

  return (
    <>
      <div className={styles.inquiryContainer} onClick={toggleMessenger}>
        <div className={styles.inquiry}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(255, 255, 255)"
          >
            <path
              d="M21.133 16.933a1.4 1.4 0 11.001-2.8 1.4 1.4 0 010 2.8m-4.667 0a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8m-5.6 0a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8m18.904-3.656c-1.013-5.655-5.753-10.22-11.528-11.105-4.343-.667-8.642.627-11.807 3.547-3.168 2.917-4.763 7.043-4.38 11.318.59 6.582 6.08 11.952 12.768 12.487 1.153.095 2.303.05 3.428-.13a14.12 14.12 0 002.428-.612.59.59 0 01.364-.006l3.714 1.167c.785.246 1.588-.331 1.588-1.144l-.002-3.517c0-.17.086-.301.157-.38a14.028 14.028 0 001.58-2.147c1.705-2.862 2.29-6.14 1.69-9.478"
              fill="currentColor"
              fillRule="nonzero"
            />
          </svg>
          <h3>실시간 문의</h3>
        </div>
      </div>

      {showMessenger && (
        <div className={styles.messengerBox}>
          <div className={styles.messengerHeader}>문의하기</div>
          <div className={styles.messageList}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.messageBubble} ${
                  msg.sender === "user"
                    ? styles.userMessage
                    : styles.adminMessage
                }`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={scrollRef} />
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="메시지를 입력하세요"
            />
            <button onClick={handleSendMessage}>보내기</button>
          </div>
          {/* ✅ 성공 알림 */}
          {success && (
            <div className={styles.successAlert}>
              메시지가 성공적으로 전송되었습니다!
            </div>
          )}
        </div>
      )}
    </>
  );
}
