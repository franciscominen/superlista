import React, {useContext, useState} from 'react';
import "./styles.scss";
import {Animated} from "react-animated-css";
import {listContext} from '../../utils/ListContext';
import { NoteModalComponent } from './NoteModalComponent';

export const ProductCard = ({ productCard, lista, setLista, productCards }) => {

    const {id, name, img, nota} = productCard; /* Destructuring */
    const {addItem} = useContext(listContext);

    return (
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationInDuration={500} >

            <div className='card_product' >
                <div className='btns_container'>
                   
                    <NoteModalComponent productCard={productCard} lista={setLista} productCards={productCards} />

                    <button onClick={()=>addItem(productCard)}>
                        <img alt='+' src={'assets/img/addIcon.svg'} /* onClick={notify} *//>
                    </button>

                </div>

                <img src={img} />
                <h1>{name}</h1>

            </div>
        </Animated>
    )
}