import React from "react";
import styles from "./footer.module.css";
import HomeBtn from "../../assets/homeBtn";
import HeartBtn from "../../assets/heartBtn";
import PaperBtn from "../../assets/paperBtn";
import CartBtn from "../../assets/cartBtn";
import PersonBtn from "../../assets/personBtn";
import { Link, useLocation } from "react-router";

export default function Footer({ open ,zee=0}) {
  let { pathname } = useLocation();
  return (
    <>
      {open && (
        <div className={styles.footer} style={{zIndex:zee}}>
          <Link to={"/Home"}>
            <HomeBtn
              color={pathname === "/Home" ? "black" : "#004CFF"}
              line={pathname === "/Home" ? "3" : "0"}
            />
          </Link>
          <Link to={"/Wishlist"}>
            <HeartBtn
              color={pathname === "/Wishlist" ? "black" : "#004CFF"}
              line={pathname === "/Wishlist" ? "3" : "0"}
            />
          </Link>
          <Link to={"/Categories"}>
            <PaperBtn
              color={pathname === "/Categories" ? "black" : "#004CFF"}
              line={pathname === "/Categories" ? "3" : "0"}
            />
          </Link>
          <Link to={"/Cart"}>
            <CartBtn
              color={pathname === "/Cart" ? "black" : "#004CFF"}
              line={pathname === "/Cart" ? "3" : "0"}
            />
          </Link>
          <Link to={"/Profile"}>
            <PersonBtn
              color={pathname === "/Profile" ? "black" : "#004CFF"}
              line={pathname === "/Profile" ? "3" : "0"}
            />
          </Link>
        </div>
      )}
    </>
  );
}
