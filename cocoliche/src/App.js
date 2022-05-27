import React from 'react';
import './App.css';
import './test.css';
import NavBar from './components/NavBar/NavBar'
import ItemList from './components/ItemListContainer/ItemListContainer';
import Grid from '@mui/material/Grid';
import ItemCount from './components/ItemCount/ItemCount';
import { useState, useEffect} from 'react';

function App() {
  const [producto, setProducts] = useState([])
  let styleCustom = {
    color : '#C7CF99'
  }

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


  return (
    <div className="App" style={styleCustom}>
      <NavBar/>
      <h1 className='title'> Cocoliche Artesanias </h1>
      <Grid container spacing={4}>
        
        <ItemList information={"informacion sobre el producto"}/>
        <ItemCount></ItemCount>
      </Grid>
      <Grid container spacing={4}>
        
        <ItemList information={"informacion sobre el producto"}/>
        <ItemCount></ItemCount>
      </Grid>
      <Grid container spacing={4}>
        
        <ItemList information={"informacion sobre el producto"}/>
        <ItemCount></ItemCount>
        
      </Grid>
     
    </div>
  );
}

export default App;
