import React, {useContext, useState, useEffect} from 'react';
import "./styles.scss"
import Popup from 'reactjs-popup';
import {Animated} from "react-animated-css";
import { toast, Slide } from 'react-toastify';
import {FiEdit} from "react-icons/fi";
import {IoCloseOutline} from "react-icons/io5";
import {BsListCheck} from "react-icons/bs";
import {listContext} from '../../utils/ListContext';


const ModalComponent = ({item}) => {
  /* const handleChange = (e) => {
    setNote(e.target.value);
  }
 */
  // ADD ITEM
    const {addItem, note, noteChange} = useContext(listContext);
    const onAdd = () => {
      addItem(item)
    }

  // TOAST NOTIFY ITEM ADD
    const notify = () => toast( `Se agregó ${item.name} a su lista.`, {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide
    });

  return (
    
    <Popup
      trigger={<button className="button"> <FiEdit style={{color:'#242424', fontSize:'20px'}}/> </button>}
      modal
      nested
    >
      
      {close => (
      
        <Animated animationIn="fadeIn" animationOut="zoomOut"  animationInDuration={300} animationOutDuration={300}>
          <div className="modal">
            
            <div className="header"> 

              <div className='item'>
                <img src={item.img} alt=""/>
                <h2>{item.name} </h2>
              </div>

              <button className="close" onClick={close}>
                <IoCloseOutline />
              </button>

            </div>

            <div className="content">
              
              <textarea
                placeholder={window.location.href === "http://localhost:3000/productos"
                              ? "Agregue aqui una descripcion sobre este producto"
                              : note }
                value={note}
                onChange={noteChange}
              />        
                
            </div>

            <div className='modal_footer' onClick={notify}>
              { window.location.href === "http://localhost:3000/productos" // MODIFICAR AL HOSTEAR
                ? <button onClick={onAdd}>Agregar a mi lista <BsListCheck/> </button>
                : <button disabled style={{display:'none'}}>Agregar a mi lista <BsListCheck/> </button>
              }
            </div>
            
          </div>
        </Animated>
      )}
      
    </Popup>
  );
}

export default ModalComponent;