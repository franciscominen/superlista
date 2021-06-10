import React, {useContext, useEffect, useState} from 'react'
import { db } from '../../firebaseConfig'
import { listContext } from '../../utils/ListContext'
import ItemList from './ItemList'

const ItemsInList = () => {

    const {products, lista} = useContext(listContext);
   /*  const [myproducts, setMyproducts] = useState([]) */
    const [myNote, setMyNote] = useState([])
    useEffect(() => {
      
      db.collection('invitados').doc('id').get().then(res => {
        lista.push(res.data())
      })
  
      myNote.map(product => {
        db.collection('products').doc(product.id).get().then(res => {
          lista.push({...res.data()})
        })
      })
  
      console.log(myNote)
      console.log(lista)
    }, [])

    return (
        <>
            { (lista.map((item) => 
            
                <ItemList 
                    key={item.id} 
                    item={item} 
                />
            )) }
        </>
    )
}



export default ItemsInList
