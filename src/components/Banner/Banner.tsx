import { IBanner } from '../../interfaces/components/banner.interface';
import './Banner.scss';
import EllipsisIcon from '../EllipsisIcon/EllipsisIcon';
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
          {isHaveButton && (
            <button className="button_linear button-size-l">
              Explore Now <EllipsisIcon />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Banner;
