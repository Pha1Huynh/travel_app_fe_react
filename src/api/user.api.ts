import axios from '../axios';
import { IUser } from '../interfaces/entities/user.entities';

import { CreateUserResponse } from '../interfaces/response/allResponse.interface';

export const getAllUser = (token: string) => {
  return axios.get('/user', { headers: { Authorization: `Bearer ${token}` } });
};
export const deleteAUser = (id: number, token: string) => {
  return axios.delete(`/user/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } });
};
export const apiCreateUser = (data: IUser, token: string): Promise<CreateUserResponse> => {
  return axios.post('/user/create', data, { headers: { Authorization: `Bearer ${token}` } });
};
export const apiUpdateUser = (data: IUser, token: string): Promise<CreateUserResponse> => {
  return axios.patch('/user/update', data, { headers: { Authorization: `Bearer ${token}` } });
};
