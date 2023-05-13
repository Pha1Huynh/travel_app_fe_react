import './HomePage.scss';

import AppHeader from '../../../components/AppHeader/AppHeader';
const HomePage = () => {
  return (
    <>
      <div className="app-container">
        <div className="header">
          <AppHeader />
        </div>
        <div className="main-content"></div>
      </div>
    </>
  );
};

export default HomePage;
