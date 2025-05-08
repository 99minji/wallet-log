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
            <span className={`${s.type} ${item.type === "income" ? s.income : ""}`}>
              {item.type === "income" ? "수입" : "지출"}
            </span>
            <span>{item.category}</span>
            <span>{item.amount}원</span>
            <span>{item.memo}</span>
          </div>
          <div className={s.deleteBtn}>
            {onDelete && (
              <button onClick={() => onDelete(item.id)}>
                <IoMdCloseCircleOutline />
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
