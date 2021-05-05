import React, {useContext} from 'react';
import {ProductCard} from '../ProductCardComponent/ProductCard';
import {listContext} from "../../utils/ListContext";

export const ProductList = ({ items }) => {

    const {searchTerm} = useContext(listContext)
    
    return (
        <>
            {items.filter((item) => { // SEARCH 
                if (searchTerm == "") {
                    return item
                } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item
                }
            }).map((item) => ( 
                
                <ProductCard 
                    key={item.id} 
                    item={item} 
                />

            ))}
        </>
    )
};