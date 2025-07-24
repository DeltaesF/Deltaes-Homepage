"use client";

import { useEffect, useRef, useState } from "react";
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
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";

type Message = {
  id: string;
  content: string;
  sender: "user" | "admin" | "guest";
  userId: string;
  createdAt: FieldValue;
  email: string;
  userName: string;
  isRead: boolean;
};
export default function Inquiry() {
  const [showMessenger, setShowMessenger] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [success, setSuccess] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [userInfoComplete, setUserInfoComplete] = useState(false);

  const toggleMessenger = () => {
    // 로그인 여부에 상관없이 메시지 창을 열 수 있게 함
    setShowMessenger((prev) => !prev);
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    try {
      const isGuest = !user;

      let userId: string;
      let email: string;
      let userName: string;

      if (isGuest) {
        if (!guestName || !guestEmail || !company || !phone) {
          alert("이름과 이메일을 모두 입력해주세요.");
          return;
        }

        // guest ID는 localStorage에 저장하여 재사용
        const savedGuestId = localStorage.getItem("guestId");
        if (savedGuestId) {
          userId = savedGuestId;
        } else {
          userId = `guest_${Date.now()}`;
          localStorage.setItem("guestId", userId);
        }
        email = guestEmail;
        userName = guestName;
      } else {
        userId = user.uid;
        email = user.email;
        userName = user.userName;
      }

      if (!company.trim() || !phone.trim()) {
        alert("회사명/직책과 핸드폰 번호를 입력해주세요.");
        return;
      }

      const roomRef = doc(db, "inquiries", userId);
      const roomSnap = await getDoc(roomRef);

      if (!roomSnap.exists()) {
        await setDoc(roomRef, {
          userId,
          userName,
          email,
          company,
          phone,
          createdAt: serverTimestamp(),
          isRead: false,
          infoSubmitted: true,
        });
      }
      const messagesRef = collection(db, "inquiries", userId, "messages");
      await addDoc(messagesRef, {
        content: message,
        sender: isGuest ? "guest" : "user",
        createdAt: serverTimestamp(),
        isRead: false,
        userId,
      });

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          email,
          userName,
          content: message,
          sender: isGuest ? "guest" : "user",
          userId,
          createdAt: serverTimestamp(),
          isRead: false,
        },
      ]);

      setMessage("");
      setSuccess(true);
      setUserInfoComplete(true);
      setTimeout(() => setSuccess(false), 3000);

      // 이메일 알림 발송 기능
      await fetch("/api/sendInquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email,
          message,
          company,
          phone,
        }),
      });
    } catch (error) {
      console.error("메시지 전송 실패:", error);
    }
  };

  // 페이지 새로고침 시 메시지 불러오기
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        let userId: string;

        if (user) {
          userId = user.uid;
        } else {
          const guestId = localStorage.getItem("guestId");
          if (!guestId) return; // guest ID 없으면 리턴
          userId = guestId;
        }

        const messagesRef = collection(db, "inquiries", userId, "messages");
        const q = query(messagesRef, orderBy("createdAt", "asc"));

        const querySnapshot = await getDocs(q);
        const loadedMessages: Message[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            content: data.content,
            sender: data.sender,
            userId: data.userId,
            createdAt: data.createdAt,
            email: data.email,
            userName: data.userName,
            isRead: data.isRead,
          };
        });

        setMessages(loadedMessages); // 불러온 메시지 상태에 저장
        const roomRef = doc(db, "inquiries", userId);
        const roomSnap = await getDoc(roomRef);
        if (roomSnap.exists()) {
          const roomData = roomSnap.data();
          if (roomData.infoSubmitted) {
            setUserInfoComplete(true); // ✅ 입력창 숨기기
          }
        }
      } catch (error) {
        console.error("메시지 불러오기 실패:", error);
      }
    };

    fetchMessages();
  }, [user]); // user 상태가 변경될 때마다 호출

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
          {!user && !userInfoComplete && (
            <div className={styles.guestInfoBox}>
              <p className={styles.guestNotice}>
                비로그인 사용자입니다. <br />
                <strong>이름</strong>, <strong>이메일</strong>,{" "}
                <strong>회사명/직책</strong>, <strong>핸드폰 번호</strong>를
                입력해주세요.
              </p>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="이름을 입력하세요"
              />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="회사명 / 직책을 입력하세요"
              />
              <input
                type="email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="핸드폰 번호를 입력하세요"
              />
            </div>
          )}

          {user && !userInfoComplete && (
            <div className={styles.guestInfoBox}>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="회사명 / 직책을 입력하세요"
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="핸드폰 번호를 입력하세요"
              />
            </div>
          )}

          <div className={styles.messageList}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.messageBubble} ${
                  msg.sender === "admin"
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
