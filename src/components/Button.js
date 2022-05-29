import React from 'react';
import './Button.css'

const Button = ({menu}) => {

    const divStyle = {
        backgroundColor:menu.backgroundColor,
        fontSize: menu.fontSize+'px',
        fontWeight:menu.fontWeight,
        color:menu.color,
        textAlign:menu.textAlign,
        textTransform:menu.textTransform,
        borderWidth: menu.borderWidth+'px',
        borderStyle:menu.borderStyle,
        borderColor:menu.borderColor,
        borderRadius:menu.borderRadius+'px',
        padding:menu.padding+'px',
        height:parseInt(menu.height)?menu.height+'%':'auto',
        width:parseInt(menu.width)?menu.width+'%':'auto',
        boxShadow:menu.boxShadowOffetX+'px '+
                  menu.boxShadowOffetY+'px '+
                  menu.boxShadowBlurRadius+'px '+
                  menu.boxShadowSpreadRadius+'px '+
                  menu.boxShadowColor,
      };

    return ( 
        <div className='ButtonBackground'>
            <span>Contenedor</span>
            <div className='ButtonContainer'>
                <button className='Button' style={divStyle}>{menu.texto}</button>
            </div>
        </div>
     );
}
 
export default Button;