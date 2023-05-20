import { IBanner } from '../../../interfaces/components/banner.interface';
import './Banner.scss';

import Button from '../../Button/Button';
function Banner(props: IBanner) {
  const { image, firstText, secondText, isHaveButton } = props;
  return (
    <>
      <div
        className="banner-container"
        style={{ backgroundImage: `linear-gradient(rgba(64, 6, 97, 0.4), rgba(64, 6, 97, 0.4)), url(${image})` }}
      >
        <div className="banner-text">
          <p className="first-text">{firstText}</p>
          <p className="second-text">{secondText}</p>
          {isHaveButton && <Button text="Explore Now" type="linear" size="l" />}
        </div>
      </div>
    </>
  );
}

export default Banner;
