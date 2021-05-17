import React, {useContext, useState} from 'react';
import "./styles.scss";
import {listContext} from "../../utils/ListContext";
import ShareListModal from './ShareListModal'; 
import ClearListModal from './ClearListModal';

const ListMenuBtn = () => {

    const { clearList } = useContext(listContext);

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    };

    return (
        <>
            <section className='menuList_container'>
                    <button onClick={handleClick} className='clearList_btn' > 
                        
                        <img src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FmenuIcon.svg?alt=media&token=903d6445-5fc4-4d3b-a7fc-1b51ee844e14'} alt="" />

                    </button>

                    <div className={ menuOpen === false ? 'functions_container' : 'functions_container-active'}>

                        <ShareListModal/>
                        <hr className='divider-functions'/>
                        <ClearListModal />

                    </div>
            </section>
        </>
    )
}

export default ListMenuBtn;