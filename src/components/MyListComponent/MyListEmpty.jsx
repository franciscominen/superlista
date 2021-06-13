import React from 'react'
import '../../styles/my-list.scss'
import {Link} from 'react-router-dom'
import { Animated } from 'react-animated-css'

const MyListEmpty = () => {
    return (
        <Animated animationIn='headShake'> 
            <section className='list-empty__container'>
                <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FemptyCart.svg?alt=media&token=c3d0250d-b611-4387-9cb2-5480b406aaa5'} alt="" />
                <h1>Parece que aún no agregaste nada a tu lista</h1>
                <Link to='/productos' type='button' className='backProducts_btn'>Agregar productos</Link>
            </section>
        </Animated>
    )
}

export default MyListEmpty
