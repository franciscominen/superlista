import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "../../styles/how-to-use.scss";

const HowToUse = () => {
  const properties = {
    autoplay: false,
    infinite: false,
    arrows: true,
    transitionDuration: 500,
    pauseOnHover: true,
    canSwipe: false,
    indicators: true,
    easing: "cubic",
  };
  // AGREGAR ARROWS INVISIBLES
  return (
    <main className="howToUse_wrapper">
      <Animated className="slide-container" animationIn="zoomIn">
        <Slide {...properties}>
          <div className="each-Slide howToUse_card">
            <Link to="/" className="cardHow_close">
              <img src="assets/img/closeIcon.svg" alt="" />
            </Link>
            <div className="cardText_container">
              <h1 className="cardHow_title" style={{ margin: "8px 0 32px 0" }}>
                ¡BUUENAS!
              </h1>
              <p className="cardHow_text">
                Con <strong>Superlista</strong> podés
                <br /> generar tu lista de productos
                <br /> para ir al supermercado. <br />
                <br />
                En un futuro podrás crear
                <br /> listas de{" "}
                <span style={{ fontWeight: "500" }}>manera colaborativa</span>
                <br /> con otras personas. <br />
                <br />
                Los productos son{" "}
                <span style={{ fontWeight: "500" }}>generales</span>,<br /> es
                decir que no llevan
                <br /> marcas, ni detalles extras.
              </p>
            </div>
          </div>
          <div
            className="each-fade howToUse_card"
            style={{ backgroundColor: "#FFECBB" }}
          >
            <Link to="/" className="cardHow_close">
              <img src="assets/img/closeIcon.svg" alt="" />
            </Link>
            <div className="cardText_container">
              <h1 className="cardHow_title" style={{ marginTop: "8px" }}>
                MENÚ
              </h1>
              <img
                src="assets/img/HowToUse/Menu.svg"
                alt=""
                style={{ margin: "32px 0" }}
              />
              <p className="cardHow_text">
                En <strong>Productos</strong> encontrarás
                <br /> justamente eso, diferenciados
                <br /> por categoría. También hay
                <br /> un <span style={{ fontWeight: "500" }}>
                  buscador
                </span>. <br />
                <br /> Los productos que agregues aparecerán en{" "}
                <strong>Mi Lista</strong>.
              </p>
            </div>
          </div>
          <div
            className="each-fade howToUse_card"
            style={{ backgroundColor: "#FFAD93" }}
          >
            <Link to="/" className="cardHow_close">
              <img src="assets/img/closeIcon.svg" alt="" />
            </Link>
            <div className="cardText_container">
              <h1 className="cardHow_title" style={{ marginTop: "8px" }}>
                AGREGAR PRODUCTO
              </h1>
              <img
                src="assets/img/HowToUse/Producto.svg"
                alt=""
                style={{ margin: "16px 0" }}
              />
              <p className="cardHow_text" style={{ fontSize: "18px" }}>
                Para <span style={{ fontWeight: "500" }}>agregar</span> un
                producto
                <br /> debés tocar el botón{" "}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FaddIcon.svg?alt=media&token=a3cbf288-fd89-4586-a628-ffd80fd1815d"
                  alt=""
                />
                . <br />
                <br />
                Para agregar un producto con
                <br /> una{" "}
                <span style={{ fontWeight: "500" }}>descripción</span>, tendrás
                que
                <br /> presionar{" "}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FdescriptIcon.svg?alt=media&token=77f745e2-a217-46a4-bb94-d838d6148ebb"
                  alt=""
                />
                .
              </p>
            </div>
          </div>
          <div
            className="each-fade howToUse_card"
            style={{ backgroundColor: "#A9DBFF" }}
          >
            <Link to="/" className="cardHow_close">
              <img src="assets/img/closeIcon.svg" alt="" />
            </Link>
            <div className="cardText_container">
              <h1 className="cardHow_title" style={{ marginTop: "8px" }}>
                MI LISTA
              </h1>
              <img
                src="assets/img/HowToUse/Milista.svg"
                alt=""
                style={{ margin:'26px 0 16px 0' }}
              />
              <p className="cardHow_text">
                En <strong>Mi Lista</strong> podrás editar
                <br /> o eliminar productos.
              </p>
              <figure
                style={{
                  height: "0.5px",
                  width: "100%",
                  background: "#8D8D8D",
                  margin:'26px'
                }}
              ></figure>
              <img src="assets/img/HowToUse/Exportar.svg" alt="" style={{ marginBottom:'16px' }}/>
              <p className="cardHow_text">
                Tambien podrás <strong>exportarla</strong>
                <br /> como una imagen JPG.
              </p>
            </div>
          </div>
          <div
            className="each-fade howToUse_card"
            style={{ backgroundColor: "#D4A9FF" }}
          >
            <Link to="/" className="cardHow_close">
              <img src="assets/img/closeIcon.svg" alt="" />
            </Link>
            <div className="cardText_container" style={{justifyContent:'space-between'}}>
              <h1 className="cardHow_title" style={{ fontSize: "18px"}}>
                READY
              </h1>

              <p className="cardHow_text" style={{ fontSize: "18px" }}>
                <span style={{ fontWeight: "500" }}>
                  Esperamos que te sea
                  <br /> de ayuda,
                </span>{" "}
                cualquier
                <br /> inconveniente podes
                <br />
                contactarte con Dios.
              </p>

              <img src="assets/img/HowToUse/Ready.svg" alt="" />

              <Link to="/productos" type="button" className="comenzar_btn">
                Comenzar
              </Link>
            </div>
          </div>
        </Slide>
      </Animated>
    </main>
  );
};

export default HowToUse;
