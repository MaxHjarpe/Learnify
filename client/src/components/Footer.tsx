import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div >
          <div className="footer__header">
            <h3>Name</h3>
            <div className="footer__header__item">
              <p>Max Hjärpe</p>
            </div>
          </div>
          <div className="footer__header">
            <h3>Email</h3>
            <div className="footer__header__item">
              <p >hjarpemax@gmail.com</p>
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
