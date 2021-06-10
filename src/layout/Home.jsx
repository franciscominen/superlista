import React from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';
import "./styles.scss"

const Home = () => {
    return(
        <>
            <section className='home'>
                <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FsuperlistaLogo.svg?alt=media&token=ee30d404-4dfd-4f11-b316-1cdf22221a80'} alt="" className='logo_big'/>


                <Animated className='homeBtns_container' animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={700} animationInDelay={3100}>
                    <Link to={'/productos'} className='newList_btn'>
                        <img src={'assets/img/newListBtn.svg'} alt="" />
                        <p> <strong>Crear nueva</strong> lista</p> 
                    </Link>
                    <Link to={'/productos'} className='newList_btn'>
                        <img src={'assets/img/continueBtn.svg'} alt="" />
                        <p><strong>Continuar</strong>  mi lista</p> 
                    </Link>
                </Animated>

                <Animated className='homeBtns_container' animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={900} animationInDelay={3500} className='login-home_container'>
                    <h2>¿Ya tenés cuenta?</h2>
                    <Link to={'/on-work'}>Inciar sesión con Google</Link>
                </Animated>

            </section>
        </>
    )   
}

export default Home
