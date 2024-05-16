import React from 'react';
import './InputControlerModule.css';

function InputControler({label, ...props}) {
  return (
    <div className='inputContainer'>
       {label &&   <label className='label' > {label}</label>}
        <input className='input' type='text' {...props} />
    </div>
  )
}

export default InputControler