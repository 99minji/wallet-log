import React from "react";
import { Item } from "./ExpenseModalContent";

type ItemListProps = {
  items: Item[];
  onDelete: (id: number) => void;
};

export default function ItemList({ items, onDelete }: ItemListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <span>[{item.type === "income" ? "수입" : "지출"}]</span>
            <span>{item.category}</span>
            <span>{item.amount} 원</span>
            <span>{item.memo}</span>
          </div>
          <div>{onDelete && <button onClick={() => onDelete(item.id)}>삭제</button>}</div>
        </li>
      ))}
    </ul>
  );
}
