import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../../styles/categories-home.scss";

const CategoryButton = ({ cat }) => {
  const { title, img, link } = cat;
  const [activeCategory, setActiveCategorie] = useState("");
  const handelCategory = () => {
    activeCategory ? setActiveCategorie(false) : setActiveCategorie(true);
  };

  return (
    <NavLink
      to={link}
      className="catButton_container"
      activeClassName="catButton_container-active"
    >
      <div className="catImg_container">
        <img src={img} alt={title} className="category_img" />

        <Link to={"/productos"} className='closeCategory_btn' type='button'>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseIcon.svg?alt=media&token=381af7d8-e5df-458d-958f-ea4ff23ab14c"
            alt="X"
          />
        </Link>
      </div>

      <h3>{title}</h3>
    </NavLink>
  );
};

export default CategoryButton;
