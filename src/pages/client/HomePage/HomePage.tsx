import './HomePage.scss';

import AppHeader from '../../../components/AppHeader/AppHeader';
import HomeBanner from '../../../images/banner/home.webp';
import SearchTour from '../../../components/HomePageComponents/SearchTour/SearchTour';
import BestTour from '../../../components/HomePageComponents/BestTour/BestTour';
import Package from '../../../components/HomePageComponents/Package/Package';
import BestOffer from '../../../components/HomePageComponents/BestOffer/BestOffer';
import Testimonials from '../../../components/HomePageComponents/Testimonials/Testimonials';
const HomePage = () => {
  return (
    <>
      <div className="app-container">
        <AppHeader image={HomeBanner} firstText="Discover" secondText="the world" isHaveButton={true} />
        <SearchTour />
        <BestTour />
        <Package />
        <BestOffer />
        <Testimonials />
        <div className="main-content"></div>
      </div>
    </>
  );
};

export default HomePage;
