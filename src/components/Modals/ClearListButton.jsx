import React, { useContext, useState } from 'react'
import "../../styles/clear-list-modal.scss"
import { StoreContext } from '../../context/StoreProvider';

const ClearListButton = () => {

    const { clearList } = useContext(StoreContext)

   const [clearListButton, setClearListButton] = useState(true)

   const handleClear = () => {
     if (clearListButton === true) {
       setClearListButton(false);
     } else {
       setClearListButton(true);
     }
   };

    return (
      <>
        <button className="clearList_btn" type="button" onClick={handleClear}>
          <img
            src={
              "assets/img/clearListBtn.svg"
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
