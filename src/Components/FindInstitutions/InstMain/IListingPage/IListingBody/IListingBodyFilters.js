/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../IListing.css';
import IFilterCats from './IListCatFilt';
import IListRating from './IListRatFilt';
import IListVerified from './IListVerFilt';
import IListDist from './IListDistFilt';
import IListRange from './IListingRangFilt';



class IListingFilters extends Component {
    render() {
        return (
            <div className='filt'>
                <IFilterCats />
                <IListRating />
                <IListVerified />
                <IListDist />
                <IListRange />
            </div>
        );
    }
}

export default IListingFilters;