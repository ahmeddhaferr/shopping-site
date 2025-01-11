import React, { useEffect, useState } from "react";
import styles from "./wishlist.module.css";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useMediaQuery } from "react-responsive";
import { useStore } from "../../usestore";

export default function Wishlist() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });
  const { wishListItem, setWishListItem } = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let wishItem = localStorage.getItem("Item");
    if (wishItem) setWishListItem(JSON.parse(wishItem));
  }, []);

  return (
    <>
      <Container MaxWidth="1850px">
        <Header open={!isSmallScreen} />
        <Footer open={isSmallScreen} />
        <Container MaxWidth="750px">
          <div className={styles.body}>
            <div className={styles.items}>
              {wishListItem.map((card) => (
                <div key={card.id}>
                  <button className={styles.item}>
                    <img src={card.image} alt="Item" />
                  </button>
                  <p>{card.discription}</p>
                  <h2>${card.price}</h2>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
