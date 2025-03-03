import { createReducer, createAction } from "@reduxjs/toolkit";

// Define actions
export const productCreateRequest = createAction('productCreateRequest');
export const productCreateSuccess = createAction('productCreateSuccess');
export const productCreateFail = createAction('productCreateFail');

export const getAllProductsShopRequest = createAction('getAllProductsShopRequest');
export const getAllProductsShopSuccess = createAction('getAllProductsShopSuccess');
export const getAllProductsShopFailed = createAction('getAllProductsShopFailed');

export const deleteProductRequest = createAction('deleteProductRequest');
export const deleteProductSuccess = createAction('deleteProductSuccess');
export const deleteProductFailed = createAction('deleteProductFailed');

export const getAllProductsRequest = createAction('getAllProductsRequest');
export const getAllProductsSuccess = createAction('getAllProductsSuccess');
export const getAllProductsFailed = createAction('getAllProductsFailed');

export const clearErrors = createAction('clearErrors');

const initialState = {
  isLoading: true,
  product: null,
  products: [],
  allProducts: [],
  success: false,
  message: '',
  error: null,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    // Product creation
    .addCase(productCreateRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(productCreateSuccess, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase(productCreateFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    // Get all products of shop
    .addCase(getAllProductsShopRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllProductsShopSuccess, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(getAllProductsShopFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Delete product
    .addCase(deleteProductRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteProductSuccess, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase(deleteProductFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Get all products
    .addCase(getAllProductsRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllProductsSuccess, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    })
    .addCase(getAllProductsFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Clear errors
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});
