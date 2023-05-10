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

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllUserAction.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(getAllUserAction.fulfilled, (state, action) => {
    (state.isLoading = false), (state.listUser = action.payload);
  });
  builder.addCase(getAllUserAction.rejected, (state, action) => {
    state.isLoading = false;
  });

  builder.addCase(deleteUserAction.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(deleteUserAction.fulfilled, (state, action) => {
    let copyState = { ...state };
    let newListUser = copyState.listUser.filter((item) => {
      return item.id !== action.payload;
    });
    state.listUser = newListUser;
    toast.success('Delete success');
  });

  builder.addCase(createUserAction.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(createUserAction.fulfilled, (state, action) => {
    state.listUser.push(action.payload);
    state.isLoading = false;
    toast.success('Add a new user success');
  });
  builder.addCase(createUserAction.rejected, (state, action) => {
    state.isLoading = false;
    toast.error('Add a new user Failed');
  });

  builder.addCase(updateUserAction.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(updateUserAction.fulfilled, (state, action) => {
    state.isLoading = true;
    const index = state.listUser.findIndex((user) => user.id === action.payload.id);
    if (index >= 0) {
      state.listUser[index] = action.payload;
      state.isLoading = false;
      toast.success('Update User success');
    }
  });
  builder.addCase(updateUserAction.rejected, (state, action) => {
    state.isLoading = false;
  });
});
