import React from "react";
import { SlNotebook } from "react-icons/sl";
import styles from "../style/Home/Home.module.css";
import {
  About,
  Blog,
  BookNow,
  Client,
  Comment,
  Contact,
  Market,
  Proccess,
  Services,
} from "../components";
import Footer from "../components/Footer/Footer";
import NavTop from "../components/Navbar/NavTop";
import NavBottom from "../components/Navbar/NavBottom";

const Home = () => {
  return (
    <>
      <NavTop />
      <NavBottom />
      <header className={styles["home"]}>
        <div className="container">
          <div className={styles["header-content"]}>
            <div className={styles["header-content-info"]}>
              <h2 className={styles["header-title"]}>
                Your small business growth advisors
              </h2>
              <p className={styles["header-text"]}>
                Get help from Alex Moore, a professional business coach with
                advanced experience on growth and business scaling.
              </p>
              <div className={styles["header-btn-box"]}>
                <button className={styles["btn-black"]}>Our Services</button>
                <div className={styles["btn-box"]}>
                  <button className={styles["btn-while"]}>
                    <div className={styles["btn-green"]}>
                      <SlNotebook size={20} />
                    </div>
                    Book a Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["home-components"]}>
          <Client />
          <About />
          <Services />
          <Proccess />
          <Market />
          <Comment />
          <BookNow />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </header>
    </>
  );
};

export default Home;
