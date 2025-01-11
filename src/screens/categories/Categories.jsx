import React from "react";
import styles from "./Categories.module.css";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useMediaQuery } from "react-responsive";
export default function Categories() {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });

  return (
    <Container MaxWidth="1850px">
      <Header open={!isSmallScreen} />
      <Footer open={isSmallScreen} />
    </Container>
  );
}
