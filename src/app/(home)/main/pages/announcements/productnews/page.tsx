"use client";

import { useEffect, useState } from "react";

export default function Productnews() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await fetch("/api/wixToken");
        const data = await res.json();

        console.log("WIX 블로그 데이터:", data);

        // API 응답 형식에 맞게 수정 (예: data.posts가 배열인지 확인)
        setPosts(data.posts || []);
      } catch (err) {
        console.error("API 호출 오류:", err);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h1>WIX 블로그 글 목록</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </li>
          ))
        ) : (
          <p>블로그 글을 불러오는 중...</p>
        )}
      </ul>
    </div>
  );
}
