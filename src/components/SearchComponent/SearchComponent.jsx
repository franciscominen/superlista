import React from 'react';
import {BiSearch} from "react-icons/bi";
import "../../utils/styles.scss"

const SearchComponent = () => {
    return (
        <div className='search_container'>
           <BiSearch/> <input type="text" placeholder='Buscar producto...'/>
        </div>
    )
}

export default SearchComponent
