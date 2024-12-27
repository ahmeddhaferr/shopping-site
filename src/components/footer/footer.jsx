import React from "react";
import styles from "./footer.module.css";
import HomeBtn from "../../assets/homeBtn";
import HeartBtn from "../../assets/heartBtn";
import PaperBtn from "../../assets/paperBtn";
import CartBtn from "../../assets/cartBtn";
import PersonBtn from "../../assets/personBtn";
import Container from "../container/container";
import { Link } from "react-router";

export default function Footer({ open }) {
  return (
    <>
      {open && (
          <div className={styles.footer}>
            <Link to={"/Home"}>
              <HomeBtn />
            </Link>
            <Link >
              <HeartBtn />
            </Link>
            <Link>
              <PaperBtn />
            </Link>
            <Link>
              <CartBtn />
            </Link>
            <Link to={"/"}>
              <PersonBtn />
            </Link>
          </div>
      )}
    </>
  );
}
