/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import '../Categories.css';



const Catfilters = () => {
    return (
        <div>
            <div className="catheadings">
                <h1 className='catfilthead'>Click on any Category</h1>
                <ul>
                    <li><a href="/">Artisans & Craftsman</a></li>
                    <li><a href="/">Business & Assistance</a></li>
                    <li><a href="/">Writing & Translation</a></li>
                    <li><a href="/">Handywork Home & Office</a></li>
                    <li><a href="/">Designs & Audio/Visuals</a></li>
                    <li><a href="/">Programming & Tech</a></li>
                    <li><a href="/">Education & Training</a></li>
                    <li><a href="/">Lifestyle & Sports</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Catfilters;