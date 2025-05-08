import s from './TotalSide.module.scss';

const mockData = [
  { date: '2025-05-01', type: '지출', sort: '식품', price: 40000 },
  { date: '2025-05-02', type: '지출', sort: '생활용품', price: 50000 },
  { date: '2025-05-02', type: '지출', sort: '외식', price: 140000 },
  { date: '2025-05-02', type: '지출', sort: '쇼핑', price: 42300 },
  { date: '2025-05-03', type: '지출', sort: '주유', price: 40000 },
  { date: '2025-05-04', type: '지출', sort: '영화', price: 40000 },
  { date: '2025-05-05', type: '지출', sort: '관리비', price: 140000 },
  { date: '2025-05-05', type: '지출', sort: '대출이자', price: 400000 },
  { date: '2025-05-05', type: '수입', sort: '월급', price: 3000000 },
  { date: '2025-05-14', type: '지출', sort: '관리비', price: 40000 },
  { date: '2025-05-15', type: '지출', sort: '관리비', price: 30000 },
  { date: '2025-05-23', type: '지출', sort: '관리비', price: 20000 },
  { date: '2025-05-24', type: '지출', sort: '통신비', price: 33000 },
  
];

export default function TotalSide() {
    const totalIncome = mockData
        .filter((item) => item.type === '수입')
        .reduce((acc, item) => acc + item.price, 0);
    const totalExpense = mockData
        .filter((item) => item.type === '지출')
        .reduce((acc, item) => acc + item.price, 0);
    const total = totalIncome - totalExpense;

    return (
        <div className={s.total_wrap}>
            <h3 className={s.total_title}>Total</h3>
            <div className={s.inner}>
                <div className={`${s.sub_box} ${s.income}`}>
                    <p className={s.sub_title}>총 수입</p>
                    <p className={s.sub_price}>
                        + {totalIncome.toLocaleString()} 원
                    </p>
                </div>
                <div className={`${s.sub_box} ${s.expense}`}>
                    <p className={s.sub_title}>총 지출</p>
                    <p className={s.sub_price}>
                        - {totalExpense.toLocaleString()} 원
                    </p>
                </div>
                <div className={s.total_box}>
                    <p className={s.total_title}>총 지출</p>
                    <p className={s.total_price}>
                        {total >= 0 ? '+ ' : '- '}
                        {Math.abs(total).toLocaleString()} 원
                    </p>
                </div>
            </div>
        </div>
    )
}