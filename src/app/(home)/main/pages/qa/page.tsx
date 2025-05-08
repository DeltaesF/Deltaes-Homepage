"use client";

import { useUser } from "@/app/context/UserContext";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";

type Question = {
  id: string;
  title: string;
  content: string;
  userName: string;
  createdAt: string;
  answer?: {
    content: string;
    createdAt: string;
  } | null;
};

export default function QA() {
  const { user } = useUser();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [answerInputs, setAnswerInputs] = useState<{ [key: string]: string }>(
    {},
  );
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 7;

  const indexOfLast = currentPage * questionsPerPage;
  const indexOfFirst = indexOfLast - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const isAdmin = user?.role === "admin";

  // 질문 목록 + 각 질문에 대한 답변 불러오기
  const fetchQuestions = async () => {
    try {
      const q = query(
        collection(db, "questions"),
        orderBy("createdAt", "desc"),
      );
      const querySnapshot = await getDocs(q);

      const loadedQuestions: Question[] = await Promise.all(
        querySnapshot.docs.map(async (docSnap) => {
          const data = docSnap.data();
          const questionId = docSnap.id;

          // 답변이 있는지 확인
          const answerSnapshot = await getDocs(
            collection(db, "questions", questionId, "answers"),
          );

          let answer = null;
          if (!answerSnapshot.empty) {
            const a = answerSnapshot.docs[0].data();
            answer = {
              content: a.content,
              createdAt: a.createdAt.toDate().toLocaleString(),
            };
          }

          return {
            id: questionId,
            title: data.title,
            content: data.content,
            userName: data.userName,
            createdAt: data.createdAt.toDate().toLocaleString(),
            answer,
          };
        }),
      );

      setQuestions(loadedQuestions);
    } catch (error) {
      console.error("질문을 불러오는 데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // 질문 등록
  const handleSubmit = async () => {
    if (!user) return alert("로그인이 필요합니다.");
    if (!title.trim() || !content.trim())
      return alert("모든 항목을 입력하세요.");

    try {
      await addDoc(collection(db, "questions"), {
        title,
        content,
        userName: user.userName,
        uid: user.uid,
        createdAt: Timestamp.now(),
      });

      setTitle("");
      setContent("");
      fetchQuestions();
      alert("질문이 등록되었습니다.");
    } catch (error) {
      console.error("질문 등록에 실패했습니다:", error);
      alert("질문 등록 중 오류가 발생했습니다.");
    }
  };

  // 관리자: 답변 등록
  const handleAnswerSubmit = async (questionId: string) => {
    const answerText = answerInputs[questionId];
    if (!answerText.trim()) return alert("답변 내용을 입력하세요.");

    try {
      await addDoc(collection(db, "questions", questionId, "answers"), {
        content: answerText,
        createdAt: Timestamp.now(),
        adminUid: user?.uid,
      });

      setAnswerInputs((prev) => ({ ...prev, [questionId]: "" }));
      fetchQuestions();
      alert("답변이 등록되었습니다.");
    } catch (error) {
      console.error("답변 등록 실패:", error);
      alert("답변 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={styles.qaContainer}>
      <h1 className={styles.qaTitle}>Q&A 게시판</h1>

      {user ? (
        <div className={styles.qaForm}>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.qaInput}
          />
          <textarea
            placeholder="질문 내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.qaTextarea}
          />
          <button onClick={handleSubmit} className={styles.qaButton}>
            질문 등록
          </button>
        </div>
      ) : (
        <p className={styles.qaLoginMessage}>
          질문을 등록하려면 로그인해주세요.
        </p>
      )}

      <div className={styles.qaList}>
        <h2 className={styles.qaSubtitle}>질문 목록</h2>
        {questions.length === 0 ? (
          <p>등록된 질문이 없습니다.</p>
        ) : (
          <ul>
            {currentQuestions.map((q) => (
              <li key={q.id} className={styles.qaItem}>
                <strong>{q.title}</strong>
                <p>{q.content}</p>
                <div className={styles.qaMeta}>
                  작성자: {q.userName} | 작성일: {q.createdAt}
                </div>

                {/* 답변 표시 */}
                {q.answer && (
                  <div className={styles.qaAnswer}>
                    <strong>관리자:</strong> {q.answer.content}
                    <div className={styles.qaMeta}>
                      답변일: {q.answer.createdAt}
                    </div>
                  </div>
                )}

                {/* 관리자만 답변 입력 가능, 이미 답변 있으면 숨김 */}
                {isAdmin && !q.answer && (
                  <div className={styles.qaAnswerForm}>
                    <textarea
                      placeholder="답변을 입력하세요"
                      value={answerInputs[q.id] || ""}
                      onChange={(e) =>
                        setAnswerInputs((prev) => ({
                          ...prev,
                          [q.id]: e.target.value,
                        }))
                      }
                      className={styles.qaTextarea}
                    />
                    <button
                      onClick={() => handleAnswerSubmit(q.id)}
                      className={styles.qaButton}
                    >
                      답변 등록
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.qaPagination}>
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={`${styles.qaPageButton} ${
              num === currentPage ? styles.qaActivePage : ""
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
