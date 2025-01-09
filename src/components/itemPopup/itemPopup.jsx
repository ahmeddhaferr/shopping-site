import React, { useState } from "react";
import styles from "./itemPopup.module.css";
import CloseBtn from "../../assets/closeBtn";
import More from "../../assets/more";
import Less from "../../assets/less";
import AddWish from "../../assets/addwish";
import RightSign from "../../assets/rightSign.svg";
import colorsData from "../../data/colors.json";
import { useMediaQuery } from "react-responsive";

const sizes = [
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
  { size: "XXL" },
  { size: "XXXL" },
];

export default function ItemPopup({ Item, isOpen, onClose }) {
  const [option, setOption] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [itemSize, setItemSize] = useState(null);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });
  const [addWishColor,setAddWishColor]=useState(false)

  if (!isOpen) return null;
  return (
    <div className={styles.main}>
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
                <CloseBtn
                  onClick={() => {
                    setOption(null)
                    setItemSize(null)
                    setQuantity(1)
                    setAddWishColor(false)
                  }}
                />
              </button>
            </div>
            <div className={styles.colorOptionFlex}>
              {colorsData.map((col, index) => (
                <button
                  key={index}
                  className={styles.colorOptionCard}
                  onClick={() => {
                    setOption(index);
                  }}
                >
                  <img src={col.url} className={styles.imgcolor} />
                  <img
                    src={RightSign}
                    className={
                      option === index ? styles.RightSign : styles.displayNone
                    }
                  />
                </button>
              ))}
            </div>
            <h1>size</h1>
            <div className={styles.size}>
              {sizes.map((e, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setItemSize(index);
                  }}
                  className={
                    itemSize == index ? styles.active_sizebtn : styles.sizebtn
                  }
                >
                  {e.size}
                </button>
              ))}
            </div>
            <div className={styles.Quantity}>
              <h2>Quantity</h2>
              <div className={styles.flexcount}>
                <button
                  onClick={() => {
                    if (quantity == 1) {
                      return;
                    } else {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  <Less />
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() => {
                    if (quantity == 10) {
                      return;
                    } else {
                      setQuantity(quantity + 1);
                    }
                  }}
                >
                  <More />
                </button>
              </div>
            </div>
            <div className={styles.actionbtns}>
              <button
                className={styles.addwish}
                onClick={() => {
                  setAddWishColor(true)
                }}
              >
                <AddWish color={addWishColor ? "#004CFF":"black"}/>
              </button>
              <button className={styles.addtocart}>Add to cart</button>
              <button className={styles.buynow}>Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
