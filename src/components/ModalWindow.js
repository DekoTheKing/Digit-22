import { width } from '@mui/system';
import React, {useState} from 'react';
import Modal from 'react-modal';
import { BasketContext } from '../App';
import { List,ListItem,IconButton,ListItemText} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


function ModalInFunctionalComponent ({title,price}){
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const {orders,setOrders} = React.useContext(BasketContext)
        console.log(orders)
        const addtoCart = () => {
        setOrders([...orders, { title, price}])
        setModalIsOpen(true)
        } 
    

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    

    return(
        <>
            <button onClick={addtoCart}>Order</button>
                
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
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {orders.map((value) => (
                    <ListItem
                    key={value.title}
                    disableGutters
                    secondaryAction={
        <IconButton aria-label="comment" onClick={()=>{
            setOrders(orders.filter(order => order.title !== value.title))

        }}>
          <ClearIcon/>
        </IconButton>
      }
    >
      <ListItemText primary={`${value.title}`} sx={{display:'inline-flex'}} />
      <ListItemText primary={`${value.price}`} />
    </ListItem>
  ))}
</List>
            </Modal>

        </>
    )
}
export default ModalInFunctionalComponent;