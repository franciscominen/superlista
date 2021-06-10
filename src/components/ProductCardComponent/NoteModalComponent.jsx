import React, {useState, useContext} from 'react'
import Popup from 'reactjs-popup';
import {Animated} from "react-animated-css";
import { db } from '../../firebaseConfig';
import { listContext } from '../../utils/ListContext';

export const NoteModalComponent = ({ item, id }) => {
    const {name, img} = item;
    const {addItem} = useContext(listContext)
    const [note, setNote] = useState('')
    function handleChange(e) { setNote(e.target.value) };

    const addNote = (id, note) => {
        db.collection("invitados")
            .add({
                productId: id,
                nota: note,
                productName: item.name
            })
            .then(refDoc => {
            console.log('agregado correctamente');
            })
            .catch(err => {
            console.error("Error");
            })
    }

    console.log(id)

    return (
        <Popup trigger={<button > E </button>} className='modal_container'>

        {close => (
            
            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationInDuration={500} className='modal'>
                <button onClick={close}>X</button>
                
                <div style={{display:'flex'}}>
                    <img src={img} style={{maxWidth:'50px'}} />
                    <p>{name}</p>
                </div>

                <div className='form'>
                
                        <input  
                            type="text" 
                            placeholder='escriba aqui'
                            value={note}
                            onChange={handleChange}
                        />
                        <button onClick={() => addNote(id, note)}>
                            <span onClick={()=>addItem(item)}>SEND</span> 
                        </button>
                    
                </div>

            </Animated>
        )}
    </Popup>
    )
}