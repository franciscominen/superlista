import React from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';
import "./styles.scss"

const Home = () => {
    return(
        <>
            <section className='home'>
                <img src={'assets/img/logoBig.svg'} alt="" className='logo_big'/>


                <Animated className='homeBtns_container' animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={700} animationInDelay={3100}>
                    <Link to={'/productos'} className='newList_btn'>
                        <img src={'assets/img/newListBtn.svg'} alt="" />
                        Crear nueva lista
                    </Link>
                    <Link to={'/productos'} className='newList_btn'>
                        <img src={'assets/img/continueBtn.svg'} alt="" />
                        Continuar mi lista
                    </Link>
                </Animated>

            </section>
        </>
    )   
}

export default Home
