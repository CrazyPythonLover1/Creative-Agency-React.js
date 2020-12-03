import React, { useEffect, useState } from "react";
import "./Sliders.scss";
import worksData from "../../../data/works.json";
import Slide from "./Slide/Slide";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Navbar from "../Navbar/Navbar";



const Sliders = ({setNavHandleColor}) => {

  const works = worksData.works;
   const [isRotate, setIsRotate] = useState({})

  //  console.log(isRotate.startX)

   const [rotate, setRotate] = useState(0)
   useEffect(() => {
    if (isRotate.diff> 40){
      console.log(isRotate.diff)
      setRotate(40);
      // console.log(rotate)
      
    } else if( isRotate.startX> isRotate.currentX){
      setRotate(-40);
      // console.log(rotate)
    } else{
      setRotate(isRotate.diff)
    }

    setTimeout(() => {
      setRotate(0)
    }, 700)

   }, [isRotate.diff])


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

  const [individualSlide, setIndividualSlide] = useState(false);
  const [slideItem, setSlideItem] = useState({})

 const handleBtn = (work) => {
  setIndividualSlide(true)
  setSlideItem(work)
  setNavHandleColor("white")
  console.log("click");
 }



  return (
    <div className={`container  ${individualSlide?"expand":""} `}   >
      
    <div id="sliders" className="sliders">
      <div className="inner-slider">
       
      {/* <div style={{opacity:individualSlide?1:0}}> <Navbar/> </div>  */}
        <Swiper 
          slidesPerView="auto" 
          centeredSlides="true"
          speed={1000}
          initialSlide={1}
          preventInteractionOnTransition={individualSlide?true:false}
          allowSlidePrev={individualSlide?false:true}
          allowSlideNext={individualSlide?false:true}
          // virtualTranslate = {individualSlide?"true":"false"}
          // touchStartPreventDefault="false"
          
          onSlideChange={() => {
            setDragging(true)
            // drawMouseSpeedDemo()
            console.log("slide change")
            setRotate(20);
          }}
          onTouchMove={(e) => {
            setDragging(!dragging) 
            // drawMouseSpeedDemo(e)
            // console.log(e.touches.startX)
            // console.log("Touch Move ")
            !individualSlide && setIsRotate({startX:e.touches.startX, currentX:e.touches.currentX, diff:e.touches.diff})

          } }
          
          onTouchStart={() => {
            setDragging(true) 
            // drawMouseSpeedDemo()
            // console.log("Touch Start")

          } }
          onClick={() => {
            setDragging(true) 
            // drawMouseSpeedDemo()
            // console.log(" Click ")

          }}
 

          // onSetTranslate={() => {
          //   setDragging(true) 
          //   drawMouseSpeedDemo()
          // }}
          // onSliderMove ={ () => setIsRotate( true)}
          // onSlideNextTransitionEnd={ () => setIsRotate( true)}
       
        // style={{display: individualSlide?'none':'block'}}
        >
          {/*  */}
          
          {works.map((work) => (
            <SwiperSlide key={`slider-${work.id}`} style={{transform:`rotateY(${individualSlide?"":rotate}deg)  `}}   >
              
              <div id="slide" className="slide"   >
                <div className="title">
                  .0{work.id} <br/>
                  {work.title}
                </div>
                <div className="img" style={{transform: `scaleX(${rotate>20?1:1}) ` }} >
                  <img src={work.src} alt=""   />

                  <div className="overlay" style={{opacity:activeSlide?1:0 }} >
                    <div className="category"> {work.category} </div>
                    <div className="title"> {work.productTitle} </div>
                    <div className="button" onClick={() => handleBtn(work)}> <span>View case study</span> <ArrowForwardIcon/>
                   
                    </div>
                  </div>

                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
      
    </div>

    

{/* { individualSlide &&   <div>  <Slide slideItem={slideItem}/>  </div> } */}
    </div>
  );
};

export default Sliders;
