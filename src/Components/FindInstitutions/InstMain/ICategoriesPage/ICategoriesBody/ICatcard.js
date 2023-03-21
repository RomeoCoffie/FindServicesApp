/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import '../Categories.css';
import han from '../../../../../Image-Files/han.png';

const ICatcard = () => {
    return (
        <div className="hands">
            <div className="hand-content">
                <div className="hand-tab">
                    <a href="/">
                        <img src={han} alt="Handy-Work" className="hand-img"/>
                        <h3 className="thumbtext">Plumber</h3>
                    </a>
                </div>
            </div> 
        </div>  
    );
}

export default ICatcard;