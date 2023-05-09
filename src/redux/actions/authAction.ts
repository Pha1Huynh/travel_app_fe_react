import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../api/auth.api';

import { ILogin } from '../../interfaces/DTO/login.dto';
export const loginAction = createAsyncThunk('auth/login', async (data: ILogin, { rejectWithValue }) => {
  try {
    const response = await loginApi(data);

    return response.data.accessToken;
  } catch (e) {
    return rejectWithValue(e);
  }
});
