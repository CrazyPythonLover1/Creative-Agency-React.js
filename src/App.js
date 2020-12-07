import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Card from './components/Home/Sliders/Card/Card'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sliders from './components/Home/Sliders/Sliders';
import Navbar from './components/Home/Navbar/Navbar';




function App() {
  const [cursor, setCursor] = useState({x:null, y: null})
  const [ slideBg, setSlideBg] = useState(false)
  const [ navHandleColor, setNavHandleColor] = useState("black")
  
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
      <Navbar navHandleColor={navHandleColor} setNavHandleColor={setNavHandleColor} setSlideBg={setSlideBg}/>
      <Switch>
        <Route exact path="/">
          <Home slideBg={slideBg} setSlideBg={setSlideBg} setNavHandleColor={setNavHandleColor} />
        </Route>
        <Route path="/pricing">
          <Card/>
        </Route>
        {/* <Route path="/work">
          <Sliders/>
        </Route> */}
      </Switch>
      
      <div className="dynamicCursor" style={{position:"fixed", transform: `translateX(calc(${cursor.x}px - 50%)) translateY(calc(${cursor.y}px - 50%))`, opacity:cursor.x?1:0 }} ></div>
      {/* <div style={{ display: slideBg?"block":"none", zIndex:"-1"}}>
      <Card/>
      </div> */}
    </div>
    </Router>
    
    
  );
}

export default App;