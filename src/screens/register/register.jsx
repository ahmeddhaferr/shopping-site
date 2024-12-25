import React from "react";
import styles from "./register.module.css";
import Container from "../../components/container/container";
import Background from "../../assets/rigisterBackground.jsx";
import Camera from "../../assets/camera.jsx";
import CostumeButton from "../../components/costumeButton/costumeButton.jsx";

export default function register() {
  return (
    <>
      <Container>
        <Background />
        <div className={styles.content}>
          <h1>Create Account</h1>
          <div className={styles.camera}>
            <Camera />
          </div>
          <div className={styles.inputSection}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className={styles.numInput}></div>
          </div>
          <CostumeButton name="Done" mgtop="52px" />
        </div>
      </Container>
    </>
  );
}
