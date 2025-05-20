"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useUser } from "./UserContext";

interface NotificationContextProps {
  unreadCount: number;
  refreshNotifications: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextProps>({
  unreadCount: 0,
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

  const refreshNotifications = async () => {
    if (!user) {
      setUnreadCount(0);
      return;
    }

    try {
      // inquiries 컬렉션 아래 messages 서브컬렉션 전체에서 isRead가 false인 'user'가 보낸 메시지 개수 조회
      const q = query(
        collectionGroup(db, "messages"),
        where("isRead", "==", false),
        where("sender", "==", "user"),
      );

      const snapshot = await getDocs(q);
      setUnreadCount(snapshot.size);
    } catch (error) {
      console.error("알림 조회 실패:", error);
    }
  };

  return (
    <NotificationContext.Provider value={{ unreadCount, refreshNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
