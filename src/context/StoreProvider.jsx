import { createContext, useState, useReducer, useEffect } from 'react'
import { productsData } from '../data/dataProducts';
import storeReducer from './StoreReducer';

const initialState = {
    products: productsData,
    cart: localStorage.getItem("userList")
    ? JSON.parse(localStorage.getItem("userList"))
    : [],
}

const StoreContext = createContext(initialState);
const StoreProvider = ({ children }) => {

    // Dispatch con Local Storage
    const [state, dispatch] = useReducer(storeReducer, initialState)

    useEffect(() => {
        localStorage.setItem("userList", JSON.stringify(state.cart));
    }, [state]);
    
    // Add product Function
    const addProduct = (product) => {
        dispatch ({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }
    // Remove one product function
    const removeProduct = (id) => {
        dispatch ({
            type: 'REMOVE_PRODUCT',
            payload: id
        })
    }
    // Clear all products function
    const clearList = () => {
        dispatch ({
            type: 'CLEAR_LIST',
            payload: state.products
        })
    }

    // Add note to product function
    const [text, setText] = useState('')
    const addNote = (product, nota) => {
        dispatch ({
            type: 'ADD_NOTE',
            payload: {...product, nota}
        })
    }

    // Search component function
    const [searchTerm, setSearchTerm] = useState(""); 
    function clearSearch(event) { //Limpiar buscador
        event.preventDefault();
        setSearchTerm("");
    }

    // Search animation 
    const [moveTop, setMoveTop] = useState(false);
    const moveTopClick = () => {
        moveTop ? setMoveTop(false) : setMoveTop(true);
    };

    return (

        <StoreContext.Provider value={{
            products: state.products,
            cart: state.cart,
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
            moveTopClick
        }}>
            {children}
        </StoreContext.Provider>

    )
}
    
export { StoreContext }
export default StoreProvider;