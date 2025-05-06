import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import s from "./CalendarPanel.module.scss";

export default function CalendarPanel() {
  return (
    <div className={s.calendarPanel}>
      <Calendar className={s.calendar} calendarType="gregory" locale="ko-KR" />
    </div>
  );
}
