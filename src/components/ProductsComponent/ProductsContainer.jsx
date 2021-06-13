import React, { useContext } from 'react'
import '../../styles/product-cards.scss'
import { StoreContext } from '../../context/StoreProvider'
import ProductCard from './ProductCard'
import CategoriesStatic from '../CategoriesComponent/CategoriesStatic'
import { useParams } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Animated } from 'react-animated-css'

const ProductsContainer = () => {

    const { products, addProduct, searchTerm } = useContext(StoreContext)
    
    return (
        <>
            <Animated animationIn='fadeInDown'>
                <CategoriesStatic/>
            </Animated>
        
            <Animated animationIn='fadeInUp'>

                <h1 className='products_title'>Productos</h1>

                <section className='products_container'>
                
                    { products.filter( product => { // SEARCH 
                        if (searchTerm == "") {
                            return product
                        } else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return product
                        }
                    }).map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                addProduct={addProduct}
                            />      
                        ))
                    }
                
                </section>

            </Animated>

            <ToastContainer />
        </>
    )
}

export default ProductsContainer