import React from "react";
import styles from "./AddCartBtn.module.css";
import { useStore } from "../../usestore";
export default function AddCartBtn({ Item }) {
  const { cartItem, setCartItem } = useStore();
  let Addto = cartItem.find((el) => el.id === Item.id);
  const handleAddToCart = () => {
    let newArr = [];
    if (Addto) newArr = cartItem.filter((el) => el.id !== Item.id);
    else newArr = [...cartItem, Item];
    setCartItem(newArr);
    localStorage.setItem("cartItem", JSON.stringify(newArr));
  };

  return (
    <button className={styles.addtocart} onClick={handleAddToCart}>
      Add to cart
    </button>
  );
}
