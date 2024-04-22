import { configureStore } from "@reduxjs/toolkit";
import cartSlide from "./cartSlide";

export const store = configureStore({
    reducer: {
      cart : cartSlide
  },
  devTools: true,
});
