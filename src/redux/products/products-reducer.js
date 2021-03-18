import { createReducer } from "@reduxjs/toolkit";
import { addProduct, deleteProduct } from "./products-actions";
import { combineReducers } from "redux";

const initialState = {
  productItems: [],
  filter: "",
};

const itemReducer = createReducer([], {
  [addProduct]: (state, action) => [...state, action.payload],
  [deleteProduct]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
});

const filterReducer = createReducer("", {});

const productsReducer = combineReducers({
  productItems: itemReducer,
  filter: filterReducer,
});

export default productsReducer;
