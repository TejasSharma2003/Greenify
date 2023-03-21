import React from "react";
import "./index.scss";

import Navbar from "../Navbar";
import Hero from "../Hero";

const Header = () => {
  return (
    <header className="header">
      <Navbar/>
      <Hero />
    </header>
  );
};

export default Header;
