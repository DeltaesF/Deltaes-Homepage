import { useUser } from "@/app/context/UserContext";
import styles from "./page.module.css";

export default function Users() {
  const { users } = useUser();

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
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.role === "admin" ? "관리자" : "일반 회원"}</td>
                <td>
                  {user.last_login
                    ? new Date(user.last_login).toLocaleDateString("ko-KR", {
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
    </section>
  );
}
