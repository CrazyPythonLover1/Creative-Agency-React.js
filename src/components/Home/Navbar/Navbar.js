import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({navHandleColor, setSlideBg, setNavHandleColor}) => {
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
            <Link to="/"> <li  className="active trigger"  onClick={() => {
              setSlideBg(false)
              setNavHandleColor("black")
              }}>Our work</li> </Link> 

               <Link to="/pricing"> <li className="trigger" onClick={() => {
              
              setNavHandleColor("white")
              }}> Pricing </li>  </Link> 
              <li className="trigger">About us</li>
              <li className="trigger">Contact us</li>
              <div className="backbutton" onClick={() => setSlideBg(false)} >
                back
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
