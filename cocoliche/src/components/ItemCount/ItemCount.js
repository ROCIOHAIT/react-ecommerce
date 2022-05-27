import React from "react"
import { useState } from "react"
import './ItemCount.css'

const ItemCount =({}) => {
    
    const [count, setCount] = useState (0)
    const [stock, setStock] = useState (6)

    
    const onAdd = () => {
    if(count < stock) {
    setCount(count + 1)
    }}
    const remove = () => {
    setCount(count - 1)
    }

    return(
     <div className='counts-items'>
        <button onClick={remove} disabled={count === 0}> - </button>
        <p>{count}</p>
        <button onClick={onAdd}> + </button>
        <button onClick={count}> Comprar</button>
     </div>
    )
}
export default ItemCount