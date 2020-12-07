import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Card from './components/Home/Sliders/Card/Card'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
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
  const [cursorClass, setCursorClass] = useState('')
  console.log(cursorClass)
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
          <Home slideBg={slideBg} setSlideBg={setSlideBg} setNavHandleColor={setNavHandleColor} setCursorClass={setCursorClass} />
        </Route>
        <Route path="/pricing">
          <Card/>
        </Route>
        {/* <Route path="/work">
          <Sliders/>
        </Route> */}
      </Switch>
      
      <div className={` cursor`}  >
        <div className={cursorClass?'':"dynamicCursor"} style={{position:"fixed", transform: `translateX(calc(${cursor.x}px - 50%)) translateY(calc(${cursor.y}px - 50%))`, opacity:!cursorClass?1:0 }} ></div>
        <div className="cursor-slide" style={{position:"fixed", transform: `translateX(calc(${cursor.x}px - 50%)) translateY(calc(${cursor.y}px - 50%))`, opacity:cursorClass?1:0 }}>
            {/* <NavigateBeforeIcon className={` before `}  ></NavigateBeforeIcon><span className="line">-</span><NavigateNextIcon className={` next `} ></NavigateNextIcon> */}
            <span className="cursorIcon"> <SettingsEthernetIcon/> </span>
        </div>
        
      </div>
      
      
      {/* <div style={{ display: slideBg?"block":"none", zIndex:"-1"}}>
      <Card/>
      </div> */}
    </div>
    </Router>
    
    
  );
}

export default App;