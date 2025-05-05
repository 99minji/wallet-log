## 📒 가계부 프로젝트 (wallet-log)

Next.js 기반의 가계부 웹 애플리케이션입니다.
수입·지출을 등록하고 리스트 및 통계를 관리할 수 있도록 설계된 프로젝트입니다.

<br>

### 🛠️ 기술 스택

- Next.js (App Router)

- TypeScript

- SCSS (Sass)

- React Query (TanStack Query) – 서버 상태 관리

- Redux Toolkit – 클라이언트 전역 상태 관리

- ESLint + Prettier – 코드 컨벤션 자동화

### 📁 폴더 구조

```
src/
├── app/                  # App Router 엔트리 (layout.tsx, page.tsx 등)
├── components/           # 공통 UI 컴포넌트
├── features/             # 도메인 기능별 폴더 (예: expenses, user 등)
│   └── expenses/
│       ├── components/   # 해당 기능 내 컴포넌트
│       ├── expenseSlice.ts
│       └── expenseAPI.ts
├── hooks/                # 커스텀 훅
├── lib/                  # API 클라이언트, 공통 로직
├── store/                # Redux store 설정
│   └── index.ts
├── styles/               # 글로벌 및 모듈 SCSS
│   ├── globals.scss
│   └── variables.scss
├── types/                # 전역 타입 정의
└── utils/                # 유틸 함수 (날짜 처리, 포맷 등)

```

### ⚙️ 개발 환경 설정

```
# 패키지 설치
yarn install

# 개발 서버 실행
yarn dev

# 린트 검사
yarn lint

# prettier 포맷 확인
yarn prettier --check .

# 빌드
yarn build

# 빌드 결과 실행 (프로덕션)
yarn start
```
