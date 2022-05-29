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
    font-size:${menu.fontSize}px;
    font-weight:${menu.fontWeight};
    }`;
      
    return ( 
        <div className='CodeBackground'>
            <div className='CodeContainer'>
                <div className='CodeCopy'>
                    {copySuccess}
                    <button onClick={copyToClipboard} >Copy</button> 
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