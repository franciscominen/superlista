
import React from "react";
import { Slide } from "react-slideshow-image";
import '../../styles/how-to-use.scss'

const HowToUse = () => {

  const properties = {
    autoplay: false,
    infinite: false,
    arrows: false,
    transitionDuration: 500,
    pauseOnHover: true,
    canSwipe: true,
    indicators: true,
    easing: 'cubic'
  };
  return (
    <main className='howToUse_wrapper'>
      <div className="slide-container" >
        <Slide {...properties}>
          <div className="each-Slide howToUse_card">
            <div>
              
            </div>
          </div>
          <div className="each-fade howToUse_card" style={{backgroundColor:'#FFECBB'}}>
            <div>
              
            </div>
          </div>
          <div className="each-fade howToUse_card" style={{backgroundColor:'#FFAD93'}}>
            <div>
              
            </div>
          </div>
          <div className="each-fade howToUse_card" style={{backgroundColor:'#A9DBFF'}}>
            <div>
              
            </div>
          </div>
          <div className="each-fade howToUse_card" style={{backgroundColor:'#D4A9FF'}}>
            <div>
              
            </div>
          </div>
      
        </Slide>
      </div>
    </main>
  );
};

export default HowToUse;
