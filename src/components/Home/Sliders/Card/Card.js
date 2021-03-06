import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({setCardBtn}) => {
  return (
    <>
      {/* <Navbar navHandleColor={"white"}/>  */}
      <div className="card">
        <div className="card-container group">
          <div className="grid-1-5">
            <h2>Basic</h2>
            <h3>
              <span className="uppercase">Free</span>
            </h3>
            <p>10,000 monthly visits</p>
            <ul>
              <li>Limited Email Support</li>
              <li>Unlimited Data Transfer</li>
              <li>10GB Local Storage</li>
            </ul>
			 <div className="button" onClick={() => setCardBtn(true)} >
             <Link to="/work">  Sign Up </Link>
            </div> 
            
          </div>
          <div className="grid-1-5">
            <h2>Startup</h2>
            <h3>
              <sup>$</sup>79<span className="small">/mo</span>
            </h3>
            <p>25,000 monthly visits</p>
            <ul>
              <li>Limited Email Support</li>
              <li>Unlimited Data Transfer</li>
              <li>20GB Local Storage</li>
            </ul>
            <div className="button" onClick={() => setCardBtn(true)} >
             <Link to="/work">  Sign Up </Link>
            </div> 
          </div>
          <div className="grid-1-5">
            <h2>Growth</h2>
            <h3>
              <sup>$</sup>179<span className="small">/mo</span>
            </h3>
            <p>75,000 monthly visits</p>
            <ul>
              <li>Email Support</li>
              <li>Unlimited Data Transfer</li>
              <li>30GB Local Storage</li>
            </ul>
            <div className="button" onClick={() => setCardBtn(true)} >
             <Link to="/work">  Sign Up </Link>
            </div> 
          </div>
          <div className="grid-1-5">
            <h2>Premium</h2>
            <h3>
              <sup>$</sup>499<span className="small">/mo</span>
            </h3>
            <p>225,000 monthly visits</p>
            <ul>
              <li>Email Support</li>
              <li>Phone Support</li>
              <li>Unlimited Data Transfer</li>
            </ul>
            <div className="button" onClick={() => setCardBtn(true)} >
             <Link to="/work">  Sign Up </Link>
            </div> 
          </div>
          {/* <div className="grid-1-5">
            <h2>Enterprise</h2>
            <h3>
              <span className="uppercase">Let's Talk</span>
            </h3>
            <p>1M+ monthly visits</p>
            <ul>
              <li>Email Support</li>
              <li>Phone Support</li>
              <li>Dedicated Environment</li>
              <li>Customized Plan</li>
            </ul>
            <a href="" className="button">
              Sign Up
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Card;
