import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import { listContext } from '../../utils/ListContext'
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

      <section className='products_container'>
        <ProductList productCards={productCards}/>
      </section>
    }
    </>
  )
}

export default ProductCardsContainer
