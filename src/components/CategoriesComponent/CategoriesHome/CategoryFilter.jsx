import React, { useContext, useState } from "react";
import "../../../styles/categories-home.scss";
import { categoriesData } from "../categoriesData";
import CategoryButton from "./CategoryButton";
import { Collapse, useDisclosure } from "@chakra-ui/react";
import { StoreContext } from "../../../context/StoreProvider";
import Loader from "../../../utils/Loader";
import { Animated } from "react-animated-css";

const CategoryFilter = () => {
  const { isLoading } = useContext(StoreContext);

  const { isOpen, onToggle } = useDisclosure();
  const [rotate, setRotate] = useState("");
  const rotateClick = () => {
    rotate ? setRotate(false) : setRotate(true);
  };

  const categoryHandle = () => {
    rotateClick();
    onToggle();
  };

  return (
    <>
      <section className="categoryFilter_container">
        <div className="title_container">
          <h1>Categorías</h1>
          <img
            src={
              'assets/img/categoryHomeToggle.svg'
            }
            alt="Ocultar"
            onClick={categoryHandle}
            className={rotate ? "rotate" : ""}
          />
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <Animated animationIn="fadeIn" animationInDuration="250" animationInDelay='250'>
            <Collapse
              in={isOpen === false}
              className="categoryButton_container"
            >
              {categoriesData.map((categoria) => {
                return <CategoryButton key={categoria.index} cat={categoria} />;
              })}
            </Collapse>
          </Animated>
        )}
      </section>
    </>
  );
};

export default CategoryFilter;
