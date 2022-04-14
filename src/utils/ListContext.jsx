import React, { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";

export const listContext = createContext();
export const ListProvider = ({ children }) => {
  // PRODUCTOS EN MI LISTA
  const [lista, setLista] = useState([]);

  // LOCAL STORAGE

  // Local Storage Get
  useEffect(() => {
    if (localStorage.getItem("lista") !== null) {
      setLista(JSON.parse(localStorage.getItem("lista")));
    }
  }, []);

  // Local Storage Set
  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const allRef = await db.collection("products").get();
    const allDocs = allRef.docs.map((document) => {
      return { id: document.id, ...document.data() };
    });
    setProducts(allDocs);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // AGREGAR PRODUCTO A MI LISTA
  const addItem = (product) => {
    const exists = lista.find((x) => x.id === product.id);
    if (exists) {
      setLista(lista);
    } else {
      setLista([...lista, { ...product }]);
    }
  };

  // QUITAR PRODUCTO
  const removeItem = (id) => {
    const productCards = lista.filter((productCard) => productCard.id !== id);
    setLista(productCards);
  };
  // BORRAR TODOS LOS PRODUCTOS
  const clearList = () => {
    setLista([]);
  };

  // BUSCADOR
  const [searchTerm, setSearchTerm] = useState("");
  function clearSearch(event) {
    //Limpiar buscador
    event.preventDefault();
    setSearchTerm("");
  }

  // OTRAS FUNCIONES DE ESTILOS
  const [overflowScroll, setOverflowScroll] = useState(false);
  const handleClick = () => {
    overflowScroll ? setOverflowScroll(false) : setOverflowScroll(true);
  };

  const [moveTop, setMoveTop] = useState(false);
  const moveTopClick = () => {
    moveTop ? setMoveTop(false) : setMoveTop(true);
  };

  // AGREGAR/EDITAR NOTAS
  const addOrEdit = () => {};

  return (
    <>
      <listContext.Provider
        value={{
          lista: lista,
          setLista: setLista,
          addItem: addItem,
          removeItem: removeItem,
          clearList: clearList,
          overflowScroll: overflowScroll,
          setOverflowScroll: setOverflowScroll,
          handleClick: handleClick,
          setSearchTerm: setSearchTerm,
          searchTerm: searchTerm,
          setMoveTop: setMoveTop,
          moveTop: moveTop,
          moveTopClick: moveTopClick,
          clearSearch: clearSearch,
        }}
      >
        {children}
      </listContext.Provider>
    </>
  );
};
