import './navigation.styles.scss';
import { Fragment, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navigation = () => {
    const [show,setShow] = useState(false);
    const controlNavbar = () => {
        if(window.scrollY>100) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',controlNavbar);
        // return () => {
        //     window.removeEventListener('scroll',controlNavbar);
        // }

    },[]);
    return (
       <Fragment>
        <div className={`nav ${show && 'nav-show'}`}>
            <div className="logo">
                <img src={logo} alt="logoimg" />
            </div>
            <div className="nav-links">
            <Link className='nav-link' to='/'>
                Home
            </Link>
            <Link className='nav-link' to='/converter'>
                Crypto Converter
            </Link>
            <Link className='nav-link' to='/'>
                Charts
            </Link>
            </div>
            
        </div>

        <Outlet />
           
       </Fragment>
       
       
    );

}

export default Navigation;