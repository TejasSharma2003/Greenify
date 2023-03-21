import React from "react";
import "./index.scss";
import Heading from "../Heading";

import pinkman from "../../assets/pinkman.png";

const Fact = () => {
  return (
    <section className="section-gap">
      <div className="facts">
        <img className="facts__outlet-image" src={pinkman} alt="pinkman" />
        <div>
          <Heading className="facts__heading">
            From blue meth to green veggies.
          </Heading>
          <p className="facts__para">
            The life is just a dream so don't clug it you will leave soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fact;
