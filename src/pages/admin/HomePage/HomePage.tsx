import { getAllUser } from '../../../api/user.api';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../../redux/config/store';
import './HomePage.scss';
import ListUser from '../../../components/ListUser/ListUser';
import { useAppSelector } from '../../../redux/config/hooks';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const { isLogin } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate('/authenticate');
    }
  }, []);
  return (
    <>
      <div className="app-container">
        <h1>CRUD Application</h1>

        <ListUser />
      </div>
    </>
  );
};

export default HomePage;
