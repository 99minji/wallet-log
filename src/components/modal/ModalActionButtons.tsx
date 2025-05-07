import React from "react";
import s from "./ModalActionButtons.module.scss";

type Action = {
  label: string;
  onClick: () => void;
  variant?: "default" | "cancel" | "danger";
};

type ModalActionButtonsProps = {
  actions: Action[];
};

export default function ModalActionButtons({ actions }: ModalActionButtonsProps) {
  return (
    <div>
      {actions.map((action, index) => (
        <button key={index} onClick={action.onClick} className={`${s.button} ${s[action.variant || "default"]}`}>
          {action.label}
        </button>
      ))}
    </div>
  );
}
