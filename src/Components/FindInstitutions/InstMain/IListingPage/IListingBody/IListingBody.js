/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../IListing.css';
import IListingFilters from './IListingBodyFilters';
import IBodyShow from './IBodyShow';
import IBodyAd from './IBodyAd';

class IListingBody extends Component {
    render() {
        return (
            <div className='Bodyfilt'>
                <IListingFilters/>
                <IBodyShow />
                <IBodyAd />
            </div>
        );
    }
}

export default IListingBody;