/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import './ReqMain.css';
import ReqListingTopBar from './ReqMainBody/ReqListTopbar';
import ReqListingBody from './ReqMainBody/ReqListingBody';



class ReqMain extends Component {
    render() {
        return (
            <div>
                <ReqListingTopBar />
                <ReqListingBody />
            </div>
        );
    }
}

export default ReqMain;