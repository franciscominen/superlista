import React, { useContext, useState, useEffect } from "react";
import "../../styles/navbar.scss";
import { NavLink } from "react-router-dom";
import SearchComponent from "./SearchComponent/SearchComponent";
import { StoreContext } from "../../context/StoreProvider";
import CategoriesCollapse from "../CategoriesComponent/CategoriesCollapse/CategoriesCollapse";
import OnWorkComponent from "./ShareComponent/OnWorkComponent";

const Navbar = () => {
  const { moveTop, setMoveTop, moveTopClick, clearSearch } =
    useContext(StoreContext);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handelSearchButton = () => {
    moveTopClick();
  };

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "sticky",
    top: "0",
    zIndex: "5",
    height: "120px",
    width: "100%",
    backgroundColor: "#F8F8F8",
    textAlign: "center",
    transition: "top 0.3s",
    borderRadius: "0 0 30px 30px",
  };

  return (
    <nav
      className="navbar"
      style={{ ...navbarStyles, top: visible ? "0" : "-48px" }}
    >
      <header>
        {/* BTN SEARCH */}
        <button
          onClick={handelSearchButton}
          type="submit"
          className={moveTop ? "search_btn moverArriba" : "search_btn"}
        >
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FsearchIcon.svg?alt=media&token=0c0b6eb1-4888-4459-b4db-b0d7718882ef"
            }
            alt=""
          />
        </button>

        {/* BTN BACK */}
        <button
          onClick={handelSearchButton}
          className={moveTop ? "search_backBtn" : "search_backBtn moverArriba"}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FbackArrowIcon.svg?alt=media&token=eee22626-5fbc-4af1-b2f5-c910942c3146"
            alt="<"
            onClick={clearSearch}
          />
        </button>

        {/* LOGO/SEARCHCOMPONENT CONTAINER */}
        <div className="search-logo_container">
          <SearchComponent />

          <h1 className={moveTop ? "moverArriba logo_nav" : "logo_nav"}>
            Superlista<span>.ar</span>
          </h1>
        </div>

        <OnWorkComponent />
      </header>

      <div className="sections__container">
        <NavLink
          to="/productos"
          className="nav-link"
          activeClassName="navLink-active"
        >
          <span style={{ marginBottom: "5px" }}>PRODUCTOS</span>
        </NavLink>

        <hr className="divider-nav" />

        <NavLink
          to="/mi-lista"
          className="nav-link"
          activeClassName="navLink-active"
        >
          <span style={{ marginBottom: "5px" }}>MI LISTA</span>
        </NavLink>
      </div>

      <div
        className={
          window.location.href === "https://superlista.ar/mi-lista"
            ? "categoryCollapse-disabled"
            : ""
        }
      >
        <CategoriesCollapse />
      </div>
    </nav>
  );
};
export default Navbar;
