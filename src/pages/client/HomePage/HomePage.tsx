import './HomePage.scss';

import AppHeader from '../../../components/AppHeader/AppHeader';
import HomeBanner from '../../../images/banner/home.webp';
import SearchTour from '../../../components/SearchTour/SearchTour';
import BestTour from '../../../components/BestTour/BestTour';
import Package from '../../../components/Package/Package';
const HomePage = () => {
  return (
    <>
      <div className="app-container">
        <AppHeader image={HomeBanner} firstText="Discover" secondText="the world" isHaveButton={true} />
        <SearchTour />
        <BestTour />
        <Package />
        <div className="main-content"></div>
      </div>
    </>
  );
};

export default HomePage;
