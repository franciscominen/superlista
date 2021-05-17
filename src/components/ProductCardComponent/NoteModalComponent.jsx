import React, { useState, useContext } from 'react';
import Popup from 'reactjs-popup';
import { db } from '../../firebaseConfig';
import { listContext } from '../../utils/ListContext';
import "./noteModal.scss";
import {Animated} from "react-animated-css";

export const NoteModalComponent = ({productCard}) => {
  const {id, categoryId, name, img, nota} = productCard; 
  const [newNote, setNewNote] = useState(productCard.nota)

  const {addItem} = useContext(listContext);

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
    <Popup trigger={<img className={window.location.href === 'http://localhost:3000/mi-lista' ? 'miList_noteIcon' : 'cardNote_icon'}
    src={"https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FdescriptIcon.svg?alt=media&token=77f745e2-a217-46a4-bb94-d838d6148ebb"} alt="" />}
    className='modal_container'>

      {close => (

                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationInDuration={500} className='modal'>

                {/* <div className='modal'> */}

                <img src={'assets/img/closeIcon.svg'} alt="" className='close_img' onClick={close}/>
                <div className='product_container'>
                    <img src={img} alt="" className='imgNote_modal'/>
                    <h1>{name}</h1>
                  </div>
                <form className='modal_form' onSubmit={handleSubmit}>

                  <input type="text" value={newNote} placeholder='Escriba aqui...' onChange={handleNoteChange}/>
                  <button type='sumbit'className='guardar-btn' >Agregar a mi lista</button>

                </form> 

     

                {/* </div> */}
            
            </Animated>
      )}
    </Popup>
  )
}

/* 
        <div className='note_modal'>
          <a className="close" onClick={close}>
            &times;
          </a>

          <form className='modal_form' onSubmit={handleSubmit}>

            <div className='product_container'>
              <img src={img} alt="" className='img_modal'/>
              <h1>{name}</h1>
            </div>

            <input type="text" value={newNote} placeholder='Ecriba aqui' onChange={handleNoteChange}/>
            <button type='sumbit'className='guardar-btn' >Agregar a mi lista</button>

          </form> 

        </div> */