import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react';
import {productos} from './../Items/ItemList';


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
                            <ItemList title={productos.title} image={productos.image} price={productos.price} stock={productos.stock}/>
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