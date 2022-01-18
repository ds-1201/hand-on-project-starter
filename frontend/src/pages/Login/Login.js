import React from "react";
import styles from "./Login.module.css";
import Navbar from "./../../components/common/LandingNavbar/LandingNavbar";
import LoginForm from "./../../components/LoginForm/LoginForm";
import loginImg from "./../../assets/login-img.png";

const Login = () => {
  return (
    <div className={styles.login}>
      <Navbar />
      <div className={styles["login__main"]}>
        <div className={styles["login__left"]}>
          <div className={styles["login__content"]}>
            <img
              src={loginImg}
              alt="Login-logo"
              className={styles["login__logo"]}
            />
            <h1>
              <span className={styles["login__title1"]}>Welcome to your</span>
              <span className={styles["login__title2"]}>Dashboard</span>
            </h1>
            <h3 className={styles["login__sub"]}>
              Your uploaded APIs will be displayed here once you login to your
              account
            </h3>
          </div>
        </div>
        <div className={styles["login__right"]}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
