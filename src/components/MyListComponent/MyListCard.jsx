import React, { useContext } from 'react'
import { Animated } from 'react-animated-css'
import { StoreContext } from '../../context/StoreProvider'
import EditNoteModal from '../Modals/EditNoteModal'

const MyListCard = ({product}) => {

    const {removeProduct} = useContext(StoreContext)

    return (

        <Animated animationIn='fadeInUp' animationInDuration='700'> 
        <div className='producList_container'>

            <div className='product_detail'>
                <img src={product.img} alt={product.name} style={{maxWidth:'40px'}}/>
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.nota}</p>
                </div>
            </div>

            <div className='btns_container'>
                <EditNoteModal product={product}/>
                <button className='close_btn' onClick={()=>removeProduct(product.id)}>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseIcon.svg?alt=media&token=381af7d8-e5df-458d-958f-ea4ff23ab14c'} alt="X" />
                </button>
            </div>

        </div>
        </Animated>
    )
}

export default MyListCard
