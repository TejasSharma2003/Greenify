import React from "react";
import "./index.scss";

import Container from "../../ui/Container";

import jimmy from "../../assets/jimmy.png";
import Heading from "../Heading";
import Button from "../Button";

const Contact = () => {
  return (
    <section className="section-gap">
      <Container className="contact__container">
        <Heading className="util-text-center">
          Wanna make your crop greener ?
        </Heading>
        <div className="contact">
          <div className="contact__image-container">
            <img className="contact__img" src={jimmy} alt="jimmy" />
          </div>{" "}
          <form className="form" autoComplete="off">
            <ul>
              <li className="box-name-email mar-down">
                <li className="field">
                  <input
                    className="input-contact  input-name"
                    placeholder="Name"
                    name="name"
                    autoComplete="new-password"
                  />
                </li>
                <li className="field">
                  <input
                    className="input-contact input-email"
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                  <label className={`beautifull-effect}`}></label>
                </li>
              </li>
              <li className="position-rel mar-down">
                <input
                  className="input-contact  input-subject"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                />
                <label className={`beautifull-effect }`}></label>
              </li>
              <li className="position-rel mar-down">
                <textarea
                  className="input-contact  input-textarea"
                  placeholder="Message"
                  type="text"
                  rows="10"
                  cols="40"
                  name="message"
                />
              </li>
            </ul>
            <div className="util-flex-center">
              <Button className="contact__btn">Send me!</Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
