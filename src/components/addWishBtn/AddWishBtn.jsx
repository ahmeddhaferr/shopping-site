import React, { useState } from "react";
import AddWish from "../../assets/addwish";
import { useStore } from "../../usestore";
import styles from "./AddWishBtn.module.css";
export default function AddWishBtn({ Item }) {
  const { wishListItem, setWishListItem } = useStore();
  const [isAdded, setIsAdded] = useState(
    !!wishListItem.find((el) => el.id === Item.id)
  );
  const handleAddToWishList = () => {
    let updatedList;
    if (isAdded) {
      updatedList = wishListItem.filter((el) => el.id !== Item.id);
    } else {
      updatedList = [...wishListItem, Item];
    }
    setWishListItem(updatedList);
    localStorage.setItem("Item", JSON.stringify(updatedList));
    setIsAdded(!isAdded);
  };
  return (
    <button className={styles.addwish} onClick={handleAddToWishList}>
      <AddWish color={isAdded ? "#004CFF" : "black"} />
    </button>
  );
}
