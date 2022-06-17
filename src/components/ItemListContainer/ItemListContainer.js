import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react';
import {productos} from './../Items/ItemList';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import db from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";


const ItemList = ({productos}) => {
    const [products, setProducts] = useState([])
 
    const getProducts =() => {
        return new Promise( (resolve, reject) =>{
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }
    useEffect( () =>{
        getProduct()
        getProducts()
        .then ( (response) =>{
            console.log("respuesta: ", response)
            setProducts (response)
        })
        .catch( (err) => {
            console.log("error")
        })
        .finally( () => {
            console.log("finally: finalizo ")
        })
    }, [])

    const getProduct = async () => {
        const prodSnapshot = await getDocs(Collection(db, "productos"));
        const productList = prodSnapshot.docs.map((doc) => {
            
            
            return doc.data()
        })
        return productList
    }

        return (
            <Card>
                <h2>{productos} </h2>
                {console.log("products: ", products)}
            <CardContent>
            <div className="item-list">
              <Grid container spacing={4}>
              {
                     products.map( ({productos}) =>{
                         return( 
                            <Grid item md={3}>
                              <ItemList title={productos.title} image={productos.image} price={productos.price} stock={productos.stock} id={productos.id}/>
                              <Button> <Link to={'/Detalle/${id}'}> Ver Detalle del Producto</Link></Button>
                            </Grid>
                         )
                    })
                }
                 
              </Grid>
            </div>
    
            </CardContent>
            </Card>
           
            
        )
        
    

}
export default ItemList