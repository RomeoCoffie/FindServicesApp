/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../listing.css';
import ListingFilters from './ListingBodyFilters';
import BodyShow from './BodyShow';
import BodyAd from './BodyAd';

class ListingBody extends Component {
    render() {
        return (
            <div className='Bodyfilt'>
                <ListingFilters/>
                <BodyShow />
                <BodyAd />
            </div>
        );
    }
}

export default ListingBody;