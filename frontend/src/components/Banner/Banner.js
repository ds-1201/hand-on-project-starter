import React from "react";
import styles from "./Banner.module.css";
// import bannerBack from "./../../assets/banner-img.png";
import bannerImg from "./../../assets/banner.png";

const Banner = () => {
  return (
    <div className={styles["banner"]}>
      <div className={`${styles["banner__img-box"]}`}>
        <img
          src={bannerImg}
          alt="background-remover-img"
          className={styles["banner__img"]}
        />
      </div>
      <div className={`${styles["banner__content-box"]}`}>
        <h2>
          <span className={`${styles["banner__title1"]}`}>
            Background IMAGE Remove
          </span>
          <span className={`${styles["banner__title2"]}`}>
            100% automatic and free
          </span>
        </h2>
        <button className={`${styles["btn"]} ${styles["btn--black"]}`}>
          View App
        </button>
      </div>
    </div>
  );
};

export default Banner;
