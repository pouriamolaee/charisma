import { configureStore } from "@reduxjs/toolkit";
import pillsReducer from "./slices/pills";

export const store = configureStore({
  reducer: {
    pills: pillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
