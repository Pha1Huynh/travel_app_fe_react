import { createReducer } from '@reduxjs/toolkit';

import { getAllUserAction, deleteUserAction, createUserAction, updateUserAction } from '../actions/userAction';
import { toast } from 'react-toastify';
import { IUser } from '../../interfaces/entities/user.entities';

interface UserState {
  listUser: IUser[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState = { listUser: [], isLoading: false, errorMessage: '' } as UserState;

export const userReducer = createReducer(initialState, (builder) => {});
