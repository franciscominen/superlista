import React, { useContext, useState } from "react";
import "../../../styles/navbar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { StoreContext } from "../../../context/StoreProvider";

const SearchComponentNpm = () => {
  const { searchTerm, setSearchTerm, moveTop, clearSearch } =
    useContext(StoreContext);

  const items = [
    {
      id: 0,
      name: "Queso",
    },
    {
      id: 1,
      name: "Zanahoria",
    },
    {
      id: 2,
      name: "Pera",
    },
    {
      id: 3,
      name: "Mostachon",
    },
    {
      id: 4,
      name: "Mango",
    },
  ];

  const formatResult = (item) => {
    return (<p dangerouslySetInnerHTML={{__html: '<p>'+item+'</p>'}}></p>); //To format result as html
  };

  return (
    <>
      <div
        className={moveTop ? "search" : "search moverArriba"}
        style={{
          width: "100%",
          borderBottom: "1px solid #232323",
          transition: '.3s'
        }}
      >
        <ReactSearchAutocomplete
          items={items}
          formatResult={formatResult}
          inputSearchString={searchTerm}
          onSearch={setSearchTerm}
          showIcon={false}
          placeholder={"Buscar un producto..."}
          maxResults={10}
          styling={{
            height: "34px",
            border: "none",
            borderRadius: "0",
            backgroundColor: "none",
            boxShadow: "none",
            hoverBackgroundColor: "none",
            color: "#232323",
            fontSize: "18px",
            fontFamily: "'IBM Plex Sans', sans-serif",
            iconColor: "#232323",
            lineColor: "none",
            placeholderColor: "#8D8D8D",
            clearIconMargin: "0px",
          }}
        />
      </div>
    </>
  );
};

export default SearchComponentNpm;
