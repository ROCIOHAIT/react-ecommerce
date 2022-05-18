import React from 'react';
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar =() => {
    return (
        
        <AppBar position="static">
          
        <Toolbar>
          <div className='container-logo'>
              <img src="./logo.jpeg"/>
          </div>    
          <ul>
              <li>
                  <button>Home</button>
              </li>
              <li>
                  <button>Nosotros</button>
              </li>
              <li>
                  <button>Productos</button>
              </li>
              <li>
                  <button>Contacto</button>
              </li>
          </ul>
            
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}
export default NavBar