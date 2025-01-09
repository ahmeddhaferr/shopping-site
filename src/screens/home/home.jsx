import React, { useState } from "react";
import styles from "./home.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "../../components/container/container";
import { useMediaQuery } from "react-responsive";
import ItemPopup from "../../components/itemPopup/itemPopup";
import itemcardData from "../../data/itemcard.json";
import categoryData from "../../data/category.json";

export default function Home() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });
  const [isOpen, setIsOpen] = useState(false);
  const [itemOpen, setItemOpen] = useState("");
  return (
    <>
      <Container MaxWidth="1850px">
        <Header open={!isSmallScreen} />
        <Footer open={isSmallScreen} />
        <Container MaxWidth="750px">
          <div className={styles.shopTop}>
            <div className={styles.shop}>
              <h1>Shop</h1>
              <div className={styles.search}></div>
            </div>
            <div className={styles.catagories}>
              {categoryData?.map((cat, index) => (
                <div key={index} className={styles.catagori}>
                  <div className={styles.imgContainer}>
                    <img src={cat.image} />
                  </div>
                  <p>{cat.name}</p>
                </div>
              ))}
            </div>
            <div className={styles.allItems}>
              <div className={styles.allItem}>
                <p>All Items</p>
                <button></button>
              </div>
              <div className={styles.items}>
                {itemcardData?.map((card, index) => (
                  <div key={index}>
                    <button
                      className={styles.item}
                      onClick={() => {
                        setItemOpen(card.image);
                        setIsOpen(true);
                      }}
                    >
                      {" "}
                      <img src={card.image} />{" "}
                    </button>
                    <p>{card.discription}</p>
                    <h2>${card.price}</h2>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </Container>
        <ItemPopup
          Item={itemOpen}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Container>
    </>
  );
}
