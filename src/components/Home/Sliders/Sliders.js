import React from 'react';
import worksData from '../../../data/works.json';
import Slider from './Slider/Slider';

const Sliders = () => {
    const works = worksData.works;
    console.log(works)
    return (
        <div>
            {
                works.map(work => <Slider works={works}/>)
            }
        </div>
    );
};

export default Sliders;