import React from "react";
import Logo from "../assets/logo.png";
import * as FaIcons from "react-icons/fa";

const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav__Left">
                        <img className="nav__left__logo" src={Logo} alt="Logo" />
                        <ul className="nav__left__list">
                            <div className="nav__left__list__item">Categories</div>
                            <div className="nav__left__list__item">Courses</div>
                        </ul>
                </div>
                <div className="nav__right">
                    <form className="nav__right__search">
                        <input 
                            type="text" 
                            className="nav__right__search__input" 
                            placeholder="Search Course"
                        />
                        <button className="nav__right__search__button">
                            <FaIcons.FaSearch/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Navigation;