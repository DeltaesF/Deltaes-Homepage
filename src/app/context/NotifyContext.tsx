import { createContext, useContext, useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";
import { getApp } from "firebase/app";

const NotifyContext = createContext({
  unreadCount: 0,
  refreshUnreadCount: () => {},
});

export function NotifyProvider({ children }: { children: React.ReactNode }) {
  const [unreadCount, setUnreadCount] = useState(0);

  const refreshUnreadCount = async () => {
    try {
      const db = getFirestore(getApp());
      const inquiriesQuery = query(
        collection(db, "inquiries"),
        where("isRead", "==", false),
      );
      const questionsQuery = query(
        collection(db, "questions"),
        where("isRead", "==", false),
      );

      // getCountFromServer는 읽지 않은 도큐먼트 개수만 빠르게 가져옴
      const inquiriesSnapshot = await getCountFromServer(inquiriesQuery);
      const questionsSnapshot = await getCountFromServer(questionsQuery);

      setUnreadCount(
        inquiriesSnapshot.data().count + questionsSnapshot.data().count,
      );
    } catch (error) {
      console.error("알림 개수 조회 실패:", error);
    }
  };

  useEffect(() => {
    // 최초 마운트 시 한번만 호출, 필요시 user 상태 확인 후 호출
    refreshUnreadCount();
  }, []);

  return (
    <NotifyContext.Provider value={{ unreadCount, refreshUnreadCount }}>
      {children}
    </NotifyContext.Provider>
  );
}

export const useNotification = () => useContext(NotifyContext);
