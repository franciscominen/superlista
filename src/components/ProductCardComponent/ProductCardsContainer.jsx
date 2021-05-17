import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import {ProductList} from './ProductList'
import Loader from '../../utils/Loader'
import { db } from '../../firebaseConfig'

const ProductCardsContainer = () => {

  const [productCards, setProductCards] = useState([]);
  const [isLoading, setIsloading] = useState([])
  const {categoria} = useParams();

      // Llamado a FIREBASE
      useEffect(() => {

          setIsloading(true)
    
          const productList = db.collection("productos");
    
          const loadProductList = new Promise((resolve, reject) => {
            productList.get().then((value) => {
                let aux = value.docs.map(e => {
                    return { ...e.data(), id: e.id }
                })
                resolve(aux.sort((a, b) => { if (a.name < b.name) { return -1 }; if (a.name > b.name) { return 1 }; return 0 }));
              })
          });
    
          loadProductList.then((database) => {
            const filterProductList = database.filter((e) => e.categoryId === categoria)
            const result = (filterProductList.length === 0) ? database : filterProductList
            setProductCards(result)
            setIsloading(false)
          })
    
        }, [categoria]) 

  return (
    <>
    { isLoading ? <Loader/> :
      <>

      {
        categoria === undefined ? <h1 style={{color:'#232323', fontSize:'18px', fontWeight:'800', margin:'16px 16px 0 16px'}}>Productos</h1>
        : <h1 style={{color:'#232323', fontSize:'18px', fontWeight:'800', margin:'16px 16px 0 16px', textTransform:'capitalize'}}>{categoria}</h1>
      }  

      {/* <h1 style={{color:'#232323', fontSize:'20px', fontWeight:'800', margin:'16px 16px 0 16px'}}>Productos</h1> */}

      <section className='products_container'>

        <ToastContainer/>
        <ProductList productCards={productCards}/>
        
      </section>
      </>
    }
    </>
  )
}

export default ProductCardsContainer
