import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({navHandleColor, setSlideBg, setNavHandleColor}) => {
  const [handleWorkActive, setHandleWorkActive] = useState(true)
  const [handlePricingActive, setHandlePricingActive] = useState(false)
  const handleSlideBg =  () => {
    setSlideBg(false);
  }
  return (
    <div>
      <div className="page_portfolio" >
        <div className="portfolio_home__header">
          <div className="logoMain">
            { navHandleColor==="black"? <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cagencylogo.png" />:
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/slogowhite.png"/>}
          </div>
          <div className="nav">
            <ul className={navHandleColor}>
            <Link to="/"> <li  className={`${handleWorkActive?'active':" " }  trigger`}  onClick={() => {
              setSlideBg(false)
              setNavHandleColor("black")
              setHandlePricingActive(false)
              setHandleWorkActive(true)
              }}>Our work</li> </Link> 

               <Link to="/pricing"> <li className={`${handlePricingActive?'active':" " }  trigger`}  onClick={() => {
              setNavHandleColor("white")
              setHandlePricingActive(true)
              setHandleWorkActive(false)
              }}> Pricing </li>  </Link> 
              <li className="trigger">About us</li>
              <li className="trigger">Contact us</li>
              <div className="backbutton" onClick={() => setSlideBg(false)} >
               
              </div>
            </ul>
          </div>
          <div className={`number black ${navHandleColor}`}>0161 345 3464</div>
          <div  className="hamburger black trigger">
            <div className={`hamburger_part  ${navHandleColor}`} ></div>
            <div  className={`hamburger_part  ${navHandleColor}`} ></div>
            <div className={`hamburger_part  ${navHandleColor}`} ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
