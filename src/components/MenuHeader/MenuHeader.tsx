import './MenuHeader.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
function MenuHeader() {
  const [searchInput, setSearchInput] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 0 && isScroll === false) {
        setIsScroll(true); // Nếu lăn chuột xuống và chiều cao hiện tại của header là 156px, thì giảm chiều cao xuống 30px
      } else if (scrollY === 0) {
        setIsScroll(false); // Nếu quay về vị trí ban đầu và chiều cao hiện tại của header là 156--36, thì tăng chiều cao lên 50px
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScroll]);
  return (
    <>
      <div className={isScroll ? 'menuHeader-container scroll' : 'menuHeader-container'}>
        <div className="max-wide-1200">
          <div className="logo">
            <img src={logo} alt="" className="logo_img" />
            <p className="logo_name">TRAVELIX</p>
          </div>
          <div className="menu-list">
            <Link to="" className="menu-element active ">
              Home
            </Link>
            <Link to="" className="menu-element">
              About
            </Link>
            <Link to="" className="menu-element">
              Offer
            </Link>
            <Link to="" className="menu-element">
              New
            </Link>
            <Link to="" className="menu-element">
              Contact
            </Link>
          </div>
          <div className="search">
            {searchInput ? (
              <div className="search-form">
                <input className="form-control" />
                <button className="button">Find</button>
                <button
                  className="button"
                  onClick={() => {
                    setSearchInput(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <FontAwesomeIcon
                icon={faSearch}
                className="search-icon"
                onClick={() => {
                  setSearchInput(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuHeader;
