import React from "react";
import "./Slide.scss";

const Slide = ({ slideItem }) => {
  return (
    <div id="individualSlide" className="individualSlide"  >
      <div id="slide" className="slide"  >
                
                <div className="img"  >
                
                  <img src={slideItem.src} alt="" />
{/* style={{opacity:1 , transform: `scale(2.9)`}} */}
                  <div className="overlay"  >  
                  <div className="title">
                  .0{slideItem.id} <br/>
                  {slideItem.title}
                </div>
                    <div className="category"> {slideItem.category} </div>
                    <div className="title"> {slideItem.productTitle} </div>
                    <div className="button"  > <span>View case study</span> 
                    {/* {individualSlide && <Slide slideItem={slideItem}/> }     <ArrowForwardIcon/>*/}
                    </div>
                  </div>

                </div>
              </div>
    </div>
  );
};

export default Slide;
