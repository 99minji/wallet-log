import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  date: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, date } = action.payload;
      state.type = type;
      state.date = date;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
