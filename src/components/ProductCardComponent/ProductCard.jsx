import React, {useContext} from 'react';
import "./styles.scss"
import {RiAddFill} from "react-icons/ri";
import {listContext} from "../../utils/ListContext";
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Animated} from "react-animated-css";
import ModalComponent from './DescripcionModal';

export const ProductCard = ({ item }) => {

    const {addItem} = useContext(listContext)

    const notify = () => toast( `Se agregó ${item.name} a su lista.`, {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
        });

    const onAdd = () => {
        addItem(item)
    }
    
    return (

        <>
            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationInDuration={500} >
                <div className='card_product' >

                    <div className='btns_container'>

                        <ModalComponent item={item} key={item.id} />
                        
                        <button onClick={onAdd}>
                            <RiAddFill onClick={notify}/>
                        </button>

                    </div>

                    <img src={item.img} onerror="this.src='https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg'"/>

                    <h1>{item.name}</h1>

                </div>
            </Animated>
        </>
    )  
};