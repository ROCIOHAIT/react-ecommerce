import React from 'react';
import './NavBar.css';
import {AppBar, Toolbar, Button} from '@mui/material';

const NavBar =() => {
    return (
        
        <AppBar position="static" className='header'>
          
        <Toolbar>
          <div className='container-logo'>
              <img src="./logo.jpeg"/>
          </div>    
          <ul>
              <li>
                  <button disableRiple styles={{backgroundColor: '#C7CF99' }} className='navbar-button'>Home</button>
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