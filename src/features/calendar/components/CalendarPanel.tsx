"use client";

import React from "react";
import Calendar from "react-calendar";
import s from "./CalendarPanel.module.scss";
import CommonModal from "@/components/modal/CommonModal";
import ExpenseModalContent from "@/features/expenses/components/ExpenseModalContent";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import { useModal } from "@/hooks/useModal";
import { RootState } from "@/store";

export default function CalendarPanel() {
  const { openModal, closeModal } = useModal();
  const modalType = useSelector((state: RootState) => state.modal.type);

  const handleClickDay = (date: Date) => {
    const formatted = date.toISOString().split("T")[0]; // 'YYYY-MM-DD'
    openModal({ type: "expense", date: formatted });
  };

  return (
    <div className={s.calendarPanel}>
      <Calendar className={s.calendar} onClickDay={handleClickDay} calendarType="gregory" locale="ko-KR" />
      {/* 모달 테스트 */}
      <CommonModal isOpen={modalType === "expense"} onClose={closeModal}>
        <ExpenseModalContent />
      </CommonModal>
    </div>
  );
}
