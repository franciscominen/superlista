import React from 'react'
import { Animated } from 'react-animated-css'
import {Link} from 'react-router-dom'
import "./styles.scss"

const Default = () => {
    return (
        <Animated  animationIn="zoomIn" className='default-container'>
            <h1>:(</h1>
            <h2>Lo sentimos, estamos trabajando en esta sección.</h2>
            <Link to={'/'} className='volver-inicio_btn'>Volver al inicio</Link>
        </Animated>
    )
}

export default Default
