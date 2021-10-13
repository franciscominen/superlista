import React from "react";
import { Fade } from "react-slideshow-image";

const CarouselHome = () => {
  const fadeImages = [
    "assets/img/carousel-home/1.svg",
    "assets/img/carousel-home/2.svg",
    "assets/img/carousel-home/3.svg",
    "assets/img/carousel-home/4.svg",
    "assets/img/carousel-home/5.svg",
    "assets/img/carousel-home/6.svg"
  ];
  const fadeProperties = {
    duration: 3500,
    arrows: false,
    transitionDuration: 1500,
    pauseOnHover: false,
    canSwipe: false
  };

  return (
    <div>
      <div className="slide-container" style={{width:'62px'}}>
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} style={{maxWidth:'62px'}} alt=''/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[1]} style={{maxWidth:'62px'}} alt=''/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} style={{maxWidth:'62px'}} alt=''/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[3]} style={{maxWidth:'62px'}} alt=''/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[4]} style={{maxWidth:'62px'}} alt=''/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[5]} style={{maxWidth:'62px'}} alt=''/>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CarouselHome;
