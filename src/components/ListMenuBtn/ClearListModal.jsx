import React, {useContext} from 'react'
import Popup from 'reactjs-popup';
import { listContext } from '../../utils/ListContext';
import {Animated} from "react-animated-css";

const ClearListModal = () => {

    const {clearList} = useContext(listContext)

    return (
        
        <Popup trigger={<button className='ClearList_btn'> <img src={"https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FclearListBtn.svg?alt=media&token=0d6d2576-0b23-468d-97f1-c243122ad3d8"} alt="" /> </button>} className='modal_container'>

            {close => (
                
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationInDuration={500} className='modal'>

                    {/* <div className='modal'> */}
                        <div className='modalInfo_container'>
                            <h1>¿Borrar todo?</h1>
                            <img onClick={close} src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseIcon.svg?alt=media&token=381af7d8-e5df-458d-958f-ea4ff23ab14c'} alt="" />
                        </div>
                        <div className='btns_container'>
                            <button onClick={clearList} className='btn_si'>SÍ</button>
                            <button onClick={close} className='btn_no'>NO</button>
                        </div>

                    {/* </div> */}
                
                </Animated>
            )}
        </Popup>
        
    )
}

export default ClearListModal
