// app/api/get-access-token/route.js

export async function GET() {
  const url = "https://www.wixapis.com/oauth/access";

  const requestBody = {
    client_id: "efa4e5af-92aa-4295-a532-b7104f04291c", // WIX에서 받은 Client ID
    grant_type: "client_credentials",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 형식으로 요청
      },
      body: JSON.stringify(requestBody), // Body에 요청 데이터 포함
    });

    const data = await response.json();

    if (data.access_token) {
      console.log("Access Token:", data.access_token); // 토큰 출력
      return new Response(JSON.stringify({ accessToken: data.access_token }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "Failed to get token" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching access token:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
