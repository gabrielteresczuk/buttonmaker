import './App.css';
import Button from './components/Button';
import Menu from './components/Menu';
import React, { useState, useEffect } from 'react';
import Code from './components/Code';
import Template from './components/Template';

const initialMenu = {
  texto:"Boton",
  backgroundColor:'#FAFAFA',
  fontSize:16,
  fontWeight:400,
  textAlign:'center',
  textTransform:'none',
  color:'#000000',
  borderWidth:2,
  borderStyle:'solid',
  borderColor:'#424242',
  borderRadius:5,
  padding:5,
  height:0,
  width:0,
  boxShadowOffetX:0,
  boxShadowOffetY:0,
  boxShadowBlurRadius:0,
  boxShadowSpreadRadius:0,
  boxShadowColor:'#000000',
}

function App() {

  const [menu, setMenu] = useState(initialMenu);

  const handleChange = (e) =>{
      setMenu({
          ...menu,
          [e.target.name]: e.target.value
      });
  }

  const handleReset = () =>{
      setMenu(initialMenu);
  }

  const handleTemplate = (valor) =>{

  setMenu({
    ...initialMenu,
    ...valor
  });
    //console.log(valor);
  }


  return (
    <div className="App">
      <div>
        <Menu handleChange={handleChange} handleReset={handleReset} menu={menu}/>
      </div>
      <div className='contenedor'>
        <div>
          <Template handleTemplate={handleTemplate}/>
        </div>
        <div className='contenedor2'>
          <div><Button menu={menu}/></div>
          <div><Code menu={menu}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
