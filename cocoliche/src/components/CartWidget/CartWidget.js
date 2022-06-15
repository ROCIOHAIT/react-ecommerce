 import React from 'react';
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  CartContext  from '../Context/CartContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const CartWidget = () => {
    const {cartListItems} = useContext(CartContext)
    
    return(
        <div className='cart-icon'>
            <ShoppingCartIcon/>
        
           <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos en el carrito</p>
                            <Link to="./Productos.js" >Ir a comprar</Link>
                        </>
             
                   )
                    }</div>
            {cartListItems.map( (data) => {
            return(
            <div className='item-cart-prod' key={data.id}>
                <div className='cart-prod__image'>
                    <img src="product4.jpeg" alt="producto" width={400}/>
                </div>
                <div className='cart-prod__info'>
                    <p>{data.title}</p>
                    <span>$ {data.price}</span>
                </div>
                <div className='cart-prod__action'>
                    <button>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
            )
        })}
        </div>
        
    )
}    

export default CartWidget 