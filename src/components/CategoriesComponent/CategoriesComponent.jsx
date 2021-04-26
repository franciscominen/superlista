import React from 'react';
import {FaFilter} from "react-icons/fa";

const CategoriesComponent = () => {
    return (
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', width:'20%'}}>
            <FaFilter style={{color:'#242424', fontSize:'22px'}}/>
        </div>
    )
}

export default CategoriesComponent
