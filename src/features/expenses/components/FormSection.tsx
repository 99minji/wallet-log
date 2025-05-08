import { useState } from "react";
import { Item } from "./ExpenseModalContent";
import ItemList from "./ItemList";
import s from "./FormSection.module.scss";

type FormSectionProps = {
  type: "income" | "expense";
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export default function FormSection({ type, items, setItems }: FormSectionProps) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");

  const handleAddItem = () => {
    if (!category || !amount) return;

    const newItem: Item = {
      id: Date.now(), //고유 숫자 ID 사용
      type,
      category,
      amount: parseInt(amount),
      memo,
    };

    setItems((prev) => [...prev, newItem]);
    setCategory("");
    setAmount("");
    setMemo("");
  };

  return (
    <div className={s.expenseForm}>
      <div className={s.formSection}>
        <label>
          <p>카테고리</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">선택</option>
            <option>항목1</option>
            <option>항목2</option>
            <option>항목3</option>
          </select>
        </label>

        <label>
          <p>금액</p>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" />
        </label>

        <label>
          <p>메모</p>
          <textarea value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="내용 입력" />
        </label>

        <button className={s.addBtn} onClick={handleAddItem}>
          + 추가
        </button>
      </div>

      {/* 리스트 */}
      <ItemList items={items} onDelete={(id) => setItems((prev) => prev.filter((item) => item.id !== id))} />
    </div>
  );
}
