import React from 'react';
import './NavBar.css';
import {AppBar, Toolbar, Button} from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';

const NavBar =() => {
    return (
        
        <AppBar position="static" className='header-primary'>
          
        <Toolbar>
          <div className='container-logo'>
              <img src="Logo.jpeg" alt="logo"/>
          </div>    
          <ul className='header'>
              <li>
                  <button disableRipple style={{backgroundColor: '#C7CF99' }} className='navbar__btn'>Home</button>
              </li>
              <li>
                  <button disableRipple style={{backgroundColor: '#C7CF99' }} className='navbar__btn'>Nosotros</button>
              </li>
              <li>
                  <button disableRipple style={{backgroundColor: '#C7CF99' }} className='navbar__btn'>Productos</button>
              </li>
              <li>
                  <button disableRipple style={{backgroundColor: '#C7CF99' }} className='navbar__btn'>Contacto</button>
              </li>
          </ul>
            
          <Button color="inherit">Login</Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    )
}
export default NavBar