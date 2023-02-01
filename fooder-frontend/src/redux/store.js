import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

 export const reducers = combineReducers({
  auth: authSlice,
  cart: cartSlice,
})

export const store = configureStore({reducer: reducers})

