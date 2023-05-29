import './LoginPage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from "../../../components/Button/Button";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../redux/config/hooks';
import { loginAction } from '../../../redux/actions/authAction';
function LoginPage() {
    const dispatch = useAppDispatch();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [isLogin, setIsLogin] = useState(true);

    const [loginState, setLoginState] = useState<any>({
        email: '',
        password: ''
    });

    const handChangeInput = (type: string, data: any) => {
        let copyState = { ...loginState };
        copyState[type] = data;
        setLoginState({ ...copyState });
    };

    useEffect(() => {
        if (loginState && loginState.email.length > 0 && loginState.password.length > 3) {
            setIsButtonDisabled(false);
        }

    }, [loginState]);

    const handleLogin = async () => {


        await dispatch(loginAction({ userNameOrEmailAddress: loginState.email, password: loginState.password }))

    }
    return (<>
        {isLogin === true ? <div className="login-warpper">
            <div className="login-container">
                <div className="login-content">

                    <div className="login-title">
                        <div className="login-logo">
                            <FontAwesomeIcon icon={faMapLocationDot} />
                        </div>

                        <h1>Đăng nhập</h1>
                    </div>

                    <div className="login-group-input">


                        <div className="login-form-input-warper">
                            <input type="text" name="email" value={loginState.email} onChange={(e) => handChangeInput('email', e.target.value)} className='login-form-input' id="email" placeholder="Địa chỉ Email" />
                            {loginState.email.length <= 0 && <small className='text-input-error'>Email không đúng định dạng</small>}

                        </div>
                        <div className="login-form-input-warper">
                            <input type="text" name="password" value={loginState.password} onChange={(e) => handChangeInput('password', e.target.value)} className='login-form-input' id="password" placeholder="Mật khẩu" />
                            {loginState.password.length <= 3 && <small className='text-input-error'>Mật khẩu không đúng định dạng</small>}

                        </div>
                        {isButtonDisabled === true
                            ? <Button text="Đăng nhập" type="primary" size="l" isDisabled={true} />
                            : <Button text="Đăng nhập" type="primary" size="l" eventOnClick={handleLogin} />}



                        <div className="login-note-dontacc">
                            <p>Bạn chưa có tài khoản ? <p onClick={() => { setIsLogin(false) }} className='text-link text-color'>Đăng ký</p></p>
                            <p><Link to={'/'} className='text-color'>Quên mật khẩu</Link></p>
                        </div>
                        <div className="login-accep">
                            <p>Việc bạn tiếp tục sử dụng trang web đồng nghĩa bạn đồng ý.<br /><Link to={'#'} className='text-color'>Điều khoản sử dụng </Link> của chúng tôi</p>
                        </div>
                    </div>

                </div>
                <div className="login-about">
                    <Link to={'#'} className="about">Giới thiệu</Link><span className='space'>|</span>
                    <Link to={'#'} className="about">Youtube</Link><span className='space'>|</span>
                    <Link to={'#'} className="about">Facebook</Link>
                </div>
            </div>
        </div> : <div className="register-warpper">
            <div className="register-container">
                <div className="register-content">

                    <div className="register-title">
                        <div className="register-logo">
                            <FontAwesomeIcon icon={faMapLocationDot} />
                        </div>

                        <h1>Đăng ký</h1>
                    </div>

                    <div className="register-group-input">
                        <div className="register-wp-text"><span>Tên của bạn?</span></div>

                        <div className="register-form-input-warper">
                            <input type="text" name="" className='register-form-input' id="name" placeholder="Họ và tên của bạn" />
                        </div>
                        <div className="register-wp-text"><span>Email</span></div>
                        <div className="register-form-input-warper">
                            <input type="email" name="" className='register-form-input' id="" placeholder="Địa chỉ Email" />
                        </div>
                        <div className="register-form-input-warper">
                            <input type="password" name="" className='register-form-input' id="" placeholder="Mật khẩu" />
                            <small className="register-wp-text text-note">Gợi ý: Mật khẩu có ít nhất 8 kí tự</small>
                        </div>
                        <div className="register-form-input-warper register-wp-input-send-code register-authen-code-email">
                            <input type="email" name="" className='register-form-input' id="" placeholder="Nhập mã xác nhận" />
                            <div className="btn-send-code">
                                <small>Gửi mã</small>
                            </div>
                        </div>

                        <Button text="Đăng ký" type="primary" size="l" />
                        <div className="register-note-dontacc">
                            <p>Bạn đã có tài khoản ? <p onClick={() => { setIsLogin(true) }} className='text-link text-color'>Đăng nhập</p></p>
                        </div>
                        <div className="register-accep">
                            <p>Việc bạn tiếp tục sử dụng trang web đồng nghĩa bạn đồng ý.<br /><Link to={'#'} className='text-color'>Điều khoản sử dụng </Link> của chúng tôi</p>
                        </div>
                    </div>

                </div>
                <div className="register-about">
                    <Link to={'#'} className="about">Giới thiệu</Link><span className='space'>|</span>
                    <Link to={'#'} className="about">Youtube</Link><span className='space'>|</span>
                    <Link to={'#'} className="about">Facebook</Link>
                </div>
            </div>
        </div>}
    </>);
}

export default LoginPage;