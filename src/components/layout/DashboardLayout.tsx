import React from "react";
import s from "./DashboardLayout.module.scss";
import CalendarPanel from "@/features/calendar/components/CalendarPanel";
import Sidebar from "../sidebar/Sidebar";
import TotalSide from "../sidebar/TotalSide";

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
        <h3>Side</h3>
        <Sidebar />
        <TotalSide />
      </section>
    </section>
  );
}
