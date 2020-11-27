import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div style={{position:" relative"}} >
      <div className="page_portfolio" >
        <div className="portfolio_home__header">
          <div className="logoMain">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cagencylogo.png" />
          </div>
          <div className="nav">
            <ul>
              <li className="active trigger">Our work</li>
              <li className="trigger">Our services</li>
              <li className="trigger">About us</li>
              <li className="trigger">Contact us</li>
            </ul>
          </div>
          <div className="number black">0161 345 3464</div>
          <div className="hamburger black trigger">
            <div className="hamburger_part"></div>
            <div className="hamburger_part"></div>
            <div className="hamburger_part"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
