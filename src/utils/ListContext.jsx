import React, { useState, createContext, useEffect } from "react";

export const listContext = createContext();
export const ListProvider = ({ children }) => {

    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

        // Local Storage Get
        useEffect(() => {
            if (localStorage.getItem('list') !== null) {
                setList(JSON.parse(localStorage.getItem('list')));
            }
        }, []);
      
        // Local Storage Set
        useEffect(() => {
            localStorage.setItem('list', JSON.stringify(list));
        }, [list]);

    const isInlist = (id) => {
        const item = list.filter(p => p.item.id === id);
        if ( item.length > 0 ) {
            return true
        }
        else{
            return false
        }
    }

    function addItem(newItem, quantity) {
        const idx = list.findIndex((listI) => listI.item.id === newItem.id)

        if (idx === -1) {
            const l = [ ...list, { item: newItem, quantity } ]
            setList(l)
        } else {
            const newQuantity = list[idx].quantity + quantity;
            const oldI = list.filter((oldI) => oldI.item.id !== list[idx].item.id)
            const l = [...oldI, { item: list[idx].item, quantity: newQuantity }]
            setList(l)
        }
    }
    
    const removeItem = (item) => {
        const listaNew = list.filter( p => p.item.id != item.id)
        setList(listaNew)
    }
 
    const clearList = () => {
        setList([])
    };

    return (
        <>
            <listContext.Provider value={{
                clearList: clearList,
                addItem: addItem,
                list: list,
                setList: setList,
                searchTerm: searchTerm,
                setSearchTerm: setSearchTerm,
                removeItem: removeItem
                }}>

                {children}

            </listContext.Provider>
        </>
    )
}