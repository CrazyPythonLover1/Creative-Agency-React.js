import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';

function App() {
  const [cursor, setCursor] = useState({x:null, y: null})
  const dynamicCursor = e => (
    setCursor({x:e.clientX, y:e.clientY})
);



// useEffect( () => {
//   window.addEventListener('mousemove', dynamicCursor );
//   return () => window.removeEventListener('mousemove', dynamicCursor);
// }, [] )
  return (
    <div style={{ }}>
      
      <Home/>
      <div className="dynamicCursor" style={{position:"fixed", transform: `translateX(calc(${cursor.x}px - 50%)) translateY(calc(${cursor.y}px - 50%))`, opacity:cursor.x?1:0 }} ></div>

    </div>
    
  );
}

export default App;