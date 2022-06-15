import { useContext } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"

const Cart = () => {
    const { cartListItems, totalPrice } = useContext(CartContext)
   
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
    </Container>
    )
}

export default Cart