import React, {useContext} from 'react';
import "./styles.scss";
import {listContext} from "./ListContext";
import {IoTrashOutline} from "react-icons/io5";

const ClearListBtn = () => {

    const { clearList } = useContext(listContext);

    return (
        <>
           <button onClick={clearList} className='clearList_btn'> <IoTrashOutline/> </button>
        </>
    )
}

export default ClearListBtn;