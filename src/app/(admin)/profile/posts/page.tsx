"use client";

import { usePostsList } from "@/app/context/PostsListContext";
import styles from "./page.module.css";

export default function Posts() {
  const { postsList, error, fetchPostsList } = usePostsList();

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>게시글</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.username}</td>
              <td>{post.title}</td>
              <td>
                {new Date(post.created_at).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td>
                <div className={styles.views}>
                  <svg
                    viewBox="0 0 18 18"
                    fill="currentColor"
                    width="18"
                    height="18"
                  >
                    <path d="M9.5,15 C6.83333333,15 4.66666667,13.1666667 3,9.5 C4.66666667,5.83333333 6.83333333,4 9.5,4 C12.1666667,4 14.3333333,5.83333333 16,9.5 C14.3333333,13.1666667 12.1666667,15 9.5,15 Z M9.5,5 C7.37890843,5 5.58760092,6.44000147 4.10454935,9.5 C5.58760092,12.5599985 7.37890843,14 9.5,14 C11.6210916,14 13.4123991,12.5599985 14.8954507,9.5 C13.4123991,6.44000147 11.6210916,5 9.5,5 Z M9.5,12 C8.11928813,12 7,10.8807119 7,9.5 C7,8.11928813 8.11928813,7 9.5,7 C10.8807119,7 12,8.11928813 12,9.5 C12,10.8807119 10.8807119,12 9.5,12 Z M9.5,11 C10.3284271,11 11,10.3284271 11,9.5 C11,8.67157288 10.3284271,8 9.5,8 C8.67157288,8 8,8.67157288 8,9.5 C8,10.3284271 8.67157288,11 9.5,11 Z"></path>
                  </svg>
                  {post.views}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
