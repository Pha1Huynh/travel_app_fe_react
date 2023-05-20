import './BestOffer.scss';
import OfferItem from '../OfferItem/OfferItem';
import offerItem1 from '../../../images/offerItem/offerItem1.webp';
function BestOffer() {
  return (
    <>
      <div className="bestOffer-container">
        <div className="max-wide-1200">
          <p className="title">THE BEST OFFERS WITH ROOMS</p>
          <div className="offer-list">
            <OfferItem image={offerItem1} name="Grand Castle" price={75} />
            <OfferItem image={offerItem1} name="Grand Castle" price={75} />
            <OfferItem image={offerItem1} name="Grand Castle" price={75} />
            <OfferItem image={offerItem1} name="Grand Castle" price={75} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BestOffer;
