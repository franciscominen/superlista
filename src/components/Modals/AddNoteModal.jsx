import React, { useContext } from "react";
import "../../styles/add-notes-modal.scss";
import Popup from "reactjs-popup";
import { StoreContext } from "../../context/StoreProvider";
import { Animated } from "react-animated-css";
import TextareaAutosize from "react-textarea-autosize";

const AddNoteModal = ({ product, notify }) => {
  const { addNote, addProduct, text, setText } = useContext(StoreContext);

  const onAdd = () => {
    addProduct(product);
    addNote(product, text);
    notify();
  };

  const placeholderHandler = () => {
    if (product.categoryID === 'verduleria') {
      return "Peso, cantidad y/o color.";
    } else if (product.categoryID === 'carnes') {
      return "Corte y/u opción veggie.";
    } else if (product.categoryID === 'pastas') {
      return "Peso, cantidad y/o sabor.";
    }else if (product.categoryID === 'panaderia') {
      return "Peso, cantidad y/o sabor.";
    }else if (product.categoryID === 'junk-food') {
      return "Marca, cantidad y/o tamaño.";
    }else if (product.categoryID === 'lacteos') {
      return "Marca, cantidad y/o tipo.";
    }else if (product.categoryID === 'bebidas') {
      return "Marca, cantidad y/o tamaño.";
    }else if (product.categoryID === 'cosmetica') {
      return "Marca, cantidad y/o tamaño.";
    }else if (product.categoryID === 'despensa') {
      return "Marca, cantidad y/o tamaño.";
    }else if (product.categoryID === 'limpieza') {
      return "Marca y/o tipo de producto.";
    } else {
      return null;
    }
  }

  return (
    <Popup
      trigger={
        <button className="addNote__btn" type="button">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FdescriptIcon.svg?alt=media&token=77f745e2-a217-46a4-bb94-d838d6148ebb"
            }
            alt="E"
          />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <>
          <Animated animationIn="zoomIn" animationInDuration="500">
            <div className="modal">
              <button className="close-btn" onClick={close} type="button">
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseIcon.svg?alt=media&token=381af7d8-e5df-458d-958f-ea4ff23ab14c"
                  }
                  alt="X"
                />
              </button>

              <div className="header">
                <img src={product.img} alt="" />
                <h1>{product.name} </h1>
              </div>

              <form className="content">
                <TextareaAutosize
                  autoFocus
                  cols="1"
                  rows="1"
                  data-min-rows="1"
                  className="note_input"
                  placeholder={placeholderHandler()}
                  maxLength="45"
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </div>

            <button
              className="addNoteList_btn"
              type="button"
              onClick={() => onAdd()}
            >
              <span onClick={close}>Agregar a Mi Lista</span>
            </button>
          </Animated>
        </>
      )}
    </Popup>
  );
};

export default AddNoteModal;
