import React from "react";

import styles from "../../style/PageComponentsStyle/Rezume.module.css";

const Rezume = () => {
  return (
    <div className={styles["rezume"]}>
      <div className="container">
        <div className={styles["rezume-title-box"]}>
          <h4 className={styles["rezume-title"]}>Information</h4>
          <h5 className={styles["rezume-subtitle"]}>My Resume</h5>
        </div>
        <div className={styles["rezume-content-box"]}>
          <div className={styles["rezume-content-left"]}>
            <h4 className={styles["rezume-content-left-title"]}>Education</h4>
            <div className={styles["rezume-info"]}>
              <div className={styles["rezume-info-border"]}>
                    <div className={styles["rezume-info-border-green"]} ></div>
                    <div className={styles["rezume-info-border-line"]} ></div>
              </div>
              <div className={styles["rezume-info-contetn"]}>
                <h3 className={styles["rezume-info-content-title"]}>
                  Finance Сourse - New York (2018 - 2019)
                </h3>
                <h4 className={styles["rezume-info-content-subtitle"]}>Financial Projections</h4>
                <p className={styles["rezume-info-content-text"]}>
                  Posuere sollicitudin aliquam ultrices sagittis orci a
                  scelerisque. Massa placerat duis ultricies lacus sed turpis.
                  Pellentesque pulvinar pellentesque habitant morbi tristique.
                </p>
              </div>
            </div>
            <div className={styles["rezume-info"]}>
                <div className={styles["rezume-info-border"]}>
                    <div className={styles["rezume-info-border-green"]} ></div>
                    <div className={styles["rezume-info-border-line"]} ></div>
                </div>
              <div className={styles["rezume-info-contetn"]}>
                <h3 className={styles["rezume-info-content-title"]}>
                  Finance Сourse - New York (2018 - 2019)
                </h3>
                <h4 className={styles["rezume-info-content-subtitle"]}>Corporate Finance</h4>
                <p className={styles["rezume-info-content-text"]}>
                  Posuere sollicitudin aliquam ultrices sagittis orci a
                  scelerisque. Massa placerat duis ultricies lacus sed turpis.
                  Pellentesque pulvinar pellentesque habitant morbi tristique.
                </p>
              </div>
            </div>
          </div>
          <div className={styles["rezume-content-right"]}>
            <div className={styles["rezume-right-title"]}>
                <h4 className={styles["rezume-content-left-title-yellow"]}>Education</h4>
            </div>
            <div className={styles["rezume-info"]}>
              <div className={styles["rezume-info-contetn"]}>
                <h3 className={styles["rezume-info-content-title"]}>
                  Finance Сourse - New York (2018 - 2019)
                </h3>
                <h4 className={styles["rezume-info-content-subtitle"]}>Finance Consultant</h4>
                <p className={styles["rezume-info-content-text"]}>
                  Posuere sollicitudin aliquam ultrices sagittis orci a
                  scelerisque. Massa placerat duis ultricies lacus sed turpis.
                  Pellentesque pulvinar pellentesque habitant morbi tristique.
                </p>
              </div>
              <div className={styles["rezume-info-border"]}>
                <div className={styles["rezume-info-border-yellow"]}></div>
                <div className={styles["rezume-info-border-line"]} ></div>
              </div>
            </div>
            <div className={styles["rezume-info"]}>
              <div className={styles["rezume-info-contetn"]}>
                <h3 className={styles["rezume-info-content-title"]}>
                  Finance Сourse - New York (2018 - 2019)
                </h3>
                <h4 className={styles["rezume-info-content-subtitle"]}>Financial Projections</h4>
                <p className={styles["rezume-info-content-text"]}>
                  Posuere sollicitudin aliquam ultrices sagittis orci a
                  scelerisque. Massa placerat duis ultricies lacus sed turpis.
                  Pellentesque pulvinar pellentesque habitant morbi tristique.
                </p>
              </div>
              <div className={styles["rezume-info-border"]}>
                <div className={styles["rezume-info-border-yellow"]}></div>
                <div className={styles["rezume-info-border-line"]} ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rezume;
