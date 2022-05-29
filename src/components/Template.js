import React from 'react';
import './Template.css';

const Template = ({handleTemplate}) => {

const boostrap ={
    backgroundColor:'#007bff',
    fontSize:'12px',
    fontWeight: 400,
    color:'#ffffff',
    padding:'6px',
    textAlign:'center',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#007bff',
    borderRadius:'4px',
    boxShadowOffetX:0,
    boxShadowOffetY:0,
    boxShadowBlurRadius:0,
    boxShadowSpreadRadius:0,
}

const boostrapOutline = {
    backgroundColor:'transparent',
    fontSize:'12px',
    fontWeight: 400,
    color:'#007bff',
    padding:'6px',
    textAlign:'center',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#007bff',
    borderRadius:'4px',
    boxShadowOffetX:0,
    boxShadowOffetY:0,
    boxShadowBlurRadius:0,
    boxShadowSpreadRadius:0,
}

const MDB = {
    backgroundColor:'#b23cfd',
    fontWeight: 500,
    fontSize:'12px',
    color:'#ffffff',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#b23cfd',
    borderRadius:'4px',
    boxShadow:'0px 2px 5px 0px #000033',
    boxShadowOffetX:0,
    boxShadowOffetY:2,
    boxShadowBlurRadius:5,
    boxShadowSpreadRadius:0,
    boxShadowColor:'#000033',
}

const MDBOutline = {
    backgroundColor:'transparent',
    fontWeight: 500,
    fontSize:'12px',
    color:'#b23cfd',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#b23cfd',
    borderRadius:'4px',
    boxShadowOffetX:0,
    boxShadowOffetY:0,
    boxShadowBlurRadius:0,
    boxShadowSpreadRadius:0,
}

const Rounded = {
    backgroundColor:'#00b74a',
    fontWeight: 500,
    fontSize:'12px',
    color:'#ffffff',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:0,
    borderRadius:'60px',
    boxShadowOffetX:0,
    boxShadowOffetY:0,
    boxShadowBlurRadius:0,
    boxShadowSpreadRadius:0,
}

const RoundedOutline = {
    backgroundColor:'transparent',
    fontWeight: 500,
    fontSize:'12px',
    color:'#00b74a',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#00b74a',
    borderRadius:'60px',
    boxShadowOffetX:0,
    boxShadowOffetY:0,
    boxShadowBlurRadius:0,
    boxShadowSpreadRadius:0,   
}

const Disable = {
    backgroundColor:'#EEEEEE',
    fontWeight: 500,
    fontSize:'12px',
    color:'#9E9E9E',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#9E9E9E',
    borderRadius:'5px',
    boxShadowOffetX:0,
    boxShadowOffetY:0,
    boxShadowBlurRadius:0,
    boxShadowSpreadRadius:0,   
}

const Material = {
    backgroundColor:'#F5F5F5',
    fontWeight: 500,
    fontSize:'12px',
    color:'#26A69A',
    padding:'10px',
    textAlign:'center',
    textTransform:'uppercase',
    borderWidth:0,
    borderStyle:'solid',
    borderColor:'#9E9E9E',
    borderRadius:'5px',
    boxShadow:'0px 1px 5px 0px #BDBDBD',
    boxShadowOffetX:0,
    boxShadowOffetY:1,
    boxShadowBlurRadius:10,
    boxShadowSpreadRadius:0,   
    boxShadowColor:'#BDBDBD'
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

            <div className='TemplateCard' onClick={()=>{handleTemplate(Disable)}}>
                <div><button style={Disable}>Button</button></div>
                <div>Disable</div>
            </div>

            <div className='TemplateCard' onClick={()=>{handleTemplate(Material)}}>
                <div><button style={Material}>Button</button></div>
                <div>Material</div>
            </div>

        </div>
     );
}
 
export default Template;