/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';
import ReqListingFilters from './ReqListingBodyFilters';
import ReqBodyShow from './ReqBodyShow';
import ReqBodyAd from './ReqBodyAd';

class ReqListingBody extends Component {
    render() {
        return (
            <div class='Bodyfilt'>
                <ReqListingFilters/>
                <ReqBodyShow />
                <ReqBodyAd />
            </div>
        );
    }
}

export default ReqListingBody;