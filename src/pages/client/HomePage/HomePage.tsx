import './HomePage.scss';

import AppHeader from '../../../components/HomePageComponents/AppHeader/AppHeader';
import HomeBanner from '../../../images/banner/home.webp';
import SearchTour from '../../../components/HomePageComponents/SearchTour/SearchTour';
import BestTour from '../../../components/HomePageComponents/BestTour/BestTour';
import Package from '../../../components/HomePageComponents/Package/Package';
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
