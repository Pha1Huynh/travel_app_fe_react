import InfoHeader from '../InfoHeader/InfoHeader';
import MenuHeader from '../MenuHeader/MenuHeader';
import './AppHeader.scss';
function AppHeader() {
  return (
    <>
      <div className="appHeader-container">
        <InfoHeader />
        <MenuHeader />
      </div>
    </>
  );
}

export default AppHeader;
