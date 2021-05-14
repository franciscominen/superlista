import React from 'react'
import { db } from '../../firebaseConfig'

const ClearNotes = ({productCard}) => {

    const {id} = productCard; /* Destructuring */

    const clearNote = async () => {
        try {
          await db.collection('productos').doc(id).update({
            nota: ''
          })
        } catch (error) {
          console.log(error)
        }
    }

    return (
        <button onClick={clearNote}>Clear Notes</button>
    )
}

export default ClearNotes
