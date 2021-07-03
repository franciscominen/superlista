import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../../../styles/categories-home.scss'

const CategoryButton = ({cat}) => {

    const {title, img, link} = cat;
    const [activeCategory, setActiveCategorie] = useState('')
    const handelCategory = () => {
        activeCategory ? setActiveCategorie(false) : setActiveCategorie(true);
    };

    return (
        <NavLink to={link} className='catButton_container' activeClassName='catButton_container-active'>
            
            <Link to={'/productos'} className='closeCategory_btn'>
                <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseCategory.svg?alt=media&token=c6c167a1-785a-4ad8-aeb2-1e87c76d105b'} alt="x" />
            </Link>

            <div className='catImg_container'>
                <img src={img} alt="" />
            </div>

            <h3>{title}</h3>

        </NavLink>
    )
}

export default CategoryButton
