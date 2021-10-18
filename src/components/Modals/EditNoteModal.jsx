import React, { useContext } from "react";
import "../../styles/add-notes-modal.scss";
import Popup from "reactjs-popup";
import { StoreContext } from "../../context/StoreProvider";
import { Animated } from "react-animated-css";
import TextareaAutosize from "react-textarea-autosize";

const EditNoteModal = ({ product }) => {
  const { addNote, addProduct, text, setText } = useContext(StoreContext);

  const onAdd = () => {
    addProduct(product);
    addNote(product, text);
  };

  return (
    <Popup
      trigger={
        <button className="addNote__btn" type="button">
          <img src={"assets/img/editMyListIcon.svg"} alt="E" />
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
                <img src={"assets/img/closeIcon.svg"} alt="X" />
              </button>

              <div className="header">
                <img src={product.img} alt="" />
                <h1>{product.name} </h1>
              </div>

              <div className="content">
                <TextareaAutosize
                  autoFocus
                  cols="1"
                  rows="1"
                  data-min-rows="1"
                  className="note_input"
                  placeholder={
                    product.nota.length > 1 ? product.nota : "Escriba aqui..."
                  }
                  maxLength="45"
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>

            <button
              className="addNoteList_btn"
              type="button"
              onClick={() => onAdd()}
            >
              <span onClick={close}>Guardar nota</span>
            </button>
          </Animated>
        </>
      )}
    </Popup>
  );
};

export default EditNoteModal;
