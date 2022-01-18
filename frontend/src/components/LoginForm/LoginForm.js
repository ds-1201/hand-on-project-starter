import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles["loginForm"]}>
      <h2 className={styles["loginForm__title"]}>Login To Dashboard</h2>
      <form>
        <div className={styles["loginForm__formControl"]}>
          <input type="text" placeholder="Email address" />
        </div>
        <div className={styles["loginForm__formControl"]}>
          <input type="text" placeholder="Password" />
        </div>
        <button
          type="submit"
          className={`${styles["btn--blue"]} ${styles["btn"]}`}
        >
          Login/Signup
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
