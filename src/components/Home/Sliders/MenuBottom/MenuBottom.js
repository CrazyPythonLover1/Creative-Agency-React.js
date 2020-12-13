import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBottom.scss';

const MenuBottom = ({slideItem, setSlideItem}) => {
    console.log(slideItem.id)
    // const [spanHover, setSpanHover] = useState(false)
    const currentURL = window.location.href 
    console.log(currentURL)

const pathname = window.location.pathname 
console.log(pathname)
    return (
        <div className="footer-section">
            <ul className="menu-bottom">
                <NavLink to="/my-protein" onClick={() => setSlideItem({id:0})} activeClassName={`selected-menu `} className={`${slideItem.id===1?"menu-active":" "}`}  > <li> My Protein <span className={`  `} > </span> </li> </NavLink>
                <NavLink to="/nike-air-max" onClick={() => setSlideItem({id:0})}  activeClassName=" selected-menu" className={`${slideItem.id===2?"menu-active":" "}`} > <li> Nike Air Max <span className=" "> </span>  </li> </NavLink>
                <NavLink to="/apple" onClick={() => setSlideItem({id:0})}  activeClassName=" selected-menu" className={`${slideItem.id===3?"menu-active":" "}`} > <li>  Apple Watch <span className=" "> </span>  </li> </NavLink>
                <NavLink to="/jade-teriyaki" onClick={() => setSlideItem({id:0})}  activeClassName="selected-menu" className={`${slideItem.id===4 ?"menu-active":" "}`} > <li> Jade Teriyaki <span className=" " > </span>  </li> </NavLink>
                
            </ul>

            <ul className="circle-bottom">
                <NavLink to="/my-protein" onClick={() => setSlideItem({id:0})}  activeClassName="selected" className={`${slideItem.id===1?"selected":" "}`} > <li   > <span className={`list `} >  </span> </li> </NavLink>
                <NavLink to="/nike-air-max" onClick={() => setSlideItem({id:0})}  activeClassName="selected" className={`${slideItem.id===2?"selected":" "}`}> <li>  <span className="list">  </span>  </li> </NavLink>
                <NavLink to="/apple"  onClick={() => setSlideItem({id:0})}  activeClassName="selected" className={`${slideItem.id===3?" selected ":" "}`}> <li>  <span className="list">  </span>  </li> </NavLink>
                <NavLink to="/jade-teriyaki" onClick={() => setSlideItem({id:0})}  activeClassName="selected" className={`${slideItem.id===4?" selected ":" "}`}> <li>  <span className="list" >   </span>  </li> </NavLink>
                
            </ul>
        </div>
    );
};

export default MenuBottom;