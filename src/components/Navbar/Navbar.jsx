import React, {useContext, useState, useEffect} from 'react';
import "../../styles/navbar.scss";
import {NavLink} from "react-router-dom";
import SearchComponent from './SearchComponent/SearchComponent';
import { StoreContext } from '../../context/StoreProvider';
import CategoriesCollapse from '../CategoriesComponent/CategoriesCollapse/CategoriesCollapse';

const Navbar = () => {

    const {moveTop, setMoveTop, moveTopClick, clearSearch } = useContext(StoreContext);

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);  
  
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
  
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
  
      setPrevScrollPos(currentScrollPos);
    }, 100);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
  
    }, [prevScrollPos, visible, handleScroll]);
  
    const navbarStyles = {
        position: 'sticky',
        top: '0',
        zIndex: '5',
        height: '120px',
        width: '100%',
        backgroundColor: '#F8F8F8',
        textAlign: 'center',
        transition: 'top 0.3s',
        borderRadius: '0 0 30px 30px'
      }

    return (
        
        <nav className='navbar' style={{ ...navbarStyles, top: visible ? '0' : '-48px' }}>

            <header >

            <button onClick={clearSearch} type='submit'className='search-btn' >
                <img src={"https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FsearchIcon.svg?alt=media&token=0c0b6eb1-4888-4459-b4db-b0d7718882ef"} alt="" onClick={moveTopClick}/>
            </button>

            <div className='search-logo_container'>
                <SearchComponent />
                <img className={moveTop ? 'moverArriba' : ''} src={"https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FlogoNav.svg?alt=media&token=d1640544-9de0-4fe9-bab5-1e5e2cb9f03d"} alt="" style={{maxWidth:'114px'}} /> 
            </div>
            
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

           <CategoriesCollapse/>

        </nav>
 
    )
}
export default Navbar