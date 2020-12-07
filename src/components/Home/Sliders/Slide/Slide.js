import React, { useEffect } from "react";
import "./Slide.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Card from "../Card/Card";
import playBtn from "../../../../images/google-play-button.png";

const Slide = ({
  slideItem,
  setSlideBg,
  setIndividualSlide,
  setNavHandleColor,
}) => {
  // console.log(slideItem);

  return (
    <div className="individual__slide__container">
      <div id="individualSlide" className="individualSlide">
        {/* {
      slideItem.id === 1 || slideItem.id === 2 ? (
        <>
        <h1 class="hero__title">
        UX works for
        <div class="dropping-texts">
          <div>Developers</div>
          <div>Designers</div>
          <div>Coders</div>
          <div>EVERYONE!</div>
        </div>
      </h1>
        <header class="hero hero--map gps-bg">
          <div class="gps-bg__guts">
            <div class="gps-bg__bg"></div>
            <div class="gps-bg__route"></div>
            <div class="gps-bg__marker"></div>
          </div>
          <div class="gps-bg__fade"></div>
        </header>
        </>
      ) : ( */}
        <>
          <div className="loader-bg">
            <div class="container-slide">
              <div class="spinner">
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
              </div>

              <div class="spinner">
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
              </div>

              <div class="spinner">
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
              </div>

              <div class="spinner">
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
              </div>

              <div class="spinner">
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
              </div>

              <div class="spinner">
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
              </div>
            </div>
          </div>
        </>

        {/* )} */}

        <h1 class="hero__title">
          <span style={{ fontWeight: "100" }}> UX works for </span>
          <div class="dropping-texts">
            <div>Developers</div>
            <div>Designers</div>
            <div>Coders</div>
            <div>EVERYONE!</div>
          </div>
        </h1>

        <div className="google-play-button">
          <img src={playBtn} alt="" />
        </div>
      </div>

      {/* <Card/> */}
      <div
        className="back__button"
        onClick={() => {
          setSlideBg(false);
          setIndividualSlide(false);
          setNavHandleColor("black");
        }}
      >
        <ArrowBackIcon />
      </div>

    </div>
  );
};

export default Slide;
