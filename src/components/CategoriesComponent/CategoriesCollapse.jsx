import React, { useState } from 'react';
import "./styles.scss";
import {Link} from "react-router-dom";
import { Collapse, Box, Button, useDisclosure} from "@chakra-ui/react";
import { listContext } from '../../utils/ListContext';


export default function CategoriesCollapse() {
    const { isOpen, onToggle } = useDisclosure()

    const [collapseBtn, setCollapseBtn] = useState(false);

    const activeCollapseBtn = () => {
      if (window.scrollY >= 80) {
        setCollapseBtn(true)
      } else {
        setCollapseBtn(false)
      }
    };
    window.addEventListener('scroll', activeCollapseBtn);

    return (
      <>

        <Button onClick={onToggle} className={collapseBtn ? 'collapse-btn active' : 'collapse-btn' }><img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FfilterIconWhite.svg?alt=media&token=126f47c5-a571-4973-b12a-84d4b3bcf358'} alt=""/></Button>
        
        <Collapse in={isOpen} animateOpacity>

          <h1 style={{color:'#232323', fontSize:'18px', fontWeight:'800', margin:'0px 16px 8px 16px'}}>Categorías</h1>

          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            
            <Link to={`/productos/${'lacteos'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/lacteos.svg'} alt="" />
              Lácteos
            </Link>
                
            <Link to={`/productos/${'carnes'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/carnes.svg'} alt="" />
              Carnes
            </Link>
                  
            <Link to={`/productos/${'limpieza'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/limpieza.svg'} alt="" />
              Limpieza
            </Link>
              
            <Link to={`/productos/${'cosmetica'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/cosmetica.svg'} alt="" />
              Cosmética
            </Link>

            <Link to={`/productos/${'bebidas'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/bebidas.svg'} alt="" />
              Bebidas
            </Link>
              
            <Link to={`/productos/${'panaderia'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/panaderia.svg'} alt="" />
              Panadería
            </Link>
              
            <Link to={`/productos/${'verduleria'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/verduleria.svg'} alt="" />
              Verdulería
            </Link>
              
            <Link to={`/productos/${'junkfood'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/junkfood.svg'} alt="" />
              Junk Food
            </Link>
              
            <Link to={`/productos/${'pastas'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/pastas.svg'} alt="" />
              Pastas
            </Link>
              
            <Link to={`/productos/${'aceites'}`} onClick={onToggle} className='categorie_container'>
              <img src={'assets/img/categories/despensa.svg'} alt="" />
              Despensa
            </Link>
            
          </Box>
        </Collapse>
      

      </>
    )
}