import { IOfferItem } from '../../../interfaces/components/offerItem.interface';
import StarQuality from '../../StarQuality/StarQuality';
import offerItem1 from '../../../images/icons/offerItem1.webp';
import offerItem2 from '../../../images/icons/offerItem2.webp';
import offerItem3 from '../../../images/icons/offerItem3.webp';
import offerItem4 from '../../../images/icons/offerItem4.webp';
import './OfferItem.scss';
function OfferItem(props: IOfferItem) {
  const { image, name, price } = props;
  return (
    <>
      <div className="offerItem-container">
        <div className="left" style={{ backgroundImage: `url(${image})` }}>
          <p className="name">{name}</p>
        </div>
        <div className="right">
          <div className="top">
            <div className="price">
              <p className="price-number">${price}</p>
              <p className="price-name">per night</p>
            </div>
            <StarQuality />
            <p className="description">
              Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
              convallis tortor.
            </p>
            <div className="icon-list">
              <img src={offerItem1} alt="" />
              <img src={offerItem2} alt="" />
              <img src={offerItem3} alt="" />
              <img src={offerItem4} alt="" />
            </div>
          </div>
          <p className="read-more">Read more</p>
        </div>
      </div>
    </>
  );
}

export default OfferItem;
