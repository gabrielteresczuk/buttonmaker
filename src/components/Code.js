import React, { useRef, useState } from 'react';
import './Code.css'

const Code = ({menu}) => {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copiado');
        setTimeout(() => {
            setCopySuccess(null);
        }, 1000);
      };

    let texto = 
    `.button{
    background-color:${menu.backgroundColor};
    font-size:${menu.fontSize}px;
    font-weight:${menu.fontWeight};
    text-align:${menu.textAlign};
    text-transform:${menu.textTransform};
    color:${menu.color};
    border-width:${menu.borderWidth}px;
    border-style:${menu.borderStyle};
    border-color:${menu.borderColor};
    border-radius:${menu.borderRadius}px;
    padding:${menu.padding}px;
    height:${menu.height}px;
    width:${menu.width}px;
    boxshadow:${menu.boxShadowOffetX}px,${menu.boxShadowOffetY}px,
    ${menu.boxShadowBlurRadius}px,${menu.boxShadowSpreadRadius}px,${menu.boxShadowColor};
    }`;
      
    return ( 
        <div className='CodeBackground'>
            <div className='CodeContainer'>
                <div className='CodeCopy'>
                    {copySuccess}
                    <button onClick={copyToClipboard} className="CodeBtn">Copy</button> 
                </div>
            
                <div className='CodeTextContainer'>
                    <textarea className='CodeText'
                    ref={textAreaRef}
                    value={texto}
                    readOnly
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Code;