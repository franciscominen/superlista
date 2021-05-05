import React from 'react';
import "./styles.scss";
import {FaFilter} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import { Collapse, Box, Button, useDisclosure} from "@chakra-ui/react";


export default function CategoriesComponent() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        {isOpen 
        ? <Button onClick={onToggle}><FaFilter fill='#252525'/></Button>
        : <Button onClick={onToggle}><FaFilter fill='transparent' strokeWidth='40' stroke='#252525'/></Button> 
        }
        
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            
            <div className='link1'><NavLink to={`/productos/${'lacteos'}`} onClick={onToggle} style={{backgroundColor:'#A9FFF5'}}>Lacteos</NavLink></div>
              
            <div className='link2' style={{ borderRight: '1px solid rgba(0, 0, 0, 0.212)', borderLeft: '1px solid rgba(0, 0, 0, 0.212)'}}><NavLink to={`/productos/${'carnes'}`} onClick={onToggle} style={{backgroundColor:'#FFCDCD'}}>Carnes</NavLink></div>
                
            <div className='link3'><NavLink to={`/productos/${'limpieza'}`} onClick={onToggle} style={{backgroundColor:'#A9DBFF'}}>Limpieza</NavLink></div>
            
            <div className='link4'><NavLink to={`/productos/${'cosmetica'}`} onClick={onToggle} style={{backgroundColor:'#E8E8E8'}}>Cosmetica</NavLink></div>

            <div className='link5' style={{ borderRight: '1px solid rgba(0, 0, 0, 0.212)', borderLeft: '1px solid rgba(0, 0, 0, 0.212)'}}><NavLink to={`/productos/${'bebidas'}`} onClick={onToggle} style={{backgroundColor:'#FFAD93'}}>Bebidas</NavLink></div>
            
            <div className='link6'><NavLink to={`/productos/${'panaderia'}`} onClick={onToggle} style={{backgroundColor:'#FFE7A9'}}>Panaderia</NavLink></div>
            
            <div className='link7'><NavLink to={`/productos/${'verduleria'}`} onClick={onToggle} style={{backgroundColor:'#ABFFA9'}}>Verduleria</NavLink></div>
            
            <div className='link8' style={{ borderRight: '1px solid rgba(0, 0, 0, 0.212)', borderLeft: '1px solid rgba(0, 0, 0, 0.212)'}}><NavLink to={`/productos/${'junkfood'}`} onClick={onToggle} style={{backgroundColor:'#D4A9FF'}}>Junk Food</NavLink></div>
            
            <div className='link9'><NavLink to={`/productos/${'pastas'}`} onClick={onToggle} style={{backgroundColor:'#FFFB94'}}>Pastas</NavLink></div>
            
            <div className='link10'><NavLink to={`/productos/${'aceites'}`} onClick={onToggle} style={{backgroundColor:'#E4FFA9'}}>Despensa</NavLink></div>
            
          </Box>
        </Collapse>
      

      </>
    )
}

/* 
<ul>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
</ul> */