import './navigation.styles.scss';
import { Fragment, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navigation = () => {
  const [show, setShow] = useState(false);
  // Logic to remove navlinks from display when scrolled more than 100px
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
  }, []);
  return (
    <Fragment>
      {/* show is a bool that controls if the nav-show class will be included */}
      <div className={`nav ${show && 'nav-show'}`}>
        <div className='logo'>
          <img src={logo} alt='logoimg' />
        </div>
        <div className='nav-links'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/converter'>
            Currency Converter
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
