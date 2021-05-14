import React, {useContext} from 'react';
import { listContext } from '../../utils/ListContext';
import { NoteModalComponent } from '../ProductCardComponent/NoteModalComponent';

const ItemList = ({productCard, lista, setLista, productCards}) => {
    const  {name, img, nota, id} = productCard;
    const {removeItem} = useContext(listContext)
    console.log(productCard)
    return (
        <div className='producList_container'>

            <div className='product_detail'>
                <img src={img} alt={name}/>

                <div className='product_name'>
                    <h1>{name}</h1>
                    <p>{nota}</p>
                </div>
            </div>

            <div className='btns_container'>
                <NoteModalComponent productCard={productCard} lista={setLista} productCards={productCards}/>
                <button onClick={() => removeItem(id)} className='close_btn'><img src={'assets/img/closeIcon.svg'} alt="" /></button>
            </div>

        </div>
    )
}

export default ItemList