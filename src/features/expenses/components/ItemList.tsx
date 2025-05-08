import React from "react";
import { Item } from "./ExpenseModalContent";
import { IoMdCloseCircleOutline } from "react-icons/io";
import s from "./ItemList.module.scss";

type ItemListProps = {
  items: Item[];
  onDelete: (id: number) => void;
};

export default function ItemList({ items, onDelete }: ItemListProps) {
  return (
    <ul className={s.itemList}>
      {items.map((item) => (
        <li key={item.id}>
          <div className={s.listInfo}>
            <span className={`${s.type} ${item.type === "expense" ? s.expense : ""}`}>
              {item.type === "expense" ? "지출" : "수입"}
            </span>
            <span className={s.category}>{item.category}</span>
            <span className={`${s.amount} ${item.type === "expense" ? s.expense : ""}`}>
              {item.amount.toLocaleString()} 원
            </span>
            <span>{item.memo}</span>
          </div>
          <div className={s.deleteBtn}>
            {onDelete && (
              <button onClick={() => onDelete(item.id)} aria-label="삭제">
                <IoMdCloseCircleOutline />
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
