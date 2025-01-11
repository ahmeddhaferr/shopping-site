import React, { useState } from "react";
import styles from "./home.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "../../components/container/container";
import { useMediaQuery } from "react-responsive";
import itemcardData from "../../data/itemcard.json";
import categoryData from "../../data/category.json";
import ItemCard from "../../components/itemCard/ItemCard";
import ItemPopup from "../../components/itemPopup/itemPopup";

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
              {categoryData?.map((cat) => (
                <div key={cat.id} className={styles.catagori}>
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
                {itemcardData?.map((card) => (
                  <ItemCard
                    info={card}
                    key={card.id}
                    setOpen={() => {
                      setIsOpen(true);
                    }}
                    setInfo={() => {
                      setItemOpen(card);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
        <ItemPopup
          className={styles}
          Item={itemOpen}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Container>
    </>
  );
}
