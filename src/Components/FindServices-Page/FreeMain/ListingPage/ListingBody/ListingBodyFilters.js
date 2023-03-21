/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../listing.css';
import FilterCats from './ListCatFilt';
import ListRating from './ListRatFilt';
import ListVerified from './ListVerFilt';
import ListDist from './ListDistFilt';
import ListRange from './ListingRangFilt';



class ListingFilters extends Component {
    render() {
        return (
            <div className='filt'>
                <FilterCats />
                <ListRating />
                <ListVerified />
                <ListDist />
                <ListRange />
            </div>
        );
    }
}

export default ListingFilters;