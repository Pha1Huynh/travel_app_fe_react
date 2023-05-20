import Button from '../../Button/Button';
import StarQuality from '../../StarQuality/StarQuality';
import './Package.scss';
import PackageImg from '../../../images/package/packageImg.webp';
function Package() {
  return (
    <>
      <div className="package-container" style={{ background: `var(--bg-linear-color)` }}>
        <div className="overlay" style={{ backgroundImage: `url(${PackageImg})` }}></div>
        <div className="max-wide-1200">
          <div className="package-content">
            <p className="package-title">MALDIVES DELUXE PACKAGE</p>
            <StarQuality />
            <p className="package-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti.
              In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices,
              tortor augue gravida lectus, et efficitur enim justo vel ligula.
            </p>
            <Button text="Book now" type="linear" size="sm" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
