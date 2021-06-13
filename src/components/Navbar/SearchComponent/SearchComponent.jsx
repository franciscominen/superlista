import React, {useContext} from 'react';
import '../../../styles/navbar.scss'
import { StoreContext } from '../../../context/StoreProvider'
const SearchComponent = () => {
   
    const {setSearchTerm, moveTop, setMoveTop, moveTopClick, searchTerm} = useContext(StoreContext);

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
