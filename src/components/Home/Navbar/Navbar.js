import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({navHandleColor, setSlideBg, setNavHandleColor, setCursorNav}) => {
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
              }}
              onMouseEnter={() => setCursorNav("nav-item")}
              onMouseLeave={() => setCursorNav("")}
              >Our work</li> </Link> 

               <Link to="/special"> <li className={`${handlePricingActive?'active pricing-active':" " }  trigger`}  onClick={() => {
              setNavHandleColor("black")
              setHandlePricingActive(true)
              setHandleWorkActive(false)
              }}
              onMouseEnter={() => setCursorNav("nav-item")}
              onMouseLeave={() => setCursorNav("")}
              > <span className="" style={{display:"inline-block"}} >Special <br/> Pricing</span></li>  </Link> 
              <li className="trigger"
              onMouseEnter={() => setCursorNav("nav-item")}
              onMouseLeave={() => setCursorNav("")}
              >About us</li>
              <li className="trigger"
              onMouseEnter={() => setCursorNav("nav-item")}
              onMouseLeave={() => setCursorNav("")}
              >Contact us</li>
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
