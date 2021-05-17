import React, { useState, createContext, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { db } from "../firebaseConfig";

export const listContext = createContext();
export const ListProvider = ({ children }) => {

    const [overflowScroll, setOverflowScroll] = useState(false);

    const handleClick = () => {
        overflowScroll ? setOverflowScroll(false) : setOverflowScroll(true);
    };

    const [lista, setLista] = useState([]); //Seria el cart
    const [searchTerm, setSearchTerm] = useState(""); // Buscador

        // Local Storage Get
        useEffect(() => {
            if (localStorage.getItem('lista') !== null) {
                setLista(JSON.parse(localStorage.getItem('lista')));
            }
        }, []);
        
        // Local Storage Set
        useEffect(() => {
            localStorage.setItem('lista', JSON.stringify(lista));
        }, [lista]);
    
    // add product
    const addItem = (productCard) => {
        const exists = lista.find(x => x.id === productCard.id);
        if(exists) {
            setLista(lista.map(x => x.id === productCard.id ? [{...exists }] : x));
        } else {
            setLista([...lista, {...productCard}])
        }
    }

    const removeItem = (id) => {
        const productCards = lista.filter(productCard => productCard.id !== id);
        setLista(productCards);
    }
 
    const clearList = () => {
        setLista([])
    };

    return (
        <>
            <listContext.Provider value={{
                lista: lista,
                setLista: setLista,
                addItem: addItem,
                removeItem: removeItem,
                clearList: clearList,
                overflowScroll: overflowScroll,
                setOverflowScroll: setOverflowScroll,
                handleClick: handleClick,
                setSearchTerm: setSearchTerm,
                searchTerm: searchTerm

            }}>

                {children}

            </listContext.Provider>
        </>
    )
}