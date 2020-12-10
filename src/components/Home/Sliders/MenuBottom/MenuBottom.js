import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBottom.scss';

const MenuBottom = () => {

    const [menuActive, SetMenuActive] = useState(false)
    return (
        <div>
            <ul className="menu-bottom">
                <NavLink to="/my-protein" activeClassName="selected"  > <li> My Protein <span className="list"> </span> </li> </NavLink>
                <NavLink to="/nike-air-max" activeClassName="selected"> <li> Nike Air Max <span className="list"> </span>  </li> </NavLink>
                <NavLink to="/apple" activeClassName="selected"> <li>  Apple Watch <span className="list"> </span>  </li> </NavLink>
                <NavLink to="/jade-teriyaki" activeClassName="selected"> <li> Jade Teriyaki <span className="list"> </span>  </li> </NavLink>
                
            </ul>
        </div>
    );
};

export default MenuBottom;