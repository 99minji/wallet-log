import React, { useState } from "react";
import TypeToggle from "./TypeToggle";
import FormSection from "./FormSection";
import ModalActionButtons from "@/components/modal/ModalActionButtons";
import { useModal } from "@/hooks/useModal";

export type Item = {
  id: number;
  type: "income" | "expense";
  category: string;
  memo: string;
  amount: number;
};

export default function ExpenseModalContent() {
  const { closeModal } = useModal();

  const [type, setType] = useState<"income" | "expense">("expense");
  const [items, setItems] = useState<Item[]>([]);

  // TODO: 서버 액션으로 만들기
  const handleSubmit = () => {
    const incomeTotal = items.filter((i) => i.type === "income").reduce((acc, cur) => acc + cur.amount, 0);
    const expenseTotal = items.filter((i) => i.type === "expense").reduce((acc, cur) => acc + cur.amount, 0);

    console.log("🟢 수입 총액:", incomeTotal);
    console.log("🔴 지출 총액:", expenseTotal);
    console.log("📦 전체 항목 리스트:", items);

    // TODO: Redux 저장 또는 달력에 반영
    closeModal();
  };

  return (
    <div>
      {/* 수입/지출 전환 탭 */}
      <TypeToggle type={type} onChange={setType} />

      {/* 입력 + 리스트 */}
      <FormSection type={type} items={items} setItems={setItems} />

      {/* 공통 모달 버튼에서 완료/취소 버튼 사용 */}
      <ModalActionButtons
        actions={[
          { label: "등록", onClick: handleSubmit },
          { label: "취소", onClick: closeModal, variant: "cancel" },
        ]}
      />
    </div>
  );
}
