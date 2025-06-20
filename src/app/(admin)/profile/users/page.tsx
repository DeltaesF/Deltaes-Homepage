"use client";
import { useUser } from "@/app/context/UserContext";
import styles from "./page.module.css";
import { useState } from "react";

export default function Users() {
  const { users, errorMessage } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 15;

  const startIndex = (currentPage - 1) * userPerPage;
  const endIndex = startIndex + userPerPage;
  const currentUsers = users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / userPerPage);

  return (
    <section>
      <article>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>이름</th>
              <th>이메일</th>
              <th>연락처</th>
              <th>회원 상태</th>
              <th>최근 활동</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.uid}>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.role === "admin" ? "관리자" : "일반 회원"}</td>
                <td>
                  {user.lastLogin
                    ? new Date(user.lastLogin).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          이전
        </button>
        <span className={styles.pageInfo}>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          다음
        </button>
      </div>

      {errorMessage && (
        <div className={styles.errorContainer}>{errorMessage}</div>
      )}
    </section>
  );
}
