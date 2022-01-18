import React from "react";
import style from "./LandingNavbar.module.css";
import companyLogo from "./../../../assets/logo.png";

const LandingNavBar = () => {
  return (
    <div className={style["navbar"]}>
      <div className={style["navbar__logo-box"]}>
        <img
          className={style["navbar__logo"]}
          src={companyLogo}
          alt="Cuvette"
        />
      </div>
    </div>
  );
};

export default LandingNavBar;
