import React from 'react'
import { NavLink } from 'react-router-dom';

const CategoryCard = ({cat, onToggle}) => {
    const {link, img, title} = cat;
    return (
        <NavLink className='categorieCollapse_card' to={link} onClick={onToggle}>
            
            <img src={img} alt="" />
            <h3>{title}</h3>

        </NavLink>
    )
}

export default CategoryCard
