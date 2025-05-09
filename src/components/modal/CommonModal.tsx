"use client";

import React, { ReactNode, useEffect } from "react";
import s from "./CommonModal.module.scss";

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
    <div className={s.overlay} onClick={onClose}>
      <div className={s.contents} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
