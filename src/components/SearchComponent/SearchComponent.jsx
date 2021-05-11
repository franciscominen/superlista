import React, {useContext} from 'react';
import {listContext} from "../../utils/ListContext";
import {BiSearch} from "react-icons/bi";

const SearchComponent = () => {
   
    const {setSearchTerm} = useContext(listContext)

    return (
        <div className='search_container'>
            <BiSearch/>
            <input 
                className='search'
                type="text" 
                placeholder='Buscar producto' 
                onChange={event => {setSearchTerm(event.target.value)}}
            />
        </div>
    )
}

export default SearchComponent
