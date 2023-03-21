import React, { Component } from 'react';
import './Ads.css';
import IAd from './Iad';

class IAds extends Component {
    render() {
        return (
            <div  className='Ads'>
                <IAd />
                <IAd />
                <IAd />
            </div>
        );
    }
}

export default IAds;