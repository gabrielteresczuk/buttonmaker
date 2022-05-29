import React from 'react';
import './Template.css';

const Template = ({handleTemplate}) => {

const boostrap ={
    fontWeight: 400,
    padding:'6px',
    textAlign:'center',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#007bff',
    borderRadius:'4px',
    color:'#ffffff',
    backgroundColor:'#007bff',
}

const boostrapOutline = {
    fontWeight: 400,
    padding:'6px',
    textAlign:'center',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#007bff',
    borderRadius:'4px',
    color:'#007bff',
    backgroundColor:'transparent',
}

const MDB = {
    fontWeight: 500,
    fontSize:'12px',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#b23cfd',
    borderRadius:'4px',
    color:'#fff',
    backgroundColor:'#b23cfd',
    boxShadow:'0px 2px 5px 0px #000033',
    boxShadowOffetX:0,
    boxShadowOffetY:2,
    boxShadowBlurRadius:5,
    boxShadowSpreadRadius:0,
    boxShadowColor:'#000033',
}

const MDBOutline = {
    fontWeight: 500,
    fontSize:'12px',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#b23cfd',
    borderRadius:'4px',
    color:'#b23cfd',
    backgroundColor:'transparent',
}

const Rounded = {
    fontWeight: 500,
    fontSize:'12px',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:0,
    borderRadius:'60px',
    color:'#ffffff',
    backgroundColor:'#00b74a',
}

const RoundedOutline = {
    fontWeight: 500,
    fontSize:'12px',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#00b74a',
    borderRadius:'60px',
    color:'#00b74a',
    backgroundColor:'transparent',
}

    return ( 
        <div className='Template'>

            <div className='TemplateCard' onClick={()=>{handleTemplate(boostrap)}}>
                <div><button style={boostrap}>Button</button></div>
                <div>Boostrap</div>
            </div>

            <div className='TemplateCard' onClick={()=>{handleTemplate(boostrapOutline)}}>
                <div><button style={boostrapOutline}>Button</button></div>
                <div>Boostrap Outline</div>
            </div>

            <div className='TemplateCard' onClick={()=>{handleTemplate(MDB)}}>
                <div><button style={MDB}>Button</button></div>
                <div>MDB</div>
            </div>

            <div className='TemplateCard' onClick={()=>{handleTemplate(MDBOutline)}}>
                <div><button style={MDBOutline}>Button</button></div>
                <div>MDB Outline</div>
            </div>

            <div className='TemplateCard' onClick={()=>{handleTemplate(Rounded)}}>
                <div><button style={Rounded}>Button</button></div>
                <div>Rounded</div>
            </div>

            <div className='TemplateCard' onClick={()=>{handleTemplate(RoundedOutline)}}>
                <div><button style={RoundedOutline}>Button</button></div>
                <div>Rounded Outline</div>
            </div>

        </div>
     );
}
 
export default Template;