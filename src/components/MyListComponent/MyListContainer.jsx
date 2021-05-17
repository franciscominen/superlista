import React, {useContext} from 'react';
import "./styles.scss";
import ItemsInList from './ItemsInList';
import {listContext} from "../../utils/ListContext";
import {Link} from "react-router-dom";
import { Animated } from 'react-animated-css';
import ListMenuBtn from '../ListMenuBtn/ListMenuBtn';

const MyListContainer = () => {
    
    const { lista, clearList } = useContext(listContext); 

    return (
        <>   
            {lista.length === 0 ? 
            <>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationOutDuration={500}>
                    <div className='emptyList_container'>
                        <span className='carita'> :( </span>
                        <h1>Ups... Parece que todavía no agregaste nada</h1>
                        <Link to="/productos" className='volverProductos_btn'>
                            Agregar productos
                        </Link> 
                    </div>
                </Animated>
            </>
            :
            <>
                <section className='list_container'>
                    <ItemsInList />
                    <ListMenuBtn/>
                </section>
            </>}
        </> 
    )
}

export default MyListContainer;