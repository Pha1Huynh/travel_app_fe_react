import InfoHeader from '../InfoHeader/InfoHeader';
import MenuHeader from '../MenuHeader/MenuHeader';
import './AppHeader.scss';
import Banner from '../Banner/Banner';

import { IBanner } from './../../interfaces/components/banner.interface';
function AppHeader(props: IBanner) {
  return (
    <>
      <div className="appHeader-container">
        <InfoHeader />
        <MenuHeader />
        <Banner
          image={props.image}
          firstText={props.firstText}
          secondText={props.secondText}
          isHaveButton={props.isHaveButton}
        />
      </div>
    </>
  );
}

export default AppHeader;
