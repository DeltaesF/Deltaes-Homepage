"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import koLocale from "@fullcalendar/core/locales/ko";
import eventsJson from "@/app/data/calendar.json";
import styles from "./TrainingCalendar.module.css";
import { useState } from "react";
import { EventClickArg } from "@fullcalendar/core/index.js";

interface CalendarItem {
  id: number;
  summary: string;
  description?: string;
  location?: string;
  start: { date: string };
  end: { date: string };
}

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
}

// 날짜 문자열 "YYYY-MM-DD"를 받아 하루를 더하는 함수
function addOneDay(dateStr: string) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + 1);
  return date.toISOString().split("T")[0]; // 다시 YYYY-MM-DD 형식으로
}

export default function TrainingCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarItem | null>(null);

  const formattedEvents: CalendarEvent[] = eventsJson.items.map(
    (item: CalendarItem) => ({
      id: String(item.id),
      title: item.summary,
      start: item.start.date,
      end: item.end ? addOneDay(item.end.date) : undefined, // end 날짜 하루 증가
    }),
  );

  const handleEventClick = (info: EventClickArg) => {
    const eventId = info.event.id;

    const found = eventsJson.items.find(
      (item: CalendarItem) => String(item.id) === eventId,
    );

    if (found) {
      setSelectedEvent(found);
    }
  };

  return (
    <div className={styles.container}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={koLocale}
        height="auto"
        events={formattedEvents}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today title",
          center: "",
          right: "",
        }}
      />
      {/* 🔥 모달창 */}
      {selectedEvent && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedEvent(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.summary}</h2>

            <p>
              <strong>📍 장소:</strong> {selectedEvent.location}
            </p>

            <p>
              <strong>🗓 날짜:</strong>{" "}
              {new Date(selectedEvent.start.date).toLocaleDateString()} ~{" "}
              {new Date(selectedEvent.end.date).toLocaleDateString()}
            </p>
            <br />

            {/* description은 HTML 문자열 → dangerouslySetInnerHTML 필요 */}
            <div
              dangerouslySetInnerHTML={{
                __html: selectedEvent.description || "",
              }}
              style={{ marginTop: "15px" }}
            />

            <button
              className={styles.closeButton}
              onClick={() => setSelectedEvent(null)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
