import React, { useState, createContext, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { db } from "../firebaseConfig";

export const listContext = createContext();
export const ListProvider = ({ children }) => {
/* 
    const [productCards, setProductCards] = useState([]);
    const [isLoading, setIsloading] = useState([])
    const {categoria} = useParams();

        // Llamado a FIREBASE
        useEffect(() => {
  
            setIsloading(true)
      
            const productList = db.collection("productos");
      
            const loadProductList = new Promise((resolve, reject) => {
              productList.get().then((value) => {
                  let aux = value.docs.map(e => {
                      return { ...e.data(), id: e.id }
                  })
                  resolve(aux.sort((a, b) => { if (a.name < b.name) { return -1 }; if (a.name > b.name) { return 1 }; return 0 }));
                })
            });
      
            loadProductList.then((database) => {
              const filterProductList = database.filter((e) => e.categoryId === categoria)
              const result = (filterProductList.length === 0) ? database : filterProductList
              setProductCards(result)
              setIsloading(false)
            })
      
          }, [categoria]) */
        

    const [lista, setLista] = useState([]); //Seria el cart

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
/*                 productCards: productCards,
                setProductCards: setProductCards, */
                lista: lista,
                setLista: setLista,
                addItem: addItem,
                removeItem: removeItem,
                clearList: clearList,
/*                 isLoading: isLoading,
                setIsloading: setIsloading,
                categoria: categoria */
            }}>

                {children}

            </listContext.Provider>
        </>
    )
}