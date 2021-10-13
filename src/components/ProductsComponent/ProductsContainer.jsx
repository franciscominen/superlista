import React, { useContext } from "react";
import "../../styles/product-cards.scss";
import { StoreContext } from "../../context/StoreProvider";
import ProductCard from "./ProductCard";
import { useParams } from "react-router";
import CategoryFilter from "../CategoriesComponent/CategoriesHome/CategoryFilter";
import Loader from "../../utils/Loader";
import { Toaster } from 'react-hot-toast';
import Footer from "../layout/Footer";

const ProductsContainer = () => {
  const { products, addProduct, searchTerm, isLoading } = useContext(StoreContext);
  const { categoria } = useParams();
  console.log(products);
  return (
    <>
      <CategoryFilter />
      <figure style={{width:'94%', margin:'0 auto', background:'#f8f8f8', height:'1px'}}/>
      <h1 className="products_title">Productos</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="products_container">
          {isLoading ? (
            <Loader />
          ) : (
            products
              .filter((product) => {
                // SEARCH
                if (searchTerm === "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product;
                }
                return false;
              })
              .filter((product) => {
                if (product.categoryID === categoria) {
                  return product;
                } else if (categoria === undefined) {
                  return products;
                }
                return false;
              })
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                  isLoading={isLoading}
                />
              ))
          )}
        </section>
      )}

      <Toaster
        toastOptions={{
          className: "",
          style: {
            background: 'rgb(245 245 245 / 97%)',
            border: '1px solid #D2D2D2',
            boxSizing: 'border-box',
            borderRadius: '20px',
            height:'52px',
            boxShadow:'none',
            fontSize:'16px'
          },
        }}
      />

      <Footer/>
    </>
  );
};

export default ProductsContainer;