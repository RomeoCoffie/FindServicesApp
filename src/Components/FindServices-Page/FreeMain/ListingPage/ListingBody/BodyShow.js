/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../listing.css';
import ProTab from './ProTab';

class BodyShow extends Component {
    render() {
        return (
            <div className='Bodyshow'>
                <ProTab />
                <ProTab />
                <ProTab />
                <ProTab />
                <ProTab />
                <ProTab />
                <ProTab />
                <ProTab />
                <ProTab />
            </div>
        );
    }
}

export default BodyShow;