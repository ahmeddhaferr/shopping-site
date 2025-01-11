import React, { useState } from "react";
import AddWish from "../../assets/addwish";
import { useStore } from "../../usestore";
import styles from "./AddWishBtn.module.css";

export default function AddWishBtn({ Item }) {
  const [addWishColor, setAddWishColor] = useState(false);
  const { wishListItem, setWishListItem } = useStore();
  let Addto = wishListItem.find((el) => el.id === Item.id);
  const handleAddToWishList = () => {
    let newArr = [];
    if (Addto) newArr = wishListItem.filter((el) => el.id !== Item.id);
    else newArr = [...wishListItem, Item];
    setWishListItem(newArr);
    localStorage.setItem("Item", JSON.stringify(newArr));
  };
  return (
    <>
      <button
        className={styles.addwish}
        onClick={() => {
          setAddWishColor(true);
          handleAddToWishList();
        }}
      >
        <AddWish color={addWishColor ? "#004CFF" : "black"} />
      </button>
    </>
  );
}
