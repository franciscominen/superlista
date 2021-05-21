import React, {useContext, useState} from 'react';
import "./styles.scss";
import {Animated} from "react-animated-css";
import {listContext} from '../../utils/ListContext';
import { NoteModalComponent } from './NoteModalComponent';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductCard = ({ productCard, lista, setLista, productCards }) => {

    const {id, name, img, nota} = productCard; /* Destructuring */
    const {addItem} = useContext(listContext);

    const Msg = () => (
        <div className='toast_msj'>
          <h1>Se agregó</h1> <span>{name}</span>  <h1>a su lista.</h1>
        </div>
    )

    const notify = () => toast( <Msg/>, {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
    });

    return (
        <Animated className='cardsProducts_container' animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} >

            <div className='card_product' >
                <div className='btns_container'>
                   
                    <NoteModalComponent productCard={productCard} lista={setLista} productCards={productCards} />

                    <button onClick={()=>addItem(productCard)}>
                        <img alt='+' src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FaddIcon.svg?alt=media&token=a3cbf288-fd89-4586-a628-ffd80fd1815d'} onClick={notify}/>
                    </button>

                </div>

                <img src={img} />
                <h1>{name}</h1>

            </div>

        </Animated>
    )
}