import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Button from "../../components/Button";
import Container from "../../ui/Container";
import styles from "./info.module.css";

import itemImg from "../../assets/apple.jpg";

import Layout from "../../ui/layout";
import FAQ from "../../components/FAQ";

const Info = (props) => {

  return (
    <Layout>
      <div className={styles.info}>
        <Container>
          <div className={styles.infoContent}>
            <div className={styles.imageContainer}>
              <img className={styles.infoImg} src={itemImg} alt="item-img" />
            </div>
            <div className="info__item">
              <h1 className={styles.title}>Apple(Scientific name
                Malus domestica)</h1>
              <p className={styles.description}>
                Apples are not native to North America. They originated in Kazakhstan, in central Asia east of the Caspian Sea. Alma Ata, capital of Kazakhstan, until 1997, means “full of apples.” By 1500 BC apple seeds had been carried throughout Europe. The Greeks, Etruscans, and Romans cultivated apples.
              </p>
              <Button className={styles.cartBtn}>Add to Cart</Button>
            </div>
          </div>

          <FAQ />
        </Container>
      </div>

    </Layout>

  );
};

export default Info;
