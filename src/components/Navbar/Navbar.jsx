import React, { useState } from "react";
import './navbar.css';
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import nav_img from '../../assets/images/nav-img.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    const [activeLink, setActiveLink] = useState("home");
    // Fonction pour fermer le menu
  const closeMenu = () => setShowMenu(false);
  return (
    <header className="header" id="header">
      <div className="container nav__container">
        <a href="#" className="nav__logo">
          Juice<span>ables</span> 
        </a>
        <div className={`nav__menu ${showMenu ? "active" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item" onClick={closeMenu}>
              <a href="#home" className={`nav__link ${
                  activeLink === "home" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("home")}
              
              >
                Home
              </a>
            </li>
            <li className="nav__item" onClick={closeMenu}>
              <a href="#about"
              className={`nav__link ${
                  activeLink === "about" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("about")}
              >
                About
              </a>
            </li>
            <li className="nav__item" onClick={closeMenu}>
              <a href="#services"
              className={`nav__link ${
                  activeLink === "services" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("services")}
              >
                Services
              </a>
            </li>
            <li className="nav__item" onClick={closeMenu}>
              <a href="#contact"
              className={`nav__link ${
                  activeLink === "contact" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={handleShowMenu}>
            <RiCloseLine />
          </div>
          <img src={nav_img} alt="nav-image" className="nav-img" />
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={handleShowMenu}>
          <RiMenuLine />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
