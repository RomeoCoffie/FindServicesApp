/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';
import ReqFilterCats from './ReqListCatFilt';
import ReqListRating from './ReqListRatFilt';
import ReqListVerified from './ReqListVerFilt';
import ReqListDist from './ReqListDistFilt';
import ReqListRange from './ReqListingRangFilt';



class ReqListingFilters extends Component {
    render() {
        return (
            <div class='filt'>
                <ReqFilterCats />
                <ReqListRating />
                <ReqListVerified />
                <ReqListDist />
                <ReqListRange />
            </div>
        );
    }
}

export default ReqListingFilters;