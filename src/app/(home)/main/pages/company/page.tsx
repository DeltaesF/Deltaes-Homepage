// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Company() {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
//       // 🔹 미리보기 URL 생성
//       const objectUrl = URL.createObjectURL(selectedFile);
//       setPreview(objectUrl);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert("파일을 선택하세요.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("/api/drive", {
//         method: "POST",
//         body: formData, // 🔹 Content-Type 자동 설정 (따로 지정하면 안 됨)
//       });

//       const data = await response.json();
//       console.log("📌 Upload response:", data); // 📌 응답 데이터 디버깅

//       if (response.ok) {
//         setMessage(`파일 업로드 성공! File ID: ${data.fileId}`);
//       } else {
//         setMessage(`업로드 실패: ${data.error}`);
//       }
//     } catch (error) {
//       console.error("❌ Upload error:", error);
//       setMessage("업로드 중 오류 발생");
//     }
//   };

//   const [files, setFiles] = useState<{ id: string; name: string }[]>([]);

//   useEffect(() => {
//     fetch("/api/drive/list")
//       .then((res) => res.json())
//       .then((data) => setFiles(data.files));
//   }, []);

//   const imageUrl =
//     "https://drive.google.com/uc?export=view&id=1UYorvjopev35buWyKfoQN6M-lWsvGg8H";

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Google Drive 파일 업로드</h1>
//       <input type="file" onChange={handleFileChange} className="mb-2" />
//       {preview && (
//         <div className="mb-2">
//           <img
//             src={preview}
//             alt="미리보기"
//             className="w-40 h-40 object-cover border rounded"
//           />
//         </div>
//       )}
//       <button
//         onClick={handleUpload}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         업로드
//       </button>
//       {message && <p className="mt-2">{message}</p>}
//       <img
//         src="https://drive.google.com/uc?export=view&id=1UYorvjopev35buWyKfoQN6M-lWsvGg8H
// "
//         alt=""
//       />
//       <Image
//         src={imageUrl}
//         alt="Google Drive Image"
//         width={600}
//         height={400}
//         layout="responsive"
//       />
//     </div>
//   );
// }
