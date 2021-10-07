import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import CarouselHome from "./CarouselHome";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className='logo_container'>
          <CarouselHome />
          <h1 className="logo_big">
            Superlista<span>.ar</span>
          </h1>
        </div>

        <Animated
          className="homeBtns_container"
          animationIn="zoomIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={700}
          animationInDelay={3100}
        >
          <Link to={"/productos"} className="newList_btn">
            <img src={"assets/img/newListBtn.svg"} alt="" />
            <p>
              {" "}
              <strong>Crear nueva</strong> lista
            </p>
          </Link>
          <Link to={"/productos"} className="newList_btn">
            <img src={"assets/img/continueBtn.svg"} alt="" />
            <p>
              <strong>Continuar</strong> mi lista
            </p>
          </Link>
        </Animated>

        <Animated
          className="homeBtns_container"
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={900}
          animationInDelay={3500}
          className="login-home_container"
        >
          <h2>¿Ya tenés cuenta?</h2>
          <Link to={"/on-work"}>Inciar sesión con Google</Link>
        </Animated>
      </section>
    </>
  );
};

export default Home;
