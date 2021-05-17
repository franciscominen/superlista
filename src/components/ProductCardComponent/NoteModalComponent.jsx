import React, { useState, useContext } from 'react';
import Popup from 'reactjs-popup';
import { db } from '../../firebaseConfig';
import { listContext } from '../../utils/ListContext';
import "./noteModal.scss";
import {Animated} from "react-animated-css";

export const NoteModalComponent = ({productCard}) => {
  const {id, categoryId, name, img, nota} = productCard; 
  const [newNote, setNewNote] = useState(productCard.nota)

  const {addItem, handleClick} = useContext(listContext);

  const handleSubmit = e => {
    e.preventDefault();
    createNote();
    addItem(productCard)
  }

  const handleNoteChange = (e) => setNewNote(e.target.value);

  const createNote = async () => {
    try {
      await db.collection('productos').doc(productCard.id).update({
        nota: newNote
      })
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <Popup trigger={<button className='modalMenu_btn'> 
    <img
    src={"https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FnoteIcon.svg?alt=media&token=687a8862-c227-46dc-8f0d-d5d1a3501483"} alt="" /> </button>} className='modal_container'>

      {close => (
          
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationInDuration={500} className='modal'>

          <img onClick={close} className='closeNoteModal' src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseIcon.svg?alt=media&token=381af7d8-e5df-458d-958f-ea4ff23ab14c'} alt="" />

          <div className='noteModalInfo_container'>

            <img src={img} alt="" />
            <h1>{name}</h1>
             
          </div>
          
          <form className='formNote_container' onSubmit={handleSubmit}>
            <input type="text" value={newNote} placeholder='Escriba aqui...' onChange={handleNoteChange}/>
            { window.location.href === 'http://localhost:3000/productos' ? 
              <button type='sumbit'className='guardar-btn' >Agregar a mi lista</button> :
              <button type='sumbit'className='guardar-btn' >Guardar cambios</button>
            }
          </form>

        </Animated>

      )}

    </Popup>
  )
}

{/* <img src={'assets/img/closeIcon.svg'} alt="" className='close_img' onClick={close}/>
<div className='product_container'>
    <img src={img} alt="" className='imgNote_modal'/>
    <h1>{name}</h1>
  </div>
<form className='modal_form' onSubmit={handleSubmit}>

  <input type="text" value={newNote} placeholder='Escriba aqui...' onChange={handleNoteChange}/>
  <button type='sumbit'className='guardar-btn' >Agregar a mi lista</button>

</form>  */}