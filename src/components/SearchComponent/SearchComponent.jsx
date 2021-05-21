import React, {useContext, useState} from 'react';
import {listContext} from "../../utils/ListContext";
import "../../utils/styles.scss";

const SearchComponent = () => {
   
    const {setSearchTerm, moveTop, setMoveTop, moveTopClick, searchTerm} = useContext(listContext);

    return (
        

            <form id='search' className='search_container'>

            <input 
                className={moveTop ? 'search' : 'search moverArriba'}
                type="text" 
                placeholder='Buscar producto' 
                onChange={event => {setSearchTerm(event.target.value)}}
                id='search'
                value={searchTerm}
            />
            </form>
       
    )
}

export default SearchComponent
