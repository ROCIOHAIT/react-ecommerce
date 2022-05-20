import React from 'react';
import './App.css';
import './test.css';
import NavBar from './components/NavBar/NavBar'
import ItemList from './components/ItemListContainer/ItemListContainer';
import Grid from '@mui/material/Grid';
function App() {
  //let test = "Coder"
  let styleCustom = {
    color : '#C7CF99'
  }


  return (
    <div className="App" style={styleCustom}>
      <NavBar/>
      <h1 className='title'> Cocoliche Artesanias </h1>
      <Grid container spacing={3}>
        <ItemList information={"informacion sobre el producto"}/>
      </Grid>
      <Grid container spacing={3}>
        <ItemList information={"informacion sobre el producto"}/>
      </Grid>
    </div>
  );
}

export default App;
