import { createReducer } from '@reduxjs/toolkit';
import { loginAction } from '../actions/authAction';
import { toast } from 'react-toastify';
interface AuthState {
  accessToken: string;
  isLoading: boolean;
  isLogin: boolean;
  errorMessage: string;
}

const initialState = { accessToken: '', isLoading: false, isLogin: false, errorMessage: '' } as AuthState;

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginAction.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(loginAction.fulfilled, (state, action) => {
    state.accessToken = action.payload;
    state.isLoading = false;
    state.isLogin = true;
    toast.success('Login success');
  });
  builder.addCase(loginAction.rejected, (state, action) => {
    state.isLoading = false;
    state.isLogin = false;
    toast.error('Login failed');
  });
});
