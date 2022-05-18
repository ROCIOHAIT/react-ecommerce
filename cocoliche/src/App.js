import React from 'react';
import './App.css';
import './test.css';
import NavBar from './components/NavBar/NavBar'

function App() {
  //let test = "Coder"
  let styleCustom = {
    color : '#C7CF99'
  }


  return (
    <div className="App" style={styleCustom}>
      <NavBar/>
      <h1 className='title'> Cocoliche Artesanias </h1>
    </div>
  );
}

export default App;
