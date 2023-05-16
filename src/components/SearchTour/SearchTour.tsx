import './SearchTour.scss';
import hotelImg from '../../images/icons/hotel.webp';
import carImg from '../../images/icons/car.webp';
import flightImg from '../../images/icons/fly.webp';
import tripImg from '../../images/icons/trip.webp';
import cruiseImg from '../../images/icons/cruises.webp';
import activitiesImg from '../../images/icons/activities.webp';
function SearchTour() {
  return (
    <>
      <div className="search-container">
        <div className="search-options">
          <span className="option-element">
            <img alt="" src={hotelImg} />
            HOTELS
          </span>
          <span className="option-element">
            <img alt="" src={carImg} />
            CAR
          </span>
          <span className="option-element">
            <img alt="" src={flightImg} />
            FLIGHT
          </span>
          <span className="option-element">
            <img alt="" src={tripImg} />
            TRIP
          </span>
          <span className="option-element">
            <img alt="" src={cruiseImg} />
            CRUISE
          </span>
          <span className="option-element">
            <img alt="" src={activitiesImg} />
            ACTIVITIES
          </span>
        </div>
        <div className="search-form">
          <div className="max-wide-1200 row">
            <div className="form-element">
              <label>Destination</label>
              <input className="search-input" />
            </div>
            <div className="form-element">
              <label>Check in</label>
              <input className="search-input" />
            </div>
            <div className="form-element">
              <label>Check out</label>
              <input className="search-input" />
            </div>
            <div className="form-element">
              <label>Check in</label>
              <input className="search-input" />
            </div>
            <div className="form-element">
              <label>Check in</label>
              <input className="search-input" />
            </div>
            <div className="form-element">
              <button className="button_primary button-size-m">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchTour;
