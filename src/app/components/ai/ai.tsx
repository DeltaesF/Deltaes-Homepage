"use client";
import { useRef, useState } from "react";
import styles from "./ai.module.css";

export default function Ai() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAi, setShowAi] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendPrompt = async () => {
    const res = await fetch("/api/deepseek", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  const toggleAi = () => {
    setShowAi((prev) => !prev);
  };

  return (
    <>
      <div className={styles.aiContainer} onClick={toggleAi}>
        <div className={styles.ai}>
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
          <h3>챗봇</h3>
        </div>
      </div>
      {showAi && (
        <div className={styles.aiBox}>
          <h1 className={styles.aiHeader}>챗봇</h1>
          <div className={styles.messageList}>
            {/* 질문 메시지 */}
            {prompt && (
              <div className={`${styles.messageBubble} ${styles.userMessage}`}>
                {prompt}
              </div>
            )}

            {/* 응답 메시지 */}
            {answer && (
              <div className={`${styles.messageBubble} ${styles.adminMessage}`}>
                {answer}
              </div>
            )}

            <div ref={scrollRef} />
          </div>

          {/* 입력창 영역 */}
          <div className={styles.inputArea}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="무엇이든 물어보세요"
            />
            <button onClick={sendPrompt}>보내기</button>
          </div>
        </div>
      )}
    </>
  );
}
