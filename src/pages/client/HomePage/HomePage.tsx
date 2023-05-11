import './HomePage.scss';
import MenuHeader from '../../../components/MenuHeader/MenuHeader';
import InfoHeader from '../../../components/InfoHeader/InfoHeader';

const HomePage = () => {
  return (
    <>
      <div className="app-container">
        <MenuHeader />
        <h1>CRUD Application</h1>
        <div className="button_primary">Hello</div>
      </div>
    </>
  );
};

export default HomePage;
