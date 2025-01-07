import React, { useState } from "react";
import styles from "./home.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "../../components/container/container";
import { useMediaQuery } from "react-responsive";
import ItemPopup from "../../components/itemPopup/itemPopup";

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
      "https://conservewildcats.org/wp-content/uploads/sites/5/2023/12/Black-and-White-Stationery-Notes-A4-Document.png",
    discription: "Lorem ipsum dolor sit amet consectetur",
    price: 20,
  },
  {
    image:
      "https://images.unsplash.com/photo-1604341049375-a421bb4e6f08?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    discription: "Lorem ipsum dolor sit amet consectetur",
    price: 20,
  },
  {
    image:
      "https://i.pinimg.com/736x/41/5d/5c/415d5c2e4e8388066defb3710fb30a38.jpg",
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
  const [isOpen, setIsOpen] = useState(false);
  const [itemOpen, setItemOpen] = useState("");
  return (
    <>
      <Container MaxWidth="1850px">
        <Header open={isSmallScreen ? false : true} />
        <Footer open={isSmallScreen ? true : false} />
<Container MaxWidth="750px">
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
        </div></Container>
        <ItemPopup
          Item={itemOpen}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Container>
    </>
  );
}
