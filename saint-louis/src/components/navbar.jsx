import {useRef, useEffect, useState} from 'react'
import {Link} from 'react-scroll'
import{ FaBars, FaTimes } from 'react-icons/fa'

import logo from '../assets/logo.png';
import facebook from '../assets/facebook-icon-transparent-png_18930476 1.png';
import whatsapp from '../assets/whatsapp-icon-png-whatsapp-transparent_18930748 1.png';
import instagram from '../assets/instagram-icon-transparent_18930413 1.png';


export const Navbar=()=>{
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const handleLinkClick = () => {
        navRef.current.classList.remove("responsive_nav");
    }
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
      // Listen for scroll events and update the active section
      const handleScroll = () => {
          const sections = ['header', 'about','services','projects','contact','foot'];
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          for (const section of sections) {
              const element = document.getElementById(section);
              if (element && element.offsetTop <= scrollPosition) {
                  setActiveSection(section);
              }
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    <div className='navbar'>
        <div>
            <a href='#'><img src={logo} alt="logo-page" className='logo'/></a>
        </div>
       
        <div className="nav">
            <nav className="navigation" ref={navRef}>
                <Link
                    to="header"
                    smooth={true}
                    duration={100}
                    onClick={handleLinkClick}
                    className={`a  ${activeSection === 'header' ? 'active' : ''}`}
                >
                    Home
                </Link>
                
                <Link
                    to="about"
                    smooth={true}
                    duration={100}
                    onClick={handleLinkClick}
                    className={`a  ${activeSection === 'about' ? 'active' : ''}`}
                >
                    About
                </Link>

                <Link
                    to="services"
                    smooth={true}
                    duration={100}
                    onClick={handleLinkClick}
                    className={`a ${activeSection === 'services' ? 'active' : ''}`}
                >
                Events
                </Link>
                <button  className='nav-btn nav-close-btn' onClick={handleLinkClick}> 
                <FaTimes/>
                </button>
            </nav>
        <button className='nav-btn' onClick={showNavbar}> 
              <FaBars/>
        </button>

        <div className='social'> 
            <a href='https://facebook.com'><img src={facebook} alt="facebook-icon" /></a>
            <a href='https://instagram.com'><img src={instagram} alt="instagram-icon" /></a>
            <a href='https://whatsapp.com'><img src={whatsapp} alt="whatsapp-icon" /></a>
        </div>
        </div>
        
    </div>
  )
}
