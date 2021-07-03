import React from "react";
import "../../styles/product-cards.scss";
import AddNoteModal from "../Modals/AddNoteModal";
import { toast, Slide } from "react-toastify";
import { useParams } from "react-router-dom";

const ProductCard = ({ product, addProduct }) => {
  const categoryID = useParams();

  const Msg = () => (
    <div className="toast_msj">
      <p>
        Agregaste <span>{product.name}</span> a tu lista.
      </p>
    </div>
  );

  const notify = () =>
    toast(<Msg />, {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });

  return (
    <div key={product.id} className="product-card__container">
      <div className="btns-card__container">
        <AddNoteModal product={product} notify={notify} />

        <button
          className="btn-addProduct"
          type="button"
          onClick={() => addProduct(product)}
        >
          <img
            onClick={notify}
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
    </div>
  );
};

export default ProductCard;
