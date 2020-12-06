import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sliders from './Sliders/Sliders';
import Card from './Sliders/Card/Card'

const Home = ({slideBg, setSlideBg}) => {
    
    const [ navHandleColor, setNavHandleColor] = useState("black")

    const handleColor = () => {

    }

    return (
        <div>
            <Navbar navHandleColor={navHandleColor} />
            <Sliders slideBg={slideBg} setSlideBg={setSlideBg} setNavHandleColor={setNavHandleColor} />
            {/* <Card/> */}
        </div>
    );
};

export default Home;