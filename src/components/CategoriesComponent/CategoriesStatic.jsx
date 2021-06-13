import React, {useState} from 'react'
import '../../styles/categories.scss'
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
                    src={'https://image.flaticon.com/icons/png/512/130/130884.png'}
                    style={{transition:'.2s', maxWidth:'16px', transform:'rotateZ(90deg)'}} 
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
                            <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/carnes' ? 'close-category active' : 'close-category'}>
                                <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" className='close-category_img' />
                            </Link>
                        </span>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fcarnes.svg?alt=media&token=78fedf62-abce-4a17-a0f3-55accac623de'} alt="" />
                    </Link>
                    <p>Carnes</p>
                </div>
                <div className='carousel-item'>
                    
                    <Link to={`/productos/${'lacteos'}`} className='img-container'>
                        <span className='close-category_container'> 
                            <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/lacteos' ? 'close-category active' : 'close-category'}>
                                <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                            </Link>
                        </span>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Flacteos.svg?alt=media&token=21cc8ad9-fa65-436c-bc1b-5ea9b2f2a213'} alt="" />
                    </Link>
                    <p>Lacteos</p>

                </div>
                <div className='carousel-item'>
                    <Link to={`/productos/${'bebidas'}`} className='img-container'>
                        <span className='close-category_container'> 
                            <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/bebidas' ? 'close-category active' : 'close-category'}>
                                <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                            </Link>
                        </span>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fbebidas.svg?alt=media&token=39385af9-4ed3-430d-bbdc-3198a6f50860'} alt="" />
                    </Link>
                    <p>Bebidas</p>
                </div>
                <div className='carousel-item'>

                    <Link to={`/productos/${'cosmetica'}`} className='img-container'>
                        <span className='close-category_container'> 
                            <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/cosmetica' ? 'close-category active' : 'close-category'}>
                                <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                            </Link>
                        </span>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fcosmetica.svg?alt=media&token=0edc262e-cff3-4599-a07a-ea8ee63f818e'} alt="" />
                    </Link>
                    <p>Cosmética</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'aceites'}`} className='img-container'>
                    <span className='close-category_container'> 
                        <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/aceites' ? 'close-category active' : 'close-category'}>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                        </Link>
                    </span>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fdespensa.svg?alt=media&token=41ad394f-7e3b-463e-8eca-56473eb2d469'} alt="" />
                </Link>
                <p>Despensa</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'junk-food'}`} className='img-container'>
                    <span className='close-category_container' style={{top:'17.1em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/junk-food' ? 'close-category active' : 'close-category'}>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                        </Link>
                    </span>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fjunkfood.svg?alt=media&token=99b14d4b-112f-452f-aae5-b82735784ad1'} alt="" />
                </Link>
                <p>Junk Food</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'limpieza'}`} className='img-container'>
                    <span className='close-category_container' style={{top:'17.1em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/limpieza' ? 'close-category active' : 'close-category'}>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                        </Link>
                    </span>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Flimpieza.svg?alt=media&token=2f7d2b84-4458-49fa-b17d-5f049b15f172'} alt="" />
                </Link>
                <p>Limpieza</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'panaderia'}`} className='img-container'>
                <span className='close-category_container' style={{top:'17.1em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'http://localhost:3000/productos/panaderia' ? 'close-category active' : 'close-category'}>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                        </Link>
                    </span>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fpanaderia.svg?alt=media&token=e2f346af-364a-430a-b0b6-45d43a64169a'} alt="" />
                </Link>
                <p>Panadería</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'pastas'}`} className='img-container'>
                <span className='close-category_container' style={{top:'17.1em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/pastas' ? 'close-category active' : 'close-category'}>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                        </Link>
                    </span>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fpastas.svg?alt=media&token=04f72b4f-c8c6-4a29-9949-e66e586115fc'} alt="" />
                </Link>
                <p>Pastas</p>
                </div>
                <div className='carousel-item'>
                <Link to={`/productos/${'verduleria'}`} className='img-container'>
                <span className='close-category_container' style={{top:'17.1em'}}> 
                        <Link to={`/productos`} className={ window.location.href === 'https://superlista.ar/productos/verduleria' ? 'close-category active' : 'close-category'}>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="" />
                        </Link>
                    </span>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Fverduras.svg?alt=media&token=74e159fc-501c-48b7-9177-a60a1cef0ce9'} alt="" />
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