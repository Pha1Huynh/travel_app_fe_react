import './HomePage.scss';

import AppHeader from '../../../components/AppHeader/AppHeader';
import Banner from '../../../components/Banner/Banner';
import HomeBanner from '../../../images/banner/home.webp';
const HomePage = () => {
  return (
    <>
      <div className="app-container">
        <div className="header">
          <AppHeader />
          <Banner image={HomeBanner} firstText="Discover" secondText="the world" isHaveButton={true} />
        </div>
        <div className="main-content"></div>
      </div>
    </>
  );
};

export default HomePage;
