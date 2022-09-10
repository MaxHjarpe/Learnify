import React, { useState } from "react";
import Logo from "../assets/logo.png";
import * as FaIcons from "react-icons/fa";

const Navigation = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav__left">
          <div className="nav__left__hamburger">
            <FaIcons.FaBars onClick={showSidebar} />
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="cancel">
                  <FaIcons.FaChevronLeft />
                </li>

                <li className="nav-menu-items__header">Navigation</li>
                <li>Categories</li>
                <li>My Courses</li>
              </ul>
            </nav>
          </div>
          <img src={Logo} className="nav__left__logo" alt="logo" />

          <ul className="nav__left__list">
            <li className="nav__left__list__item">Categories</li>
            <li className="nav__left__list__item">Courses</li>
          </ul>
        </div>
        <div className="nav__right">
          <form className="nav__right__search">
            <input
              type="text"
              className="nav__right__search__input"
              placeholder="Search Courses..."
            />
            <button className="nav__right__search__button">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navigation;