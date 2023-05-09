import axios from 'axios';
import { useAppSelector } from './redux/config/hooks';
import store from './redux/config/store';
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080',
});

export default instance;
