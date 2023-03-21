import React from "react";
import Faq from "react-faq-component";
import './index.scss'

import data from "./faqData";

const styles = {
  bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: 'black',
  arrowColor: "#03C988",
  rowTitleTextSize: 'large',
};

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
  tabFocus: true
};

const FAQ = () => {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FAQ;
