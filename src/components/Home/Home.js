import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sliders from './Sliders/Sliders';

const Home = () => {
    
    const [ navHandleColor, setNavHandleColor] = useState("black")

    const handleColor = () => {

    }

    return (
        <div>
            <Navbar navHandleColor={navHandleColor} />
            <Sliders setNavHandleColor={setNavHandleColor} />
        </div>
    );
};

export default Home;