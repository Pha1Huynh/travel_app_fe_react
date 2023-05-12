import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import './InfoHeader.scss';
function InfoHeader() {
  return (
    <>
      <div className="infoHeader-container">
        <p className="phone-info"></p>
        <div className="social-info">
          <Link to="">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default InfoHeader;
