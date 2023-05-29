import axios from '../axios';
import { ILogin } from '../interfaces/DTO/login.dto';
import { LoginResponse } from '../interfaces/response/allResponse.interface';

export const loginApi = (data: ILogin): Promise<LoginResponse> => {
  return axios.post('/auth/login', data);
};
