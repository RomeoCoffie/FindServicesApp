/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';
import Propic from '../../../../../Image-Files/images7.jpg';

class ReqProTab extends Component {
    render() {
        return (
            <div class='ptab'>
                <div>
                    <img src={Propic} alt=""/>
                </div>
                <div class='proinfo'>
                    <label>Name:</label><span>Romeo Agbofah Coffie</span><br/>
                    <label>Title:</label><span>Web Developer</span> 
                </div>
                <div class='proinfo'>
                    <label>I WILL:</label><span>Build you a very beautiful website and establish your online campaign</span><br/>
                    <label>Price Range:</label><span>$XX-$XX</span>
                </div>
                <div>
                    <button class='provisit'>Visit Profile</button>
                    <button class='provery'>&times;Verified</button>
                </div>
                
            </div>
        );
    }
}

export default ReqProTab;