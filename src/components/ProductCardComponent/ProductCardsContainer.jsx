import React, {useState, useEffect, useContext} from 'react'
import {useParams} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import {ProductList} from './ProductList'
import Loader from '../../utils/Loader'
import { db } from '../../firebaseConfig'
import { listContext } from '../../utils/ListContext';
import CategoriesCollapse from '../CategoriesComponent/CategoriesCollapse';
import CategoriesCarousel from '../CategoriesComponent/CategoriesCarousel';
import CategoriesStatic from '../CategoriesComponent/CategoriesStatic';
import { ProductCard } from './ProductCard';


const ProductCardsContainer = () => {
 
  const [isLoading, setIsloading] = useState([])
  const {categoria} = useParams();

  const {products} = useContext(listContext);

  return (
    <>

      <CategoriesStatic/>

      <>
      {products.map(item => (
        <ProductCard key={item.id} id={item.id} item={item}/>
      ))}
      </>
    </>
  )
}

export default ProductCardsContainer
