import React, { useContext } from 'react'
import "../../styles/clear-list-modal.scss"
import Popup from 'reactjs-popup';
import { StoreContext } from '../../context/StoreProvider';
import { Animated } from 'react-animated-css';

const ClearListModal = ({product}) => {
    
  const { clearList } = useContext(StoreContext)
    
  return (  
  <Popup
    trigger={
      
      <button className="clearList_btn" type='button'> 
        <img 
          src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FclearListBtn.svg?alt=media&token=0d6d2576-0b23-468d-97f1-c243122ad3d8'} 
          alt="E" 
        /> 
      </button>
   
    }
    modal
    nested
  >
      
    {close => (
      <>
      <Animated animationIn='zoomIn' animationInDuration='500'> 
        <div className="modal__clearList">

          <div className="header__clearList"> 
            <h1> ¿Borrar todo? </h1>

            <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseIcon.svg?alt=media&token=381af7d8-e5df-458d-958f-ea4ff23ab14c'} alt="X" className="close_btn" onClick={close} type='button'/>
  
          </div>

          <div className="content__clearList">

            <button onClick={clearList} className='btn_si'>SÍ</button>
            <button onClick={close} className='btn_no'>NO</button>

          </div>

        </div>
      </Animated>
      </>
    )}
  </Popup>)
};

export default ClearListModal
