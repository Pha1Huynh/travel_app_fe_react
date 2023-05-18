import './LoginPage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from "../../../components/Button/Button";
import { Link } from 'react-router-dom';

function LoginPage() {
    return ( <>
    <div className="login-warpper">
        <div className="login-container">
            <div className="login-content">

                <div className="login-title">
                    <div className="login-logo">
                        <FontAwesomeIcon icon={faMapLocationDot} />       
                    </div>
                 
                    <h1>Đăng nhập</h1>
                </div>
               
                <div className="login-group-input">  
                    <div className="login-wp-text"><span>Email</span></div>
                                
                    <div className="login-form-input-warper">
                        <input type="text" name="" className='login-form-input' id="email" placeholder="Địa chỉ Email"/>
                    </div>       
                    <div className="login-form-input-warper">
                        <input type="text" name="" className='login-form-input' id="password" placeholder="Mật khẩu"/>
                    </div>
                    
                    <Button text="Đăng nhập" type="primary" size="l"/>
                    <div className="login-note-dontacc">
                        <p>Bạn chưa có tài khoản ? <Link to={'#'} className='text-color'>Đăng ký</Link></p>
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
    </div>
    </> );
}

export default LoginPage;