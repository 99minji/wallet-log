import s from './Sidebar.module.scss';

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

export default function Sidebar() {
    
    const grouped = mockData.reduce((acc, item) => {
        if (!acc[item.date]) acc[item.date] = [];
        acc[item.date].push(item);
        return acc;
    }, {} as Record<string, typeof mockData>);
    
    return (
        <div className={s.sidebar_box}>
            {Object.entries(grouped).map(([date, items]) => (
                <div key={date} className={s.date_group}>
                    <h4 className={s.date_title}>{new Date(date).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' })}</h4>
                    {items.map((item, idx) => (
                    <div key={idx} className={s.daily_box}>
                        <p className={`${s.type} ${s[item.type === '지출' ? 'expense' : 'income']}`}>{item.type}</p>
                        <p className={s.sort}>{item.sort}</p>
                        <p className={`${s.price} ${s[item.type === '지출' ? 'expense' : 'income']}`}>
                        {item.type === '지출' ? '- ' : '+ '}{item.price.toLocaleString()} 원
                        </p>
                    </div>
                    ))}
                </div>
                ))}
        </div>
    )
    
}