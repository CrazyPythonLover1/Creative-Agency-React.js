import React, { useEffect, useState } from "react";
import "./Sliders.scss";
import worksData from "../../../data/works.json";
import Slide from "./Slide/Slide";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



const Sliders = ({setNavHandleColor, slideBg, setSlideBg, setCursorClass, individualSlide, setIndividualSlide, slideItem, setSlideItem}) => {

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

  // const [individualSlide, setIndividualSlide] = useState(false);
  // const [slideItem, setSlideItem] = useState({})

  // const [ slideBg, setSlideBg] = useState(false)

 const handleBtn = (work) => {
  setIndividualSlide(!individualSlide)
  setSlideItem(work)
  setNavHandleColor("white");

  setTimeout(() => {
    setSlideBg(true);
    console.log(slideBg)
  }, 2500)
  
 }


 const hadleCursor = () => {
  setCursorClass('slidersCursor')
 }


  return (
    <div className={`container  ${individualSlide?"expand":""} `} onMouseEnter={() => hadleCursor()} onMouseLeave={() => setCursorClass('')} style={{height: slideBg?0:'90vh'}}  >
      
    <div id="sliders" className="sliders">
      <div className="inner-slider">
       
      {/* <div style={{opacity:individualSlide?1:0}}> <Navbar/> </div>  */}
        <Swiper 
          slidesPerView="auto" 
          centeredSlides="true"
          speed={1000}
          initialSlide={1}
          // preventInteractionOnTransition={individualSlide?true:false}
          // allowSlidePrev={individualSlide?false:true}
          // allowSlideNext={individualSlide?false:true}
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
            console.log("Touch Start")

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
            <SwiperSlide key={`slider-${work.id}`} style={{transform:`rotateY(${individualSlide?"":rotate}deg) `, display: slideBg?"none":"initial"}}  >
              
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
                    <div className="slider-button" onClick={() => {
                      handleBtn(work)
                      setCursorClass('')
                      }} > <span>View case study</span> <ArrowForwardIcon/>
                   
                    </div>
                  </div>

                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
            { !slideBg &&  <div style={{  margin:" 30px 0",height:" 100% "}}> 
              <h4 onMouseEnter={() => setCursorClass('')} onMouseLeave={() => hadleCursor()}  style={{padding: "10px 0", textAlign:" center ", }}> Drag through our work </h4> 
            </div>}
            
          <div style={{display: slideBg?"none":"initial"}} >
            {/* <MenuBottom /> */}
          </div>
        
        
      </div>
      
    </div>

{ slideBg &&   <div>  <Slide slideItem={slideItem} setSlideItem={setSlideItem}  setSlideBg={setSlideBg} setIndividualSlide={setIndividualSlide} setNavHandleColor={setNavHandleColor} />  </div> }
    </div>
  );
};

export default Sliders;
