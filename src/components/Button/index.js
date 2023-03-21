import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

const Button = (props) => {
  const classes = props.className || "";
  const directTo = props.directTo || "/";
  return (
    <Link onClick={props.onClick} className={`btn ${classes}`} to={directTo}>
      {props.children}
    </Link>
  );
};

export default Button;
