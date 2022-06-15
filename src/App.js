import React from 'react';
import './App.css';
import './test.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import { useState, useEffect} from 'react';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Cart from './pages/Cart';
import { CartProvider } from './components/Context/CartContext';



function App() {
  const [producto, setProducts] = useState([])
  
  

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
    <div className='App'>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home />}></Route>  
            <Route path='/Nosotros' element={<Nosotros />} ></Route>
            <Route path='/Detalle/:id' element={<Detalle />}></Route>  
            <Route path='/Productos/:category' element={<Productos />}></Route> 
            <Route path='/cart' element={<Cart />} />     
        </Routes>
      </BrowserRouter>
    </CartProvider> 
    </div>
  
        
  );
}

export default App;
