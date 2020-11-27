import React from 'react';
import './Slide.scss';

const Slide = ({work}) => {
    return (
        <div id="slide" >
            <div className="title">
                .0{work.id} <br/>
                {work.title}
            </div>
            <div className="img">
                <img src={work.src} alt=""/>
                <div className="overlay"></div>
            </div>
        </div>
    );
};

export default Slide;