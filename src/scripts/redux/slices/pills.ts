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
    add: (state, action: PayloadAction<Pill>) => {
      state = state.concat(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state = state.filter((i) => i.id !== action.payload);
    },
  },
});

export const { add, remove } = pillsSlice.actions;

export default pillsSlice.reducer;
