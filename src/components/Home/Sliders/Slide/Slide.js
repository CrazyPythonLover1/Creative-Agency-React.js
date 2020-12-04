import React from "react";
import "./Slide.scss";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Slide = ({ slideItem, setSlideBg, setIndividualSlide, setNavHandleColor }) => {
  console.log(slideItem);
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

      


{ slideItem.id === 1  || slideItem.id === 2? <header class="hero hero--map gps-bg">
	
	<div class="gps-bg__guts">
		<div class="gps-bg__bg"></div>
		<div class="gps-bg__route"></div>
		<div class="gps-bg__marker"></div>
	</div>
	<div class="gps-bg__fade"></div>


	
</header>: <div className="loader-bg"> <div class="container-slide">
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

</div> </div>}
  

<h1 class="hero__title">
      UX works for 
      <div class="dropping-texts"  >
        <div>Developers</div>
        <div>Designers</div>
        <div>Coders</div>
        <div>EVERYONE!</div>
      </div>
      
	</h1>

	<div className="back__button" onClick={() => {
        setSlideBg(false)
		setIndividualSlide(false)
		setNavHandleColor("black")
        }}> <ArrowBackIcon/> </div>
    </div>
  );
};

export default Slide;
