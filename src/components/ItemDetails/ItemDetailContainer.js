import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import  productos  from "../Items/ItemList"
import './ItemDetail.css'
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate
    const [productos, setProductos]= useState({})



    useEffect(()=>{
        console.log("productFilter: ", productFilter)
        if(productFilter === undefined){
            navigate('/')
        }else {
            setProductos(productFilter)
        }
    }, [id])

    const productFilter = productos.find( (productos) => {
        return productos.id === id
    })

    return(
        <>
            <div className="seccion1">Productos</div>
            <ItemDetail data={productos}/>
        </>
    )
}
   
export default ItemDetailContainer