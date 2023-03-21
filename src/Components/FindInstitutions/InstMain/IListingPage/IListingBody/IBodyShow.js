/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../IListing.css';
import IProTab from './IProTab';

class IBodyShow extends Component {
    render() {
        return (
            <div className='Bodyshow'>
                <IProTab />
                <IProTab />
                <IProTab />
                <IProTab />
                <IProTab />
                <IProTab />
                <IProTab />
                <IProTab />
                <IProTab />
            </div>
        );
    }
}

export default IBodyShow;