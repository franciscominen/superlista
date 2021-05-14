import React, {useContext} from 'react'
import { listContext } from '../../utils/ListContext'
import ItemList from './ItemList'

const ItemsInList = () => {

    const {lista, setLista, clearList} = useContext(listContext);

    console.log(lista)

    return (
        <>
            { (lista.map((productCard => 
            
                <ItemList 
                    key={productCard.id} 
                    productCard={productCard} 
                    lista={lista} 
                    setLista={setLista} 
                />
            ))) }
        </>
    )
}

export default ItemsInList
