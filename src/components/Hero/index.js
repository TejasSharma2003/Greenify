import React, { useState, useCallback, useRef } from "react";
import Container from "../../ui/Container";
import "./index.scss";

import { AiOutlineCloudUpload, AiOutlineCamera } from "react-icons/ai";
import Button from "../Button";

import heroImage from "../../assets/walter.png";
import Webcam from "react-webcam";

import { GrClose } from "react-icons/gr";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const Hero = () => {
  const [picture, setPicture] = useState("");
  const [clickedToCapture, setClickedToCapture] = useState(false);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const pictureSrc = webcamRef?.current?.getScreenshot();
    console.log(pictureSrc);
    setPicture(pictureSrc);
  }, [webcamRef]);

  const onClickHandler = () => {
    setClickedToCapture((pre) => !pre);
    capture();
  };

  const onCloseCamere = () => {
    setClickedToCapture(false);
  };

  return (
    <header className="hero">
      {clickedToCapture && (
        <>
          <span onClick={onCloseCamere}>
            <GrClose className="hero__close-camera" />
          </span>
          <div onClick={onClickHandler} className="hero__click-btn"></div>
        </>
      )}

      {clickedToCapture && (
        <div className="hero__capture-overlay">
          <div className="hero__capture">
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              width={1280}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
        </div>
      )}
      <Container>
        <div className="hero__content">
          <div className="hero__text-box">
            <h1 className="hero__heading">
              Let's
              <div className="hero__animate">
                <span className="hero__head-cut">Cook</span>
                <span className="hero__head--fadeup hero__head--green">
                  Plant
                </span>
              </div>
              some
              <div className="hero__animate">
                <span className="hero__head-cut">Meth</span>
                <span className="hero__head--fadeup hero__head--green">
                  Veggies
                </span>
              </div>
            </h1>
            <p className="hero__para">
              One step solution for all the major crop related problems. 
            </p>
            <div className="util-flex-center" style={{ marginTop: "2rem" }}>
              <div className="hero__query">
                <input
                  className="hero__query-input"
                  type="text"
                  placeholder="Search any fruits or vegetables..."
                />
                <span className="hero__icon">
                  <AiOutlineCloudUpload />
                </span>
                <span onClick={onClickHandler} className="hero__icon">
                  <AiOutlineCamera />
                </span>
                </div>
                <Button className="hero__btn">Search</Button>
            </div>
          </div>
          <div></div>
          <div className="hero__img-container">
            <img
              data-aos="fade-left"
              className="hero__img"
              src={heroImage}
              alt="Walter White"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
