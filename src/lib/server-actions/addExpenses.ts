import { Item } from "@/features/expenses/components/ExpenseModalContent";

export default function addExpenses(items: Item[]) {
  const incomeTotal = items.filter((i) => i.type === "income").reduce((acc, cur) => acc + cur.amount, 0);
  const expenseTotal = items.filter((i) => i.type === "expense").reduce((acc, cur) => acc + cur.amount, 0);

  console.log("🟢 수입 총액:", incomeTotal);
  console.log("🔴 지출 총액:", expenseTotal);
  console.log("📦 전체 항목 리스트:", items);

  // TODO: Redux 저장 또는 달력에 반영
}
