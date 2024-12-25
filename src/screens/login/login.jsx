import React from "react";
import Container from "../../components/container/Container";
import styles from "./login.module.css";
import LoginBackground from "../../assets/LoginBackground";
import Heart from "../../assets/blackHeart.svg";
import CostumeButton from "../../components/costumeButton/costumeButton";
import { Link } from "react-router";
export default function Login() {
  return (
    <div>
      <LoginBackground className={styles.Background} />

      <Container>
        <div className={styles.login}>
          <h1>Login</h1>
          <div className={styles.heart}>
            <p>Good to see you back!</p>
            <img src={Heart} alt="" />
          </div>
          <input type="text" placeholder="Email" />
          <CostumeButton name="next" mgtop="45px" />
          <Link to={"/"}>
            <p className={styles.cancel}>Cancel</p>
          </Link>
        </div>
      </Container>
    </div>
  );
}
