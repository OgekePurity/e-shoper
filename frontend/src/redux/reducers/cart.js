import { createReducer, createAction } from "@reduxjs/toolkit";

// Define actions
export const addToCart = createAction('cart/addToCart');
export const removeFromCart = createAction('cart/removeFromCart');

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i._id === item._id);
      if (isItemExist) {
        state.cart = state.cart.map((i) => (i._id === isItemExist._id ? item : i));
      } else {
        state.cart.push(item);
      }
      // Optionally, update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    })
    .addCase(removeFromCart, (state, action) => {
      state.cart = state.cart.filter((i) => i._id !== action.payload);
      // Optionally, update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    });
});
