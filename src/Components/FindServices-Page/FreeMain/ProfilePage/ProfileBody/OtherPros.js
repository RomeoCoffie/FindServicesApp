/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';
import ProTab from '../../ListingPage/ListingBody/ProTab';



class OtherPros extends Component {
    render() {
        return (
            <div className='otherpros'>
                <h1>Other Services offered by NAME</h1>
                <ProTab />
            </div>
        );
    }
}

export default OtherPros;