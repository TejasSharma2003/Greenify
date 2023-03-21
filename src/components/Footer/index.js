import React from "react";
import "./index.scss";

import Container from "../../ui/Container";

import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="footer__grid">
          <div className="footer__col footer__col-logo">
            <img style={{width:'8rem',height:'8rem',objectFit:'contain', width:'10rem',heighy:'10rem',}} src={Logo} alt="Logo"/>
            <span className="footer__copyright">
              Copyright @ 2023 by Connect, Inc. All rights reserved.
            </span>
          </div>
          <div className="footer__col footer__col-contact">
            <h5>Contact us</h5>
            <ul className="footer__links">
              <li> Harrison St., 2nd Floor, San Francisco, CA 94107</li>
              <li>San Francisco.</li>
              <li>415-201-6370</li>
            </ul>
          </div>

          <div className="footer__col footer__nav-col">
            <h5>support</h5>
            <ul className="footer__links">
              <li> Harrison,</li>
              <li>San Francisco.</li>
              <li>415-201-6370</li>
            </ul>
          </div>

          <div className="footer__col footer__nav-col">
            <h5>account</h5>
            <ul className="footer__links">
              <li> Harrison,</li>
              <li>San Francisco.</li>
              <li>415-201-6370</li>
            </ul>
          </div>

          <div className="footer__col footer__nav-col">
            <h5>resources</h5>
            <ul className="footer__links">
              <li> Harrison,</li>
              <li>San Francisco.</li>
              <li>415-201-6370</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
