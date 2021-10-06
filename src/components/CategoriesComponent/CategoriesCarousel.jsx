import React from "react";
import { Link } from "react-router-dom";
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const CategoriesCarousel = () => {
  return (
    <section>
      <h1
        style={{
          color: "#232323",
          fontSize: "18px",
          fontWeight: "800",
          margin: "16px 16px 0 16px",
        }}
      >
        Categorías
      </h1>
      <Carousel
        className="carousel-container"
        plugins={[
          /* 'centered', */
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
        animationSpeed={500}
        offset={16}
      >
        <div className="carousel-item">
          <Link to={`/productos/${"carnes"}`} className="img-container">
            <img src={"assets/img/categories/carnes.svg"} alt="" />
          </Link>
          <p>Carnes</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"lacteos"}`} className="img-container">
            <img src={"assets/img/categories/lacteos.svg"} alt="" />
          </Link>
          <p>Lacteos</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"bebidas"}`} className="img-container">
            <img src={"assets/img/categories/bebidas.svg"} alt="" />
          </Link>
          <p>Bebidas</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"cosmetica"}`} className="img-container">
            <img src={"assets/img/categories/cosmetica.svg"} alt="" />
          </Link>
          <p>Cosmética</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"aceites"}`} className="img-container">
            <img src={"assets/img/categories/despensa.svg"} alt="" />
          </Link>
          <p>Despensa</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"junk-food"}`} className="img-container">
            <img src={"assets/img/categories/junkfood.svg"} alt="" />
          </Link>
          <p>Junk Food</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"limpieza"}`} className="img-container">
            <img src={"assets/img/categories/limpieza.svg"} alt="" />
          </Link>
          <p>Limpieza</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"panaderia"}`} className="img-container">
            <img src={"assets/img/categories/panaderia.svg"} alt="" />
          </Link>
          <p>Panadería</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"pastas"}`} className="img-container">
            <img src={"assets/img/categories/pastas.svg"} alt="" />
          </Link>
          <p>Pastas</p>
        </div>
        <div className="carousel-item">
          <Link to={`/productos/${"verduleria"}`} className="img-container">
            <img src={"assets/img/categories/verduleria.svg"} alt="" />
          </Link>
          <p>Verdulería</p>
        </div>
      </Carousel>
    </section>
  );
};

export default CategoriesCarousel;
