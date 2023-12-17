import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

const NavBar = () => {
  

return (
  <nav>
    <div className={`nav-bar`}>
      <i className='bx bx-menu sidebarOpen'/>
      <span className="logo navLogo"><a href="/">betterByte</a></span>
      <div className="menu">
        <div className="logo-toggle">
          <span className="logo"><a href="#">SurferSoftware</a></span>
          <i className='bx bx-x siderbarClose'></i>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a  href="/about-me">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="darkLight-searchBox">
        <div className="dark-light">
          <Link to={"https://www.upwork.com/freelancers/~019974bc76858e091b"}>
            <i className='bx bx-cart moon'></i>
          </Link>
          
        </div>

      </div>
    </div>
  </nav>
)};

export default NavBar;
