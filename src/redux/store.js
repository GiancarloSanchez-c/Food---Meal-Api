import { configureStore } from "@reduxjs/toolkit";
import { mealSlice } from '.';


export const store = configureStore({
  reducer: {
    meal: mealSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })

})