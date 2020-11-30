import React, { useEffect, useState } from "react";
import "./Sliders.scss";
import worksData from "../../../data/works.json";
import $ from 'jquery'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { CodeSharp } from "@material-ui/icons";

const Sliders = () => {
  const works = worksData.works;
   // const [isRotate, setIsRotate] = useState(false)

  const activeSlide = document.querySelector('.swiper-slide-active');
  const next = document.querySelector('.swiper-slide-next');
  const prev = document.querySelector('.swiper-slide-prev');
 
  if(activeSlide){
    activeSlide.querySelector('.overlay').style.opacity = 1;
  }
  if(next){
    next.querySelector('.overlay').style.opacity = 0;
  }
  if(prev){
    prev.querySelector('.overlay').style.opacity = 0;
  }
  // console.log(activeOverlay)

 
  const [dragging, setDragging] = useState(false)

  function drawMouseSpeedDemo() {
    var mrefreshinterval = 10; // update display every 500ms
    var lastmousex=-1; 
    var lastmousey=-1;
    var lastmousetime;
    var mousetravel = 0;
    var mpoints = [];
    var mpoints_max = 30;
    var direction;



    $('html').mousemove(function(e) {
        var mousex = e.pageX;
        var mousey = e.pageY;
        if (lastmousex > -1) {
            mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
        }
        // console.log(mousex-lastmousex)

        if(mousex-lastmousex > 0) {
            direction = '+'
        } else {
            direction = '-'
        }

        //console.log(direction);

        lastmousex = mousex;
        lastmousey = mousey;
    });
    var mdraw = function() {
        var md = new Date();
        var timenow = md.getTime();
        if (lastmousetime && lastmousetime!==timenow) {
            var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
            mpoints.push(pps);
            console.log(pps)
            if (mpoints.length > mpoints_max)
                mpoints.splice(0,1);
            mousetravel = 0;
            //console.log(pps)
            if(dragging) {
                let velocity = .5 - (pps / 40000);



                $('.swiper-slide')?.css('transform', 'rotateY(' + direction + pps / 40  + 'deg) scale(1.03)')
                console.log(direction + pps / 110 )
                $('.swiper-slide')?.css('transition', 'all ' + velocity + 's');
                //console.log(velocity)
            }

        }
        lastmousetime = timenow;
        setTimeout(mdraw, mrefreshinterval);
    }
    // We could use setInterval instead, but I prefer to do it this way
    setTimeout(mdraw, mrefreshinterval); 
};

// drawMouseSpeedDemo();



  return (
    <div id="sliders" className="sliders">
      <div className="inner-slider">
       
        <Swiper 
          slidesPerView="auto" 
          centeredSlides="true" 
          speed={1000}
          initialSlide={1}
          onSlideChange={() => {
            setDragging(true)
            drawMouseSpeedDemo()
          }}
          // onTouchMove={() => {
          //   setDragging(true) 
          //   drawMouseSpeedDemo()
          // } }
          // onTouchStart={() => {
          //   setDragging(true) 
          //   drawMouseSpeedDemo()
          // } }
          onClick={() => {
            setDragging(true) 
            drawMouseSpeedDemo()
          }}

          // onSetTranslate={() => {
          //   setDragging(true) 
          //   drawMouseSpeedDemo()
          // }}
          // onSliderMove ={ () => setIsRotate( true)}
          // onSlideNextTransitionEnd={ () => setIsRotate( true)}
       

        >
          {works.map((work) => (
            <SwiperSlide key={`slider-${work.id}`} >
              <div id="slide" className="slide" >
                <div className="title">
                  .0{work.id} <br/>
                  {work.title}
                </div>
                <div className="img">
                  <img src={work.src} alt="" />

                  <div className="overlay" style={{opacity:activeSlide?1:0}}>
                    <div className="category"> {work.category} </div>
                    <div className="title"> {work.productTitle} </div>
                    <div className="button"> <span>View case study</span> <ArrowForwardIcon/>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sliders;
