import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "../../components/container/container";
import { useMediaQuery } from "react-responsive";

const catagory = [
  {
    name: "dress",
    image:
      "https://static.printler.com/cache/5/f/b/8/4/4/5fb8447cf8aa675bc0d1650a2b9ad032889da19a.jpg",
  },
  {
    name: "dress",
    image:
      "https://assets-prd.ignimgs.com/2022/10/14/batmanandrobinps-1665763168536.jpg?width=114&crop=1%3A1%2Csmart&auto=webp",
  },
  {
    name: "dress",
    image:
      "https://assets-prd.ignimgs.com/2022/10/14/batmanandrobinps-1665763168536.jpg?width=114&crop=1%3A1%2Csmart&auto=webp",
  },
  {
    name: "dress",
    image:
      "https://assets-prd.ignimgs.com/2022/10/14/batmanandrobinps-1665763168536.jpg?width=114&crop=1%3A1%2Csmart&auto=webp",
  },
  {
    name: "dress",
    image:
      "https://assets-prd.ignimgs.com/2022/10/14/batmanandrobinps-1665763168536.jpg?width=114&crop=1%3A1%2Csmart&auto=webp",
  },
];
const itemcard = [
  {
    image:
      "https://static.printler.com/cache/5/f/b/8/4/4/5fb8447cf8aa675bc0d1650a2b9ad032889da19a.jpg",
    discription: "Lorem ipsum dolor sit amet consectetur",
    price: 20,
  },
  {
    image:
      "https://static.printler.com/cache/5/f/b/8/4/4/5fb8447cf8aa675bc0d1650a2b9ad032889da19a.jpg",
    discription: "Lorem ipsum dolor sit amet consectetur",
    price: 20,
  },
  {
    image:
      "https://static.printler.com/cache/5/f/b/8/4/4/5fb8447cf8aa675bc0d1650a2b9ad032889da19a.jpg",
    discription: "Lorem ipsum dolor sit amet consectetur",
    price: 20,
  },
  {
    image:
      "https://static.printler.com/cache/5/f/b/8/4/4/5fb8447cf8aa675bc0d1650a2b9ad032889da19a.jpg",
    discription: "Lorem ipsum dolor sit amet consectetur",
    price: 20,
  },
  {
    image:
      "https://static.printler.com/cache/5/f/b/8/4/4/5fb8447cf8aa675bc0d1650a2b9ad032889da19a.jpg",
    discription: "Lorem ipsum dolor sit amet consectetur",
    price: 20,
  },
];

export default function Home() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });
  return (
    <>
      <Container MaxWidth="1850px">
        <Header open={isSmallScreen ? false : true} />
        <Footer open={isSmallScreen ? true : false} />

        <div className={styles.shopTop}>
          <div className={styles.shop}>
            <h1>Shop</h1>
            <div className={styles.search}></div>
          </div>
          <div className={styles.catagories}>
            {catagory?.map((cat, index) => (
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
              {itemcard?.map((card, index) => (
                <div key={index}>
                  <div className={styles.item}> <img src={card.image} /> </div>
                  <p>{card.discription}</p>
                  <h2>${card.price}</h2>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </Container>
    </>
  );
}
