import React, { useContext, useState } from "react";
import "../../../styles/navbar.scss";
import { StoreContext } from "../../../context/StoreProvider";

const SearchComponent = () => {
  const { setSearchTerm, moveTop, searchTerm, clearSearch } =
    useContext(StoreContext);

  // Cambiar clearSearch por backSearchToProductos.
  // Crear funcion para btn__clearSearch que solo vacie el input y quede en ::focus.
  // Resolver el prevent default del teclado mobile.

  return (
    <>
      <form
        id="search"
        className={
          moveTop ? "search_container" : "search_container moverArriba"
        }
      >
        <input
          className="search"
          type="text"
          placeholder="Buscar producto"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          id="search"
          value={searchTerm}
        />
        <button onClick={clearSearch} className="btn_clearSearch">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FclearSearchIcon.svg?alt=media&token=3a7fecc0-d329-4645-963b-fcfa8a9a8f70"
            alt=""
          />
        </button>
      </form>
    </>
  );
};

export default SearchComponent;
