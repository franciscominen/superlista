import React, {useContext} from 'react';
import './styles.scss';
import {listContext} from "../../utils/ListContext";
import {IoCloseOutline} from "react-icons/io5";
import ModalComponent from "../ProductCardComponent/DescripcionModal"

const ItemsInList = () => {

    const { list, removeItem, note } = useContext(listContext);

    return (
        <>
        <div style={{display:'flex', flexDirection:'column', margin:'20px 0'}}> 

                {list.map(({item}) => {

                    return (
                        <>
                            <section className='listProducts_container'>

                                <div className='list_product' id='listProduct'>

                                    <div className='item_detail'>
                                        <img src={item.img} />
                                        <div className='descipt_container'> 
                                            <h2>{item.name}</h2> 
                                            <p style={{color:'grey', fontSize:'14px'}} >
                                                {note}
                                            </p>
                                        </div>
                                    </div>


                                    <div style={{display:'flex'}}>
                                        
                                        <ModalComponent item={item} key={item.id} />
                                    
                                        <button onClick={()=>{removeItem(item)}}>
                                            <IoCloseOutline style={{marginLeft:'10px'}}/>
                                        </button>
                                    </div>
                                    

                                </div>

                            </section>
                        </>
                    )
                })}
        </div>
    </>
    )
}

export default ItemsInList;