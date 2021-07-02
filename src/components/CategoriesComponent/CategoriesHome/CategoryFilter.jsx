import React, { useState } from 'react'
import '../../../styles/categories.scss'
import { categoriesData } from '../categoriesData'
import CategoryButton from './CategoryButton'
import { Collapse, Box, Button, useDisclosure} from "@chakra-ui/react";

const CategoryFilter = () => {

    const { isOpen, onToggle } = useDisclosure()
    const [rotate, setRotate] = useState('')
    const rotateClick = () => {
        rotate ? setRotate(false) : setRotate(true);
    };
    
    const categoryHandle = () => {
        rotateClick()
        onToggle()
    }

    return (
        <>
        <section className='categoryFilter_container'>

            <div className='title_container'>
                <h1>Categorias</h1>
                <img 
                    src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2Fcategorias-static%2Ficon.svg?alt=media&token=8b80513f-0aac-451c-8991-0c36fcd68b28'} 
                    alt="Ocultar" 
                    onClick={categoryHandle}
                    className={rotate ? 'rotate' : ''}
                />
            </div>

            <Collapse in={isOpen === false} className='categoryButton_container'>
         
                {
                    categoriesData.map( (categoria) => {
                        return <CategoryButton key={categoria.index} cat={categoria}/>
                    })
                }
           
            </Collapse>
        </section>
        </>
    )
}

export default CategoryFilter
