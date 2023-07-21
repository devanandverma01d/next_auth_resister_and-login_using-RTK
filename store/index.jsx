

import registrationReducer from '../features/auth/registrationSlice';
import loginReducer from '../features/auth/loginSlice'; // <-- Import the login reducer
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,  // <-- Add the login reducer to the root reducer
  },
});

export default store;

