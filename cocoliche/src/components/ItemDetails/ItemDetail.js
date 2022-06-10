import React, { useState } from "react"
import { Paper, Typography, Grid} from '@mui/material';
import { products } from "../Items/ItemList";
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    console.log("data: ", data)
    const [size, setSize] = useState('');
    const [count, setCount] = useState(1)
    const [showButton, setShowButton]= useState(false)
const {description} = data;
    return (
        <div className="product-container">
            <Paper  variant="outlined">
            <h2>{data.title}</h2>
            <div className="detail-product-image">
                <img src="product4.jpeg" alt="producto" width={400}/>
            </div>
            <Grid container direction="column" justifyContent="center"  >
                    
                        <Grid item><h3>$ {data.price}</h3></Grid>
                        <Grid item>Stock disponible:<small>Cantidad: {data.stock} unidades</small></Grid>
                        <Grid item><ItemCount product={products} /></Grid>
                    </Grid>
                    <h4>3 Cuotas sin interés de $ {data.price / 3}</h4>
            <h3>Descripción:</h3>
            
            <Typography variant="body1" margin="20px">{description}</Typography>
            {showButton == false ?
            <ItemCount>
                    count={count}
                    setShowButton={setShowButton}
                    setCount={setCount}
                </ItemCount>
            :    
            <Button variant='outlined'><Link to='/cart'>Termina mi compra</Link></Button>
                }
            </Paper>
        </div>
    )
}

export default ItemDetail