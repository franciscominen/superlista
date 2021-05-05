import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {ProductList} from '../components/ProductList/ProductList';
import {db} from "../firebaseConfig";
import Loader from '../utils/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductsContainer () {

    const {categoriaId} = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setIsloading] = useState(false)
  
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
          const filterProductList = database.filter((e) => e.categoryId === categoriaId)
          const result = (filterProductList.length === 0) ? database : filterProductList
          setProductos(result)
          setIsloading(false)
        })
  
      }, [categoriaId])
        return (
        <>
        { loading ? <Loader/>
        :
          
          <section className='products_container' style={{display:"flex", flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:'25px 0'}}>
              <ProductList items={productos}/>
              
              <ToastContainer/>
          </section>
        }
       
        </>
    )
}