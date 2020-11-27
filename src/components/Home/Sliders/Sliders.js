import React from 'react';
import './Sliders.scss';
import worksData from '../../../data/works.json';
import Slide from './Slide/Slide';

const Sliders = () => {
    const works = worksData.works;
   
    return (
        <div id="sliders" >
            {
                works.map(work => <Slide key={`slide-${work.id}`} work={work}/>)
            }
        </div>
    );
};

export default Sliders;