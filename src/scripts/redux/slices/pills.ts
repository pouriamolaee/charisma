import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Pill {
  id: number;
  title: string;
}

const initialState: Pill[] = [];

let id = 1;

export const pillsSlice = createSlice({
  name: "pills",
  initialState,
  reducers: {
    addPill: (state, action: PayloadAction<string>) => {
      const pill = { id, title: action.payload };
      id++;
      return state.concat(pill);
    },
    removePill: (state, action: PayloadAction<number>) => {
      return state.filter((i) => i.id !== action.payload);
    },
    removeAllPills: () => [],
  },
});

export const { addPill, removePill, removeAllPills } = pillsSlice.actions;

export default pillsSlice.reducer;
