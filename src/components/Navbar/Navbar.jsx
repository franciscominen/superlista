import React from 'react';
import "./styles.scss";
import {NavLink} from "react-router-dom";
import CategoriesComponent from '../CategoriesComponent/CategoriesComponent';
import SearchComponent from '../SearchComponent/SearchComponent';

const Navbar = () => {
    return (
        <nav className='navbar'>

            <img src="assets/img/superlistaLogo.svg" alt="" style={{maxWidth:'134px', margin:'16px'}} />

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

            <div className='components__container'>
                <SearchComponent/>
            </div>
            
            <CategoriesComponent/>
            
            
        </nav>
    )
}

export default Navbar
