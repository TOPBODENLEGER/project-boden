import { configureStore, combineReducers } from "@reduxjs/toolkit";
import statsCart from "./statsCart";
const rootReducers = combineReducers({
  cart: statsCart,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
});

export default store;
