import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react';


const ItemList = ({product}) => {
    const [products, setProducts] = useState([])
    const producto = [
        {
            title: "Velas de Soja",
            image: 'product4.jpeg',
            price: 2000,
            stock: 7,
            id: 1
        },
        {
            title: "Velas de Soja",
            image: 'product4.jpeg',
            price: 2000,
            stock: 10,
            id: 2
        },
        {
            title: "Velas de Soja",
            image: 'product4.jpeg',
            price: 2000,
            stock: 8,
            id: 3
        },
    ]
    const getProducts =() => {
        return new Promise( (resolve, reject) =>{
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }
    useEffect( () =>{
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

    if (product){
        return (
            <Card>
                <h2>{product} </h2>
                {console.log("products: ", products)}
            <CardContent>
            <div className="item-list">
              <Grid container spacing={4}>
              {
                     products.map( ({producto}) =>{
                         return( 
                            <Grid item md={3}>
                            <ItemList title={producto.title} image={producto.image} price={producto.price} stock={producto.stock}/>
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

}
export default ItemList