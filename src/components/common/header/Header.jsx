import React, {useState} from 'react';
import Head from './Head';
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

    const [click, setClick] = useState(false)

  return (
    <>
      <Head/>
      <header>
        <nav className='flex'>
        <ul className={click ? "mobile-nav" : "flex "} onClick={() => setClick(false)}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/team'>Team</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
