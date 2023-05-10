import { getAllUser } from '../../../api/user.api';
import React, { useEffect } from 'react';
import { logoutAction } from '../../../redux/actions/authAction';
import './HomePage.scss';
import ListUser from '../../../components/ListUser/ListUser';
import { useAppSelector, useAppDispatch } from '../../../redux/config/hooks';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const { isLogin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate('/authenticate');
    }
  }, []);
  const handleLogout = async () => {
    await dispatch(logoutAction());
    navigate('/authenticate');
  };
  return (
    <>
      <div className="app-container">
        <button className="btn btn-warning" onClick={() => handleLogout()}>
          Logout
        </button>
        <h1>CRUD Application</h1>

        <ListUser />
      </div>
    </>
  );
};

export default HomePage;
