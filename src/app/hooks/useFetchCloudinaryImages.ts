import { useEffect, useState } from "react";

interface UseFetchCloudinaryImagesResult {
  imageSrc1: string[];
  loading: boolean;
  error: string | null;
}

export default function useFetchCloudinaryImages(
  publicIds: string[],
): UseFetchCloudinaryImagesResult {
  const [imageSrc1, setImageSrc] = useState<string[]>(
    new Array(publicIds.length).fill(""),
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cloudinary 계정 정보
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  useEffect(() => {
    async function fetchImages() {
      try {
        // publicId를 이용해 URL 생성 (확장자는 avif, jpg 등 상황에 맞게 변경)
        const urls = publicIds.map(
          (id) => `https://res.cloudinary.com/${cloudName}/image/upload/${id}`,
        );
        setImageSrc(urls);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return { imageSrc1, loading, error };
}
