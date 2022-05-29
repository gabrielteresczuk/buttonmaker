import './App.css';
import Button from './components/Button';
import Menu from './components/Menu';
import React, { useState } from 'react';
import Code from './components/Code';
import Template from './components/Template';

const initialMenu = {
  texto:"Boton",
  backgroundColor:'#C850C0',
  fontSize:27,
  fontWeight:400,
  textAlign:'center',
  textTransform:'none',
  color:'#ffffff',
  borderWidth:2,
  borderStyle:'solid',
  borderColor:'#C850C0',
  borderRadius:5,
  padding:5,
  height:0,
  width:0,
  boxShadowOffetX:0,
  boxShadowOffetY:1,
  boxShadowBlurRadius:10,
  boxShadowSpreadRadius:0,
  boxShadowColor:'#454545',
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
    let newvalor = {...valor};
    newvalor.borderRadius = newvalor.borderRadius.replace("px","");
    newvalor.padding = newvalor.padding.replace("px","");
    newvalor.fontSize = newvalor.fontSize.replace("px","");
    
    //console.log(newvalor.borderRadius);
  setMenu({
    ...initialMenu,
    ...newvalor
  });
    //console.log(valor);
  }

  const handleRandom = () =>{
    let randomMenu = {
      texto:"Random",
      backgroundColor:"#"+Math.floor(Math.random()*16777215).toString(16),
      fontSize:Math.floor((Math.random() * 45) + 10),
      fontWeight:Math.floor((Math.random() * 9) + 1)+"00",
      textAlign:'center',
      textTransform:'none',
      color:"#"+Math.floor(Math.random()*16777215).toString(16),
      borderWidth:Math.floor((Math.random() * 5) + 1),
      borderStyle:'solid',
      borderColor:"#"+Math.floor(Math.random()*16777215).toString(16),
      borderRadius:Math.floor((Math.random() * 25) + 1),
      padding:Math.floor((Math.random() * 10) + 1),
      height:0,
      width:0,
      boxShadowOffetX:Math.floor((Math.random() * 5) ),
      boxShadowOffetY:Math.floor((Math.random() * 5) ),
      boxShadowBlurRadius:Math.floor((Math.random() * 10) +10),
      boxShadowSpreadRadius:Math.floor((Math.random() * 10) ),
      boxShadowColor:"#"+Math.floor(Math.random()*16777215).toString(16),
    }

    setMenu({
      ...randomMenu,
    });

  }


  return (
    <div className="App">
      <div>
        <Menu handleChange={handleChange} handleReset={handleReset} menu={menu} handleRandom={handleRandom}/>
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
