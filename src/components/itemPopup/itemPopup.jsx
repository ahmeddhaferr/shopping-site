import React, { useState } from "react";
import styles from "./itemPopup.module.css";
import CloseBtn from "../../assets/closeBtn";

export default function ItemPopup({ Item, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.pos}>
        <div className={styles.itemcard}>
          <div className={styles.image}>
            <img src={Item} />
          </div>
          <div className={styles.cart}>
            <div className={styles.colorOption}>
              <h1>Color Options</h1>
              <button onClick={onClose} className={styles.closebtn}>
                <CloseBtn />
              </button>
            </div>
            <div className={styles.colorOptionFlex}>
              <button className={styles.colorOptionCard}></button>
              <button className={styles.colorOptionCard}></button>
              <button className={styles.colorOptionCard}></button>
              <button className={styles.colorOptionCard}></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
