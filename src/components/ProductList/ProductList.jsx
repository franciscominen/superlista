import React from 'react';
import {ProductCard} from '../ProductCardComponent/ProductCard';

export const ProductList = ({ items }) => {
    return (
        <>
            {items.map((item) => (
            
                <ProductCard key={item.id} item={item} />
            
            ))}
        </>
    )
};