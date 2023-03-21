/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';
import '../../ListingPage/listing.css';
import ProTab from '../../ListingPage/ListingBody/ProTab';



class SimPro extends Component {
    render() {
        return (
            <div className='simpro'>
                <h1>Similar Freelance Services offered by others</h1>
                <ProTab />
            </div>
        );
    }
}

export default SimPro;