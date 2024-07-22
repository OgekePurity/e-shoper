import { createReducer, createAction } from "@reduxjs/toolkit";

// Define actions
export const loadSellerRequest = createAction('LoadSellerRequest');
export const loadSellerSuccess = createAction('LoadSellerSuccess');
export const loadSellerFail = createAction('LoadSellerFail');

export const getAllSellersRequest = createAction('getAllSellersRequest');
export const getAllSellersSuccess = createAction('getAllSellersSuccess');
export const getAllSellersFailed = createAction('getAllSellersFailed');

export const clearErrors = createAction('clearErrors');

const initialState = {
  isLoading: true,
  isSeller: false,
  seller: null,
  sellers: [],
  error: null,
};

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    // Load seller
    .addCase(loadSellerRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(loadSellerSuccess, (state, action) => {
      state.isLoading = false;
      state.isSeller = true;
      state.seller = action.payload;
    })
    .addCase(loadSellerFail, (state, action) => {
      state.isLoading = false;
      state.isSeller = false;
      state.error = action.payload;
    })

    // Get all sellers (admin)
    .addCase(getAllSellersRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllSellersSuccess, (state, action) => {
      state.isLoading = false;
      state.sellers = action.payload;
    })
    .addCase(getAllSellersFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Clear errors
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});
