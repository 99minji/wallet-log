import React from "react";
import s from "./ModalActionButtons.module.scss";

type Action = {
  label: string;
  onClick: () => void;
  type?: "button" | "reset" | "submit"; // 버튼 타입
  variant?: "fillButton" | "emptyButton"; // 버튼 스타일
  className?: string;
};

type ModalActionButtonsProps = {
  actions: Action[];
};

export default function ModalActionButtons({ actions }: ModalActionButtonsProps) {
  return (
    <div className={s.btnWrap}>
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className={`${s.button} ${action.variant ? s[action.variant] : ""} ${action.className ? s[action.className] : ""}`}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
