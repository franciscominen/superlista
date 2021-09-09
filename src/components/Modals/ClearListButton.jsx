import React, { useContext, useState } from 'react'
import "../../styles/clear-list-modal.scss"
import { StoreContext } from '../../context/StoreProvider';
import { Animated } from 'react-animated-css';

const ClearListButton = () => {

    const { clearList } = useContext(StoreContext)

   const [clearListButton, setClearListButton] = useState(true)

   const handleClear = () => {
     if (clearListButton == true) {
       setClearListButton(false);
     /*   document.addEventListener('click', clearList) */
     } else {
       setClearListButton(true);
     }
   };

    return (
      <>
        <button className="clearList_btn" type="button" onClick={handleClear}>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FclearListBtn.svg?alt=media&token=0d6d2576-0b23-468d-97f1-c243122ad3d8"
            }
            alt="E"
          />
        </button>

        <button
          className={
            clearListButton ? "clearList_confirmBtn" : "handle_ClearList"
          }
          type="button"
          onClick={clearList}
        >
          <p>Borrar todo?</p>
        </button>
      </>
    );
}

export default ClearListButton
