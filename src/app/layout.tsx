import type { Metadata } from "next";
import { pretendard } from "@/styles/fonts";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "wallet-log",
  description: "나만의 가계부 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
}
