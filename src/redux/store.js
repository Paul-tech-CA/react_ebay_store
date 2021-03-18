// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./products/root-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  //   devTools: process.env.NODE_ENV !== "production",
});

export default store;
