import { createContext, useState, useReducer, useEffect } from "react";
import storeReducer from "./StoreReducer";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { productsData } from "../data/dataProducts";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  cart: localStorage.getItem("userList")
    ? JSON.parse(localStorage.getItem("userList"))
    : [],
};

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Fetch products data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const productsCollection = db.collection("products");
      dispatch({ type: "FETCH_INIT" });
      try {
        const getData = await productsCollection.get();
        getData.docs.forEach((product) => {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: { ...product.data(), id: product.id },
          });
        });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    fetchData();
  }, []);

  //Local Storage my-list
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(state.cart));
  }, [state]);

  // Add product Function
  const addProduct = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };
  // Remove one product function
  const removeProduct = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  };
  // Clear all products function
  const clearList = () => {
    dispatch({
      type: "CLEAR_LIST",
      payload: state.products,
    });
  };

  // Add note to product function
  const [text, setText] = useState("");
  const addNote = (product, nota) => {
    dispatch({
      type: "ADD_NOTE",
      payload: { ...product, nota },
    });
  };

  // Search component function
  const [searchTerm, setSearchTerm] = useState("");

  function clearSearch(event) {
    //Limpiar buscador
    event.preventDefault();
    setSearchTerm("");
  }

  // Search animation
  const [moveTop, setMoveTop] = useState(false);
  const moveTopClick = () => {
    moveTop ? setMoveTop(false) : setMoveTop(true);
    document.getElementById('search').focus();
  };

  return (
    <StoreContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        isLoading: state.isLoading,
        addProduct,
        removeProduct,
        clearList,
        addNote,
        text: text,
        setText,
        searchTerm: searchTerm,
        setSearchTerm,
        clearSearch,
        moveTop: moveTop,
        setMoveTop,
        moveTopClick,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreProvider;
