import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreProvider";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

const Home = () => {
  const { clearList } = useContext(StoreContext);

  return (
    <>
      <section className="home">

        <img src="/assets/img/homeColors.svg" alt="" style={{position:'absolute', bottom:'0'}}/>
        <div className="logo_container">
          <h1 className="logo_big">
            Superlista<span>.ar</span>
          </h1>
        </div>

        <Animated
          className="onlyDesktop_container"
          animationIn="zoomIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={700}
        >
          <img className="homeGIF" src="/assets/HomeGIF.gif" alt="" />
          <h1 className="title_desktop">
            ¡Perdón! Por el momento solo vas a poder aprovecharme desde
            cualquier dispositivo móvil :(
          </h1>
        </Animated>

        <Animated
          className="homeBtns_container"
          animationIn="zoomIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={700}
          animationInDelay={3100}
        >
          <Link to={"/productos"} className="newList_btn" onClick={clearList}>
            <img src={"assets/img/newListBtn.svg"} alt="" />
            <p>
              {" "}
              <strong>Crear nueva</strong> lista
            </p>
          </Link>
          <Link to={"/mi-lista"} className="newList_btn">
            <img src={"assets/img/continueBtn.svg"} alt="" />
            <p>
              <strong>Continuar</strong> mi lista
            </p>
          </Link>
        </Animated>

        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={900}
          animationInDelay={3500}
          className="login-home_container homeBtns_container"
        >
          <Link to={"/how-to-use"}>¿Cómo usarla?</Link>
        </Animated>

        <footer className="footer_desktop">
          <p>
            <strong>Superlista</strong>.ar © 2021 - Todos los derechos
            reservados. v1.0.0
          </p>
        </footer>
      </section>
    </>
  );
};

export default Home;
