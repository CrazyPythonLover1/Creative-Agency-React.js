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

      <span  > UX works for </span>
      <div class="dropping-texts">
        <div>Developers</div>
        <div>Designers</div>
        <div>Coders</div>
        <div>EVERYONE!</div>
      </div>
    </div>
  );
};

export default Slide;
