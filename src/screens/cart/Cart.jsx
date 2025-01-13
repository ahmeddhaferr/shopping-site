import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useMediaQuery } from "react-responsive";
import { useStore } from "../../usestore";
import EmptyBox from "../../assets/empty-box.png";
import Delete from "../../assets/Delete"
export default function Cart() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });
  const { cartItem, setCartItem } = useStore();

  useEffect(() => {
    let CartList = localStorage.getItem("cartItem");
    if (CartList) setCartItem(JSON.parse(CartList));
  }, []);
  return (
    <Container MaxWidth="1850px">
      <Header open={!isSmallScreen} />
      <Footer open={isSmallScreen} />
      <Container MaxWidth="750px">
        {cartItem.length == 0 ? (
          <>
            <div className={styles.body}>
              <div className={styles.when_empty}>
                <p>Empty Cart</p>
                <img src={EmptyBox} alt="" />{" "}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.body}>
              <div className={styles.wishHead}>
                <h1>Cart</h1>
                <p>{cartItem.length}</p>
              </div>
              <div className={styles.items}>
                {cartItem.map((card) => (
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
          </>
        )}
      </Container>
    </Container>
  );
}
