"use client";
import { useUser } from "@/app/context/UserContext";
import styles from "./page.module.css";

export default function Users() {
  const { users, errorMessage } = useUser();

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
            {users.map((user) => (
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
      {errorMessage && (
        <div className={styles.errorContainer}>{errorMessage}</div>
      )}
    </section>
  );
}
