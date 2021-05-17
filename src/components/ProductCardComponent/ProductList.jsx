import React, { useContext, useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { listContext } from '../../utils/ListContext';


export const ProductList = ({productCards}) => {

    const {lista, setLista, searchTerm} = useContext(listContext)

    return (
        <>
            { productCards.filter( productCard => { // SEARCH 
                if (searchTerm == "") {
                    return productCard
                } else if (productCard.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return productCard
                }
            }).map((productCard) => (
                    <ProductCard 
                        key={productCard.id} 
                        productCard={productCard} 
                        lista={lista}
                        setLista={setLista}
                        productCards={productCards}
                    />      
                ))
            }
        </>
    )
}