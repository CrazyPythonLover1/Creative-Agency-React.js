import React, { useEffect } from 'react';
import './Sliders.scss';
import worksData from '../../../data/works.json';
import Slide from './Slide/Slide';
// let sliders = document.querySelector('.sliders');
// console.log(sliders)
const Sliders = () => {
    const works = worksData.works;
    
    useEffect( () => {
        let slider = document.querySelector('.sliders');
        console.log(slider)
        let innerSlider = document.querySelector('.inner-slider');
        
        if (slider || innerSlider) {
        console.log(slider)
        console.log(innerSlider)
            
            var pressed = false;
        var startx;
        var x;
        slider?.addEventListener( 'mousedown', (e) => {
            pressed = true;
            startx = e.offsetX - innerSlider.offsetLeft;
            console.log(startx)
        });
        window.addEventListener('mouseup', () => {
            pressed = false;
            
        });
        slider?.addEventListener('mousemove', e => {
            if (!pressed) return;
            e.preventDefault();
    
            x = e.offsetX;
            console.log(x)
            innerSlider.style.left = `${x - startx}px`
        });
        const checkBoundary = () => {
            let outer = slider?.getBoundingClientRect();
            let inner = innerSlider?.getBoundingClientRect();
    
            if (parseInt(innerSlider.style.left) > 0){
                innerSlider.style.left = "0px";
            } else if (inner.right < outer.right){
                innerSlider.style.left = `-${inner.width - outer.width}px`
            }
        }
    
        checkBoundary()
        console.log(pressed)
        }
    }, [] )
   
    return (
        <div id="sliders" className="sliders" >
            <div className="inner-slider">
                {
                    works.map(work => <Slide key={`slide-${work.id}`} work={work}/>)
                }
            </div>
        </div>
    );
};

export default Sliders;