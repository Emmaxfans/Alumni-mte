import { useState } from "react";
import "./nav.css"
import alumnilogo from "../../assets/images/nav/AMTES-LOGO(256) 1.png"
import { Link } from "react-router-dom";

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  return (
    <>

<div className="page-wrapper">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
          <div className="alumni">
    <img src={alumnilogo} alt="Company Logo"/>
    <p>AMTES</p>
    </div>
          <div className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav no-search ${isMenuOpen ? 'mobile-nav' : ''}`}>
            <li className="nav-item"><Link to='/'>Gallery</Link></li>
            <li className="nav-item"><Link to='/'>Lastest News</Link></li>
            <li className="nav-item"><Link to='/signin'>Login</Link></li>
            <li className="nav-item"><Link to='/signup'>Register</Link></li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Nav