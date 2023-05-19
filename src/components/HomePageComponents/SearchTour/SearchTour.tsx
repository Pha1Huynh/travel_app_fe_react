import './SearchTour.scss';
import hotelImg from '../../../images/icons/hotel.webp';
import carImg from '../../../images/icons/car.webp';
import flightImg from '../../../images/icons/fly.webp';
import tripImg from '../../../images/icons/trip.webp';
import cruiseImg from '../../../images/icons/cruises.webp';
import activitiesImg from '../../../images/icons/activities.webp';
import Button from '../../Button/Button';
function SearchTour() {
  return (
    <>
      <div className="search-container">
        <div className="max-wide-1200">
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
        </div>

        <div className="search-form">
          <div className="max-wide-1200">
            <form className="row">
              <div className="form-group col-4">
                <label>Destination</label>
                <input className="form-element form-control " />
              </div>
              <div className="form-group col-2">
                <label>Check in</label>
                <input className="form-element form-control" />
              </div>
              <div className="form-group col-2">
                <label>Check out</label>
                <input className="form-element form-control" />
              </div>
              <div className="form-group col-1">
                <label>Adult</label>
                <input className="form-element form-control" />
              </div>
              <div className="form-group col-1">
                <label>Children</label>
                <input className="form-element form-control" />
              </div>
              <div className="form-group col-2">
                <Button text="Search" type="primary" size="m" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchTour;
