import React, {useContext} from 'react';
import {listContext} from "../../utils/ListContext";
import "../../utils/styles.scss";

const SearchComponent = () => {
   
/*     const {setSearchTerm} = useContext(listContext) */

    return (
        <div className='search_container'>
            <img src={"assets/img/searchIcon.svg"} alt="" />
            <input 
                className='search'
                type="text" 
                placeholder='Buscar producto' 
               /*  onChange={event => {setSearchTerm(event.target.value)}} */
            />
        </div>
    )
}

export default SearchComponent
