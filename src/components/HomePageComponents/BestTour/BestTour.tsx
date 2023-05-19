import './BestTour.scss';
import TourCard from '../TourCard/TourCard';
import card1 from '../../../images/tourCard/card1.webp';

function BestTour() {
  return (
    <>
      <div className="bestTour-container">
        <div className="max-wide-1200">
          <p className="title">We have the best tours</p>
          <p className="description">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In
            faucibus massa arcu, vitae cursus mi hendrerit nec.
          </p>
          <div className="tour-list">
            <TourCard time="May 15th - July 01st" name="Mauritius" price={1450} quality={4} image={card1} />
            <TourCard time="May 15th - July 01st" name="Mauritius" price={1450} quality={4} image={card1} />
            <TourCard time="May 15th - July 01st" name="Mauritius" price={1450} quality={4} image={card1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BestTour;
