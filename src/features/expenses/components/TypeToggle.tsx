import React from "react";
import s from "./TypeToggle.module.scss";
type TypeToggleProps = {
  type: "income" | "expense";
  onChange: (type: "income" | "expense") => void;
};

export default function TypeToggle({ type, onChange }: TypeToggleProps) {
  return (
    <div>
      <button onClick={() => onChange("income")} className={`${type === "income" ? s.active : ""}`}>
        수입
      </button>
      <button onClick={() => onChange("expense")} className={`${type === "expense" ? s.active : ""}`}>
        지출
      </button>
    </div>
  );
}
