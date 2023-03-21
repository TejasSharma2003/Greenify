import React from "react";
import "./index.scss";
import Container from "../../ui/Container";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container className="navbar__content">
        <div className="navbar__logo-container">
          <img className="navbar__logo" src={logo} alt="logo" />
        </div>
        <ul className="navbar__links">
          <li className="navbar__link">
            <Link to="/blogs">Ai Crop Suggest</Link>
          </li>
          <li className="navbar__link">
            <Link to="/">Inventory</Link>
          </li>
          <li className="navbar__link">
            <Link to="/articles">Articles</Link>
          </li>
          <li className="navbar__link">
            <Link to="/">Contact us</Link>
          </li>
        </ul>
        <Button directTo="/signin" className="">Sign In</Button>
      </Container>
    </nav>
  );
};

export default Navbar;
