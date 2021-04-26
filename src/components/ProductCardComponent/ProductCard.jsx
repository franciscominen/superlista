import React from 'react';
import "./styles.scss"
import {FiMoreHorizontal} from "react-icons/fi";
import {RiAddFill} from "react-icons/ri";

export const ProductCard = ({ item }) => {
    return (
        <div className='card_product'>

            <div className='btns_container'>
                <button><FiMoreHorizontal/></button>
                <button><RiAddFill/></button>
            </div>

            <img src={item.img} alt=""/>

            <h1>{item.name}</h1>

        </div>
    )  
};