import React, { useContext } from "react";
import "../../styles/product-cards.scss";
import { StoreContext } from "../../context/StoreProvider";
import ProductCard from "./ProductCard";
import { useParams } from "react-router";
import CategoryFilter from "../CategoriesComponent/CategoriesHome/CategoryFilter";
import Loader from "../../utils/Loader";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../layout/Footer";

const ProductsContainer = () => {
  const { products, addProduct, searchTerm, isLoading } = useContext(StoreContext);
  const { categoria } = useParams();
  console.log(products);
  return (
    <>
      <CategoryFilter />

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
                if (searchTerm == "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product;
                }
              })
              .filter((product) => {
                if (product.categoryID === categoria) {
                  return product;
                } else if (categoria === undefined) {
                  return products;
                }
              })
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                />
              ))
          )}
        </section>
      )}

      <Toaster
        toastOptions={{
          className: "",
          style: {
            background: 'rgb(245 245 245 / 90%)',
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