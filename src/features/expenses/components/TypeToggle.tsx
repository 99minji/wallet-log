import React from "react";
import s from "./TypeToggle.module.scss";

type TypeToggleProps = {
  type: "income" | "expense";
  onChange: (type: "income" | "expense") => void;
};

export default function TypeToggle({ type, onChange }: TypeToggleProps) {
  return (
    <div className={s.toggleWrap}>
      <button onClick={() => onChange("expense")} className={`${type === "expense" ? s.active : ""}`} aria-label="지출">
        지출
      </button>
      <button onClick={() => onChange("income")} className={`${type === "income" ? s.active : ""}`} aria-label="수입">
        수입
      </button>
    </div>
  );
}
