import React from "react";
import './index.scss'

const Heading = (props) => {
  const classes = props.className || "";
  return <h1 className={`heading ${classes}`}>{props.children}</h1>;
};

export default Heading;
