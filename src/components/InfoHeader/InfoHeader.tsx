import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoHeader.scss';

import {
  faPinterest,
  faTwitter,
  faFacebook,
  faDribbble,
  faBehance,
  faLinkedinIn,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
function InfoHeader() {
  return (
    <>
      <div className="infoHeader-container">
        <div className="max-wide-1200">
          <div className="left">
            <p className="phone-info">+84 945 000 917</p>
            <div className="social-info">
              <Link to="">
                <FontAwesomeIcon icon={faPinterest} className="social-icon" />
              </Link>
              <Link to="">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </Link>
              <Link to="">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </Link>
              <Link to="">
                <FontAwesomeIcon icon={faDribbble} className="social-icon" />
              </Link>
              <Link to="">
                <FontAwesomeIcon icon={faBehance} className="social-icon" />
              </Link>
              <Link to="">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="login-and-register">
              <Link to="">Login</Link>
              <div className="stick"></div>
              <Link to="">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoHeader;
