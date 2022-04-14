import React, { useContext } from "react";
import "../../styles/product-cards.scss";
import AddNoteModal from "../Modals/AddNoteModal";
import toast from "react-hot-toast";
import { Animated } from "react-animated-css";
import Loader from "../../utils/Loader";
import { StoreContext } from "../../context/StoreProvider";

const ProductCard = ({ product, addProduct, isLoading }) => {
  const { cart, removeProduct } = useContext(StoreContext);
  let disabled = false;

  const Msg = () => {
    return (
      <p>
        {" "}
        Agregaste <strong>{product.name}</strong> a tu lista.{" "}
      </p>
    );
  };

  const notify = () =>
    toast(<Msg />, {
      duration: 1200,
      position: "bottom-center",
    });

  const handleProduct = () => {
    addProduct(product);
    notify();
  };

  return (
    <Animated animationIn="zoomIn" animationInDuration={250}>
      <button
        key={product.id}
        className="product-card__container"
        disabled={cart.some((cartItem) => cartItem.id === product.id)}
      >
        <div className="btns-card__container">
          <AddNoteModal product={product} notify={notify} />

          {disabled ? (
            <button
              className="btn-addProduct"
              type="button"
              onClick={() => handleProduct()}
            >
              <img
                onClick={() => removeProduct(product.id)}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FremoveProductCard.svg?alt=media&token=04d8c215-2b15-406d-be84-5037cf0c36f5"
                }
                alt="-"
              />
            </button>
          ) : (
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
          )}
        </div>

        <div className="cardImg_container">
          {isLoading ? (
            <Loader />
          ) : (
            <img
              src={product.img}
              alt={product.name}
              className="card-product__img"
            />
          )}
        </div>

        <h2 className="card-product__name">{product.name}</h2>
      </button>
    </Animated>
  );
};

export default ProductCard;
