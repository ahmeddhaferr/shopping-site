import React from "react";
import styles from "./Starter.module.css";
import Container from "../../components/container/container.jsx";
import Bag from "../../assets/bag.jsx";
import CostumeButton from "../../components/costumeButton/costumeButton.jsx";
import arrow from "../../assets/RightArrow.svg";
import { Link } from "react-router";
export default function Starter() {




  return (
    <div>
      <Container>
        <div className={styles.starter}>
          <div className={styles.Bag}>
            <Bag />
          </div>
          <h1>Shoppe</h1>
          <h5>Beautiful eCommerce UI Kit for your online store</h5>
          <div style={{marginTop:"130px"}}>
          <Link to={"/Rigister"}>
          <CostumeButton name="Let's get started" Width="300px"/></Link>
          </div>
          
          <div className={styles.haveAccount}>
            <p>I already have an account</p>
            <Link to={"/Login"}>
              <img src={arrow} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
