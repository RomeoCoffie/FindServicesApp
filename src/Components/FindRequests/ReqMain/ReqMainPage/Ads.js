import React, { Component } from 'react';
import './Ads.css';
import Ad from './ad';

class Ads extends Component {
    render() {
        return (
            <div  className='Ads'>
                <Ad />
                <Ad />
                <Ad />
            </div>
        );
    }
}

export default Ads;