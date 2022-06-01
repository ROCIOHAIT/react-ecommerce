import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { products } from "../Items/ItemList"
import './ItemDetail.css'

const ItemDetailContainer = () => {
    const [mercaderia, setMercaderia]= useState({})
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        })
    }

    useEffect(()=>{
        getItem()
        .then((res)=>{
            console.log("respuesta: ", res)
            setMercaderia(res)
        })
    }, [])
    return (
        <>
        <div className="seccion1">Productos</div>
        <ItemDetail data={mercaderia}></ItemDetail>
        </>
    )
}
export default ItemDetailContainer