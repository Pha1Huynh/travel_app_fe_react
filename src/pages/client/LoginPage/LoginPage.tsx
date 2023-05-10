import './LoginPage.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/config/hooks';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../../redux/actions/authAction';
function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<any>({
    userNameOrEmailAddress: '',
    password: '',
  });
  const { isLogin } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, []);
  const handleOnChangeInput = (type: string, data: any) => {
    let copyState = { ...loginState };
    copyState[type] = data;
    setLoginState({ ...copyState });
  };
  const handleLogin = async () => {
    let token = await dispatch(loginAction(loginState));

    if (token) {
      navigate('/');
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h3 className="title">LOGIN</h3>
          <div className="form-group">
            <label htmlFor="">Username or email</label>
            <input
              className="form-control"
              name="userNameOrEmailAddress"
              value={loginState.userNameOrEmailAddress}
              onChange={(e) => handleOnChangeInput('userNameOrEmailAddress', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              className="form-control"
              name="password"
              value={loginState.password}
              onChange={(e) => handleOnChangeInput('password', e.target.value)}
            />
          </div>
          <button className="btn btn-primary my-2" onClick={() => handleLogin()}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
