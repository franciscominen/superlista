import React, { useContext } from "react";
import "../../styles/add-notes-modal.scss";
import Popup from "reactjs-popup";
import { StoreContext } from "../../context/StoreProvider";
import { Animated } from "react-animated-css";

const AddNoteModal = ({ product, notify }) => {
  const { addNote, addProduct, text, setText } = useContext(StoreContext);

  const onAdd = () => {
    addProduct(product);
    addNote(product, text);
    notify();
  };



  return (
    <Popup
      trigger={
        <button className="addNote__btn" type="button">
          <img
            src={
              "assets/img/addNoteIcon.svg"
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
                    "assets/img/closeIcon.svg"
                  }
                  alt="X"
                />
              </button>

              <div className="header">
                <img src={product.img} alt="" />
                <h1>{product.name} </h1>
              </div>

              <form className="content">
   
                <input
                  className="note_input"
                  placeholder="Escriba aqui"
                  maxlength="50"
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
