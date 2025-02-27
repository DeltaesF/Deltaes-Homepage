// utils/wixApi.ts
export async function getBlogPosts() {
  console.log("Making API request to Wix...");
  const res = await fetch("https://www.wixapis.com/blog/v1/blog/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.WIX_API_TOKEN}`, // 환경 변수에 API 토큰을 저장
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const data = await res.json();
  console.log("Wix API Response:", data); // API 응답 확인
  return data;
}
