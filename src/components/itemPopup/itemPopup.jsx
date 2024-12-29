import React, { useState } from "react";
import styles from "./itemPopup.module.css";
import CloseBtn from "../../assets/closeBtn";

export default function ItemPopup({ Item, isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.pos}>
            <div className={styles.image}>
              <img src={Item} />
              <div className={styles.cart}>
                <div className={styles.flex}>
                  <h1>Color Options</h1>
                  <button onClick={onClose}>
                    <CloseBtn />
                  </button>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                  ut aliquam veritatis molestias quibusdam fugit fuga
                  necessitatibus provident, nemo deleniti dolore illo
                  voluptatibus autem delectus laboriosam minus at eaque
                  doloremque!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                  ut aliquam veritatis molestias quibusdam fugit fuga
                  necessitatibus provident, nemo deleniti dolore illo
                  voluptatibus autem delectus laboriosam minus at eaque
                  doloremque!
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
