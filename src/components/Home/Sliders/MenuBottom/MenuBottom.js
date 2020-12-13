import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBottom.scss';

const MenuBottom = () => {

    // const [spanHover, setSpanHover] = useState(false)
    return (
        <div className="footer-section">
            <ul className="menu-bottom">
                <NavLink to="/my-protein" activeClassName=" "  > <li onClick={() => console.log("clicked")}  > My Protein <span className={`  `} > </span> </li> </NavLink>
                <NavLink to="/nike-air-max" activeClassName=" "> <li> Nike Air Max <span className=" "> </span>  </li> </NavLink>
                <NavLink to="/apple" activeClassName=" "> <li>  Apple Watch <span className=" "> </span>  </li> </NavLink>
                <NavLink to="/jade-teriyaki" activeClassName=" "> <li> Jade Teriyaki <span className=" " > </span>  </li> </NavLink>
                
            </ul>

            <ul className="circle-bottom">
                <NavLink to="/my-protein" activeClassName="selected"  > <li   > <span className={`list `} >  </span> </li> </NavLink>
                <NavLink to="/nike-air-max" activeClassName="selected"> <li>  <span className="list">  </span>  </li> </NavLink>
                <NavLink to="/apple" activeClassName="selected"> <li>  <span className="list">  </span>  </li> </NavLink>
                <NavLink to="/jade-teriyaki" activeClassName="selected"> <li>  <span className="list" >   </span>  </li> </NavLink>
                
            </ul>
        </div>
    );
};

export default MenuBottom;