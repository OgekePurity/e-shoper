import { createReducer, createAction } from "@reduxjs/toolkit";

// Define actions
export const loadUserRequest = createAction('LoadUserRequest');
export const loadUserSuccess = createAction('LoadUserSuccess');
export const loadUserFail = createAction('LoadUserFail');

export const updateUserInfoRequest = createAction('updateUserInfoRequest');
export const updateUserInfoSuccess = createAction('updateUserInfoSuccess');
export const updateUserInfoFailed = createAction('updateUserInfoFailed');

export const updateUserAddressRequest = createAction('updateUserAddressRequest');
export const updateUserAddressSuccess = createAction('updateUserAddressSuccess');
export const updateUserAddressFailed = createAction('updateUserAddressFailed');

export const deleteUserAddressRequest = createAction('deleteUserAddressRequest');
export const deleteUserAddressSuccess = createAction('deleteUserAddressSuccess');
export const deleteUserAddressFailed = createAction('deleteUserAddressFailed');

export const getAllUsersRequest = createAction('getAllUsersRequest');
export const getAllUsersSuccess = createAction('getAllUsersSuccess');
export const getAllUsersFailed = createAction('getAllUsersFailed');

export const clearErrors = createAction('clearErrors');
export const clearMessages = createAction('clearMessages');

const initialState = {
  isAuthenticated: false,
  loading: false,
  addressloading: false,
  usersLoading: false,
  user: null,
  users: [],
  error: null,
  successMessage: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    // Load user
    .addCase(loadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(loadUserSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(loadUserFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    // Update user information
    .addCase(updateUserInfoRequest, (state) => {
      state.loading = true;
    })
    .addCase(updateUserInfoSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(updateUserInfoFailed, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // Update user address
    .addCase(updateUserAddressRequest, (state) => {
      state.addressloading = true;
    })
    .addCase(updateUserAddressSuccess, (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase(updateUserAddressFailed, (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })

    // Delete user address
    .addCase(deleteUserAddressRequest, (state) => {
      state.addressloading = true;
    })
    .addCase(deleteUserAddressSuccess, (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase(deleteUserAddressFailed, (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })

    // Get all users (admin)
    .addCase(getAllUsersRequest, (state) => {
      state.usersLoading = true;
    })
    .addCase(getAllUsersSuccess, (state, action) => {
      state.usersLoading = false;
      state.users = action.payload;
    })
    .addCase(getAllUsersFailed, (state, action) => {
      state.usersLoading = false;
      state.error = action.payload;
    })

    // Clear errors
    .addCase(clearErrors, (state) => {
      state.error = null;
    })

    // Clear messages
    .addCase(clearMessages, (state) => {
      state.successMessage = null;
    });
});
