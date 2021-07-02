import { useState, useEffect } from "react";
import { db } from '../firebaseConfig'

   
export const getDataProducts = async () => {
    
    const response = db.collection('products');
    try {
        const data = await response.get();
        data.docs.forEach(product => {
            return ({...product.data(), id: product.id})
        })
    }
    catch(err) {
        console.error('faso')
    }
}
/* 
useEffect(() => {
    getDataProducts();
}, []) */
