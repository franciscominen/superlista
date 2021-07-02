import React, { useContext } from 'react'
import '../../styles/my-list.scss'
import { StoreContext } from '../../context/StoreProvider'
import MyListCard from './MyListCard'
import MyListEmpty from './MyListEmpty'
import ClearListModal from '../Modals/ClearListModal'

const MyListContainer = () => {
    const {cart} = useContext(StoreContext)
    console.log(cart)
    return (
        <>
            {
                cart.length === 0 ? 
                <MyListEmpty/> :

                <>
                    <section className='list_container'>
                        {cart.map(product => (
                            <MyListCard key={product.id} product={product}/>
                        ))}
                    </section>

                    <ClearListModal/>
                </>
            }
        </>
    )
}

export default MyListContainer
