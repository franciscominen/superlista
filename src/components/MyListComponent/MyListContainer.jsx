import React, {useContext} from 'react';
import "./styles.scss";
import ItemsInList from './ItemsInList';
import {listContext} from "../../utils/ListContext";
import {Link} from "react-router-dom";
import ClearListBtn from '../../utils/ClearListBtn';
import {IoCartOutline} from "react-icons/io5"
import { Animated } from 'react-animated-css';

const MyListContainer = () => {
    
    const { lista, clearList } = useContext(listContext); 

    return (
        <>   
            {lista.length === 0 ? 
            <>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationOutDuration={500}>
                    <div className='emptyList_container'>
                        <IoCartOutline/>
                        <h3>No hay productos en su lista</h3>
                        <Link to="/productos">
                            <button >
                                Agregar productos
                            </button>
                        </Link> 
                    </div>
                </Animated>
            </>
            :
            <>
                <section className='list_container'>
                    <ItemsInList />
                    <button onClick={clearList}>Clear List</button>
                </section>
            </>}
        </> 
    )
}

export default MyListContainer;