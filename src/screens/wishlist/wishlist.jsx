import React, { useState } from "react";
import styles from "./wishlist.module.css";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useMediaQuery } from "react-responsive";

export default function Wishlist() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });
 
    
  
  return (
    <>
      <Container MaxWidth="1850px">
        <Header open={isSmallScreen ? false : true} />
        <Footer open={isSmallScreen ? true : false} />
        <Container MaxWidth="750px">
        <div className={styles.body}>
            ohiolwerffg
        </div>
        </Container>
      </Container>
    </>
  );
}
