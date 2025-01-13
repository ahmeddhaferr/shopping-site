import React, { useEffect, useState } from "react";
import styles from "./wishlist.module.css";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useMediaQuery } from "react-responsive";
import { useStore } from "../../usestore";
import EmptyBox from "../../assets/empty-box.png";
import Delete from "../../assets/Delete";

export default function Wishlist() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });
  const { wishListItem, setWishListItem } = useStore();
  const [reviewItem, setReviewItem] = useState("");
  const [modal, setModal] = useState(false);
  useEffect(() => {
    let wishItem = localStorage.getItem("Item");
    if (wishItem) setWishListItem(JSON.parse(wishItem));
  }, []);
  return (
    <>
      <Container MaxWidth="1850px">
        <Header open={!isSmallScreen} />
        <Footer open={isSmallScreen} zee={modal ? 0 : 1} />
        {modal && (
          <>
            <div className={styles.main}>
              <div className={styles.overlay}></div>
              <div className={styles.review}>
                <div className={styles.block}>
                  <img src={reviewItem} alt="" />
                  <button
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <Container MaxWidth="750px">
          {wishListItem.length === 0 ? (
            <>
              <div className={styles.body}>
                <div className={styles.when_empty}>
                  <p>Empty Wishlist</p>
                  <img src={EmptyBox} alt="" />{" "}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.body}>
                <div className={styles.wishHead}>
                  <h1>Wishlist</h1>
                  <p>{wishListItem.length}</p>
                </div>
                <div className={styles.items}>
                  {wishListItem.map((card) => (
                    <div key={card.id} className={styles.relative}>
                      <button
                        className={styles.item}
                        onClick={() => {
                          setModal(true);
                          setReviewItem(card.image);
                        }}
                      >
                        <img src={card.image} alt="Item" />
                      </button>
                      <p>{card.discription}</p>
                      <h2>${card.price}</h2>
                      <button
                        className={styles.delete}
                        onClick={() => {
                          const deleteItem = wishListItem.filter(
                            (item) => item.id !== card.id
                          );
                          setWishListItem(deleteItem);
                          localStorage.setItem(
                            "Item",
                            JSON.stringify(deleteItem)
                          );
                        }}
                      >
                        <Delete />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Container>
      </Container>
    </>
  );
}
