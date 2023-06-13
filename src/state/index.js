import { configureStore, combineReducers } from "@reduxjs/toolkit";
import statsMenu from "./statsMenu";
const rootReducers = combineReducers({
  menu: statsMenu,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
});

export default store;
