import React, { useState } from "react";
import styles from "./profile.module.css";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Container from "../../components/container/container";
import Settings from "../../assets/settings.jsx";
import Notifications from "../../assets/notificationsLines.jsx";
import BlueButton from "../../assets/blueButton.jsx";
import BagShop from "../../assets/bagshop.jsx";
import SmallGift from "../../assets/smallgift.jsx";

const Vouchers = [
  {
    id: 1,
    validation: "5.16.20",
    img: <BagShop />,
    purchase: "First Purchase",
    discount: "5% off for your next order",
  },
  {
    id: 2,
    validation: "6.20.20",
    img: <SmallGift />,
    purchase: "Gift From Customer Care",
    discount: "15% off your next purchase",
  },
];

export default function Profile() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 750px)" });
  const [activeBtn, setActiveBtn] = useState(true);
  return (
    <>
      <Container MaxWidth="1850px">
        <Header open={isSmallScreen ? false : true} />
        <Footer open={isSmallScreen ? true : false} />
        <Container MaxWidth="750px">
          <div className={styles.body}>
            <div className={styles.profile_head}>
              <div className={styles.profile_pic}>
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/commonly-used-icon-1/personal-25.png"
                  alt=""
                />
                <p>Vouchers</p>
              </div>
              <div className={styles.action_buttons}>
                <div className={styles.blue_button}>
                  <BlueButton />
                </div>
                <button>
                  <Notifications />
                </button>
                <button>
                  <Settings />
                </button>
              </div>
            </div>
            <div className={styles.two_buttons}>
              <button
                className={activeBtn ? styles.active : ""}
                onClick={() => setActiveBtn(true)}
              >
                Active Rewards
              </button>
              <button
                className={activeBtn ? "" : styles.active}
                onClick={() => setActiveBtn(false)}
              >
                Progress
              </button>
            </div>

            {activeBtn && (
              <>
                {Vouchers?.map((single) => (
                  <div className={styles.Voucher_card} key={single.id}>
                    <div className={styles.Voucher}>
                      <h1>Voucher</h1>
                      <p>Valid Until {single.validation}</p>
                    </div>
                    <div className={styles.first_purchase}>
                      {single.img}
                      <h1>{single.purchase}</h1>
                    </div>
                    <div className={styles.save_of}>
                      <p>{single.discount}</p>
                      <button>Collected</button>
                    </div>
                    <div className={styles.circle_left}></div>
                    <div className={styles.circle_right}></div>
                  </div>
                ))}
              </>
            )}
          </div>
        </Container>
      </Container>
    </>
  );
}
