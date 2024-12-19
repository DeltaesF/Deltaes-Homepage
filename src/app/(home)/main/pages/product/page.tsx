"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Simulation from "./simulation/page";
import Measurement from "./measurement/page";
import Design from "./design/page";

type TabName = "소프트웨어" | "측정 장비" | "설계 프로그램";

export default function Product() {
  const [activeTab, setActiveTab] = useState<TabName>("소프트웨어");

  const tabs: TabName[] = ["소프트웨어", "측정 장비", "설계 프로그램"];

  const tabComponents = () => {
    if (activeTab === "소프트웨어") {
      return <Simulation />;
    } else if (activeTab === "측정 장비") {
      return <Measurement />;
    } else if (activeTab === "설계 프로그램") {
      return <Design />;
    } else {
      return null;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>제품 안내</h1>
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.tabWrapper}>
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`${styles.tabItem} ${activeTab === tab ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                <div>{tab}</div>
              </div>
            ))}
          </div>
          <div className={styles.tabContent}>{tabComponents()}</div>
        </div>
      </div>
    </div>
  );
}
