import React from 'react'
import '../../styles/my-list.scss'
import {Link} from 'react-router-dom'
import { Animated } from 'react-animated-css'

const MyListEmpty = () => {
    return (
        <Animated animationIn='headShake'> 
            <section className='list-empty__container'>
                <img src={"assets/img/emptyList.svg"} alt="" />
                <h1>Parece que aún no agregaste nada a tu lista</h1>
                <Link to='/productos' type='button' className='backProducts_btn'>Agregar productos</Link>
            </section>
        </Animated>
    )
}

export default MyListEmpty
