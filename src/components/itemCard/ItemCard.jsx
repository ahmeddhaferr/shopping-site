import React from "react";
import styles from "./ItemCard.module.css";

export default function ItemCard({ info, setOpen, setInfo }) {
  const handleClick = () => {
    setInfo(info);
    setOpen(true);
  };

  return (
    <div className={styles.items}>
      <button className={styles.item} onClick={handleClick}>
        <img src={info.image} alt="Item" />
      </button>
      <p>{info.discription}</p>
      <h2>${info.price}</h2>
    </div>
  );
}
