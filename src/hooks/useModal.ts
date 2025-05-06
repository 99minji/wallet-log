"use client";

import { closeModal, openModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";

/* 추후 모달 타입 추가*/
type ModalType = "expense";

export const useModal = () => {
  const dispatch = useDispatch();

  const handleOpenModal = ({ type }: { type: ModalType }) => {
    dispatch(openModal({ type }));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
};
