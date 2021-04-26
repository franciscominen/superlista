import React from 'react';
import "./styles.scss";
import {NavLink} from "react-router-dom";
import CategoriesComponent from '../CategoriesComponent/CategoriesComponent';
import SearchComponent from '../SearchComponent/SearchComponent';

const Navbar = () => {
    return (
        <nav className='navbar'>

            <div className='sections__container'>
                    <NavLink 
                        to="/productos" 
                        className='nav-link' 
                        activeClassName='navLink-active'>
                        Productos
                    </NavLink>
                    
                    <hr className='divider'/>

                    <NavLink 
                        to="/mi-lista" 
                        className='nav-link' 
                        activeClassName='navLink-active'>
                            Mi Lista
                    </NavLink>
            </div>

            <div className='components__container'>
                <SearchComponent/>
                <CategoriesComponent/>
            </div>
        </nav>
    )
}

export default Navbar
