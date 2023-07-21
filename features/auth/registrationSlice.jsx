// src/features/registrationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registrationRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    registrationSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    registrationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registrationRequest, registrationSuccess, registrationFailure } =
  registrationSlice.actions;

export default registrationSlice.reducer;
