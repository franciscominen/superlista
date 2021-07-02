import React, { useContext } from 'react'
import '../../styles/product-cards.scss'
import { StoreContext } from '../../context/StoreProvider'
import ProductCard from './ProductCard'
import { useParams } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Animated } from 'react-animated-css'
import CategoriesCollapse from '../CategoriesComponent/CategoriesCollapse/CategoriesCollapse'
import CategoryFilter from '../CategoriesComponent/CategoriesHome/CategoryFilter'

const ProductsContainer = () => {

    const { products, addProduct, searchTerm } = useContext(StoreContext)
    const {categoria} = useParams()

    return (
        <>

            <CategoryFilter />
  
            <h1 className='products_title'>Productos</h1>

            <section className='products_container'>

                { products.filter( product => { // SEARCH 
                    if (searchTerm == "") {
                        return product
                    } else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return product
                    }
                }).filter( product => {
                    if (product.categoryID === categoria){
                        return product
                    } else if (categoria === undefined) {
                        return products
                    }
                }).sort((a, b) => { if (a.name < b.name) { return -1 }; if (a.name > b.name) { return 1 }; return 0 }).map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        addProduct={addProduct}
                    />     
                    ))
                } 
            
            </section>

            <ToastContainer />
        </>
    )
}

export default ProductsContainer