import React from "react";
import s from "./DashboardLayout.module.scss";
import CalendarPanel from "@/features/calendar/components/CalendarPanel";

export default function DashboardLayout() {
  return (
    <section className={s.dashboard}>
      <section className={s.main}>
        <main>
          <section className={s.calendar}>
            <CalendarPanel />
          </section>
        </main>
      </section>
      <section className={s.listArea}>
        <div>우측리스트</div>
        <div>총합</div>
      </section>
    </section>
  );
}
