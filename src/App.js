import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Card from './components/Home/Sliders/Card/Card'
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Slide from './components/Home/Sliders/Slide/Slide';
import Navbar from './components/Home/Navbar/Navbar';
import AddIcon from '@material-ui/icons/Add';

import React from 'react'





function App() {
  const [cursor, setCursor] = useState({x:null, y: null})
  const [cursorClass, setCursorClass] = useState('')
  const [cursorNav, setCursorNav] = useState("")
  const [slideItem, setSlideItem] = useState({})
  const [ slideBg, setSlideBg] = useState(false)
  const [ navHandleColor, setNavHandleColor] = useState("black")
  const [ cardBtn, setCardBtn] = useState(false)
  const [individualSlide, setIndividualSlide] = useState(false);

  
  const dynamicCursor = e => (
    setCursor({x:e.clientX, y:e.clientY, pageX:e.pageX})
    
);

// console.log(cursor.pageX)
useEffect( () => {
  window.addEventListener('mousemove', dynamicCursor );
  return () => window.removeEventListener('mousemove', dynamicCursor);
}, [] )


  return (
   
    <Router>
    <div>
    
      <Navbar navHandleColor={navHandleColor} setNavHandleColor={setNavHandleColor} setSlideBg={setSlideBg} setCursorNav={setCursorNav} />
      <Switch>
        <Route exact path="/">
          <Home slideBg={slideBg} setSlideBg={setSlideBg} setNavHandleColor={setNavHandleColor} setCursorClass={setCursorClass} individualSlide={individualSlide} setIndividualSlide={setIndividualSlide} slideItem={slideItem} setSlideItem={setSlideItem} />
        </Route>
        <Route path="/special">
          <Card setCardBtn={setCardBtn} />
        </Route>
        <Route path="/work">
          <Slide cardBtn={cardBtn} setSlideBg={setSlideBg}  setNavHandleColor={setNavHandleColor} setIndividualSlide={setIndividualSlide} slideItem={slideItem} setSlideItem={setSlideItem} />
        </Route>
        <Route path="/my-protein">
          <Slide cardBtn={cardBtn} setSlideBg={setSlideBg}  setNavHandleColor={setNavHandleColor} setIndividualSlide={setIndividualSlide} slideItem={slideItem} setSlideItem={setSlideItem} />
        </Route>
        <Route path="/nike-air-max">
          <Slide cardBtn={cardBtn} setSlideBg={setSlideBg}  setNavHandleColor={setNavHandleColor} setIndividualSlide={setIndividualSlide} slideItem={slideItem} setSlideItem={setSlideItem} />
        </Route>
        <Route path="/apple">
          <Slide cardBtn={cardBtn} setSlideBg={setSlideBg}  setNavHandleColor={setNavHandleColor} setIndividualSlide={setIndividualSlide} slideItem={slideItem} setSlideItem={setSlideItem} />
        </Route>
        <Route path="/jade-teriyaki">
          <Slide cardBtn={cardBtn} setSlideBg={setSlideBg}  setNavHandleColor={setNavHandleColor} setIndividualSlide={setIndividualSlide} slideItem={slideItem} setSlideItem={setSlideItem} />
        </Route>
      </Switch>
      
      <div className={` cursor`}  >
        <div className={"dynamicCursor"} style={{display: slideBg?"none":"block", position:"fixed", transform: `translateX(calc(${cursor.x}px - 50%)) translateY(calc(${cursor.y}px - 50%))`, width: (cursorClass || cursorNav)?"40px":"18px", height: (cursorClass || cursorNav)?"40px":"18px",  }} > <span style={{opacity:cursorClass?1:0}} className="cursorIcon"> <SettingsEthernetIcon/> </span> <span style={{opacity:cursorNav?1:0}} className="cursorIcon"> <AddIcon/> </span> </div>
        <div className={"dynamicCursor"} style={{ display: slideBg?"block":"none", position:"fixed", transform: `translateX(calc(${cursor.x}px - 50%)) translateY(calc(${cursor.y}px - 50%))`, width: "18px", height: "18px",  }} >  <span style={{opacity:cursorNav?1:0}} className="cursorIcon">  </span> </div>
       
        
      </div>
      
      
      {/* <div style={{ display: slideBg?"block":"none", zIndex:"-1"}}>
      <Card/>
      </div> */}
    </div>
    </Router>
    
  );
}

export default App;