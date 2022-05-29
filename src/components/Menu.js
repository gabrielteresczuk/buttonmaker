import React, { useState, useEffect } from 'react';
import './Menu.css';



const Menu = ({handleChange,handleReset,menu}) => {


    return ( 
        <div className='Menu'>
            <div className='MenuRow MenuTitle'>
                Menu
                <button onClick={handleReset}>Reset</button>
            </div>
            <hr/>
            <div className='MenuRow2'>
                <label htmlFor='texto'>Texto:</label>
                <input type="text" id='texto' name="texto" placeholder='texto' onChange={handleChange} value={menu.texto}/>
            </div>
            <hr/>
            <div className='MenuRow MenuTitle'>
                Background
            </div>
            <div className='MenuRow3'>
                <label htmlFor='backgroundColor'>Color:</label>
                <span>{menu.backgroundColor}</span>
                <input type="color" name='backgroundColor' id='backgroundColor' value={menu.backgroundColor} onChange={handleChange}/>
            </div>
            <hr/>
            <div className='MenuRow MenuTitle'>
                Font
            </div>
            <div className='MenuRow3'>
                <label htmlFor='fontSize'>Font Size:</label>
                <input type="range" min="1" max="100" name='fontSize' id='fontSize' value={menu.fontSize} onChange={handleChange}/>
                <span>{menu.fontSize}px</span>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='fontWeight'>Weight:</label>
                <input type="range" min="100" max="900" step="100" name='fontWeight' id='fontWeight' value={menu.fontWeight} onChange={handleChange}/>
                <span>{menu.fontWeight}</span>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='color'>Color:</label>
                <span>{menu.color}</span>
                <input type="color" name='color' id='color' value={menu.color} onChange={handleChange}/>
            </div>
            <div className='MenuRow2'>
                <label htmlFor='textAlign'>Align:</label>
                <select name='textAlign' value={menu.textAlign} onChange={handleChange}>
                    <option>left</option>
                    <option>right</option>
                    <option>center</option>
                </select>
            </div>
            <div className='MenuRow2'>
                <label htmlFor='textTransform'>Trans:</label>
                <select name='textTransform' value={menu.textTransform} onChange={handleChange}>
                    <option>capitalize</option>
                    <option>uppercase</option>
                    <option>lowercase</option>
                    <option>none</option>
                    <option>full-width</option>
                </select>
            </div>
            <hr/>
            <div className='MenuRow MenuTitle'>
                Border
            </div>
            <div className='MenuRow3'>
                <label htmlFor='borderWidth'>Width:</label>
                <input type="range" min="1" max="30" step="1" name='borderWidth' id='borderWidth' value={menu.borderWidth} onChange={handleChange}/>
                <span>{menu.borderWidth}px</span>
            </div>
            <div className='MenuRow2'>
                <label htmlFor='borderStyle'>Style:</label>
                <select name='borderStyle' value={menu.borderStyle} onChange={handleChange}>
                    <option>dotted</option>
                    <option>dashed</option>
                    <option>solid</option>
                    <option>double</option>
                    <option>groove</option>
                    <option>ridge</option>
                    <option>inset</option>
                    <option>outset</option>
                    <option>none</option>
                    <option>hidden</option>
                </select>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='borderColor'>Color:</label>
                <span>{menu.borderColor}</span>
                <input type="color" name='borderColor' id='borderColor' value={menu.borderColor} onChange={handleChange}/>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='borderRadius'>Radius:</label>
                <input type="range" min="1" max="100" step="1" name='borderRadius' id='borderRadius' value={menu.borderRadius} onChange={handleChange}/>
                <span>{menu.borderRadius}px</span>
            </div>
            <hr/>
            <div className='MenuRow MenuTitle'>
                Spacing
            </div>
            <div className='MenuRow3'>
                <label htmlFor='padding'>Radius:</label>
                <input type="range" min="0" max="100" step="1" name='padding' id='padding' value={menu.padding} onChange={handleChange}/>
                <span>{menu.padding}px</span>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='padding'>Height:</label>
                <input type="range" min="0" max="100" step="1" name='height' id='height' value={menu.height} onChange={handleChange}/>
                <span>{parseInt(menu.height)?menu.height+'%':'auto'}</span>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='width'>Width:</label>
                <input type="range" min="0" max="100" step="1" name='width' id='width' value={menu.width} onChange={handleChange}/>
                <span>{parseInt(menu.width)?menu.width+'%':'auto'}</span>
            </div>
            <hr/>
            <div className='MenuRow MenuTitle'>
                Box Shadow
            </div>
            <div className='MenuRow3'>
                <label htmlFor='boxShadowOffetX'>OffsetX:</label>
                <input type="range" min="0" max="100" step="1" name='boxShadowOffetX' id='boxShadowOffetX' value={menu.boxShadowOffetX} onChange={handleChange}/>
                <span>{parseInt(menu.boxShadowOffetX)?menu.boxShadowOffetX+'px':'none'}</span>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='boxShadowOffetY'>OffsetY:</label>
                <input type="range" min="0" max="100" step="1" name='boxShadowOffetY' id='boxShadowOffetY' value={menu.boxShadowOffetY} onChange={handleChange}/>
                <span>{parseInt(menu.boxShadowOffetY)?menu.boxShadowOffetY+'px':'none'}</span>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='boxShadowBlurRadius'>Blur:</label>
                <input type="range" min="0" max="100" step="1" name='boxShadowBlurRadius' id='boxShadowBlurRadius' value={menu.boxShadowBlurRadius} onChange={handleChange}/>
                <span>{parseInt(menu.boxShadowBlurRadius)?menu.boxShadowBlurRadius+'px':'none'}</span>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='boxShadowSpreadRadius'>Spread:</label>
                <input type="range" min="0" max="100" step="1" name='boxShadowSpreadRadius' id='boxShadowSpreadRadius' value={menu.boxShadowSpreadRadius} onChange={handleChange}/>
                <span>{parseInt(menu.boxShadowSpreadRadius)?menu.boxShadowSpreadRadius+'px':'none'}</span>
            </div>
            <div className='MenuRow3'>
                <label htmlFor='boxShadowColor'>Color:</label>
                <span>{menu.boxShadowColor}</span>
                <input type="color" name='boxShadowColor' id='boxShadowColor' value={menu.boxShadowColor} onChange={handleChange}/>
            </div>
        </div>
     );
}
 
export default Menu;