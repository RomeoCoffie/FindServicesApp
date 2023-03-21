/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../IListing.css';
import Propic from '../../../../../Image-Files/images7.jpg';

class IProTab extends Component {
    render() {
        return (
            <div className='ptab'>
                <div>
                    <img src={Propic} alt=""/>
                </div>
                <div className='proinfo'>
                    <label>Name:</label><span>Romeo Agbofah Coffie</span><br/>
                    <label>Title:</label><span>Web Developer</span> 
                </div>
                <div className='proinfo'>
                    <label>We</label><span>Build you a very beautiful website and establish your online campaign</span><br/>
                    <label>Price Range:</label><span>$XX-$XX</span>
                </div>
                <div>
                    <button className='provisit'>Visit Profile</button>
                    <button className='provery'>&times;Verified</button>
                </div>
                
            </div>
        );
    }
}

export default IProTab;