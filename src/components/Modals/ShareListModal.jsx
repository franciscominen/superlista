import React from 'react'
import Popup from 'reactjs-popup';
import {Animated} from "react-animated-css";

const ClearListModal = () => {


    return (
        
        <Popup trigger={<button className='modalMenu_btn'> <img src={"https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FshareIcon.svg?alt=media&token=0322bda3-b364-4d24-b6c3-bb07566ddd7f"} alt="" /> </button>} className='modal_container'>

            {close => (
                
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} animationInDuration={500} animationInDuration={500} className='modal'>

                    {/* <div className='modal'> */}
                        <div className='modalInfo_container'>
                            <h1>Exportar</h1>
                            <img onClick={close} src={'https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FcloseIcon.svg?alt=media&token=381af7d8-e5df-458d-958f-ea4ff23ab14c'} alt="" />
                        </div>
                        <div className='btns_container'>
                            <button className='btn_si'>LISTA</button>
                            <button className='btn_si'>CÓDIGO</button>
                        </div>

                    {/* </div> */}
                
                </Animated>
            )}
        </Popup>
        
    )
}

export default ClearListModal
