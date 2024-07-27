import { createReducer, createAction } from "@reduxjs/toolkit";

// Define actions
export const eventCreateRequest = createAction('event/eventCreateRequest');
export const eventCreateSuccess = createAction('event/eventCreateSuccess');
export const eventCreateFail = createAction('event/eventCreateFail');

export const getAlleventsShopRequest = createAction('event/getAlleventsShopRequest');
export const getAlleventsShopSuccess = createAction('event/getAlleventsShopSuccess');
export const getAlleventsShopFailed = createAction('event/getAlleventsShopFailed');

export const deleteeventRequest = createAction('event/deleteeventRequest');
export const deleteeventSuccess = createAction('event/deleteeventSuccess');
export const deleteeventFailed = createAction('event/deleteeventFailed');

export const getAlleventsRequest = createAction('event/getAlleventsRequest');
export const getAlleventsSuccess = createAction('event/getAlleventsSuccess');
export const getAlleventsFailed = createAction('event/getAlleventsFailed');

export const clearErrors = createAction('event/clearErrors');

const initialState = {
  isLoading: true,
  events: [],
  event: null,
  success: false,
  error: null,
  message: '',
  allEvents: []
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(eventCreateRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(eventCreateSuccess, (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase(eventCreateFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase(getAlleventsShopRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAlleventsShopSuccess, (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    .addCase(getAlleventsShopFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteeventRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteeventSuccess, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase(deleteeventFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(getAlleventsRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAlleventsSuccess, (state, action) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    })
    .addCase(getAlleventsFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});
