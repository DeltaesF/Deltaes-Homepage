"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import SolutionMail from "@/app/components/solution/SolutionMail";

type TabName =
  | "전자기기/반도체/디스플레이"
  | "환경"
  | "건축/토목/산업용기계"
  | "자동차"
  | "소비재"
  | "에너지";

export default function Engineering() {
  // tab으로 제작하기
  const [activeTab, setActiveTab] =
    useState<TabName>("전자기기/반도체/디스플레이");

  const tabs: TabName[] = [
    "전자기기/반도체/디스플레이",
    "환경",
    "건축/토목/산업용기계",
    "자동차",
    "소비재",
    "에너지",
  ];

  const tabComponents = () => {
    if (activeTab === "전자기기/반도체/디스플레이") {
      return (
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 1</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 2</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 3</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 4</div>
        </div>
      );
    } else if (activeTab === "환경") {
      return (
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 1</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 2</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 3</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 4</div>
        </div>
      );
    } else if (activeTab === "건축/토목/산업용기계") {
      return (
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 1</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 2</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 3</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 4</div>
        </div>
      );
    } else if (activeTab === "자동차") {
      return (
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 1</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 2</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 3</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 4</div>
        </div>
      );
    } else if (activeTab === "소비재") {
      return (
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 1</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 2</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 3</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 4</div>
        </div>
      );
    } else if (activeTab === "에너지") {
      return (
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 1</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 2</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 3</div>
          <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 4</div>
        </div>
      );
    }
  };
  // const tabComponents = () => {
  //   return (
  //     <div className={styles.gridContainer}>
  //       <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 1</div>
  //       <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 2</div>
  //       <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 3</div>
  //       <div className={styles.gridItem}>{activeTab} 관련 컨텐츠 4</div>
  //     </div>
  //   );
  // };

  const router = useRouter();

  // const handleMoreClick = () => {
  //   if (activeTab === "전자기기/반도체/디스플레이") {
  //     router.push("/main/pages/announcements");
  //   } else if (activeTab === "환경") {
  //     router.push("/main/pages/announcements/productnews");
  //   } else if (activeTab === "건축/토목/산업용기계") {
  //     router.push("/main/pages/announcements/resources");
  //   } else if (activeTab === "자동차") {
  //     router.push("/main/pages/announcements/productnews");
  //   } else if (activeTab === "소비재") {
  //     router.push("/main/pages/announcements/productnews");
  //   } else if (activeTab === "에너지") {
  //     router.push("/main/pages/announcements/productnews");
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>엔지니어링 컨설팅</h1>
        </div>
        <div>
          <div className={styles.subTitle}>
            <h2>{activeTab}</h2>
          </div>
          <div className={styles.tabBtnWrapper}>
            {tabs.map((tab) => (
              <div className={styles.tabBtn} onClick={() => setActiveTab(tab)}>
                <span>{tab}</span>
              </div>
            ))}
          </div>
          <div className={styles.tabContent}>{tabComponents()}</div>
          <div>
            <SolutionMail />
          </div>
        </div>
      </div>
    </div>
  );
}
