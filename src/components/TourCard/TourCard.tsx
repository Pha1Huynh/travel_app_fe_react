import { ITourCard } from '../../interfaces/components/tourCard.interface';
import Button from '../Button/Button';
import StarQuality from '../StarQuality/StarQuality';
import './TourCard.scss';
function TourCard(props: ITourCard) {
  const { time, name, price, quality, image } = props;
  return (
    <>
      <div className="tourCard-container" style={{ backgroundImage: `url(${image})` }}>
        <div className="overlay"></div>
        <div className="front-overlay">
          <div className="tourCard-top">
            <p className="time">{time}</p>
          </div>
          <div className="tourCard-mid">
            <p className="name">{name}</p>
            <p className="price">From ${price}</p>
            <StarQuality />
          </div>
          <div className="tourCard-bot">
            <Button text="See more" type="linear" size="sm" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TourCard;
