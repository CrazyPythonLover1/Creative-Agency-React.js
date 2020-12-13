import React from "react";
import "./Slide.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import playBtn from "../../../../images/google-play-button.png";
import MenuBottom from "../MenuBottom/MenuBottom";
import { Link } from "react-router-dom";

const Slide = ({
  slideItem,
  setSlideItem,
  setSlideBg,
  setIndividualSlide,
  setNavHandleColor,
  cardBtn,
}) => {
  // console.log(slideItem);

  setTimeout(() => {
    setIndividualSlide(false);
  }, 500)


  return (
    <div className="individual__slide__container">
      <div id="individualSlide" className="individualSlide" style={{zIndex:cardBtn?"-1":"-1"}}>
        {/* {
      slideItem.id === 1 || slideItem.id === 2 ? (
        <>
        <h1 className="hero__title">
        UX works for
        <div className="dropping-texts">
          <div>Developers</div>
          <div>Designers</div>
          <div>Coders</div>
          <div>EVERYONE!</div>
        </div>
      </h1>
        <header className="hero hero--map gps-bg">
          <div className="gps-bg__guts">
            <div className="gps-bg__bg"></div>
            <div className="gps-bg__route"></div>
            <div className="gps-bg__marker"></div>
          </div>
          <div className="gps-bg__fade"></div>
        </header>
        </>
      ) : ( */}
        <>
          <div className="loader-bg">
            <div className="container-slide">
              <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
              </div>

              <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
              </div>

              <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
              </div>

              <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
              </div>

              <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
              </div>

              <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
              </div>
            </div>
          </div>
        </>

        {/* )} */}

        <h1 className="hero__title">
          <span style={{ fontWeight: "100" }}> UX works for </span>
          <div className="dropping-texts">
            <div>Developers</div>
            <div>Designers</div>
            <div>Coders</div>
            <div>EVERYONE!</div>
          </div>
        </h1>

        <div className="google-play-button">
          <img src={playBtn} alt="" />
        </div>
        
        <div className="features-container">
          <div className="features">
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quam magni. Provident repellat, vero </li>
              <li>Nisi ipsa quas ipsum itaque saepe, id porro illum aperiam, dolorum maxime fuga. Provident expedita modi </li>
              <li>Consectetur repellat sequi quis commodi, veritatis quos eos qui, necessitatibus sapiente repellendus, </li>
            </ul>
          </div>

          <div className="features-right">
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quam magni. Provident repellat, vero </li>
              <li>Nisi ipsa quas ipsum itaque saepe, id porro illum aperiam, dolorum maxime fuga. Provident expedita modi </li>
              <li>Consectetur repellat sequi quis commodi, veritatis quos eos qui, necessitatibus sapiente repellendus, </li>
            </ul>
            
          </div>
          <MenuBottom slideItem={slideItem} setSlideItem={setSlideItem} />
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
       <Link to="/"> <ArrowBackIcon /> </Link> 
      </div>
    
      

    </div>
  );
};

export default Slide;
