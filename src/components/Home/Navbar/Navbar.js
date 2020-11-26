import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div class="portfolio_home__title">
        <div class="logo">
          <div class="page_portfolio">
            <div class="portfolio_home__header">
              <div class="logoMain">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cagencylogo.png" />
              </div>
              <div class="nav">
                <ul>
                  <li class="active trigger">Our work</li>
                  <li class="trigger">Our services</li>
                  <li class="trigger">About us</li>
                  <li class="trigger">Contact us</li>
                </ul>
              </div>
              <div class="number black">0161 345 3464</div>
              <div class="hamburger black trigger">
                <div class="hamburger_part"></div>
                <div class="hamburger_part"></div>
                <div class="hamburger_part"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
