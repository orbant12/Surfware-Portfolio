import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/NavBar.css';

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState(''); // ['home', 'about', 'portfolio', 'services', 'contact'
  const navRef = useRef(null);

  const { id } = useParams();

  const navBarActiveSet = () => {
    if (id == 'about-me') {
      setActivePage('about');
    } else if (id === 'portfolio') {
      setActivePage('portfolio');
    } else if (id === 'services') {
      setActivePage('services');
    } else if (id === 'contact') {
      setActivePage('contact');
    } else if (id === '/') {
      setActivePage('home');
    }
    console.log(id)
    
  }

  useEffect(() => {
    navBarActiveSet();
  }, [id]);

  useEffect(() => {
    
    const handleOutsideClick = (e) => {
      const clickedElm = e.target;
      if (
        navRef.current &&
        !navRef.current.contains(clickedElm) &&
        !clickedElm.classList.contains('sidebarOpen') &&
        !clickedElm.classList.contains('menu')
      ) {
        setSidebarOpen(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

return (
  <nav ref={navRef}>
    <div className={`nav-bar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <i className='bx bx-menu sidebarOpen' onClick={() => setSidebarOpen(!isSidebarOpen)} />
      <span className="logo navLogo"><a href="/">betterByte</a></span>
      <div className="menu">
        <div className="logo-toggle">
          <span className="logo"><a href="#">SurferSoftware</a></span>
          <i className='bx bx-x siderbarClose'></i>
        </div>
        <ul className="nav-links">
          <li><a  href="/">Home</a></li>
          <li><a  href="/about-me">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="darkLight-searchBox">
        <div className="dark-light">
          <i className='bx bx-cart moon'></i>
          <i className='bx bx-sun sun'></i>
        </div>

      </div>
    </div>
  </nav>
)};

export default NavBar;
