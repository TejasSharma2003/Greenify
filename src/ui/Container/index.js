import React from "react";
import "./index.scss";

const Container = (props) => {
  const classes = props.className;
  return <div className={`container-max ${classes}`}>{props.children}</div>;
};

export default Container;
