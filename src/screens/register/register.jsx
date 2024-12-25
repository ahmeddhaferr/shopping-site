import React, { useState } from "react";
import styles from "./register.module.css";
import Container from "../../components/container/Container.jsx";
import Background from "../../assets/rigisterBackground.jsx";
import Camera from "../../assets/camera.jsx";
import CostumeButton from "../../components/costumeButton/costumeButton.jsx";
import Eye from "../../assets/Eye.jsx";
import Arrow from "../../assets/arrowDown.jsx";
import { Link } from "react-router";

const flags = [
  {
    id: 1,
    name: "france",
    key: 33,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/30px-Flag_of_France.svg.png",
  },
  {
    id: 2,
    name: "Iraq",
    key: 964,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/35px-Flag_of_Iraq.svg.png",
  },
  {
    id: 3,
    name: "Iran",
    key: 98,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/35px-Flag_of_Iran.svg.png",
  },
  {
    id: 4,
    name: "Saudi",
    key: 966,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/35px-Flag_of_Saudi_Arabia.svg.png",
  },
  {
    id: 5,
    name: "Egypt",
    key: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/35px-Flag_of_Egypt.svg.png",
  },
];

export default function register() {
  const [password, setPassword] = useState("password");
  const [country, setCountry] = useState(false);
  const [countryImg, setCountryImg] = useState(flags[1].image);
  const [KeyNumber, setKeyNumber] = useState(flags[1].key);

  const handlePassword = () => {
    if (password === "password") {
      setPassword("text");
    } else if (password === "text") {
      setPassword("password");
    }
  };

  return (
    <>
            <Background className={styles.background} />

      <Container>
        <div className={styles.content}>
          <h1>Create Account</h1>
          <div className={styles.camera}>
            <Camera />
          </div>
          <div className={styles.inputSection}>
            <input type="text" placeholder="Email" />
            <input type={password} placeholder="Password" />
            <Eye className={styles.Eye} onClick={handlePassword} />
            <div className={styles.numInput}>
              <div className={styles.flag}>
                <img src={countryImg} />
                <button
                  onClick={() => {
                    setCountry(!country);
                  }}
                >
                  <Arrow />
                </button>
              </div>
              <div className={styles.line}></div>
              <input
                type="number"
                placeholder="Your number"
                value={KeyNumber}
                onChange={(e) => {
                  setKeyNumber(e.target.value);
                }}
              />
            </div>
            {country && (
              <>
                <div className={styles.country}>
                  {flags.map((num) => (
                    <button
                      key={num.id}
                      className={styles.phoneKeys}
                      onClick={() => {
                        setCountry(false);
                        setCountryImg(num.image);
                        setKeyNumber(num.key);
                      }}
                    >
                      <img src={num.image} />
                      <p>{num.name}</p>
                      <p>{`(${num.key})`}</p>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <CostumeButton name="Done" mgtop="52px" />
          <Link className={styles.cancel} to={"/"}>
            Cancel
          </Link>
        </div>
      </Container>
    </>
  );
}
