import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Card from './components/Home/Sliders/Card/Card'

function App() {
  const [cursor, setCursor] = useState({x:null, y: null})

  const [ slideBg, setSlideBg] = useState(false)
  
  const dynamicCursor = e => (
    
    setCursor({x:e.clientX, y:e.clientY, pageX:e.pageX})
    
);

// console.log(cursor.pageX)
useEffect( () => {
  window.addEventListener('mousemove', dynamicCursor );

 

  return () => window.removeEventListener('mousemove', dynamicCursor);
}, [] )


  return (
    <div>
      
      <Home slideBg={slideBg} setSlideBg={setSlideBg} />
      <div className="dynamicCursor" style={{position:"fixed", transform: `translateX(calc(${cursor.x}px - 50%)) translateY(calc(${cursor.y}px - 50%))`, opacity:cursor.x?1:0 }} ></div>
      <div style={{ display: slideBg?"block":"none", zIndex:"-1"}}>
      <Card/>
      </div>
      
    </div>
    
  );
}

export default App;