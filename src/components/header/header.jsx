import React, { useState } from "react";
import styles from "./header.module.css";
import { Link ,useLocation} from "react-router";
export default function Header({ open }) {
  let {pathname} = useLocation()
  return <>{open && (<div className={styles.Header}>
    
    <Link to={"/Home"}><p className={pathname == "/Home" ? styles.active: ""}>Home</p></Link>
    <Link to={"/Wishlist"}><p className={pathname == "/Wishlist" ? styles.active: ""}>Wishlist</p></Link>
    <Link to={"/Categories"}><p className={pathname == "/Categories" ? styles.active: ""}>Categories</p></Link>
    <Link to={"/Cart"}><p className={pathname == "/Cart" ? styles.active: ""}>Cart</p></Link>
    <Link to={"/Profile"}><p className={pathname == "/Profile" ? styles.active: ""}>Profile</p></Link>
    
    </div>)}</>;
}
