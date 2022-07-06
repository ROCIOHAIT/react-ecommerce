import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import  productos  from "../Items/ItemList"
import './ItemDetail.css'
import { useNavigate, useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import db from "../../Firebase"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate
    const [productos, setProductos]= useState({})



    useEffect(()=>{
        getProduct()
        .then( (prod) => {
            console.log("Respuesta getProduct: ", prod)
            
        })
    }, [id])

    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        console.log("docSnaptshop: ", docSnaptshop)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        console.log("producto unico: ", product)
        return product
    }

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