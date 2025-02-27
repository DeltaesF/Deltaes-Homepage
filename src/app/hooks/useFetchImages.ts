import { useEffect, useState } from "react";

// FTP에서 이미지를 불러와서 URL로 반환하는 custom hook
export default function useFetchImages(imageNames: string[]) {
  // imageNames는 배열에 있는 각 이미지의 URL을 저장하는 상태 변수
  const [imageSrc, setImageSrc] = useState<string[]>(
    new Array(imageNames.length).fill(null), // 초기 값 모든 항목을 null로 설정
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // imageNames 배열에 변화가 있을 때마다 이미지를 다시 fetch하도록 useEffect 사용
    async function fetchImages() {
      try {
        // imageNames 배열을 순회하며 각 이미지 파일 fetch 후 blob URL로 반환
        const imagePromises = imageNames.map(async (imageName, index) => {
          const res = await fetch(`/api/getftp/${imageName}`);
          if (!res.ok) throw new Error(`failed to load ${imageName}`);
          const imageBlob = await res.blob(); // blob 형태로 이미지 데이터 받음
          return URL.createObjectURL(imageBlob); // blob 데이터 URL로 변환하여 반환

          // const imageUrl = URL.createObjectURL(imageBlob);

          // // 미리 브라우저에서 로드하여 캐싱
          // const img = new Image();
          // img.src = imageUrl;

          // return imageUrl;
        });

        const imageUrls = await Promise.all(imagePromises); // Promise.all을 사용해서 모든 이미지 반환
        setImageSrc(imageUrls);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    }
    fetchImages();
  }, []);

  return { imageSrc, loading, error }; // 훅의 반환값: 이미지 URL 배열과 에러 메시지를 객체 형태로 반환
}
