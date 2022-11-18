import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Pill {
  id: string;
  title: string;
}

const initialState: Pill[] = [];

export const pillsSlice = createSlice({
  name: "pills",
  initialState,
  reducers: {
    addPill: (state, action: PayloadAction<Pill>) => {
      return state.concat(action.payload);
    },
    removePill: (state, action: PayloadAction<string>) => {
      return state.filter((i) => i.id !== action.payload);
    },
    removeAllPills: () => [],
  },
});

export const { addPill, removePill, removeAllPills } = pillsSlice.actions;

export default pillsSlice.reducer;
