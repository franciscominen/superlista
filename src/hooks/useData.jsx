import {useState, useEffect} from 'react';
import {db} from '../firebaseConfig';

export const useData = (collectionName) => {

    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const unsub = db.collection(collectionName)
            .onSnapshot(snap => {
                const documents = [];
                snap.forEach(doc => {
                    documents.push({ id: doc.id, ...doc.data() })
                });
                setDocs(documents);
            })

            return () => unsub();
    }, [collectionName])
    return {docs}
}