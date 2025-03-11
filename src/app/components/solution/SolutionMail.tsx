"use client";

import { useRef, useState } from "react";
import styles from "./SolutionMail.module.css";
import emailjs from "emailjs-com";

export default function SolutionMail() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current, // ✅ form 요소를 직접 사용 (formData 불필요)
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      )
      .then(
        (result) => {
          alert("이메일 전송에 성공했습니다.");
          formRef.current?.reset(); // ✅ 폼 초기화 (별도 상태 관리 필요 없음)
        },
        (error) => {
          alert("이메일 전송에 실패했습니다.");
        },
      );
  };

  return (
    <div className={styles.solutionMail}>
      <form ref={formRef} onSubmit={sendEmail} className={styles.wrapper}>
        <h2>솔루션 문의</h2>
        <div>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="성함"
          />
          <input
            type="text"
            name="company"
            className={styles.input}
            placeholder="소속/직함"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="이메일"
          />
          <input
            type="tel"
            name="phone"
            className={styles.input}
            placeholder="전화번호"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="메시지를 입력하세요."
            className={styles.content}
          ></textarea>
        </div>
        <button className={styles.btn}>제출</button>
      </form>
    </div>
  );
}
