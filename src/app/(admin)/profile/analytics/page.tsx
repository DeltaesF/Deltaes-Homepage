"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type PeriodRow = { year: string; date: string; users: string };
type PeriodData = PeriodRow[];

type AnalyticsData = {
  today: {
    activeUsers: string;
    avgSessionDuration: string;
  };
  totalUsers: string;
  periods: {
    last7days: PeriodData;
    last30days: PeriodData;
    last1year: PeriodData;
  };
};

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [activeTab, setActiveTab] = useState<"7days" | "30days" | "1year">(
    "7days",
  );
  const [chartData, setChartData] = useState<PeriodData>([]);

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setChartData(d.periods.last7days);
      });
  }, []);

  useEffect(() => {
    if (!data) return;
    switch (activeTab) {
      case "7days":
        setChartData(data.periods.last7days);
        break;
      case "30days":
        setChartData(data.periods.last30days);
        break;
      case "1year":
        setChartData(data.periods.last1year);
        break;
    }
  }, [activeTab, data]);

  // 현재 탭의 연도 가져오기
  const currentYear =
    chartData.length > 0
      ? chartData[0].year
      : new Date().getFullYear().toString();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.todayTime}>
          <div className={styles.ttTrapper}>
            <div className={styles.ttt}>
              <h2 className={styles.tTh2}>전체 수 : {data?.totalUsers}</h2>
            </div>
            <div className={styles.line}></div>
            <div className={styles.ttt}>
              <h2 className={styles.tTh2}>
                방문자 수 : {data?.today.activeUsers}
              </h2>
            </div>
            <div className={styles.line}></div>
            <div className={styles.ttt}>
              <h2 className={styles.tTh2}>
                평균 접속 시간 :{" "}
                {Math.round(Number(data?.today.avgSessionDuration))}초
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.tabButtons}>
          <h2>
            방문자 확인표 <span>{currentYear}</span>
          </h2>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "7days" ? styles.tabButtonActive : ""
              }`}
              onClick={() => setActiveTab("7days")}
            >
              Last 7 days
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "30days" ? styles.tabButtonActive : ""
              }`}
              onClick={() => setActiveTab("30days")}
            >
              Last 30 days
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "1year" ? styles.tabButtonActive : ""
              }`}
              onClick={() => setActiveTab("1year")}
            >
              Last 12 months
            </button>
          </div>
        </div>
        <div className={styles.modalChart}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
