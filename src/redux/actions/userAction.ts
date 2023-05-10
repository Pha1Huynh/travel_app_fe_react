import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUser, deleteAUser, apiCreateUser, apiUpdateUser } from '../../api/user.api';
import { IUser } from '../../interfaces/entities/user.entities';

export const getAllUserAction = createAsyncThunk(
  'user/getAll',
  async (data: { token: string }, { rejectWithValue }) => {
    try {
      if (!data.token) {
        throw Error('Missing token');
      }
      const response = await getAllUser(data.token);
      console.log('check response getalluser', response);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
export const deleteUserAction = createAsyncThunk(
  'user/delete',
  async (data: { id: number; token: string }, { rejectWithValue }) => {
    try {
      const reponse = await deleteAUser(data.id, data.token);
      return data.id;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const createUserAction = createAsyncThunk(
  'user/create',
  async (data: { userData: IUser; token: string }, { rejectWithValue }) => {
    try {
      const response = await apiCreateUser(data.userData, data.token);
      console.log('check response create user', response);
      if (response.statusCode && (response.statusCode >= 300 || response.statusCode <= 100)) {
        rejectWithValue(response.message);
      } else {
        return response.data;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
export const updateUserAction = createAsyncThunk(
  'user/update',
  async (data: { userData: IUser; token: string }, { rejectWithValue }) => {
    try {
      const response = await apiUpdateUser(data.userData, data.token);
      if (response.statusCode && (response.statusCode >= 300 || response.statusCode <= 100)) {
        rejectWithValue(response.message);
      } else {
        return response.data;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
