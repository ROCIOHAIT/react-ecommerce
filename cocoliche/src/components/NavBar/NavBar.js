import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Button} from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';


const NavBar =() => {
    return (
        
        <AppBar position="static" className='header-primary'>
          
        <Toolbar>
          <div className='container-logo'>
              <img src="Logo.jpeg" alt="logo"> <Link to="/"></Link></img>
          </div>    
          <ul className='header'>
              <li>
                  <button disableRipple style={{backgroundColor: '#C7CF99' }} className='navbar__btn'><link to="/">Home</link></button>
              </li>
              <li>
                  <button disableRipple style={{backgroundColor: '#C7CF99' }} className='navbar__btn'><Link to="/">Nosotros</Link></button>
              </li>
              <li>
                  <button disableRipple style={{backgroundColor: '#C7CF99' }} className='navbar__btn'><Link to="/">Productos</Link></button>
              </li>
              <li>
                  <button disableRipple style={{backgroundColor: '#C7CF99' }} className='navbar__btn'><Link to="/">Contacto</Link></button>
              </li>
          </ul>
            
          <Button color="inherit">Login</Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    )
}
export default NavBar