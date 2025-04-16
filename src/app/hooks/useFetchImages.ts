// hooks/useFetchDriveImages.ts
import { useEffect, useState } from "react";

export default function useFetchImages(imageNames: string[]) {
  const [imageSrc, setImageSrc] = useState<string[]>(
    new Array(imageNames.length).fill(null),
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const urls = await Promise.all(
          imageNames.map(async (name) => {
            const res = await fetch(`/api/getdrive/${name}`);
            if (!res.ok) throw new Error(`Failed to fetch ${name}`);
            const data = await res.json();
            return data.imageUrl;
          }),
        );
        setImageSrc(urls);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    }

    fetchImages();
  }, []);

  return { imageSrc, loading, error };
}
