import React, { useState } from 'react';

import {Link} from "react-router-dom";
import { Collapse, Box, Button, useDisclosure} from "@chakra-ui/react";


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
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Flacteos.svg?alt=media&token=21cc8ad9-fa65-436c-bc1b-5ea9b2f2a213'} className='img-collapse-navbar' />
              Lácteos
            </Link>
                
            <Link to={`/productos/${'carnes'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fcarnes.svg?alt=media&token=78fedf62-abce-4a17-a0f3-55accac623de'} className='img-collapse-navbar' />
              Carnes
            </Link>
                  
            <Link to={`/productos/${'limpieza'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Flimpieza.svg?alt=media&token=2f7d2b84-4458-49fa-b17d-5f049b15f172'} className='img-collapse-navbar' />
              Limpieza
            </Link>
              
            <Link to={`/productos/${'cosmetica'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fcosmetica.svg?alt=media&token=0edc262e-cff3-4599-a07a-ea8ee63f818e'} className='img-collapse-navbar' />
              Cosmética
            </Link>

            <Link to={`/productos/${'bebidas'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fbebidas.svg?alt=media&token=39385af9-4ed3-430d-bbdc-3198a6f50860'} className='img-collapse-navbar' />
              Bebidas
            </Link>
              
            <Link to={`/productos/${'panaderia'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fpanaderia.svg?alt=media&token=e2f346af-364a-430a-b0b6-45d43a64169a'} className='img-collapse-navbar' />
              Panadería
            </Link>
              
            <Link to={`/productos/${'verduleria'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fverduras.svg?alt=media&token=74e159fc-501c-48b7-9177-a60a1cef0ce9'} className='img-collapse-navbar' />
              Verdulería
            </Link>
              
            <Link to={`/productos/${'junkfood'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fjunkfood.svg?alt=media&token=99b14d4b-112f-452f-aae5-b82735784ad1'} className='img-collapse-navbar' />
              Junk Food
            </Link>
              
            <Link to={`/productos/${'pastas'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fpastas.svg?alt=media&token=04f72b4f-c8c6-4a29-9949-e66e586115fc'} className='img-collapse-navbar' />
              Pastas
            </Link>
              
            <Link to={`/productos/${'aceites'}`} onClick={onToggle} className='categorie_container'>
              <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fdespensa.svg?alt=media&token=41ad394f-7e3b-463e-8eca-56473eb2d469'} className='img-collapse-navbar' />
              Despensa
            </Link>
            
          </Box>
        </Collapse>
      

      </>
    )
}