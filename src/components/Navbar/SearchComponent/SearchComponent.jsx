import React, { useContext, useRef, useEffect } from "react";
import "../../../styles/navbar.scss";
import { StoreContext } from "../../../context/StoreProvider";

const UseFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const SearchComponent = () => {
  const { setSearchTerm, moveTop, searchTerm, clearSearch } =
    useContext(StoreContext);

  const [input1Ref, setInput1Focus] = UseFocus();

  // Auto focus al apreta la lupa? 
  
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
          ref={input1Ref}
        />
        <button
          className="btn_clearSearch"
          onClick={(e) => {
            e.preventDefault();
            setSearchTerm("");
            setInput1Focus();
          }}
        >
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
