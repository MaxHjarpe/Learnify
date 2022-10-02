import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer__header">
            <h2>Name</h2>
            <div className="footer__header__item">
              <p>Max Hjärpe</p>
            </div>
          </div>
          <div className="footer__header">
            <h2>Email</h2>
            <div className="footer__header__item">
              <p>hjarpemax@gmail.com</p>
            </div>
          </div>
          <div className="footer__icon__container">
            <div className="link">
              <a href="https://www.linkedin.com/in/maxhjarpe/" target="_blank">
                <BsLinkedin className="footer__icon__container__icons" />
              </a>
            </div>
            <div className="link">
              <a href="https://github.com/MaxHjarpe" target="_blank">
                <BsGithub className="footer__icon__container__icons" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
