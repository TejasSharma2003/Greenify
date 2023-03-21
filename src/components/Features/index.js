import React from "react";
import "./index.scss";
import Container from "../../ui/Container";
import Heading from "../Heading";

import { GiHealthNormal, GiHeartDrop} from "react-icons/gi"
import {RiPlantFill} from 'react-icons/ri';
import { AiFillSafetyCertificate } from "react-icons/ai";

const Features = () => {
  return (
    <section className="section-gap">
      <Container>
        <Heading className="features__heading">Geenify Features</Heading>
        <div className="features">
          <div className="feature__item">
            <i className="features__icon">
              <GiHealthNormal  />
            </i>
            <h1 className="features__title">Crop Disease Detection</h1>
            <p className="features__para">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorm Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
          </div>

          <div className="feature__item">
            <i className="features__icon">
              <GiHeartDrop/>
            </i>
            <h1 className="features__title">Research community</h1>
            <p className="features__para">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorm Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
          </div>

          <div className="feature__item">
          <i className="features__icon">
          <AiFillSafetyCertificate/>
          </i>
            <h1 className="features__title">Detailed AI bases Information</h1>
            <p className="features__para">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorm Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
          </div>

          <div className="feature__item">
          <i className="features__icon">
          <RiPlantFill/>
          </i>
            <h1 className="features__title">Multivendor Shop</h1>
            <p className="features__para">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorm Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
