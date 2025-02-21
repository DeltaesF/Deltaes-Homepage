"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch("/api/get-access-token");
        const data = await response.json();

        if (data.accessToken) {
          setAccessToken(data.accessToken);
          console.log("Access Token fetched successfully:", data.accessToken);
        } else {
          setError("Failed to fetch access token");
        }
      } catch (err) {
        setError("Error while fetching access token");
        console.error("Error fetching access token:", err);
      }
    };

    fetchAccessToken();
  }, []);

  return (
    <div>
      <h1>WIX API Access Token</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {accessToken ? (
        <p>Access Token: {accessToken}</p>
      ) : (
        <p>Loading access token...</p>
      )}
    </div>
  );
}
