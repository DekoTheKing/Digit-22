import { width } from '@mui/system';
import React, {useState} from 'react';
import Modal from 'react-modal';


function ModalInFunctionalComponent (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <button onClick={setModalIsOpenToTrue}>Order</button>

            <Modal 
            style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                  position: 'absolute',
                  top: '190px',
                  left: '380px',
                  right: '40px',
                  bottom: '40px',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  width: '48%',
                  height: '60%'
                }
              }}
            
            isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <p>Modal is open</p>
            </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;