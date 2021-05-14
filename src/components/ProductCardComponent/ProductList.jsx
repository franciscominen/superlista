import React, { useContext, useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { listContext } from '../../utils/ListContext';


export const ProductList = ({productCards}) => {

    const {lista, setLista} = useContext(listContext)

    return (
        <>
            {
                productCards.map((productCard) => (
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