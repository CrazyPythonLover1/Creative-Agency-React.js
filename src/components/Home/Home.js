import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sliders from './Sliders/Sliders';
import Card from './Sliders/Card/Card'

const Home = ({slideBg, setSlideBg, setNavHandleColor}) => {
    
    

    const handleColor = () => {

    }

    return (
        <div>
            {/* <Navbar setSlideBg={setSlideBg} navHandleColor={navHandleColor} /> */}
            <Sliders slideBg={slideBg} setSlideBg={setSlideBg} setNavHandleColor={setNavHandleColor} />
            {/* <Card/> */}
        </div>
    );
};

export default Home;