import React from "react";
import "./Slide.scss";

const Slide = ({ slideItem }) => {
  return (
    <div id="individualSlide" className="individualSlide">
      {/* <div id="slide__item" className="slide__item">
        <div className="img__item">
          <img src={slideItem.src} alt="" />
          <div className="overlay__item">
            <div className="title">
              .0{slideItem.id} <br />
              {slideItem.title}
            </div>
            <div className="category"> {slideItem.category} </div>
            <div className="title"> {slideItem.productTitle} </div>
            <div className="button">
             
              <span>View case study</span>
            </div>
          </div>
        </div>
      </div> */}

      


<header class="hero hero--map gps-bg">
	
	<div class="gps-bg__guts">
		<div class="gps-bg__bg"></div>
		<div class="gps-bg__route"></div>
		<div class="gps-bg__marker"></div>
	</div>
	<div class="gps-bg__fade"></div>

	<h1 class="hero__title">
  UX works for 
      <div class="dropping-texts"  >
        <div>Developers</div>
        <div>Designers</div>
        <div>Coders</div>
        <div>EVERYONE!</div>
      </div>
	</h1>
	
</header>
    </div>
  );
};

export default Slide;
