import React from 'react';
import Sliders from './Sliders/Sliders';

const Home = ({slideBg, setSlideBg, setNavHandleColor, setCursorClass, individualSlide, setIndividualSlide, slideItem, setSlideItem }) => {
    


    return (
        <div>
            {/* <Navbar setSlideBg={setSlideBg} navHandleColor={navHandleColor} /> */}
            <Sliders slideBg={slideBg} setSlideBg={setSlideBg} setNavHandleColor={setNavHandleColor} setCursorClass={setCursorClass}  individualSlide={individualSlide} setIndividualSlide={setIndividualSlide} slideItem={slideItem} setSlideItem={setSlideItem} />
            {/* <Card/> */}
        </div>
    );
};

export default Home;