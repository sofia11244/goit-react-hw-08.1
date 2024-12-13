import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from './authSlice';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      // API çağrısı
      const response = await fetch('https://connections-api.goit.global/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const { token } = data;

      // Token'i kaydet
      thunkAPI.dispatch(setToken(token));

      return token; // Başarılıysa token döner.
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Hata durumunda
    }
  }
);
