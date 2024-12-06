import { createSlice } from "@reduxjs/toolkit";
import tokenReducer from '../reducers/tokenReducer';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    token: tokenReducer,
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearForm: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
      state.error = '';
    },
  },
});

export const { setName, setEmail, setPassword, setConfirmPassword, setError, clearForm } = authSlice.actions;

export default authSlice.reducer;
