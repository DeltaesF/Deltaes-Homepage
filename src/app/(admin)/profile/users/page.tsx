import { useAuth } from "@/app/context/AuthContext";
import styles from "./page.module.css";

export default function Users() {
  const { user } = useAuth();

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>회원 상태</th>
            <th>최근 활동</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user?.username}</td>
            <td>{user?.email}</td>
            <td>{user?.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
