import React from "react";
import "../../styles/product-cards.scss";
import AddNoteModal from "../Modals/AddNoteModal";
import toast, { Toaster } from 'react-hot-toast';
import { Animated } from "react-animated-css";

const ProductCard = ({ product, addProduct }) => {

  const Msg = () => {
    return <p> Agregaste <strong>{product.name}</strong> a tu lista. </p>
  }

  const notify = () => toast(<Msg/>, {
    duration: 1200,
    position: 'bottom-center',
  });

  const handleProduct = () => {
    addProduct(product)
    notify()
  }

  return (

    <Animated animationIn='zoomIn' animationInDuration='300' key={product.id} className="product-card__container"> 

      <div className="btns-card__container">
        <AddNoteModal product={product}  notify={notify}/>

        <button
          className="btn-addProduct"
          type="button"
          onClick={() => handleProduct()}
        >
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FaddIcon.svg?alt=media&token=a3cbf288-fd89-4586-a628-ffd80fd1815d"
            }
            alt="+"
          />
        </button>
      </div>

      <div className="cardImg_container">
        <img
          src={product.img}
          alt={product.name}
          className="card-product__img"
        />
      </div>

      <h2 className="card-product__name">{product.name}</h2>

    </Animated>
  );
};

export default ProductCard;
