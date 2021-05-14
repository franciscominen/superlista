import React, { useState, useContext } from 'react';
import Popup from 'reactjs-popup';
import { db } from '../../firebaseConfig';
import { listContext } from '../../utils/ListContext';

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
    <Popup trigger={<button className='modal_btn'> <img src={"assets/img/descriptIcon.svg"} alt="" /> </button>} className='note_modal'>

      {close => (
        <div>
          <a className="close" onClick={close}>
            &times;
          </a>

          <form className='modal_form' onSubmit={handleSubmit}>

            <div className='product_container'>
              <img src={img} alt="" />
              <h1>{name}</h1>
            </div>

            <input type="text" value={newNote} placeholder='Ecriba aqui' onChange={handleNoteChange}/>
            <button type='sumbit'className='guardar-btn' >Agregar a mi lista</button>

          </form> 

        </div>
      )}
    </Popup>
  )
}