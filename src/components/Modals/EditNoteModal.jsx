import React, { useContext, useRef } from "react";
import "../../styles/add-notes-modal.scss";
import Popup from "reactjs-popup";
import { StoreContext } from "../../context/StoreProvider";
import { Animated } from "react-animated-css";

const UseFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const EditNoteModal = ({ product }) => {
  const { addNote, addProduct, text, setText } = useContext(StoreContext);

  const [input1Ref, setInput1Focus] = UseFocus();

  const onAdd = () => {
    addProduct(product);
    addNote(product, text);
  };

  return (
    <Popup
      trigger={
        <button className="addNote__btn" type="button">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FeditMyListIcon.svg?alt=media&token=10f9b52b-11df-41fa-a751-b39fffd16b76"
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

              <div className="content">
                <input
                  className="note_input"
                  placeholder={product.nota}
                  maxlength="200"
                  onChange={(e) => setText(e.target.value)}
                  ref={input1Ref}
                />
              </div>

              <button onClick={setInput1Focus()}>
                focus
              </button>
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
