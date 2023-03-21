import React from 'react';
import './log.css';

const RegisterModal = (props) => (
    <div className='regpage'>
        <h2 className='closex' onClick={props.dont2}>&times;</h2>
        {props.children}        
    </div>
)

export default RegisterModal;