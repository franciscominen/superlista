import React, { useContext } from 'react';
import "./styles.scss";
import {FaFilter} from "react-icons/fa";
import {Link} from "react-router-dom";
import { Collapse, Box, Button, useDisclosure} from "@chakra-ui/react";
import { listContext } from '../../utils/ListContext';


export default function CategoriesComponent() {
    const { isOpen, onToggle } = useDisclosure()
    const {productCards} = useContext(listContext);
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
            
            <div><Link to={`/productos/${'lacteos'}`} onClick={onToggle} style={{backgroundColor:'#A9FFF5'}}>Lacteos</Link></div>
              
            <div style={{ borderRight: '1px solid rgba(0, 0, 0, 0.212)', borderLeft: '1px solid rgba(0, 0, 0, 0.212)'}}><Link to={`/productos/${'carnes'}`} onClick={onToggle} style={{backgroundColor:'#FFCDCD'}}>Carnes</Link></div>
                
            <div><Link to={`/productos/${'limpieza'}`} onClick={onToggle} style={{backgroundColor:'#A9DBFF'}}>Limpieza</Link></div>
            
            <div><Link to={`/productos/${'cosmetica'}`} onClick={onToggle} style={{backgroundColor:'#E8E8E8'}}>Cosmetica</Link></div>

            <div style={{ borderRight: '1px solid rgba(0, 0, 0, 0.212)', borderLeft: '1px solid rgba(0, 0, 0, 0.212)'}}><Link to={`/productos/${'bebidas'}`} onClick={onToggle} style={{backgroundColor:'#FFAD93'}}>Bebidas</Link></div>
            
            <div><Link to={`/productos/${'panaderia'}`} onClick={onToggle} style={{backgroundColor:'#FFE7A9'}}>Panaderia</Link></div>
            
            <div><Link to={`/productos/${'verduleria'}`} onClick={onToggle} style={{backgroundColor:'#ABFFA9'}}>Verduleria</Link></div>
            
            <div style={{ borderRight: '1px solid rgba(0, 0, 0, 0.212)', borderLeft: '1px solid rgba(0, 0, 0, 0.212)'}}><Link to={`/productos/${'junkfood'}`} onClick={onToggle} style={{backgroundColor:'#D4A9FF'}}>Junk Food</Link></div>
            
            <div><Link to={`/productos/${'pastas'}`} onClick={onToggle} style={{backgroundColor:'#FFFB94'}}>Pastas</Link></div>
            
            <div><Link to={`/productos/${'aceites'}`} onClick={onToggle} style={{backgroundColor:'#E4FFA9'}}>Despensa</Link></div>
            
          </Box>
        </Collapse>
      

      </>
    )
}

/* 
<ul>
<li><Link to='/'>Lacteos</Link></li>
<li><Link to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
<li><NavLink to='/'>Lacteos</NavLink></li>
</ul> */