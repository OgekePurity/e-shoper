import { createReducer, createAction } from "@reduxjs/toolkit";

// Define actions
export const addToWishlist = createAction('addToWishlist');
export const removeFromWishlist = createAction('removeFromWishlist');

const initialState = {
  wishlist: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

export const wishlistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToWishlist, (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i._id === item._id);
      if (isItemExist) {
        state.wishlist = state.wishlist.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        state.wishlist = [...state.wishlist, item];
      }
    })
    .addCase(removeFromWishlist, (state, action) => {
      state.wishlist = state.wishlist.filter((i) => i._id !== action.payload);
    });
});
