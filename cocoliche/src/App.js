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
import { CartProvider } from './context/CartContext';



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
            <Route path='/' element={<Home />}/>  
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/Detalle/:id' element={<Detalle />}/>  
            <Route path='/Productos/:category' element={<Productos />}/>  
            
        </Routes>
      </BrowserRouter>
    </CartProvider> 
    </div>
  
        
  );
}

export default App;
