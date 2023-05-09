import HomePage from '../pages/admin/HomePage/HomePage';
import LoginPage from '../pages/client/LoginPage/LoginPage';
export const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/authenticate', component: LoginPage },
];
