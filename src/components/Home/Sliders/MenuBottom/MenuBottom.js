import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBottom.scss';

const MenuBottom = () => {

    const [menuActive, SetMenuActive] = useState(false)
    return (
        <div>
            <ul className="menu-bottom">
                <NavLink to="/my-protein" activeClassName="selected"> <li> My Protein </li> </NavLink>
                <NavLink to="/nike-air-max" activeClassName="selected"> <li> Nike Air Max </li> </NavLink>
                <NavLink to="/apple" activeClassName="selected"> <li>  Apple Watch </li> </NavLink>
                <NavLink to="/jade-teriyaki" activeClassName="selected"> <li> Jade Teriyaki </li> </NavLink>
                
            </ul>
        </div>
    );
};

export default MenuBottom;