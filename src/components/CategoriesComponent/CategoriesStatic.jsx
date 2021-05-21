import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {Animated} from 'react-animated-css';
import { Collapse, Box, Button, useDisclosure} from "@chakra-ui/react";

function CategoriesStatic() {
    const { isOpen, onToggle } = useDisclosure()

    const [rotate, setRotate] = useState('')
    const rotateClick = () => {
        rotate ? setRotate(false) : setRotate(true);
    };

    const [activeCategory, setActiveCategorie] = useState('')
    const categoryClick = () => {
        activeCategory ? setActiveCategorie(false) : setActiveCategorie(true);
    };
    
    return (
      <>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'16px 16px 0 16px'}}>
            <h1 style={{color:'#232323', fontSize:'18px', fontWeight:'800'}}>Categorías</h1>
            
            <Button onClick={onToggle} style={{background:'none', border:'none'}}>
                <img  
                    className={rotate ? 'rotate' : ''}
                    onClick={rotateClick}
                    src={'assets/img/categoriesToggle.svg'}
                    style={{transition:'.2s'}} 
                />
            </Button>
        </div>

        <Collapse in={isOpen === false}>
          <Box
          
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <section style={{marginBottom:'16px'}} >
               
            <div className='categories-container'>
                <div className='carousel-item' onClick={categoryClick}>
                    <Link to={`/productos/${'carnes'}`} className='img-container'>
                        <span className='close-category_container'> 
                            <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/carnes' ? 'close-category active' : 'close-category'}>
                                X
                            </Link>
                        </span>
                        <img src={'assets/img/categories/carnes.svg'} alt="" />
                    </Link>
                    <p>Carnes</p>
                </div>
                <div className='carousel-item'>
                    
                    <Link to={`/productos/${'lacteos'}`} className='img-container'>
                        <span className='close-category_container'> 
                            <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/lacteos' ? 'close-category active' : 'close-category'}>
                                X
                            </Link>
                        </span>
                        <img src={'assets/img/categories/lacteos.svg'} alt="" />
                    </Link>
                    <p>Lacteos</p>

                </div>
                <div className='carousel-item'>
                    <Link to={`/productos/${'bebidas'}`} className='img-container'>
                        <span className='close-category_container'> 
                            <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/bebidas' ? 'close-category active' : 'close-category'}>
                                X
                            </Link>
                        </span>
                        <img src={'assets/img/categories/bebidas.svg'} alt="" />
                    </Link>
                    <p>Bebidas</p>
                </div>
                <div className='carousel-item'>

                    <Link to={`/productos/${'cosmetica'}`} className='img-container'>
                        <span className='close-category_container'> 
                            <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/cosmetica' ? 'close-category active' : 'close-category'}>
                                X
                            </Link>
                        </span>
                        <img src={'assets/img/categories/cosmetica.svg'} alt="" />
                    </Link>
                    <p>Cosmética</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'aceites'}`} className='img-container'>
                    <span className='close-category_container'> 
                        <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/aceites' ? 'close-category active' : 'close-category'}>
                            X
                        </Link>
                    </span>
                    <img src={'assets/img/categories/despensa.svg'} alt="" />
                </Link>
                <p>Despensa</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'junk-food'}`} className='img-container'>
                    <span className='close-category_container' style={{top:'17em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/junk-food' ? 'close-category active' : 'close-category'}>
                            X
                        </Link>
                    </span>
                    <img src={'assets/img/categories/junkfood.svg'} alt="" />
                </Link>
                <p>Junk Food</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'limpieza'}`} className='img-container'>
                    <span className='close-category_container' style={{top:'17em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/limpieza' ? 'close-category active' : 'close-category'}>
                            X
                        </Link>
                    </span>
                    <img src={'assets/img/categories/limpieza.svg'} alt="" />
                </Link>
                <p>Limpieza</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'panaderia'}`} className='img-container'>
                <span className='close-category_container' style={{top:'17em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/panaderia' ? 'close-category active' : 'close-category'}>
                            X
                        </Link>
                    </span>
                    <img src={'assets/img/categories/panaderia.svg'} alt="" />
                </Link>
                <p>Panadería</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'pastas'}`} className='img-container'>
                <span className='close-category_container' style={{top:'17em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/pastas' ? 'close-category active' : 'close-category'}>
                            X
                        </Link>
                    </span>
                    <img src={'assets/img/categories/pastas.svg'} alt="" />
                </Link>
                <p>Pastas</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'verduleria'}`} className='img-container'>
                <span className='close-category_container' style={{top:'17em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'http://superlista.ar/productos/verduleria' ? 'close-category active' : 'close-category'}>
                            X
                        </Link>
                    </span>
                    <img src={'assets/img/categories/verduleria.svg'} alt="" />
                </Link>
                <p>Verdulería</p>
                </div>
                </div>
            </section>
            
          </Box>
        </Collapse>
      </>
    )
  }

export default CategoriesStatic