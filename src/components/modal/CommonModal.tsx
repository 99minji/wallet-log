"use client";

import React, { ReactNode, useEffect } from "react";

type CommonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

/* 열기/닫기 상태 + children prop으로 받음*/
export default function CommonModal({ isOpen, onClose, children }: CommonModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div onClick={onClose}>
      <button onClick={onClose}>닫기</button>
      {children}
    </div>
  );
}
