import React from "react";
import style from "./Navbar.module.css";
import companyLogo from "./../../../assets/logo.png";

const NavBar = () => {
  return (
    <div className={style["navbar"]}>
      <div className={style["navbar__logo-box"]}>
        <img
          className={style["navbar__logo"]}
          src={companyLogo}
          alt="Cuvette"
        />
      </div>
      <div className={style["navbar__flex"]}></div>
      <nav>
        <ul className={style["navbar__nav"]}>
          <li>
            <a className={style["navbar__link"]} href="#">
              My Account
            </a>
          </li>
          <li>
            <a className={style["navbar__link"]} href="#">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <a href="#">
        <button className={`${style["btn--blue"]} ${style["btn"]}`}>
          +New Api
        </button>
      </a>
    </div>
  );
};

export default NavBar;
