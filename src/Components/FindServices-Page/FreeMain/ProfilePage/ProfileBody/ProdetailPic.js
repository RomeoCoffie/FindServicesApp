/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';
import ppic from '../../../../../Image-Files/image13.jpg';


class ProPic extends Component {
    render() {
        return (
            <div className='piccontainer'>
                <div className='propic'>
                    <img src={ppic} alt="" />
                </div>
                {/* <span>Share this Profile</span> */}
            </div>
        );
    }
}

export default ProPic;