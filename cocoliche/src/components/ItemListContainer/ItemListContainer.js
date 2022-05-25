import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const ItemList = (props) => {
    return (
        <Card>
        <CardContent>
        <div className="item-list">
            <h2>Velas de Soja</h2>
            <div>
                <img src="cocoliche/public/product4.jpeg" alt="producto"/>
            </div>
            <p>{props.information}</p>
            <span> $2000</span>
        </div>
        
        </CardContent>
        </Card>
    )
}
export default ItemList