import React, { useContext, useRef } from "react";
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

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      input1Ref.current.blur();
    }
  };

  return (
    <>
      <form
        id="search"
        className={
          moveTop ? "search_container" : "search_container moverArriba"
        }
        onSubmit={submitHandler}
      >
        <input
          className="input_search"
          type="text"
          placeholder="Buscar producto"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          id="search"
          value={searchTerm}
          ref={input1Ref}
          onKeyPress={handleEnter}
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
            src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FbtnClearSearch.svg?alt=media&token=62a787d6-6506-49ea-bba6-797fe03e65fd'}
            alt="X"
            className="clearSearch_img"
          />
        </button>
      </form>
    </>
  );
};

export default SearchComponent;
