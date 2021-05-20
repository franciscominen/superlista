import React from 'react';
import "./styles.scss";
import {NavLink} from "react-router-dom";
import CategoriesComponent from '../CategoriesComponent/CategoriesCollapse';
import SearchComponent from '../SearchComponent/SearchComponent';
import {Animated} from 'react-animated-css';

const Navbar = ({productCard}) => {
    return (
        
        <nav className='navbar'>

            <header>
                <img src={'assets/img/searchIcon.svg'} alt="" />    
                <img src={"assets/img/superlistaLogo.svg"} alt="" style={{maxWidth:'114px'}} />
                <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FshareIcon.svg?alt=media&token=0322bda3-b364-4d24-b6c3-bb07566ddd7f'} alt="" />
            </header>

           

            <div className='sections__container'>
                    <NavLink 
                        to="/productos" 
                        className='nav-link' 
                        activeClassName='navLink-active'>
                        <span style={{marginBottom:'5px'}}>
                            PRODUCTOS   
                        </span>
                    </NavLink>
                    
                    <hr className='divider-nav'/>

                    <NavLink 
                        to="/mi-lista" 
                        className='nav-link' 
                        activeClassName='navLink-active'>
                            <span style={{marginBottom:'5px'}}>
                               MI LISTA 
                            </span>
                            
                    </NavLink>
            </div>

      {/*       <div className='components__container'>
                <SearchComponent/>
            </div>
             */}
            <CategoriesComponent productCard={productCard} />

        </nav>
 
    )
}
export default Navbar