"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useUser } from "./UserContext";

interface NotificationContextProps {
  unreadCount: number;
  unreadQnaCount: number;
  refreshNotifications: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextProps>({
  unreadCount: 0,
  unreadQnaCount: 0,
  refreshNotifications: async () => {},
});

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const { user } = useUser();
  const [unreadCount, setUnreadCount] = useState(0);
  const [unreadQnaCount, setUnreadQnaCount] = useState(0); // Q&A 질문

  const refreshNotifications = async () => {
    if (!user) {
      setUnreadCount(0);
      setUnreadQnaCount(0);
      return;
    }

    try {
      // ✅ 실시간 문의 메시지 (messages)
      // inquiries 컬렉션 아래 messages 서브컬렉션 전체에서 isRead가 false인 'user'가 보낸 메시지 개수 조회
      const q = query(
        collectionGroup(db, "messages"),
        where("isRead", "==", false),
        where("sender", "==", "user"),
      );

      const snapshot = await getDocs(q);
      setUnreadCount(snapshot.size);

      // ✅ Q&A 질문 (questions)
      const qnaQuery = query(
        collection(db, "questions"),
        where("isRead", "==", false),
      );
      const qnaSnapshot = await getDocs(qnaQuery);
      setUnreadQnaCount(qnaSnapshot.size);
    } catch (error) {
      console.error("알림 조회 실패:", error);
    }
  };

  useEffect(() => {
    refreshNotifications();
  }, [user]);

  return (
    <NotificationContext.Provider
      value={{ unreadCount, unreadQnaCount, refreshNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
