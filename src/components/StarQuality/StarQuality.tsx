import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StarQuality.scss';
function StarQuality() {
  return (
    <>
      <div className="startQuality-container">
        <FontAwesomeIcon className="start-icon" icon={faStar} />
        <FontAwesomeIcon className="start-icon" icon={faStar} />
        <FontAwesomeIcon className="start-icon" icon={faStar} />
        <FontAwesomeIcon className="start-icon" icon={faStar} />
        <FontAwesomeIcon className="start-icon" icon={faStar} />
      </div>
    </>
  );
}

export default StarQuality;
