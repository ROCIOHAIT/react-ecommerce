import React from "react"
import { useContext } from "react"
import { Container, Button } from "@mui/material"
import { useState } from "react"
import { Grid, Textfield  } from '@material-ui/core'
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import Modal from "../components/Modal/Modal"

const Cart = () => {
    const { cartListItems, totalPrice } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState


    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }
    const handleChange = (e) => {
        setNameValue(e.target.value)
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    return(
        <Container> 
        <h2>Checkout: </h2>
        <div className='cart'>
            <div>
                <h2>Producto</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cartListItems.map( (item) => {
                const {id, title, image, price} = item
                return(
                    <div key={id}>
                        <div className="detail-product-image">
                            <img src= "product4.jpeg"alt="producto" width={400}/>
                        </div>
                        <div >
                            <p>{title}</p>
                        </div>
                        <div >
                            <p>$ {price}</p>
                        </div>
                        <div >
                            <p>1</p>
                        </div>
                        <div >
                            <button variant='outlined'>
                                <Delete />
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className='cart-footer'>
                <Button variant='outlined'>Continuar comprando</Button>
                <div>
                    <div className='checkout-subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='checkout-total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button variant='outlined'>Completar Compra</Button>
                </div>
            </div>
        </div>
        <Modal title={success ? 'Compra exitosa' : 'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
            {success ? (
                <div>
                    
                    Numero de orden: {success}
                    <button onClick={finishOrder}>Aceptar</button>
                </div>
            ) : (
                <form className="form-contact" onSubmit={handleSubmit}>
                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido" 
                        variant="outlined" 
                        value={formValue.name}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="mail"
                        label="mail" 
                        variant="outlined" 
                        value={formValue.mail}
                        onChange={handleChange}
                    />
                    
                    <button type="submit">Enviar</button>
                </form>
            )}
            
        </Modal>
    </Container>
    )
}

export default Cart 