import React, { useEffect } from "react";
import "./Sliders.scss";
import worksData from "../../../data/works.json";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Sliders = () => {
  const works = worksData.works;


  return (
    <div id="sliders" className="sliders">
      <div className="inner-slider">
       
        <Swiper slidesPerView="auto" centeredSlides="true" spaceBetween={50}>
          {works.map((work) => (
            <SwiperSlide key={`slider-${work.id}`}>
              <div id="slide">
                <div className="title">
                  .0{work.id} <br />
                  {work.title}
                </div>
                <div className="img">
                  <img src={work.src} alt="" />

                  <div className="overlay">
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
