import React from "react";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../../styles/home.scss";

const CarouselHome = () => {
  return (
    <>
      <Carousel
        plugins={[
          "infinite",
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2500,
            },
          },
        ]}
        animationSpeed={1600}
      >
        <img src={"assets/img/carousel-home/1.svg"} />
        <img src={"assets/img/carousel-home/2.svg"} />
        <img src={"assets/img/carousel-home/3.svg"} />
        <img src={"assets/img/carousel-home/4.svg"} />
        <img src={"assets/img/carousel-home/5.svg"} />
        <img src={"assets/img/carousel-home/6.svg"} />
      </Carousel>
    </>
  );
};

export default CarouselHome;
