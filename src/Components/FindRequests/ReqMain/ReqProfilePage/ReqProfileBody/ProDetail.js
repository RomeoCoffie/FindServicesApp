/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';
import ProName from './ProdetailNm';
import ProPic from './ProdetailPic';


class ProDetail extends Component {
    render() {
        return (
            <div className='prodetail'>
                <ProName />
                <ProPic />
            </div>
        );
    }
}

export default ProDetail;